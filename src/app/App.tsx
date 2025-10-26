import './index.css';
import { ResumePage, ResumesListPage } from '@/pages';
import { Toaster } from '@/shared/ui/sonner';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Главная</Link>
        <Link to="/resume">Резюме</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ResumesListPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App
