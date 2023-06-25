import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
