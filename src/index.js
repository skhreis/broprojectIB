import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';import { BrowserRouter, Routes, Route } from "react-router-dom";
import Selection from './pages/selection';
import Setting1r1 from './pages/setting1r1';
import Setting1r2 from './pages/setting1r2';
import Setting1r3 from './pages/setting1r3';
import Setting2r1 from './pages/setting2r1';
import Setting2r2 from './pages/setting2r2';
import Setting2r3 from './pages/setting2r3';
import Setting3r1 from './pages/setting3r1';
import Setting3r2 from './pages/setting3r2';
import Setting4r1 from './pages/setting4r1';
import Setting4r2 from './pages/setting4r2';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<App />} />
          <Route path="selection" element={<Selection />} />
          <Route path="setting1r1" element={<Setting1r1 />} />
          <Route path="setting1r2" element={<Setting1r2 />} />
          <Route path="setting1r3" element={<Setting1r3 />} />
          <Route path="setting2r1" element={<Setting2r1 />} />
          <Route path="setting2r2" element={<Setting2r2 />} />
          <Route path="setting2r3" element={<Setting2r3 />} />
          <Route path="setting3r1" element={<Setting3r1 />} />
          <Route path="setting3r2" element={<Setting3r2 />} />
          <Route path="setting4r1" element={<Setting4r1 />} />
          <Route path="setting4r2" element={<Setting4r2 />} />
        </Route>
      </Routes>
    </BrowserRouter>  
);
