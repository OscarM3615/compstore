type StateType = {
	count: number;
	email: string;
	loading: boolean;
};

type ActionType =
	| { type: 'incr_count' | 'decr_count' | 'toggle_loading' }
	| { type: 'set_email'; value: string };

export const initialState: StateType = { count: 1, email: '', loading: false };

export const reducer = (state: StateType, action: ActionType): StateType => {
	switch (action.type) {
		case 'incr_count':
			return { ...state, count: state.count + 1 };
		case 'decr_count':
			return { ...state, count: state.count !== 1 ? state.count - 1 : 1 };
		case 'toggle_loading':
			return { ...state, loading: !state.loading };
		case 'set_email':
			return { ...state, email: action.value };
		default:
			throw new Error('Invalid action');
	}
};
