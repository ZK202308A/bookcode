

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
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.5 </div>
          <div className="border-2 m-2">
            <pre>
            {`

          import { Link } from "react-router-dom";

          const BasicMenu = () => {
          return ( 
          <nav id='navbar' className=" flex bg-blue-300">

          <div className="w-4/5 bg-gray-500" >
            <ul className="flex p-4 text-white font-bold">
            <li className="pr-6 text-2xl">
            <Link to={'/'}>Main</Link>
            </li>
            <li className="pr-6 text-2xl">
            <Link to={'/about'}>About</Link>
            </li>
            </ul>
          </div>

          <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
            <div className="text-white text-sm m-1 rounded" >
            Login
            </div>
          </div>
          </nav>
          );
          }

          export default BasicMenu;


          ------------------------------------------------------------------------------------------

          import BasicMenu from "../components/menus/BasicMenu";

          const BasicLayout = ({children}) => {
          return ( 
          <>
          <BasicMenu></BasicMenu>

          <div className="bg-white my-5 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <main className="bg-sky-300 md:w-2/3 lg:w-3/4 px-5 py-40">
            <h1 className="text-2xl md:text-4xl">{children}</h1>
            </main>
            <aside className="bg-green-300 md:w-1/3 lg:w-1/4 px-5 py-40">
            <h1 className="text-2xl md:text-4xl">Sidebar</h1>
            </aside>
          </div>
          </>
          );
          }

          export default BasicLayout;



            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.5.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { Link } from "react-router-dom";

            const BasicMenu = () => {
            return ( 
            <nav id='navbar' className=" flex bg-blue-300">

            <div className="w-4/5 bg-gray-500" >
              <ul className="flex p-4 text-white font-bold">
              <li className="pr-6 text-2xl">
              <Link to={'/'}>Main</Link>
              </li>
              <li className="pr-6 text-2xl">
              <Link to={'/about'}>About</Link>
              </li>
              <li className="pr-6 text-2xl">
              <Link to={'/todo/'}>Todo</Link>
              </li>
              </ul>
            </div>

            <div className="w-1/5 flex justify-end bg-orange-300 p-4 font-medium">
              <div className="text-white text-sm m-1 rounded" >
              Login
              </div>
            </div>
            </nav>
            );
            }

            export default BasicMenu;


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.6 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import BasicMenu from "../components/menus/BasicMenu";

            const BasicLayout = ({children}) => {
            return ( 
            <>

            {/* 기존 헤더 대신 BasicMenu*/ }
            <BasicMenu/> 

            {/* 상단 여백 my-5 제거 */}
            <div 
            className="bg-white my-5 w-full flex flex-col space-y-1 md:flex-row md:space-x-1 md:space-y-0">
              
              <main 
              className="bg-sky-300 md:w-4/5 lg:w-3/4 px-5 py-5"> {/* 상단 여백 py-40 변경 flex 제거 */}
              {children}
              </main>
              
              <aside 
              className="bg-green-300 md:w-1/5 lg:w-1/4 px-5 flex py-5"> {/* 상단 여백 py-40 제거 flex 제거 */}
              
              <h1 className="text-2xl md:text-4xl">Sidebar</h1>

              </aside>

            </div>
            </>
            );
            }

            export default BasicLayout;

            ------------------------------------------------------------------------------------------

            import { Outlet } from "react-router-dom";
            import BasicLayout from "../../layouts/BasicLayout";

            const IndexPage = () => {

            return ( 
            <BasicLayout>
              <div className="w-full flex m-2 p-2 ">
              <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">LIST</div>
              <div className="text-xl m-1 p-2 w-20 font-extrabold text-center underline">ADD</div>
              </div>
              <div className="flex flex-wrap w-full">
              <Outlet/>
              </div>
            </BasicLayout>
            );
            }

            export default IndexPage;

            ------------------------------------------------------------------------------------------


            import { Suspense, lazy } from "react";

            const { createBrowserRouter } = require("react-router-dom");

            ...

            const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

            const root = createBrowserRouter([

            ....
            {
            path: "todo",
            element: <Suspense fallback={Loading}><TodoIndex/></Suspense>
            }
            ])

            export default root;


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.7 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            const ListPage = () => {
              return ( 
              <div className="p-4 w-full bg-white">
              <div className="text-3xl font-extrabold">
              Todo List Page Component
              </div> 
              </div>
              );
            }
            
            export default ListPage;
            

            --------------------------------------------------------------------


            ...생략

            const TodoList = lazy(() => import("../pages/todo/ListPage"))

            const root = createBrowserRouter([

            ...생략 
            {
            path: "todo",
            element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
            children: [
              {
              path: "list",
              element: <Suspense fallback={Loading}> <TodoList/> </Suspense>
              }
            ]
            }
            ])

            export default root;




            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.8 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { Suspense, lazy } from "react";

            const Loading = <div>Loading....</div>
            const TodoList = lazy(() => import("../pages/todo/ListPage"))

            const todoRouter = () => {

            return [
            {
              path: "list",
              element: <Suspense fallback={Loading}><TodoList/></Suspense>
            }
            ]

            }

            export default todoRouter;

            --------------------------------------------------------------------

            import { Suspense, lazy } from "react";
            import todoRouter from "./todoRouter";

            const { createBrowserRouter } = require("react-router-dom");

            const Loading = <div>Loading....</div>

            const Main = lazy(() => import("../pages/MainPage"))

            const About = lazy(() => import("../pages/AboutPage"))

            const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

            const root = createBrowserRouter([

            {
            path: "",
            element: <Suspense fallback={Loading}><Main/></Suspense>
            },
            {
            path: "about",
            element: <Suspense fallback={Loading}><About/></Suspense>
            },
            {
            path: "todo",
            element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
            children: todoRouter()
            }
            ])

            export default root;


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.8.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { Suspense, lazy } from "react";
            import { Navigate } from "react-router-dom";

            const Loading = <div>Loading....</div>
            const TodoList = lazy(() => import("../pages/todo/ListPage"))

            const todoRouter = () => {

            return [
            {
              path: "list",
              element: <Suspense fallback={Loading}><TodoList/></Suspense>
            },
            {
              path: "",
              element: <Navigate replace to="list"/>
            }

            ]

            }

            export default todoRouter;




            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.9.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            const ReadPage = () => {

              return ( 
              <div className="text-3xl font-extrabold">
              Todo Read Page Component
              </div> 
              );
            
            }
            
            export default ReadPage;
 
            --------------------------------------------------------------------

            import { Suspense, lazy } from "react";
            import { Navigate } from "react-router-dom";

            const todoRouter = () => {

            const Loading = <div>Loading....</div>
            const TodoList = lazy(() => import("../pages/todo/ListPage"))
            const TodoRead = lazy(() => import("../pages/todo/ReadPage"))

            return [
            {
              path: "list",
              element: <Suspense fallback={Loading}><TodoList/></Suspense>
            },
            {
              path: "",
              element: <Navigate replace to="/todo/list"/>
            }, 
            {
              path: "read/:tno",
              element: <Suspense fallback={Loading}><TodoRead/></Suspense>
            },
            ]

            }

            export default todoRouter;


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.10 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { useParams } from "react-router-dom";

            const ReadPage = () => {

            const {tno} = useParams()

            return ( 
            <div className="text-3xl font-extrabold">
              Todo Read Page Component {tno}
            </div> 
            );

            }

            export default ReadPage;


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.10.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { useSearchParams } from "react-router-dom";

            const ListPage = () => {

            const [queryParams] = useSearchParams()

            const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
            const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

            return ( 
            <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
              Todo List Page Component {page} --- {size}
            </div> 
            </div>
            );
            }

            export default ListPage;


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.10.2 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { Outlet, useNavigate } from "react-router-dom";
            import BasicLayout from "../../layouts/BasicLayout";
            import { useCallback } from "react";

            const IndexPage = () => {

            const navigate = useNavigate()

            const handleClickList = useCallback(() => {
            navigate({ pathname:'list' })
            })

            const handleClickAdd = useCallback(() => {
            navigate({ pathname:'add' })
            })

            return ( 
            <BasicLayout>
              <div className="w-full flex m-2 p-2 ">
              <div 
              className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
              onClick={handleClickList}>
              LIST
              </div>
              
              <div 
              className="text-xl m-1 p-2 w-20 font-extrabold text-center underline"
              onClick={handleClickAdd}>
              ADD
              </div>
              
              </div>
              <div className="flex flex-wrap w-full">
              <Outlet/>
              </div>
            </BasicLayout>
            );
            }

            export default IndexPage;


            -------------------------------------------------------------------------------------------

            const AddPage = () => {


              return ( 
              <div className="text-3xl font-extrabold">
               Todo Add Page 
              </div> 
              );
             
             }
             
             export default AddPage;
             
             -------------------------------------------------------------------------------------------


            import { Suspense, lazy } from "react";
            import { Navigate } from "react-router-dom";

            const Loading = <div>Loading....</div>
            const TodoList = lazy(() => import("../pages/todo/ListPage"))
            const TodoRead = lazy(() => import("../pages/todo/ReadPage"))
            const TodoAdd = lazy(() => import("../pages/todo/AddPage"))

            const todoRouter = () => {

            return [
            {
              path: "list",
              element: <Suspense fallback={Loading}><TodoList/></Suspense>
            },
            {
              path: "",
              element: <Navigate replace to="list"/>
            },
            {
              path: "read/:tno",
              element: <Suspense fallback={Loading}><TodoRead/></Suspense>
            },
            {
              path: "add",
              element: <Suspense fallback={Loading}><TodoAdd/></Suspense>
            }

            ]

            }

            export default todoRouter;



            `}
            </pre>
          </div>
        </li>



        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.11.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { useCallback } from "react";
            import { useNavigate, useParams } from "react-router-dom";

            const ReadPage = () => {

            const {tno} = useParams()

            const navigate = useNavigate()

            const moveToModify = useCallback((tno) => {

            navigate({pathname:\`/todo/modify/\${tno}\`})

            },[tno])

            return ( 
            <div className="text-3xl font-extrabold">
              Todo Read Page Component {tno}

              <div>
              <button onClick={() => moveToModify(33)}>Test Modify</button>
              </div>
              
            </div> 
            );

            }

            export default ReadPage;

                         
            -------------------------------------------------------------------------------------------

            import { useCallback } from "react";
            import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

            const ReadPage = () => {

            const {tno} = useParams()

            const navigate = useNavigate()

            const [queryParams] = useSearchParams()

            const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1
            const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10

            const queryStr = createSearchParams({page,size}).toString()

            const moveToModify = useCallback((tno) => {

            navigate({
              pathname: \`/todo/modify/\${tno}\`,
              search: queryStr
            })

            },[tno, page, size])

            return ( 
            <div className="text-3xl font-extrabold">
              Todo Read Page Component {tno}

              <div>
              <button onClick={() => moveToModify(tno)}>Test Modify</button>
              </div>
              
            </div> 
            );

            }

            export default ReadPage;


          `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.11.2 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            import { useCallback } from "react";
            import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";

            const ReadPage = () => {

            …생략 

            const moveToModify = useCallback((tno) => {

            …생략 

            },[tno, page, size])

            const moveToList = useCallback(() => {

            navigate({pathname:\`/todo/list\`, search: queryStr})
            }, [page, size])

            return ( 
            <div className="text-3xl font-extrabold">
              Todo Read Page Component {tno}

              <div>
              <button onClick={() => moveToModify(tno)}>Test Modify</button>

              <button onClick={() => moveToList()}>Test List</button>
              </div>
              
            </div> 
            );

            }

            export default ReadPage;



            `}
            </pre>
          </div>
        </li>        

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >2.11.3 </div>
          <div className="border-2 m-2">
            <pre>
            {`

            const ModifyPage = ({tno}) => {
              return ( 
              <div className="text-3xl font-extrabold">
              Todo Modify Page 
              </div> 
              );
            }
            
            export default ModifyPage;
            
            -------------------------------------------------------------------------------------------

            import { Suspense, lazy } from "react";
            import { Navigate } from "react-router-dom";

            const Loading = <div>Loading....</div>
            const TodoList = lazy(() => import("../pages/todo/ListPage"))
            const TodoRead = lazy(() => import("../pages/todo/ReadPage"))
            const TodoAdd = lazy(() => import("../pages/todo/AddPage"))
            const TodoModify = lazy(() => import("../pages/todo/ModifyPage"))

            const todoRouter = () => {

            return [
            …생략 
            {
              path: "modify/:tno",
              element: <Suspense fallback={Loading}><TodoModify/></Suspense>
            }

            ]

            }

            export default todoRouter;

            -------------------------------------------------------------------------------------------


            import { useNavigate } from "react-router-dom";

            const ModifyPage = ({tno}) => {

            const navigate = useNavigate()

            const moveToRead = () => {

            navigate({pathname:\`/todo/read/\${tno}\`})

            }

            const moveToList = () => {

            navigate({pathname:\`/todo/list\`})

            }

            return ( 
            <div className="text-3xl font-extrabold">
              Todo Modify Page 
            </div> 
            );
            }

            export default ModifyPage;


            `}
            </pre>
          </div>
        </li>

      </ul>

    </div>

   );
}



 
export default Ch02;