import { Link } from "react-router";

const RecipeCard = ({ recipe, onDelete }) => {

  const getTimeBadge = (time) => {
    if (time <= 15) {
      return <span className="badge badge-success">  Quick</span>;
    } else if (time <= 30) {
      return <span className="badge badge-warning">  Medium</span>;
    } else {
      return <span className="badge badge-error"> Long</span>;
    }
  };

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="card-body">
        <h2 className="card-title">{recipe.title}</h2>

        <div className="flex gap-2">
          {recipe.vegetarian ? (
            <span className="badge badge-success">Veg</span>
          ) : (
            <span className="badge badge-error">Non-Veg</span>
          )}

          {getTimeBadge(recipe.time)}
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/edit/${recipe._id}`} className="btn btn-sm btn-info">
            Edit
          </Link>

          <button
            onClick={() => onDelete(recipe._id)}
            className="btn btn-sm btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
