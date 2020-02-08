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
  const mapState = state => {
    return {
      foo: state.foo      
    };
  };
  const mapActions = (dispatch, actions) => {
    return {
      dispatchFoo: payload => dispatch({type: 'ACTION_FOO', payload})
    };  
  };
  const [props, actions] = connect(useContext(store))(mapState, mapActions);   
    
  return (
    <button onClick={actions.dispatchFoo(!props.foo)}>Dispatch Foo</button>
  );
};

export default Layout;
```

It really is THAT easy!
