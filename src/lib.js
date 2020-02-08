export const connect = context => {
  const {dispatch, state: {...state}} = context;

  return (mapState, mapActions) => [
    mapState(state),
    mapActions(dispatch, state)
  ];
};