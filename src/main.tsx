import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // For routing
import HomePage from './pages/home-page';
import TopBar from './components/top-bar';

// Load in styling for the app as a whole. For example, remove padding and margin from the body.
import './styles.css';

const App = () => (
  <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
  </Router>
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
