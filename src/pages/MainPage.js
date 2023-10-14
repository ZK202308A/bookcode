import { Link, Outlet } from "react-router-dom";


const MainPage = () => {
  return (  
    <div className="text-4xl ">
      <div className="m-0 p-3 w-full bg-blue-700 text-white font-extrabold text-center"> 
        소스코드 링크 
      </div>

      <ul className="flex text-2xl bg-orange-500 font-bold text-white p-2 m-1">
        <li className="p-2">
          <Link to={'ch02'}>Ch02-리액트</Link>
        </li>
        <li  className="p-2">
          <Link>Ch03-부트</Link>
        </li>
      </ul>


      <Outlet></Outlet>

    </div>
  );
}
 
export default MainPage;