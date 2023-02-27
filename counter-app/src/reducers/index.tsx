const counter = (state = 0, action: { type: string }) => { // 이전 상태, action 객체
// return state
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
        return state;
  }
};

export default counter;