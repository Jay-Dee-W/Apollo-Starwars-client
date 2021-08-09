import { createContext, useReducer } from "react";

let AppContext = createContext({})

export default AppContext

export function AppStateProvider(props) {
    let initialState = {
        pageCount: 1
    }
    let reducer = (state, action) => {
        switch (action) {
            case 'increment':
               
                return (state.pageCount > 0 && state.pageCount < 9) ?
                    { pageCount: state.pageCount + 1 } :
                    { pageCount: state.pageCount }
            case 'decrement':
                
                return (state.pageCount > 1 && state.pageCount < 10) ?
                    { pageCount: state.pageCount - 1 } :
                    { pageCount: state.pageCount }
            default:
                throw new Error('Wrong Action')
        }
    }

    let [appState, dispatch] = useReducer(reducer, initialState)
    return (
        <AppContext.Provider value={{
            appState,
            dispatch
        }}>
            {props.children}
        </AppContext.Provider>
    )
}