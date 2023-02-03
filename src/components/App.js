import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './HomePage';
import GameDetails from './GameDetails';
import NotFoundPage from './NotFound';
import SearchResults from './SearchResults';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/details/:name" element={<GameDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
