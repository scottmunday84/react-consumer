export const connect = (context, mapState, mapActions) => {
  const {dispatch, state: {...state}} = context;

  return [
    mapState(state),
    mapActions(dispatch, state)
  ];
};