import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    ingredients: {
      type: String,
      required: true
    },

    instructions: {
      type: String,
      required: true
    },

    time: {
      type: String,
      required: true
    },

    coverImage: {
      type: String,
      required: true
    },

    difficulty: {
      type: String,
      default: "Medium"
    },

    cuisine: {
      type: String
    },

    servings: {
      type: Number
    },

    vegetarian: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema)
export default Recipe