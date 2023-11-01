import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";


const EachPage = () => {

  const location = window.origin
  const {ch} = useParams()


  console.log(location)

  const navigate = useNavigate()

  const [text, setText] = useState('')



  useEffect(() => {

    axios.get(`/book/files/${ch}.txt`).then(res => {
      console.log(res.data)

      setText(res.data)
    })
    .catch(err => {
      navigate("/book/src/")
    })


  },[ch])


  return ( 
    <div>
      <div className="m-0 p-3 w-full bg-blue-700 text-white font-extrabold text-center"> 
        <Link to="/book/">회사에서 필요한 리액트 </Link>
      </div>







      <ul className="text-2xl bg-orange-500 font-bold text-white p-2 m-1 flex">
        <li className="p-2">
          <Link to={'/book/src/react_ch02'}>Ch02</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/java_ch03'}>Ch03</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/react_ch04'}>Ch04</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/java_ch05'}>Ch05</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/react_ch06'}>Ch06</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/java_ch07'}>Ch07</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/react_ch08'}>Ch08</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/react_ch09'}>Ch09</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/java_ch10'}>Ch10</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/react_ch11'}>Ch11</Link>
        </li>
        <li  className="p-2">
          <Link to={'/book/src/react_ch12'}>Ch12</Link>
        </li>
      </ul>

      <div className="text-4xl bg-blue-700 text-white p-4">
        {ch}장
      </div>

      <div className="bg-black text-white">
        <pre>
        {text}
        </pre>
      </div>
    </div>
   );
}
 
export default EachPage;