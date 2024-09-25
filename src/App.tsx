import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import LoadingSpinner from "./components/UI/loadingSpinner/LoadingSpinner";
import "./index.css";
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
const Patients = React.lazy(() => import("./pages/patients/patients"));
const NewPatient = React.lazy(() => import("./pages/patients/new"));
const CallManagement = React.lazy(
  () => import("./pages/patients/patient-calls")
);
const FileManagement = React.lazy(
  () => import("./pages/patients/patient-files")
);
const MissedCalls = React.lazy(() => import("./pages/calls/missed-calls"));
const TodayCalls = React.lazy(() => import("./pages/calls/today-calls"));

//
// Add Assessment
const AddAssessment1 = React.lazy(
  () => import("./pages/add-assessment/add-assessment1")
);
const AddAssessment2 = React.lazy(
  () => import("./pages/add-assessment/add-assessment2")
);
const AddAssessment3 = React.lazy(
  () => import("./pages/add-assessment/add-assessment3")
);
const AddAssessment4 = React.lazy(
  () => import("./pages/add-assessment/add-assessment4")
);
const AddAssessment5 = React.lazy(
  () => import("./pages/add-assessment/add-assessment5")
);
const AddAssessment6 = React.lazy(
  () => import("./pages/add-assessment/add-assessment6")
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<MainLayout />}>
              <Route path="/patients" element={<Patients />} />
              <Route path="/patients/new" element={<NewPatient />} />
              <Route path="/add-assessment1" element={<AddAssessment1 />} />
              <Route path="/add-assessment2" element={<AddAssessment2 />} />
              <Route path="/add-assessment3" element={<AddAssessment3 />} />
              <Route path="/add-assessment4" element={<AddAssessment4 />} />
              <Route path="/add-assessment5" element={<AddAssessment5 />} />
              <Route path="/add-assessment6" element={<AddAssessment6 />} />
              <Route path="/patient-calls/:id" element={<CallManagement />} />
              <Route path="/patient-files/:id" element={<FileManagement />} />
              <Route path="/missed-calls" element={<MissedCalls />} />
              <Route path="/today-calls" element={<TodayCalls />} />
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
