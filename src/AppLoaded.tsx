import React from 'react';
import {Foo1, Foo2, Foo3} from './decorate-class-based-component';
import {Foo} from './Foo';

export const AppLoaded = () => {
    return <div>

        <h1>Decorate class-based UI Component</h1>

        <p>We start with a legacy UI Component class Foo.
            Then we use 3 techniques
            (each technique cooler than the previous) to "decorate" that
            legacy class with user and theme context.</p>

        <h2>Foo</h2>
        <p>Original Foo class (no theme or user)</p>
        <Foo x={10} y={5}/>

        <h2>Foo1</h2>
        <p>Create a basic Function component (that <i>can</i> use
            the useUser and useTheme hooks) to decorate the legacy class-based component
            giving it theme and user.</p>
        <Foo1 x={10} y={5}/>

        <h2>Foo2</h2>
        <p>Here we use a custom hook called useEnhancedProps to
            make the process of decorating the legacy class-based component
            a bit easier.</p>

        <Foo2 x={3} y={4}/>


        <h2>Foo3</h2>
        <p>Finally, we decorate the legacy class-based component with just a single line of code.
            This is essentially an hoc. Also, this is eactly how React.memo works.</p>
        <Foo3 x={111} y={22}/>
    </div>;
};

