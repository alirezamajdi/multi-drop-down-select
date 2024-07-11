import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import LoadingSpinner from "./components/UI/loadingSpinner/LoadingSpinner";
import "./assets/fonts/css/fontiran.css";
import "./scss/App.scss";

// const Dashboard = React.lazy(() => import("./pages/Dashboard"));
// const Customers = React.lazy(() => import("./pages/Customers"));
// const CustomerEdit = React.lazy(() => import("./pages/CustomerEdit"));
// const Products = React.lazy(() => import("./pages/Products"));
// const ProductEdit = React.lazy(() => import("./pages/ProductEdit"));
const NotFound = React.lazy(() => import("./pages/notFound"));
// const BlankPage = React.lazy(() => import("./pages/BlankPage"));
const Login = React.lazy(() => import("./pages/login"));
const Patients = React.lazy(() => import("./pages/patients"));

//
// Add Assessment
const AddAssessment1 = React.lazy(
  () => import("./pages/add-assessment/add-assessment1")
);
const AddAssessment2 = React.lazy(
  () => import("./pages/add-assessment/add-assessment2")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="/patients" element={<Patients />} />
              <Route path="/add-assessment1" element={<AddAssessment1 />} />
              <Route path="/add-assessment2" element={<AddAssessment2 />} />
              {/* <Route index element={<Dashboard />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/customers/:customerId" element={<CustomerEdit />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<ProductEdit />} />
              <Route path="/orders" element={<BlankPage />} />
              <Route path="/analytics" element={<BlankPage />} />
              <Route path="/discount" element={<BlankPage />} />
              <Route path="/inventory" element={<BlankPage />} /> */}
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
