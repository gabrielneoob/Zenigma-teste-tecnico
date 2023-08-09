type Count = {
  count: number;
  inputCount: number;
}

type AddAction = {
  type: 'add';
}

type SubtractAction = {
  type: 'subtract'
}

type ChangeInputAction = {
  type: 'change_input';
  payload: {
    inputCount: number;
  }
}

type ListActions = AddAction | SubtractAction | ChangeInputAction

export const initialStateReducer: Count = {
  count: 0,
  inputCount: 0
}

export const countReducer = (state: Count, action: ListActions) => {
  switch(action.type) {
    case 'change_input': return {
      ...state,
      inputCount: action.payload.inputCount
    }
    case 'add': return {
      ...state,
      count: state.inputCount === 0 ? state.count + 1 : state.inputCount + state.count
    }
    case 'subtract': return {
      ...state,
      count: state.inputCount === 0 ? state.count - 1 : state.inputCount - state.count
    }
  }
}