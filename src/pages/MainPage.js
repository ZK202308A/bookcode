import { Link, Outlet } from "react-router-dom";


const MainPage = () => {



  return (  
    <div className="text-4xl ">
      <div className="m-0 p-3 w-full bg-blue-700 text-white font-extrabold text-center"> 
        <Link to="/book/">코드로 배우는 리액트 소스코드 </Link>
      </div>

      <ul className="text-3xl bg-green-700 font-bold text-white p-2 m-1 text-center font-extrabold">
        <li className="p-2 mt-3 ">
          <Link to={'/book/src/react_ch02'}>Ch02 </Link>
        </li>
        <li className="p-2 mt-3">
          <Link to={'/book/src/java_ch03'}>Ch03</Link>
        </li>
        <li  className="p-2 mt-3 ">
          <Link to={'/book/src/react_ch04'}>Ch04</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/java_ch05'}>Ch05</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/react_ch06'}>Ch06</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/java_ch07'}>Ch07</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/react_ch08'}>Ch08</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/react_ch09'}>Ch09</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/java_ch10'}>Ch10</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/react_ch11'}>Ch11</Link>
        </li>
        <li  className="p-2 mt-3">
          <Link to={'/book/src/react_ch12'}>Ch12</Link>
        </li>
      </ul>

    </div>
  );
}
 
export default MainPage;