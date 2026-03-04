import axios from "axios";

const API = axios.create({
  baseURL: https://food-recipe-backend-7l4q.onrender.com
});

export const getRecipes = () => API.get("/");
export const getRecipeById = (id) => API.get(`/${id}`);
export const createRecipe = (data) => API.post("/", data);
export const updateRecipe = (id, data) => API.put(`/${id}`, data);
export const deleteRecipe = (id) => API.delete(`/${id}`);

