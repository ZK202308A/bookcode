

const Ch02 = () => {
  return ( 
    <div className="text-2xl">
      <ul>
        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.2</div>
          <div className="border-2 m-2">
            <pre>
            {`
            
            import { createBrowserRouter } from "react-router-dom";

            const root = createBrowserRouter([

            ])

            export default root;

            ------------------------------------------------------------------------------------------
            
            import {RouterProvider} from "react-router-dom";
            import root from "./router/root";

            function App() {
              return (
              <RouterProvider router={root}/>
              );
            }

            export default App;
            

            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3  font-extrabold bg-green-500 m-3" >2.2.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`
            
            const MainPage = () => {
              return ( 
              <div className=" text-3xl">
               <div>Main Page</div>
              </div>
              );
             }
              
             export default MainPage;
            

          
            ------------------------------------------------------------------------------------------
            
            import { Suspense, lazy } from "react";

            const { createBrowserRouter } = require("react-router-dom");
            
            const Loading = <div>Loading....</div>
            const Main = lazy(() => import("../pages/MainPage"))
            
            const root = createBrowserRouter([
            
             {
             path: "",
             element: <Suspense fallback={Loading}><Main/></Suspense>
             }
            
            ])
            
            export default root;
            
            

            ------------------------------------------------------------------------------------------
            
            const AboutPage = () => {
              return ( 
              <div className=" text-3xl">About Page</div>
              );
             }
              
             export default AboutPage;
            

             ------------------------------------------------------------------------------------------
            

            import { Suspense, lazy } from "react";

            const { createBrowserRouter } = require("react-router-dom");
            
            const Loading = <div>Loading....</div>
            const Main = lazy(() => import("../pages/MainPage"))
            
            const About = lazy(() => import("../pages/AboutPage"))
            
            const root = createBrowserRouter([
            
             {
             path: "",
             element: <Suspense fallback={Loading}><Main/></Suspense>
             },
             {
             path: "about",
             element: <Suspense fallback={Loading}><About/></Suspense>
             }
            ])
            
            export default root;
            

            `}
            </pre>
          </div>
        </li>  


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.3 </div>
          <div className="border-2 m-2">
            <pre>
            {`
            

            import { Link } from "react-router-dom";

            const MainPage = () => {
             return (
             <div>
              <div className="flex">
              <Link to={'/about'}>About</Link>
              </div>
              <div className=" text-3xl">Main Page</div>
             </div> 
             
             );
            }
             
            export default MainPage;
            

            `}
            </pre>
          </div>
        </li>  


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.4 </div>
          <div className="border-2 m-2">
            <pre>
            {`


            const BasicLayout = ({children}) => {
             return ( 
             <>
             <header 
             className="bg-teal-400 p-5">
              
              <h1 
              className="text-2xl md:text-4xl">
              Header
              </h1>
             </header>
            
             <div 
             className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
              
              <main 
              className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
               {children}
              </main>
              
              <aside 
              className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
              
              <h1 
              className="text-2xl md:text-4xl">
               Sidebar
              </h1>
            
              </aside>
            
             </div>
             </>
             );
            }
            
            export default BasicLayout;
            
            ------------------------------------------------------------------------------------------
            
            
            import BasicLayout from "../layouts/BasicLayout";
            
            const MainPage = () => {
             return (
             <BasicLayout>
              
              <div className=" text-3xl">Main Page</div>
             </BasicLayout> 
             
             );
            }
             
            export default MainPage;
            
            
            ------------------------------------------------------------------------------------------
            
            
            import BasicLayout from "../layouts/BasicLayout";
            
            const AboutPage = () => {
             return ( 
             <BasicLayout>
              <div className=" text-3xl">About Page</div>
             </BasicLayout>
             
             );
            }
             
            export default AboutPage;
            
            
            

            `}
            </pre>
          </div>
        </li> 

      </ul>

    </div>

   );
}
 
export default Ch02;