const toggleEllipsisType = 'TOGGLE_ELLIPSIS';
const initialState = { showFullText: undefined };

export const actionCreators = {
    toggleTextEllipsis: () => ({ type: toggleEllipsisType })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === toggleEllipsisType) {
        return { showFullText: !state.showFullText };
    }

    return state;
};
