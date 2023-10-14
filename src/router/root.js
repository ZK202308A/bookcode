import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))

const Ch02Page = lazy(() => import("../pages/Ch02"))

const root = createBrowserRouter([

 {
 path: "",
 element: <Suspense fallback={Loading}><Main/></Suspense>,
 children: [
   {
    path:'ch02',
    element: <Suspense fallback={Loading}><Ch02Page/></Suspense>,
   }
 ]
 }

])

export default root;
