import { useState } from "react";
import { createRecipe } from "../services/recipeApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export default function CreateRecipe() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    time: "",
    difficulty: "Easy",
    cuisine: "",
    servings: "",
    vegetarian: false,
    coverImage: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createRecipe(form);
      toast.success("Recipe Added Successfully ");
      navigate("/");
    } catch {
      toast.error("Failed to Add Recipe ");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 p-6">

      <form
        onSubmit={handleSubmit}
        className="card w-full max-w-3xl bg-white/20 backdrop-blur-lg shadow-2xl p-8 rounded-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
           Create New Recipe
        </h2>

        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Recipe Title"
          className="input input-bordered w-full mb-4 bg-white/80"
          onChange={handleChange}
          required
        />

        {/* Cover Image */}
        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          className="input input-bordered w-full mb-4 bg-white/80"
          onChange={handleChange}
        />

        {/* Ingredients */}
        <textarea
          name="ingredients"
          placeholder="Ingredients (comma separated)"
          className="textarea textarea-bordered w-full mb-4 bg-white/80"
          rows="3"
          onChange={handleChange}
          required
        />

        {/* Instructions */}
        <textarea
          name="instructions"
          placeholder="Cooking Instructions"
          className="textarea textarea-bordered w-full mb-4 bg-white/80"
          rows="4"
          onChange={handleChange}
          required
        />

        {/* Time & Servings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            name="time"
            placeholder="Cooking Time (mins)"
            className="input input-bordered bg-white/80"
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="servings"
            placeholder="Servings"
            className="input input-bordered bg-white/80"
            onChange={handleChange}
          />
        </div>

        {/* Difficulty & Cuisine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          <select
            name="difficulty"
            className="select select-bordered bg-white/80"
            onChange={handleChange}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <input
            type="text"
            name="cuisine"
            placeholder="Cuisine (Indian, Italian...)"
            className="input input-bordered bg-white/80"
            onChange={handleChange}
          />
        </div>

        {/* Vegetarian Toggle */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-white font-semibold">
            Vegetarian
          </span>
          <input
            type="checkbox"
            name="vegetarian"
            className="toggle toggle-success"
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn w-full bg-black text-white hover:bg-gray-800 transition-all duration-300"
        >
           Add Recipe
        </button>

      </form>
    </div>
  );
}
