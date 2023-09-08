
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {

  const [movies,setMovies] = useState([]);


  useEffect(()=>{
    axios.request({
      url:"/data/selectAll"
    }).then((resp)=>{
       setMovies(resp.data);
    }).catch((error)=>{
      console.log(error);
    });
  },[]); 
  
  // useEffect : 의존성 배열에 변화가 발생하면, 발생하는 시점에 특정 코드를 실행해주는 hook 함수 
  //오른쪽에 있는 의존성 배열에 변화가 생기면 왼쪽 함수가 실행됨. 

  // useEffect 함수의 두번째 파라미터에 대하여
  // 배열 생략 시 : rerendering 시점 마다 콜백이 실행 됨
  // 빈 배열 [] 전달 시 : mount 시점(아예 페이지를 나갔다가 들어올 떄)을 감지하여 콜백이 실행 됨
  // [a,b,c] 의존성 배열에 요소를 담아 전달 할 시 : 배열 안에 있는 요소에 변화가 생길 때마다 콜백 

  const insert = () => {
    axios.request({
      url:"/data/insert",
      method:"post",
      params:{
        id:1001,
        title:"Movie01",
        genre:"Action"
      }
    }).then((resp)=>{
      setMovies(prev=>[...prev, resp.data]);
    }).catch((error)=>{
      console.log(error);
    })
    
  }

  //ajax - axios
  return (
    <>
    <div>
      <button onClick={insert}>Insert</button>
    </div>
    <fieldset>
      <legend>Movie List</legend>
      {
        movies.map(e => (
          <div>
            {e.id} {e.title} {e.genre} <button onClick={delete}>x</button>
          </div>
        ))
      }
    </fieldset>
    </>
  );
}

export default App;
