const initialState = {};
const globals = (state = initialState, action: IGlobalAction) => {
  console.log(action);
  switch (action.type) {
  }
  return state;
};

export default globals;
