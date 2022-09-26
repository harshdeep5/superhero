export const addSuperhero = (superhero) => {
  return {
    type: "ADD_SUPERHERO",
    payload: superhero,
  };
};

export const removeSuperhero = (superhero) => {
  return {
    type: "REMOVE_SUPERHERO",
    payload: superhero,
  };
};
