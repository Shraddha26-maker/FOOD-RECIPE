import { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../services/recipeApi";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { Pencil, Trash2 } from "lucide-react";

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [vegOnly, setVegOnly] = useState(false);
  const [quickOnly, setQuickOnly] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const res = await getRecipes();
      setRecipes(res.data);
    } catch {
      toast.error("Failed to fetch recipes ");
    }
  };

  const confirmDelete = async () => {
    try {
      await deleteRecipe(deleteId);
      toast.success("Recipe Deleted Successfully. ");
      setDeleteId(null);
      fetchRecipes();
    } catch {
      toast.error("Delete Failed ");
    }
  };

  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe.title.toLowerCase().includes(search.toLowerCase()) &&
      (!vegOnly || recipe.vegetarian) &&
      (!quickOnly || recipe.time <= 20)
    );
  });

  //  Toast for Recipe Not Found
  useEffect(() => {
    if (search.trim() !== "" && filteredRecipes.length === 0) {
      toast.dismiss();
      toast.error("Recipe Not Found ");
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-base-200 p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
         All Recipes
      </h1>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">

        <input
          type="text"
          placeholder="Search Recipe..."
          className="input input-bordered w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="toggle toggle-success"
            checked={vegOnly}
            onChange={() => setVegOnly(!vegOnly)}
          />
          Veg Only
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="toggle toggle-warning"
            checked={quickOnly}
            onChange={() => setQuickOnly(!quickOnly)}
          />
          Quick Only
        </label>

      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {filteredRecipes.map((recipe) => (
          <div
            key={recipe._id}
            className="card bg-base-100 shadow-lg hover:scale-105 transition-all duration-300"
          >
            {recipe.coverImage && (
              <figure className="h-48 overflow-hidden">
                <img
                  src={recipe.coverImage}
                  alt={recipe.title}
                  className="w-full h-full object-cover"
                />
              </figure>
            )}

            <div className="card-body">

              <h2 className="card-title">
                {recipe.title}
                {recipe.time <= 20 && (
                  <div className="badge badge-warning ml-2">
                     Quick
                  </div>
                )}
              </h2>

              <p className="text-sm">
                 {recipe.time} mins |  {recipe.servings}
              </p>

              <div className="flex flex-wrap gap-2 mt-2">
                {recipe.vegetarian ? (
                  <span className="badge badge-success">Veg</span>
                ) : (
                  <span className="badge badge-error">Non-Veg</span>
                )}

                <span className="badge badge-info">
                  {recipe.difficulty}
                </span>

                <span className="badge badge-secondary">
                  {recipe.cuisine}
                </span>
              </div>

              {/* Icons */}
              <div className="card-actions justify-end mt-4 gap-2">

                <Link
                  to={`/edit/${recipe._id}`}
                  className="btn btn-circle btn-sm btn-info hover:scale-110 transition-transform"
                >
                  <Pencil size={16} />
                </Link>

                <button
                  onClick={() => setDeleteId(recipe._id)}
                  className="btn btn-circle btn-sm btn-error hover:scale-110 transition-transform"
                >
                  <Trash2 size={16} />
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>

      {/* Delete Modal */}
      {deleteId && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Confirm Delete
            </h3>
            <p className="py-4">
              Are you sure you want to delete this recipe?
            </p>

            <div className="modal-action">
              <button
                onClick={() => setDeleteId(null)}
                className="btn"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </dialog>
      )}

    </div>
  );
}
