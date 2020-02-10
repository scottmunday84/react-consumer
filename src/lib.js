import React, {useContext} from 'react';

const Consumer = ({store, map, children: render}) => {
  const {dispatch: _dispatch, state} = useContext(store);
  const dispatch = (type, payload = null) => _dispatch({type, payload});
  const params = {state, dispatch};
  const result = map === undefined ? params : map(params);

  return render(result);
};

export default Consumer;