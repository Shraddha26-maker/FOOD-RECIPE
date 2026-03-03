import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreateRecipe from "./pages/CreateRecipe";
import EditRecipe from "./pages/EditRecipe";
import QuickRecipes from "./pages/QuickRecipes";


function App() {
  return (
    <BrowserRouter>

      <Navbar />

      {/*  Toast Component इथे add करायचा */}
      <Toaster position="top-center" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateRecipe />} />
        <Route path="/edit/:id" element={<EditRecipe />} />
        <Route path="/quick" element={<QuickRecipes />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
