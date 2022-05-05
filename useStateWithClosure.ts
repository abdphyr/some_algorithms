type SetState<T> = (newState: T) => void
type RetUseStateType<T> = [() => T, SetState<T>]

export const useState = <T>(initialState: T): RetUseStateType<T> => {
    let state: T = initialState;
    const st = () => state
    const setSt = (newState: T) => {
        state = newState
    }
    return [
        st,
        setSt
    ]
}