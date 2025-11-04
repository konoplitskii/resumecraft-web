import { ResumeEditPage, ResumesListPage, ResumeViewPage } from '@/pages';
import { Toaster } from '@/shared/ui/sonner';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <Link to="/">Главная</Link>
        <Link to="/resume">Резюме</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ResumesListPage />} />
        <Route path="/resume/add" element={<ResumeEditPage />} />
        <Route path="/resume/edit/:id" element={<ResumeEditPage />} />
        <Route path="/resume/:id" element={<ResumeViewPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
