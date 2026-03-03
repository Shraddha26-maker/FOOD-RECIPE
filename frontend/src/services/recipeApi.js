import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/recipes",
});

export const getRecipes = () => API.get("/");
export const getRecipeById = (id) => API.get(`/${id}`);
export const createRecipe = (data) => API.post("/", data);
export const updateRecipe = (id, data) => API.put(`/${id}`, data);
export const deleteRecipe = (id) => API.delete(`/${id}`);

