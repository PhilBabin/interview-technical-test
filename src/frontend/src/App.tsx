import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';
import ListView from './pages/ListView';
import CardView from './pages/CardView';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/list" replace />} />
          <Route path="list" element={<ListView />} />
          <Route path="cards" element={<CardView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
