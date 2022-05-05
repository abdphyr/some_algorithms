type Reducer<T, A> = (initialState: T, action: A) => T
type Dispatch<A> = (action: A) => void
type RetUseReducerType<T, A> = [() => T, Dispatch<A>]


export const useReducer = <T, A = unknown>(reducer: Reducer<T, A>, initialState: T): RetUseReducerType<T, A> => {
    let state: T = initialState
    const st = () => state
    const dispatch = (action: A) => {
        state = reducer(state, action)
    }
    return [
        st,
        dispatch
    ]
}