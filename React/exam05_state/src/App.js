import { useState } from 'react';
import './App.css';

function App1() {

  // state -> 특정 값을 계속 Tracking(추적) 하는 객체 + 데이터 바인딩 효과를 포함함. 
  // React hook 함수 :  Class 기반 컴포넌트에서 사용되던 기능들을 Functional Component 에서 사용할 수 있게 개발된 함수들.

  //getter, setter
  const [count,setCount] = useState(0); // 2개의 값을 가진 배열 봔환 
  // 생성된 State 객체에 대한 값을 가져오는 Getter와 집어넣는 Setter를 반환한다. 
  //useState() -> react Hook 함수

  const plus = () => {
    setCount(count+1);
  }

  const minus = () => {
    setCount(count-1);
  }

 //데이터바인딩을 통한 실시간 렌더링 
  return (
    <div className="App">
      <div id="count">{count}</div>
      <div>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>    
      </div>
    </div>
  );
}

function App2() {

  const [str,setStr] = useState("");
 
  const handleChange = (e) => {
    setStr(e.target.value); //이벤트가 발생한 주체 (input태그)
  }


  return(
    <div>
    <div>{str}</div>
    <input type="text" onChange={handleChange}></input>
    </div>
  );
}

function App3() {

  const [writer, setWriter] = useState("");
  const [song, setSong] = useState("");

  const handleWriter = (e) => {
    setWriter(e.target.value)
  }
  
  const handleSong = (e) => {
    setSong(e.target.value)
  }

  const handleOk = () => {
    console.log(writer,song);
    setWriter("");
    setSong("");
  }

  return(
    <div>
      <input type="text" placeholder='input writer' value={writer} onChange={handleWriter} /><br></br>
      <input type="text" placeholder='music name' value={song} onChange={handleSong}/><br></br>
      <button onClick={handleOk}>확인</button>
    </div>
  );
}

function App4() {

const [song, setSong] = useState({writer:"",name:""});

const handleWriter = (e) => {
  setSong({...song, writer:e.target.value});
} //전개연산자로 풀어서

const handleName = (e) => {
  setSong({...song, name:e.target.value});
}

const handleOk = () => {
  console.log(song);
  setSong({writer:"",name:""});
}
  return(
    <div>
      <div>{`${song.writer} ${song.name}`}</div>
      <input type="text" placeholder='input writer'onChange={handleWriter} value={song.writer}/><br></br>
      <input type="text" placeholder='music name' onChange={handleName} value={song.name}/><br></br>
      <button onClick={handleOk}>확인</button>
    </div>
  );
}

function App5() {

  const [arr,setArr] = useState([]);
  const [str,setStr] = useState("");

  const handleChange = (e) => {
    setStr(e.target.value);
  }

  // const handleAdd = () => {
  //   setArr([...arr,str]); //기존에 있는 값이 사라지지 않게 전개연산자로 풀어낸 다음 값을 넣는다! 
  // }

  const handleAdd = () => {
    setArr((prev) => {return [...prev,str]}); //콜백함수
    //setArr(prev => [...prev,str]); 이렇게 축약 할 수도 있음 리턴값이 하나라면 
  } //prev 이전상태 

  return(
    <div>
      <input type="text" placeholder='input text to add' onChange={handleChange}/>
      <button onClick={handleAdd}>Add to array</button>
      <div>
        {
          arr.map((e,i) => (<div key={i}>{e}</div>)) //이렇게 생략가능 
              //콜백의 리턴값이 있음 => map 함수
              //콜백의 리턴값이 없음 => foreach 
              //JSX element를 리턴할때 소괄호를 씀 
        }
      </div>
    </div>
  );
}

function App6() {

  const[contacts,setContacts] = useState([
    {seq:1,name:"Susan",contact:"01012344321"},
    {seq:2,name:"Tom",contact:"01098761234"},
    {seq:3,name:"Jane",contact:"01040302050"}
  ]);

  const[contact,setContact] = useState({seq:0,name:'', contact:''});

  // const handleSeq = (e) => {
  //   setContact(prev => ({...prev,seq:e.target.value}));
  // }
  // const handleName = (e) => {
  //   setContact(prev => ({...prev,name:e.target.value}));
  // }
  // const handleContact = (e) => {
  //   setContact(prev => ({...prev,contact:e.target.value}));
  // }

  const handleChange = (e) => {

    const{name,value} = e.target
    setContact(prev =>({...prev,[name]:value}));
    //name -> 그냥 name이라는 글자가 키값이 되어버림 [name] 으로 바꿔줌 
  }

  const handleAdd = () => {
    setContacts(prev => [...prev,contact]);
    setContact({seq:0,name:"",contact:""});
  }
  

  return(
    <div>
      {
      contacts.map((e,i) => {
        return(
        <div key={i}>{`${e.seq} / ${e.name} / ${e.contact}`}</div>
        )})
      }
      {
        ["seq","name","contact"].map((e,i)=> {
          return (
            <div key={i}>
            <input type="text" placeholder={`input ${e}`} name={`${e}`} onChange={handleChange} value={contact[e]||""}></input>
            <br></br>
            </div>
          )
        })
      }

      <input type="text" placeholder='input seq' name="seq" onChange={handleChange} value={contact.seq}></input><br></br>
      <input type="text" placeholder='input name' name="name" onChange={handleChange} value={contact.name}></input><br></br>
      <input type="text" placeholder='input contact' name="contact" onChange={handleChange} value={contact.contact}></input><br></br>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default App6;
