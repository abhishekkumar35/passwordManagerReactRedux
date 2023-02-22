export const ADD_PASSWORD = "ADD_PASSWORD";
export const DELETE_PASSWORD = "DELETE_PASSWORD";
export const TOGGLE_SHOW_PASSWORD = "TOGGLE_SHOW_PASSWORD";

export const addPassword = (password) => {
  // console.log("adding password", password);
  return { type: "ADD_PASSWORD", payload: password };
};

export const deletePassword = (passwordId) => {
  return { type: "DELETE_PASSWORD", payload: passwordId };
};

export const toggleShowPassword = () => {
  return { type: "TOGGLE_SHOW_PASSWORD" };
};
