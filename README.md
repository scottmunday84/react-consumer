# react-connect (v1.0.0)

A simple approach to responding from a React context.

### Installation and use

Install npm packages:

```
yarn install -S scottmunday84/react-connect
```

And to use:
```jsx harmony
import store from '../reducers/store';
import {connect} from 'react-connect';
import React, {useContext} from 'react';

const Layout = () => {
  const [props, actions] = connect(
    useContext(store),
    state => {
      return {
        foo: state.foo
      };
    },
    (dispatch, state) => {
      return {
        dispatchFoo: payload => dispatch({type: 'ACTION_FOO', payload})
      };
    });
    
  return (
    <button onClick={actions.dispatchFoo({})}>Dispatch Foo</button>
  );
};

export default Layout;
```

It really is THAT easy!
