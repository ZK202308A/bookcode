import { Suspense, lazy } from "react";

const { createBrowserRouter, Navigate } = require("react-router-dom");

const Loading = <div>Loading....</div>
const Main = lazy(() => import("../pages/MainPage"))

const Ch02Page = lazy(() => import("../pages/Ch02"))

const Ch03Page = lazy(() => import("../pages/Ch03"))

const Ch04Page = lazy(() => import("../pages/Ch04"))

const root = createBrowserRouter([

 {
  path: "book",
  element: <Suspense fallback={Loading}><Main/></Suspense>,
  children: [

    {
      path:'ch02',
      element: <Suspense fallback={Loading}><Ch02Page/></Suspense>,
     },
    
     {
      path:'ch03',
      element: <Suspense fallback={Loading}><Ch03Page/></Suspense>,
     }, 
    
     {
      path:'ch04',
      element: <Suspense fallback={Loading}><Ch04Page/></Suspense>,
     }, 

     

  ]
 },

 {
  path: "",
  element: <Navigate replace to="book"/>
 }



  


])

export default root;
