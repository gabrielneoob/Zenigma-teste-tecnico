import { useReducer } from 'react'
import { countReducer, initialStateReducer } from './reducer/countReducer'
import Button from './components/button/Button'
import Input from './components/input/Input'
const App = () => {
  const [state, dispatch] = useReducer(countReducer, initialStateReducer)

  const handleAddBtn = () => {
    dispatch({
      type: 'add'
    })
  }

  const handleSubtractBtn = () => {
    dispatch({
      type: 'subtract'
    })
  }

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'change_input',
      payload: {
        inputCount: Number(e.target.value)
      }
    })
  }

  return (
    <div>
      <Button
      onClick={handleSubtractBtn}
      >subtract</Button>
      <Input
      onChange={(e) => handleChangeInput(e)}
      value={state.inputCount}
      />
      <Button
      onClick={handleAddBtn}
      >
        add
      </Button>
      <br />

      <div data-testeid="result">
        <h2>
          {state.count}
        </h2>
      </div>
    </div>
  )
}

export default App