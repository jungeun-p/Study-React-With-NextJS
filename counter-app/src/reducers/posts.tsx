enum ActionType {
  FETCH_POSTS = "FETCH_POSTS",
  DELETE_POSTS = "DELETE_POSTS",
}

export interface Post {
  userId: number;
  id: number;
  title: string;
}

interface Action {
  type: ActionType;
  payload: Post[];
}

const posts = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_POSTS:
      return [...state, ...action.payload];
    case ActionType.DELETE_POSTS:
      return state;
    default:
      return state;
  }
};

export default posts;
