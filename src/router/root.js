import { Suspense, lazy } from "react";

const { createBrowserRouter, Navigate } = require("react-router-dom");

const Loading = <div>Loading....</div>

const Main = lazy(() => import("../pages/MainPage"))

const Each = lazy(() => import("../pages/EachPage"))


const root = createBrowserRouter([

 {
  path: "",
  element: <Suspense fallback={Loading}><Main/></Suspense>,
  
 },
 {
  path: ":ch",
  element: <Suspense fallback={Loading}><Each/></Suspense>,
  errorElement: <Navigate to='/book/' replace></Navigate>
  
 }


])

export default root;
