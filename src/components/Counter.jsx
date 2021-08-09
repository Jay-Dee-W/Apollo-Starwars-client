import { useContext } from 'react'
import AppContext from '../store/pageCountStore'

export default function Counter() {
    let { appState, dispatch } = useContext(AppContext)

    return (
        <div >
           <h2>Select Page </h2>
            <div className="Conter-card">
                <button className='plus' onClick={() => dispatch("increment")}> + </button>
                {appState.pageCount}
                <button className='minus' onClick={() => dispatch("decrement")}> - </button>
            </div>
        </div>
    )
}