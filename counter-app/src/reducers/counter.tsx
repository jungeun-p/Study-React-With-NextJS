enum ActionType {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

interface Action {
  type: string;
}

const counter = (state = 0, action: Action) => { // 이전 상태, action 객체
    // return state
      switch (action.type) {
        case ActionType.INCREMENT:
          return state + 1;
        case ActionType.DECREMENT:
          return state - 1;
        default:
            return state;
      } 
    };
    
    export default counter;