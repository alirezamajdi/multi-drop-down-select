import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
const Index = React.lazy(() => import("./pages"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
