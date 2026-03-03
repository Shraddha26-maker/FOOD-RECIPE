import { useEffect, useState } from "react";
import { getRecipeById, updateRecipe } from "../services/recipeApi";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function EditRecipe() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await getRecipeById(id);
        setForm(res.data);
      } catch {
        toast.error("Failed to load recipe ");
      }
    };

    fetchRecipe();
  }, [id]);

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
      await updateRecipe(id, form);
      toast.success("Recipe Updated Successfully ");
      navigate("/");
    } catch {
      toast.error("Update Failed ");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-6">

      <form
        onSubmit={handleSubmit}
        className="card w-full max-w-3xl bg-white/20 backdrop-blur-lg shadow-2xl p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
           Edit Recipe
        </h2>

        {/* Title */}
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Recipe Title"
          className="input input-bordered w-full mb-4 bg-white/80"
          required
        />

        {/* Cover Image */}
        <input
          type="text"
          name="coverImage"
          value={form.coverImage}
          onChange={handleChange}
          placeholder="Cover Image URL"
          className="input input-bordered w-full mb-4 bg-white/80"
        />

        {/* Ingredients */}
        <textarea
          name="ingredients"
          value={form.ingredients}
          onChange={handleChange}
          placeholder="Ingredients"
          className="textarea textarea-bordered w-full mb-4 bg-white/80"
          rows="3"
          required
        />

        {/* Instructions */}
        <textarea
          name="instructions"
          value={form.instructions}
          onChange={handleChange}
          placeholder="Cooking Instructions"
          className="textarea textarea-bordered w-full mb-4 bg-white/80"
          rows="4"
          required
        />

        {/* Time & Servings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            name="time"
            value={form.time}
            onChange={handleChange}
            placeholder="Cooking Time (mins)"
            className="input input-bordered bg-white/80"
            required
          />

          <input
            type="number"
            name="servings"
            value={form.servings}
            onChange={handleChange}
            placeholder="Servings"
            className="input input-bordered bg-white/80"
          />
        </div>

        {/* Difficulty & Cuisine */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

          <select
            name="difficulty"
            value={form.difficulty}
            onChange={handleChange}
            className="select select-bordered bg-white/80"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <input
            type="text"
            name="cuisine"
            value={form.cuisine}
            onChange={handleChange}
            placeholder="Cuisine"
            className="input input-bordered bg-white/80"
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
            checked={form.vegetarian}
            onChange={handleChange}
            className="toggle toggle-success"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="btn w-full bg-black text-white hover:bg-gray-800"
        >
           Update Recipe
        </button>

      </form>
    </div>
  );
}
