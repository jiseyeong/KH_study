
import { useState } from "react";
export default function Hello() {

    // let name ="Mike";
    const [name, setName] = useState('Mike');

    function changeName() {
        setName(name === "Mike" ? "Jane" : "Mike");
        // console.log(name);
        // document.getElementById("name").innerText = name;
    }

    return (
        <div>
            <h1>state</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>Change</button>
        </div>
    );


    // function showName() {
    //     console.log('Mike');
    // }
    // function showAge(age) {
    //     console.log(age);
    // }
    // function showText(txt){
    //     console.log(txt)
    // }

    // return (
    // <div>
    //     <h1>Hello</h1>
    //     <button onClick={showName}>Show name</button>
    //     <button onClick={()=>{
    //             showAge(30)
    //         }

    //     }>Show age</button>
    //     <input type="text" onChange={(e)=>{
    //        const txt = e.target.value;
    //        showText(txt);
    //     }}/>
    //  </div>
    // );
}