//all reducers get 2 arguments, state and action
//State argument is not application state, only the state
//this reducer is responsible for
//reducer is called whenever an action is called by the app
//if state is undefined, set it to null. this is ES6
export default function(state=null, action) {
	//we should have a reasonable default state for state
	
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
		default:

	}

	return state;
}