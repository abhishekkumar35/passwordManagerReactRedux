import { ADD_PASSWORD, DELETE_PASSWORD, TOGGLE_SHOW_PASSWORD } from "./actions";

const initialState = {
  passwords: [],
  showPassword: true,
};

const passwordReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        passwords: [...state.passwords, actions.payload],
      };
    case DELETE_PASSWORD:
      const index = state.passwords.findIndex(
        (password) =>
          password.username === actions.payload.username &&
          password.password === actions.payload.password &&
          password.website === actions.payload.website
      );
      if (index !== -1) {
        const passwords = [...state.passwords];
        passwords.splice(index, 1);
        return {
          ...state,
          passwords,
        };
      }
      return state;

    case TOGGLE_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: !state.showPassword,
      };
    default:
      return state;
  }
};

export default passwordReducer;
