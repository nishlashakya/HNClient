const initialState = {
  comments: [],
  comment: {}
}

export function commentReducer(state=initialState, action) {
	switch (action.type) {

    case 'ADD_COMMENT_SUCCESS':
      return {
        ...state,
        comments : state.comments.concat(action.res)
      }

    case 'GET_ALL_COMMENTS_SUCCESS':
      return {
        ...state,
        comments : action.res
      }

		default:
			return {...state}
	}
}
