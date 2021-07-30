const INITIAL_STATE = {
  usuarioEmail: "",
  usuarioLogado: 0,
  usuarioAdmin: 0,
  usuarioUnidade: "",
};

function usuarioReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        usuarioLogado: 1,
        usuarioEmail: action.usuarioEmail,
        usuarioUnidade: action.usuarioUnidade,
      };
    case "LOG_IN_ADMIN":
      return {
        ...state,
        usuarioAdmin: 1,
        usuarioEmail: action.usuarioEmail,
      };
    case "LOG_OUT":
      return {
        ...state,
        usuarioLogado: 0,
        usuarioAdmin: 0,
        usuarioEmail: "",
        usuarioUnidade: "",
      };
    default:
      return state;
  }
}
export default usuarioReducer;
