import './App.css'
import CountBox from './components/CountBox';
import counterStore from './stores/counterStore'

function App() {
  // const [count, setCount] = useState(0)
  const { count, increase, decrease, increaseBy, decreaseBy, resetBy, factorize } = counterStore();

  return (
    <div className="app">
      <div className="counter">
        <h1>소인수 분해하기</h1>
        <h1 style={{
          fontSize:"25px"
        }}>소인수 분해할 숫자 : {count}</h1>
        <div className="button_area">
          <button onClick={increase}>+1</button>
          <button onClick={decrease}>-1</button>
          <button onClick={() => increaseBy(10)}>+10</button>
          <button onClick={() => decreaseBy(10)}>-10</button>
          <button onClick={resetBy}>초기화</button>
        </div>
        <button onClick={factorize}>입력</button>
        <CountBox />
      </div>
    </div>
  )
}

export default App
