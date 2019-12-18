const toggleEllipsisType = 'TOGGLE_ELLIPSIS';

export const actionCreators = {
    toggleTextEllipsis: () => ({ type: toggleEllipsisType })
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === toggleEllipsisType) {
        return { ...state, showFullText: !showFullText };
    }

    return state;
};
