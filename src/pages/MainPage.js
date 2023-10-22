import { Link, Outlet } from "react-router-dom";


const MainPage = () => {

  const location = window.origin

  console.log("Main Page..............")
  console.log(location)

  return (  
    <div className="text-4xl ">
      <div className="m-0 p-3 w-full bg-blue-700 text-white font-extrabold text-center"> 
        회사에서 필요한 리액트 소스코드 
      </div>

      <ul className="text-2xl bg-orange-500 font-bold text-white p-2 m-1">
      <li className="p-2">
          <Link to={'/book/react_ch02'}>Ch02</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/java_ch03'}>Ch03</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/react_ch04'}>Ch04</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/java_ch05'}>Ch05</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/react_ch06'}>Ch06</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/java_ch07'}>Ch07</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/react_ch08'}>Ch08</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/react_ch09'}>Ch09</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/java_ch10'}>Ch10</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/react_ch11'}>Ch11</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/react_ch12'}>Ch12</Link>
        </li>
      </ul>

    </div>
  );
}
 
export default MainPage;