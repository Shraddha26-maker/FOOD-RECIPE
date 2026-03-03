import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeApi";
import toast from "react-hot-toast";
import { Link } from "react-router";

export default function QuickRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await getRecipes();

        // Filter only quick recipes (≤ 20 mins)
        const quick = res.data.filter(
          (recipe) => recipe.time <= 20
        );

        setRecipes(quick);
      } catch {
        toast.error("Failed to load quick recipes ");
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="min-h-screen bg-base-200 p-6">

      <h1 className="text-3xl font-bold text-center mb-8">
         Quick Recipes (Under 20 mins)
      </h1>

      {recipes.length === 0 ? (
        <p className="text-center text-gray-500">
          No Quick Recipes Found 
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {recipes.map((recipe) => (
            <div
              key={recipe._id}
              className="card shadow-lg border-2 border-yellow-400 bg-yellow-50 hover:scale-105 transition-all duration-300"
            >
              {recipe.coverImage && (
                <figure>
                  <img
                    src={recipe.coverImage}
                    alt={recipe.title}
                    className="h-48 w-full object-cover"
                  />
                </figure>
              )}

              <div className="card-body">
                <h2 className="card-title">{recipe.title}</h2>

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

                  <span className="badge badge-warning animate-pulse">
                     Quick
                  </span>
                </div>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/edit/${recipe._id}`}
                    className="btn btn-info btn-sm"
                  >
                    Edit
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}