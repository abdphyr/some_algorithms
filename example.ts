import { useState } from './useStateWithClosure';
import { useReducer } from './useReducerWithClosure';

const [search, setSearch] = useState<string>('hh')
setSearch("Assalomu alaykum")
console.log(search())


const initialState = 0
type ActionType = {
    type: "INC" | "DEC";
    payload?: number
}

const reducer = (state = initialState, action: ActionType) => {
    switch(action.type){
        case "INC":
            if (!action.payload){
                return state + 1
            }
            return action.payload
        case "DEC":
            return state - 1
        default:
            return state
    }
}

const [count, dispatch] = useReducer(reducer, 2)
dispatch(
    {
    type: 'INC'
    }
)
console.log(count())
