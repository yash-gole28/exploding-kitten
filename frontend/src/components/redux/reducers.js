const initialState = {
    deck: ['Cat', 'Cat', 'Defuse', 'Exploding Kitten', 'Shuffle'],
    username: "dlsfkjslkfjsl",
    isStarted: false,
    defuseCard: 0
}

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHUFFLE":
            return { ...state, }

        case 'START_GAME':
            return {
                ...state,
                deck: ['Cat', 'Cat', 'Defuse', 'Exploding Kitten', 'Shuffle'],
                isStarted: true,
            };
        default:
            return state
    }
}

export default stateReducer