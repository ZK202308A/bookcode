

const Ch04 = () => {
  return ( 
    <div className="text-2xl">
      <ul>
        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.2</div>
          <div className="border-2 m-2">
            <pre>
            {`

//npm install axios
import axios from "axios"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = \`\${API_SERVER_HOST}/api/todo\`

export const getOne = async (tno) => {

  const res = await axios.get(\`\${prefix}/\${tno}\` )

  return res.data

}

export const getList = async ( pageParam ) => {

  const {page,size} = pageParam

  const res = await axios.get(\`\${prefix}/list\`, {params: {page:page,size:size }})
  
  return res.data

}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.3.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useEffect, useState } from "react"
import { getOne } from "../../api/todoApi"

const initState = {
  tno:0,
  title:'',
  writer: '',
  dueDate: null,
  complete: false
}

const ReadComponent = ({tno}) => {

  const [todo, setTodo] = useState(initState) //아직 todo는 사용하지 않음 

  useEffect(() => {
    getOne(tno).then(data => {
      console.log(data)
      setTodo(data)
    })    
  }, [tno])

  return (  
    <div>

    </div>
  )
}
 
export default ReadComponent

--------------------------------------------------------


import { useCallback } from "react";
import { createSearchParams, useNavigate, useParams, useSearchParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {

  …생략

  const moveToList = useCallback(() => {

    navigate({pathname:\`/todo/list\`, search: queryStr})
  },[page, size])

  return ( 
    <div className="font-extrabold w-full bg-white mt-6">

      <div className="text-2xl ">
        Todo Read Page Component {tno}
      </div>
      
      <ReadComponent tno={tno}></ReadComponent>
      
    </div> 
  );

}
 
export default ReadPage;


--------------------------------------------------------

import { useEffect, useState } from "react"
import  {getOne} from "../../api/todoApi"

const initState = {
  tno:0,
  title:'',
  writer: '',
  dueDate: null,
  complete: false
}

const ReadComponent = ({tno}) => {

  const [todo, setTodo] = useState(initState) //아직 todo는 사용하지 않음 

  useEffect(() => {
    getOne(tno).then(data => {
      console.log(data)
      setTodo(data)
    })    
  }, [tno])

  return (  
  <div className = "border-2 border-sky-200 mt-10 m-2 p-4 ">
      
    {makeDiv('Tno', todo.tno)}
    {makeDiv('Writer', todo.writer)}
    {makeDiv('Title', todo.title)}
    {makeDiv('Due Date', todo.dueDate)}
    {makeDiv('Complete', todo.complete ? 'Completed' : 'Not Yet')}

  </div>
  )
}

const makeDiv = (title,value) =>       
<div className="flex justify-center">
  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
    <div className="w-1/5 p-6 text-right font-bold">{title}</div>
    <div className="w-4/5 p-6 rounded-r border border-solid shadow-md">
    {value}        
    </div>
  </div>
</div>

 
export default ReadComponent


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.4.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum  = (param, defaultValue) => {

  if(!param){
    return defaultValue
  }

  return parseInt(param)
}


const useCustomMove = () => {

  const navigate = useNavigate()

  const [queryParams] = useSearchParams()

  const page = getNum(queryParams.get('page'), 1)
const size = getNum(queryParams.get('size'),10)

  const queryDefault = createSearchParams({page, size}).toString() //새로 추가

  const moveToList = (pageParam) => {

    let queryStr = ""

    if(pageParam){

      const pageNum = getNum(pageParam.page, 1)
      const sizeNum = getNum(pageParam.size, 10)

      queryStr = createSearchParams({page:pageNum, size: sizeNum}).toString()
    }else {
      queryStr = queryDefault
    }

  }

  return  {moveToList, moveToModify, page, size}

}

export default useCustomMove


-----------------------------------------------------------------------------------------

import { useEffect, useState } from "react"
import  {getOne} from "../../api/todoApi"
import useCustomMove from "../../hooks/useCustomMove" //추가

…생략

const ReadComponent = ({tno}) => {

  const [todo, setTodo] = useState(initState) //아직 todo는 사용하지 않음 

  const {moveToList} = useCustomMove()

  useEffect(() => {
    …생략     
  }, [tno])

  return (  
  <div className = "border-2 border-sky-200 mt-10 m-2 p-4 ">
      
    {makeDiv('Tno', todo.tno)}
    {makeDiv('Writer', todo.writer)}
    {makeDiv('Title', todo.title)}
    {makeDiv('Title', todo.complete ? 'Completed' : 'Not Yet')}

    {/* buttons.........start */}
    <div className="flex justify-end p-4">

      <button type="button" 
        className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
        onClick={() => moveToList()}
      >
        List
      </button>  
    </div>

  </div>
  )
}

…생략

 
export default ReadComponent


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.4.2  </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum  = (param, defaultValue) => {…생략 } 

const useCustomMove = () => {

  const navigate = useNavigate()

  const [queryParams] = useSearchParams()

  const page = getNum(queryParams.get('page'), 1)
  const size = getNum(queryParams.get('size'),10)

  const queryDefault = createSearchParams({page, size}).toString() //새로 추가

  const moveToList = (pageParam) => {…생략  }

  const moveToModify = (num) => {

    console.log(queryDefault)

    navigate({
      pathname: \`../modify/\${num}\`,
      search: queryDefault  //수정시에 기존의 쿼리 스트링 유지를 위해 
    })
  }

  return  {moveToList, moveToModify, page, size} //moveToModify 추가 

}

export default useCustomMove


-------------------------------------------------------------------------

import { useEffect, useState } from "react"
import  {getOne} from "../../api/todoApi"
import useCustomMove from "../../hooks/useCustomMove"

const initState = {
  …생략 
}

const ReadComponent = ({tno}) => {

  const [todo, setTodo] = useState(initState) //아직 todo는 사용하지 않음 

  //이동과 관련 기능은 모두 useCustomMove()로 
  const {moveToList, moveToModify} = useCustomMove()

  useEffect(() => {
    …생략     
  }, [tno])

  return (  
  <div className = "border-2 border-sky-200 mt-10 m-2 p-4 ">
      
    …생략 

    {/* buttons.........start */}
    <div className="flex justify-end p-4">

      <button type="button" 
        className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
        onClick={() => moveToList()}
      >
        List
      </button>  

      <button type="button" 
        className="rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
        onClick={() => moveToModify(tno)}
      >
        Modify
      </button>

    </div>

  </div>
  )
}

const makeDiv = ..생략 

 
export default ReadComponent


------------------------------------------------------------------------------------------------------

import { useParams } from "react-router-dom";
import ReadComponent from "../../components/todo/ReadComponent";

const ReadPage = () => {

  const {tno} = useParams()

  return ( 
    <div className="font-extrabold w-full bg-white mt-6">

      <div className="text-2xl ">
        Todo Read Page Component {tno}
      </div>
      
      <ReadComponent tno={tno}></ReadComponent>
      
    </div> 
  );

}
 
export default ReadPage;



            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.4.1 목록 데이터 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  dtoList:[],
  pageNumList:[],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totoalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0
}

const ListComponent = () => {

  const {page, size} = useCustomMove()

  //serverData는 나중에 사용
  const [serverData, setServerData] = useState(initState)

  useEffect(() => {

    getList({page,size}).then(data => {
      console.log(data)
      setServerData(data)
    })

  }, [page,size])

  return ( 
    <div>
       Todo List Component  
    </div>
  );
}
 
export default ListComponent;

------------------------------------------------------------------

import ListComponent from "../../components/todo/ListComponent";

const ListPage = () => {

  return ( 
  <div className="p-4 w-full bg-white">
    <div className="text-3xl font-extrabold">
      Todo List Page Component 
    </div> 

    <ListComponent/>

  </div>
   );
}
 
export default ListPage;


------------------------------------------------------------------

return ( 
  <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

    <div className="flex flex-wrap mx-auto justify-center p-6">

      {serverData.dtoList.map(todo =>

      <div
      key= {todo.tno} 
      className="w-full min-w-[400px]  p-2 m-2 rounded shadow-md"
      >  

        <div className="flex ">
          <div className="font-extrabold text-2xl p-2 w-1/12">
            {todo.tno}
          </div>
          <div className="text-1xl m-1 p-2 w-8/12 font-extrabold">
            {todo.title}
          </div>
          <div className="text-1xl m-1 p-2 w-2/10 font-medium">
            {todo.dueDate}
          </div>
        </div>
      </div>
      )}
    </div>

  </div>

  );


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.4.2 페이징처리  </div>
          <div className="border-2 m-2">
            <pre>
            {`

const PageComponent = ({serverData, movePage}) => {

  return (  
    <div className="m-6 flex justify-center">

    {serverData.prev ? 
      <div 
      className="m-2 p-2 w-16 text-center  font-bold text-blue-400 "
      onClick={() => movePage({page:serverData.prevPage} )}>
      Prev </div> : <></>}  

      {serverData.pageNumList.map(pageNum => 
      <div 
      key={pageNum}
      className={ \`m-2 p-2 w-12  text-center rounded shadow-md text-white \${serverData.current === pageNum? 'bg-gray-500':'bg-blue-400'}\`}
      onClick={() => movePage( {page:pageNum})}>
      {pageNum}
      </div>

      )}

      {serverData.next ? 
      <div 
      className="m-2 p-2 w-16 text-center font-bold text-blue-400"
      onClick={() => movePage( {page:serverData.nextPage})}> 
      Next 
      </div> : <></>}  

    </div>   

  );
}
 
export default PageComponent;

----------------------------------------------------

import { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";
import PageComponent from "../common/PageComponent";

const initState = {
  …
}

const ListComponent = () => {

  const {page, size, moveToList} = useCustomMove() //moveToList가 추가적으로 필요 

  //serverData는 나중에 사용
  const [serverData, setServerData] = useState(initState)

  useEffect(() => {

…

  }, [page,size])

  return ( 
  <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

    <div className="flex flex-wrap mx-auto justify-center p-6">

      {serverData.dtoList.map(todo =>

      …

      )}
    </div>

    <PageComponent serverData={serverData} movePage={moveToList}></PageComponent>

  </div>

  );
}
 
export default ListComponent;


            `}
            </pre>
          </div>
        </li>



        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.4.3 동일 페이지 클릭 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const getNum  = (param, defaultValue) => { … 생략 … }

const useCustomMove = () => {

  const navigate = useNavigate()

  const [refresh, setRefresh] = useState(false) //추가 

  const [queryParams] = useSearchParams()

  const page = getNum(queryParams.get('page'), 1)
  const size = getNum(queryParams.get('size'),10)

  const queryDefault = createSearchParams({page, size}).toString()

  const moveToList = (pageParam) => {

    let queryStr = ""

    if(pageParam){

      const pageNum = getNum(pageParam.page, 1)
      const sizeNum = getNum(pageParam.size, 10)

      queryStr = createSearchParams({page:pageNum, size: sizeNum}).toString()
    }else {
      queryStr = queryDefault
    }

    setRefresh(!refresh) //추가 

  }

  const moveToModify = (num) => {

    console.log(queryDefault)

    navigate({
      pathname: \`../modify/\${num}\`,
      search: queryDefault  //수정시에 기존의 쿼리 스트링 유지를 위해 
    })
  }

  return  {moveToList, moveToModify, page, size, refresh} //refresh 추가 

}

export default useCustomMove

------------------------------------------------------------------------------


const ListComponent = () => {

  const {page, size, refresh, moveToList} = useCustomMove()//refresh 추가 

  //serverData는 나중에 사용
  const [serverData, setServerData] = useState(initState)

  useEffect(() => {

    getList({page,size}).then(data => {
      console.log(data)
      setServerData(data)
    })

  }, [page,size, refresh])

  return ( 
  …



            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.4.4 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useState } from "react"
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom"

const useCustomMove = () => {

  …생략

  const moveToRead = (num) => {

    console.log(queryDefault)

    navigate({
      pathname: \`../read/\${num}\`,
      search: queryDefault
    })
  }

  return  {moveToList, moveToModify, moveToRead, page, size, refresh} //moveToRead 추가 
}

export default useCustomMove

------------------------------------------------------------------------

const ListComponent = () => {

  const {page, size, refresh, moveToList, moveToRead} = useCustomMove() //moveToRead

  …생략 

  return ( 
  <div className="border-2 border-blue-100 mt-10 mr-2 ml-2">

    <div className="flex flex-wrap mx-auto justify-center p-6">

      {serverData.dtoList.map(todo =>

      <div
      key= {todo.tno} 
      className="w-full min-w-[400px]  p-2 m-2 rounded shadow-md"
      onClick={() => moveToRead(todo.tno)} //이벤트 처리 추가 
      >  
…생략 



            `}
            </pre>
          </div>
        </li>



        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.5 등록 컴포넌트 모달 </div>
          <div className="border-2 m-2">
            <pre>
            {`

const AddComponent = () => {
  return (
    <>Add Component</>
  );
}
 
export default AddComponent;

-------------------------------------------------------------

import AddComponent from "../../components/todo/AddComponent";

const AddPage = () => {

  return ( 
  <div className="p-4 w-full bg-white">
    <div className="text-3xl font-extrabold">
      Todo Add Page 
    </div> 

    <AddComponent/>

  </div>
  );

}
 
export default AddPage;

----------------------------------------------------

import { useState } from "react";

const initState = {
  title:'',
  writer: '',
  dueDate: ''
}

const AddComponent = () => {

  const [todo, setTodo] = useState({...initState})

  const handleChangeTodo = (e) => {

    todo[e.target.name] = e.target.value

    setTodo({...todo})
  }

  const handleClickAdd = () => {

    console.log(todo)
  }
 
  return ( 
    <div className = "border-2 border-sky-200 mt-10 m-2 p-4"> 
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
           name="title"
           type={'text'} 
           value={todo.title}
           onChange={handleChangeTodo}
           >
           </input>

        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
           name="writer"
           type={'text'} 
           value={todo.writer}
           onChange={handleChangeTodo}
           >
           </input>
        </div>  
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md" 
           name="dueDate"
           type={'date'} 
           value={todo.dueDate}
           onChange={handleChangeTodo}
           >
           </input>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="relative mb-4 flex p-4 flex-wrap items-stretch">
          <button type="button" 
          className="rounded p-4 w-36 bg-blue-500 text-xl  text-white "
          onClick={handleClickAdd}          
          >
          ADD
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default AddComponent;


            `}
            </pre>
          </div>
        </li>


        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.5.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import axios from "axios"

export const API_SERVER_HOST = 'http://localhost:8080'

const prefix = \`\${API_SERVER_HOST}/api/todo\`

…생략 

export const postAdd = async (todoObj) => {

  const res = await axios.post(\`\${prefix}/\` , todoObj)

  return res.data
}


----------------------------------------------------------

import { useState } from "react";
import { postAdd } from "../../api/todoApi";

const initState = {
  title:'',
  writer: '',
  dueDate: ''
}

const AddComponent = () => {

  const [todo, setTodo] = useState({...initState})

  const handleChangeTodo = (e) => {

    todo[e.target.name] = e.target.value

    setTodo({...todo})
  }

  const handleClickAdd = () => {

    //console.log(todo)
    postAdd(todo)
    .then(result => {
       console.log(result)
       //초기화 
       setTodo({...initState})
    }).catch(e => {
       console.error(e)
    })

  }
 
  return ( 
    …생략 
  );
}
 
export default AddComponent;


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.5.2 모달 컴포넌트 </div>
          <div className="border-2 m-2">
            <pre>
            {`

const ResultModal = ( {title,content, callbackFn} ) => {
  return ( 
    <div 
    className={\`fixed top-0 left-0 z-[1055] flex h-full w-full  justify-center bg-black bg-opacity-20\`}  
    onClick={() => {
      if(callbackFn) {
        callbackFn()
      }
    }}>
      <div 
      className="absolute bg-white shadow dark:bg-gray-700 opacity-100 w-1/4 rounded  mt-10 mb-10 px-6 min-w-[600px]">
        <div className="justify-center bg-warning-400 mt-6 mb-6 text-2xl border-b-4 border-gray-500">
          {title}
        </div>
        <div className="text-4xl  border-orange-400 border-b-4 pt-4 pb-4">
          {content}
        </div>
        <div className="justify-end flex ">
          <button 
          className="rounded bg-blue-500 mt-4 mb-4 px-6 pt-4 pb-4 text-lg text-white" 
          onClick={() => {
            if(callbackFn) {
              callbackFn()
            }
          }}>Close Modal</button>
        </div>
      </div>
    </div>  
   );
}
 
export default ResultModal;

------------------------------------------------------------------------------

import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";

const initState = {
  title:'',
  writer: '',
  dueDate: ''
}

const AddComponent = () => {

const [todo, setTodo] = useState({...initState})

//결과데이터가 있는 경우에는 ResultModal을 보여준다. 

  const [result, setResult] = useState(null) //결과 상태 

  …생략 

  const handleClickAdd = () => {
    //console.log(todo)
    postAdd(todo)
    .then(result => {

       setResult(result.TNO) //결과 데이터 변경 
       setTodo({...initState})
       
    }).catch(e => {
       console.error(e)
    })
  }

  const closeModal = () => {

    setResult(null)

  }
 
  return ( 
    <div className = "border-2 border-sky-200 mt-10 m-2 p-4"> 

     {/* 모달 처리 */}

      {result ? <ResultModal title={'Add Result'} content={\`New \${result} Added\`} callbackFn={closeModal}/>: <></>}


      <div className="flex justify-center">
        …생략 
      </div>
    </div>
  );
}
 
export default AddComponent;


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.5.3 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useState } from "react";
import { postAdd } from "../../api/todoApi";
import ResultModal from "../common/ResultModal";
import useCustomMove from "../../hooks/useCustomMove";

…생략

const AddComponent = () => {

  const [todo, setTodo] = useState({...initState})

  const [result, setResult] = useState(null)

  const {moveToList} = useCustomMove() //useCustomMove 활용 
…생략

  const closeModal = () => {

    setResult(null)
    moveToList()  //moveToList( )호출 
  }
 
  return ( 
    <div className = "border-2 border-sky-200 mt-10 m-2 p-4"> 

      {result ? <ResultModal title={'Add Result'} content={\`New \${result} Added\`} callbackFn={closeModal}/>: <></>}

      …생략 
    </div>
  );
}
 
export default AddComponent;


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.7.1 </div>
          <div className="border-2 m-2">
            <pre>
            {`

export const deleteOne = async (tno) => {

  const res = await axios.delete(\`\${prefix}/\${tno}\` )

  return res.data

}

export const putOne = async (todo) => {

  const res = await axios.put(\`\${prefix}/\${todo.tno}\`, todo)

  return res.data
}


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.7.2</div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useEffect, useState } from "react";

const initState = {
  tno:0,
  title:'',
  writer: '',
  dueDate: null,
  complete: false
}

const ModifyComponent = ({tno}) => {

  const [todo, setTodo] = useState({...initState})

  useEffect(() => {

  },[tno])

  return ( 
    <div className = "border-2 border-sky-200 mt-10 m-2 p-4"> 
      <div className="flex justify-end p-4">
        <button type="button" 
          className="inline-block rounded p-4 m-2 text-xl w-32  text-white bg-red-500"
        >
          Delete
        </button>
        <button type="button" 
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
        >
          Modify
        </button>  
      </div>
    </div>
   );
}
 
export default ModifyComponent;


--------------------------------------------------------------------------------------

import { useParams } from "react-router-dom";
import ModifyComponent from "../../components/todo/ModifyComponent";

const ModifyPage = () => {

  const {tno} = useParams()

  return ( 
  <div className="p-4 w-full bg-white">
    <div className="text-3xl font-extrabold">
      Todo Modify Page  
    </div> 

    <ModifyComponent tno={tno}/>

  </div>
   );
}
 
export default ModifyPage;


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.7.3</div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useEffect, useState } from "react";
import { getOne } from "../../api/todoApi";

const initState = {
  tno:0,
  title:'',
  writer: '',
  dueDate: '',
  complete: false
}

const ModifyComponent = ({tno, moveList, moveRead}) => {

  const [todo, setTodo] = useState({...initState})


  useEffect(() => {

    getOne(tno).then(data =>  setTodo(data))

  },[tno])

  const handleChangeTodo = (e) => {

    todo[e.target.name] = e.target.value

    setTodo({...todo})
  }

  const handleChangeTodoComplete = (e) => {

    const value = e.target.value

    todo.complete = (value === 'Y')

    setTodo({...todo})
  }

  return ( 
    <div className = "border-2 border-sky-200 mt-10 m-2 p-4"> 

      <div className="flex justify-center mt-10">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TNO</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
            {todo.tno}        
          </div>  
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">WRITER</div>
          <div className="w-4/5 p-6 rounded-r border border-solid shadow-md bg-gray-100">
            {todo.writer}        
          </div>

        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">TITLE</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
           name="title"
           type={'text'} 
           value={todo.title}
           onChange={handleChangeTodo}
           >
           </input>
        </div>  
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">DUEDATE</div>
          <input className="w-4/5 p-6 rounded-r border border-solid border-neutral-300 shadow-md" 
           name="dueDate"
           type={'date'} 
           value={todo.dueDate}
           onChange={handleChangeTodo}
           >
           </input>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="relative mb-4 flex w-full flex-wrap items-stretch">
          <div className="w-1/5 p-6 text-right font-bold">COMPLETE</div>
          <select
            name="status" 
            className="border-solid border-2 rounded m-1 p-2"
            onChange={handleChangeTodoComplete} 
            value = {todo.complete? 'Y':'N'} >
            <option value='Y'>Completed</option>
            <option value='N'>Not Yet</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end p-4">
        <button type="button" 
          className="inline-block rounded p-4 m-2 text-xl w-32 text-white bg-red-500"
        >
          Delete
        </button>
        <button type="button" 
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
        >
          Modify
        </button>  
      </div>
    </div>
   );
}
 
export default ModifyComponent;


            `}
            </pre>
          </div>
        </li>

        <li>
          <div className="p-3 font-extrabold bg-green-500 m-3" >4.7.4 </div>
          <div className="border-2 m-2">
            <pre>
            {`

import { useEffect, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/todoApi";

const initState = {
  …생략
}

const ModifyComponent = ({tno}) => {

  const [todo, setTodo] = useState({...initState})

  //모달 창을 위한 상태 
  const [result, setResult] = useState(null)

  useEffect(() => {

    getOne(tno).then( data => {
      setTodo(data)
    })

  },[tno])

  const handleClickModify = () => { //버튼 클릭시 

    putOne(todo).then(data => {
      console.log("modify result: " + data)
    })
  }

  const handleClickDelete = () => { //버튼 클릭시 

    deleteOne(tno).then( data => {
      console.log("delete result: " + data)
    })

  }

  const handleChangeTodo = (e) => {…}

  const handleChangeTodoComplete = (e) => {…}

  return ( 
    <div className = "border-2 border-sky-200 mt-10 m-2 p-4">

<div className="flex justify-center mt-10">
        …생략 

      <div className="flex justify-end p-4">
        <button type="button" 
          className="inline-block rounded p-4 m-2 text-xl w-32  text-white bg-red-500"
          onClick={handleClickDelete}
        >
          Delete
        </button>
        <button type="button" 
          className="rounded p-4 m-2 text-xl w-32 text-white bg-blue-500"
          onClick={handleClickModify}
        >
          Modify
        </button>  
      </div>
    </div>
   );
}
 
export default ModifyComponent;


-------------------------------------------------------------------

import { useEffect, useState } from "react";
import { deleteOne, getOne, putOne } from "../../api/todoApi";
import useCustomMove from "../../hooks/useCustomMove";

import ResultModal from "../common/ResultModal";

const initState = {
  …생략 
}

const ModifyComponent = ({tno}) => {

  const [todo, setTodo] = useState({...initState})

  //모달 창을 위한 상태 
  const [result, setResult] = useState(null)

  //이동을 위한 기능들 
  const {moveToList, moveToRead} = useCustomMove()

  useEffect(() => { …  },[tno])

  const handleClickModify = ( ) => {

    putOne(todo).then(data => {
      //console.log("modify result: " + data)
      setResult('Modified')
    })
  }

  const handleClickDelete = ( ) => {

    deleteOne(tno).then( data => {
      //console.log("delete result: " + data)
      setResult('Deleted')
    })

  }

  //모달 창이 close될때 
  const closeModal = () => {
    if(result ==='Deleted') {
      moveToList()
    }else {
      moveToRead(tno)
    }
  }

  …생략 

  return ( 
    <div className = "border-2 border-sky-200 mt-10 m-2 p-4">

      {result ? <ResultModal title={'처리결과'} content={result} callbackFn={closeModal}></ResultModal>  :<></>}

      …생략 
   );
}
 
export default ModifyComponent;


            `}
            </pre>
          </div>
        </li>



      </ul>
    </div>  
   );
}
 
export default Ch04;