import React from "react";

/*
You currently have a old class-based component, Foo,
whose props (FooProps1) currently does not include
theme and user:
 */
export type FooProps = {
    x: number;
    y: number;
}

export type FooState = {};

export class Foo extends React.Component<FooProps, FooState> {

    render() {
        //this.props is of type FooProps, that is:
        // it does not have props.theme and props.user.
        // Thus, Foo's render does not have access to user and theme
        const {x, y} = this.props;
        return <div>
            <div>x: {x}</div>
            <div>y: {y}</div>
        </div>;
    }
}