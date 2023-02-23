
export const actions = { increment: "INCREMENT", decrement: "DECREMENT" }

export default function reducer(state, action) {
    switch (action.type) {
        case actions.increment:
            return { count: state.count + 1 }
        case actions.decrement:
            return { count: state.count - 1 }
        default:
            return state
    }
}
