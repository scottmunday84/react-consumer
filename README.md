# react-consumer [![npm version](https://badge.fury.io/js/%40scottmunday84%2Freact-consumer.svg)](https://badge.fury.io/js/%40scottmunday84%2Freact-consumer)

A simple approach to responding from a React context through a quick consumer.

### Installation and use

Install npm packages:

```
yarn install -S @scottmunday84/react-consumer
```

And to use:
```jsx harmony
import store from '../reducers/store';
import Consumer from '@scottmunday84/react-consumer';
import React from 'react';

const Layout = () => {
  const map = ({state, dispatch}) => {
    return {
      foo: state.foo,
      dispatchFoo: payload => dispatch('ACTION_FOO', payload)      
    };
  };
    
  return (
    <Consumer store={store} map={map}>
      {({foo, dispatchFoo}) => <button onClick={() => dispatchFoo(!foo)}>Dispatch Foo</button>}
    </Consumer>);
};

export default Layout;
```

Happy coding!
