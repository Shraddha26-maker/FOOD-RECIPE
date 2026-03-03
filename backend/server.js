import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./src/config/db.js";
import recipeRoutes from "./src/routes/recipeRoutes.js";


dotenv.config()
const app=express();
const port=process.env.PORT || 5000

app.use(express.json())
app.use(cors(const API = axios.create({
  baseURL: "https://food-recipe-l6kw.onrender.com/recipes"
});));
app.use("/recipes", recipeRoutes)
connectDB().then(()=>{
    app.listen(port, () =>{
        console.log(`http://localhost:${port}/recipes`)
    })
})


