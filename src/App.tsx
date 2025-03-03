
import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "./components/ui/toaster";
import BackgroundBlobs from './components/BackgroundBlobs';
import './App.css';

import Index from './pages/Index';
import Projects from './pages/Projects';
import Timeline from './pages/Timeline';
import Blog from './pages/Blog';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

// Use HashRouter for GitHub Pages to avoid URL path issues
const Router = import.meta.env.PROD ? HashRouter : BrowserRouter;

function App() {
  return (
    <Router>
      <BackgroundBlobs />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
