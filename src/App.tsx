import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { SceneViewer } from './components/SceneViewer/SceneViewer';

function FanRoute() {
  const { fanName } = useParams<{ fanName: string }>();
  return <SceneViewer fanName={fanName || 'dual'} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dual" replace />} />
        <Route path="/:fanName" element={<FanRoute />} />
      </Routes>
    </Router>
  );
}

export default App;