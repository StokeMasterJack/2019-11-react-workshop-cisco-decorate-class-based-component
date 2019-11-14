import React, {Component, FC} from 'react';
import {FooProps, FooState} from './Foo';
import {Theme, useTheme} from './Theme';
import {User, useUser} from './User';

type PropsPlus = { user: User, theme: Theme };


// Step 1: create a new props type FooProps2 that adds user and theme to FooProps1
type FooPropsPlus = FooProps & PropsPlus;

/*
 Step 2
    a.  Rename the Foo class component to FooInner
    b.  Remove the export
    c.  Change the props type to FooPropsPlus (that includes user and theme)
    d.  Start using this.props.user and this.props.theme
        from within FooInner's render method
 */

class FooInner extends Component<FooPropsPlus, FooState> {
    render() {
        const {x, y, user, theme} = this.props;
        return <div>
            <div>x: {x}</div>
            <div>y: {y}</div>
            <div>User: {user.userName}</div>
            <div>Theme: {theme.primaryColor}</div>
        </div>;
    }
}


/*
Step 3: Create a function component that takes a FooProps
        and turns it into a FooPropsPlus by adding user and theme.
        call the new function component Foo *
        and export it (so the new function component can be a
        plug-in replacement for the old Foo class component
        * (i'm calling it Foo1 here to avoid name conflict)
 */
export function Foo1(props: FooProps) {
    const user: User = useUser();
    const theme: Theme = useTheme();

    const propsPlus: FooPropsPlus = {
        ...props,
        user,
        theme
    };

    return <FooInner {...propsPlus}/>;
}


export function useEnhancedProps<P>(props: P): P & PropsPlus {
    const user = useUser();
    const theme = useTheme();
    return {...props, user, theme};
}

export const Foo2 = (props: FooProps) => {
    const propsPlus: FooPropsPlus = useEnhancedProps(props);
    return <FooInner {...propsPlus}/>;
};

function mkEnhanced<P>(inner: React.ComponentType<P & PropsPlus>): FC<P> {
    return (props: P) => {
        const propsEnhanced: P & PropsPlus = useEnhancedProps(props);
        const Inner = inner;
        return <Inner {...propsEnhanced} />;
    };
}

export const Foo3: FC<FooProps> = mkEnhanced(FooInner);

