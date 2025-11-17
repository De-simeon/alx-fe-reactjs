import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: 12, borderBottom: '1px solid #eee' }}>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        {/* future routes: /create, /edit/:id etc. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;