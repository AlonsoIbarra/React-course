
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './store/slices/counter';

import './App.css'

function App() {
  const { counter } = useSelector((state)=>state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch( decrement() )}>
          -
        </button>
        <button onClick={() => dispatch( increment() )}>
          +
        </button>
        <button onClick={() => dispatch( incrementByAmount(6) )}>
          +6
        </button>
        <span>
          count is { counter }
        </span>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
