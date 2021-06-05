import initialState from '../store/initialState'
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ANSWERS':
      let newData = state.formData
      newData[action.payload.key] = action.payload.answer
      return { ...state,
        formData: newData
      }
    default:
      break
  }
  return state
}

export default rootReducer
