import Recipe from "../models/recipeModel.js";

// GET ALL
export async function getAllRecipes(_, res) {
  try {
    const recipes = await Recipe.find().sort({ createdAt: -1 });
    res.status(200).json(recipes);
  } catch (error) {
    console.error("Error in getAllRecipes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// GET BY ID
export async function getRecipeById(req, res) {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error in getRecipeById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// CREATE
export async function createRecipe(req, res) {
  try {
    const {
      title,
      ingredients,
      instructions,
      time,
      difficulty,
      cuisine,
      servings,
      vegetarian,
      coverImage,
    } = req.body;

    if (
      !title ||
      !ingredients ||
      !instructions ||
      !time ||
      !difficulty ||
      !cuisine ||
      !servings ||
      coverImage === undefined
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const recipe = new Recipe({
      title,
      ingredients,
      instructions,
      time,
      difficulty,
      cuisine,
      servings,
      vegetarian,
      coverImage,
    });

    const savedRecipe = await recipe.save();
    res.status(201).json(savedRecipe);

  } catch (error) {
    console.error("Error in createRecipe controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// UPDATE
export async function updateRecipe(req, res) {
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json(updatedRecipe);
  } catch (error) {
    console.error("Error in updateRecipe controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

// DELETE
export async function deleteRecipe(req, res) {
  try {
    const deletedRecipe = await Recipe.findByIdAndDelete(req.params.id);

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({ message: "Recipe deleted successfully" });

  } catch (error) {
    console.error("Error in deleteRecipe controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}