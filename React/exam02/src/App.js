import './App.css';
import { MyButton,MyDiv } from './components/styled';


function App(){
  // const name ="Tom";
  // const phone ="01012341234";
  // console.log(`My name is ${name} My phone number is ${phone}`);
  // const arr2 = [...arr1,"Grape"];  // 전개(spread) 연산자
  // console.log(arr2);

  // const obj1 = {name:"Tome",phone:"01012341234"}; //JSON
  // const obj2 = {...obj1,address:"Korea",name:"Ryan"};
  // console.log(obj2);
  
  // // Destruct
  // const [a,b,c] = arr1; //배열에 있는 요소를 변수 a,b,c에 각각 담음 
  // console.log(`${a} ${b} ${c}`);

  // const {name,phone} = obj1; //객체에 있는 요소를 왼쪽 변수에 담음 (키값을 알고 있어야 함)
  // console.log(`${name} ${phone}`);
  

  const arr1 = [
    {seq:1,writer:"teste1",title:"ABC1"},
    {seq:2,writer:"teste2",title:"ABC2"},
    {seq:3,writer:"teste3",title:"ABC3"},

  ];

  // map 함수 - forEach
  // map 함수는 파라미터로 콜백함수를 담는다.
  const result = arr1.map((e, index)=>{ //arrow function 
    return <div>{`${e.seq} : ${e.writer} : ${e.title}`}</div>;// ReactElement
  });
  console.log(result);




  const className = "container";
  return (
    <div className={className}> 
      <MyButton>임의의 버튼</MyButton>
      <MyDiv>임의의 DIV</MyDiv>
      {result}
    </div>
    // <div className="App">
    //   {/* <div className='container'>
    //     <ULBox></ULBox>
    //     <TableBox></TableBox>
    //     <ImageBox></ImageBox>
    //   </div>
    // </div> */}
    //``은 {``}안에 넣고 사용해야 함
  );
}

export default App;
