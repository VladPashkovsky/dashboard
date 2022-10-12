const DarkModReducer = (state, action) => {
  switch (action.type) {
    case 'LIGHT': {
      return { darkMod: false }
    }
    case 'DARK': {
      return { darkMod: true }
    }
    case 'TOGGLE': {
      return { darkMod: !state.darkMod }
    }
    default:
      return state
  }
}

export default DarkModReducer
