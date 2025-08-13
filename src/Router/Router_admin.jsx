import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from '../components/Dashboard'; 
// import Content from '../page/Content';

//代理列表
import ComplexTable from '../page/ComplexTable';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Dashboard */}
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Navigate to="/dashboard" />} />

            
          <Route path="dashboard" element={<ComplexTable />} />
        

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;