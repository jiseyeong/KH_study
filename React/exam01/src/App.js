import "./App.css";
import image from './assets/image.png';


// Functional Component 제작
// Component 함수명은 첫글자가 대문자여야 함 
//function ULBox() {
//   return (
//     <div className="ulBox">
//      <ul>
//       <li>Angular</li>  
//       <li>React</li>
//       <li>Vue</li>
//     </ul>
//   </div>
//   );
// }

const ULBox = () => {
    return(
        <div className="ulBox">
         <ul>
          <li>Angular</li>  
          <li>React</li>
          <li>Vue</li>
        </ul>
      </div>
    )
}


function TableBox(){
  return(
    <div className="tableBox">
        <table>
          <thead>
            <tr>
              <th>Seq</th>
              <th>Writer</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Tom</td>
              <td>Hello React</td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Jack</td>
              <td>React Practice</td>
            </tr>
            </tbody>
        </table>
        </div>
  )
}

function ImageBox() {
  return (
    <div className="imageBox">
    <img src={image}></img>
    </div>
  )
}

function App() {
  return (
    <div className="container">
        <ULBox></ULBox>
        <TableBox></TableBox>
        <ImageBox></ImageBox>
    </div>
  );
}
export default App;
