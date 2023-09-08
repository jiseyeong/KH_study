
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';


const Index = () => {
  return (
    <div className="container">
      <table border="1" align="center">
        <thead>
          <tr>
            <th colSpan={2}>Index</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/input">toInput</Link>
            </td>
            <td>
              <Link to="/output">toOutput</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Input = ({ messages, setMessages }) => {


  const [message, setMessage] = useState(
    {
      seq:0,
      writer:"",
      message:""
    }
  );

  const handleChange = (e) => {
    const {name,value} = e.target;
    setMessage(prev=>({...prev,[name]:value}));
  }

  const handleWrite = () => {

    // undefined , null , 0 , NaN -> false
    // 1, 'A'... -> true

    if(!message.seq || !message.writer || !message.message){
      alert("모든 입력 값을 채워주세요.");
      return;
    }

    // some 함수 : 데이터 배열 중 하나의 요소라도 조건을 충족하면 true 를 , 단 하나도 조건을 충족하지 않는다면 false를 반환
    // every 함수 : 데이터 배열 속 모든 요소가 조건을 충족하면 true 를, 단 하나라도 조건을 충족하지 않는다면 false를 반환
    const isDuplicate = messages.some(e => e.seq == message.seq);
    if(isDuplicate){
      alert("Seq가 중복 되었습니다. 확인해주세요.");
      setMessage(prev=>({...prev,seq:0}));
      return;
    }

    setMessages(prev=>[...prev, message]);
    setMessage({seq:0,writer:"",message:""})
  }

  return (
    <div className="container">
      <table border={1} align={"center"}>
        <thead>
          <tr>
            <th>Input message</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="text" placeholder="Input seq" name="seq" onChange={handleChange} value={message.seq||""}></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Input writer" name="writer" onChange={handleChange} value={message.writer}></input>
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" placeholder="Input message" name="message" onChange={handleChange} value={message.message}></input>
            </td>
          </tr>
          <tr>
            <td style={{ display: "flex", justifyContent: "space-evenly" }}>
              <button onClick={handleWrite}>write</button>
              <Link to="/"><button>back</button></Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const Output = ({ messages,setMessages }) => {

  const handleDelete = (seq) => {
    const result = messages.filter(e => e.seq !== seq);
    setMessages(result);
  }


  return (
    <div className="container">
      <table border={1} align="center">
        <thead>
          <tr>
            <th colSpan={4}>Message List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Seq</th>
            <th>Writer</th>
            <th>Message</th>
            <th></th>
          </tr>
          {
            messages.map(e => {
              return (
                <tr key={e.seq}>
                  <td>{e.seq}</td>
                  <td>{e.writer}</td>
                  <td>{e.message}</td>
                  <td><button onClick={()=>{handleDelete(e.seq)}}>x</button></td>
                </tr>
              );
            })
          }
          <tr>
            <td colSpan={4} align="center">
              <Link to="/">
                <button>back</button>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


function App() {
  // React SPA 에서 페이지를 전환하는 방법
  // Browser 의 주소창을 활용한다는 측면에선 기존 방식과 다르지 않음.
  //  - location.href , a 도 여전히 활용 가능하나 추천되지 않는 방식 ( 서버에 불필요한 리퀘스트 전송 )
  //  - React에서는 일반적으로 react-router-dom 라이브러리를 활용하여 전환한다.
  const [messages, setMessages] = useState([
    { seq: 1, writer: "Jane", message: "React Router" },
    { seq: 2, writer: "Ryan", message: "Router Practice" },
    { seq: 3, writer: "Tom", message: "Practice Hard" },
  ]);

  return (
    <BrowserRouter basename='/react'>
      <Routes>
        <Route path="/*" element={<Index />} />
        <Route path="/input" element={<Input messages={messages} setMessages={setMessages} />} />
        <Route path="/output" element={<Output messages={messages} setMessages={setMessages}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;