
import './App.css';

function App() {

  const posts = [
    { id: 1, author: 'User1', title: 'First Post', date: '2023-01-01', views: 100 },
    { id: 2, author: 'User2', title: 'Second Post', date: '2023-01-02', views: 200 },
    { id: 3, author: 'User3', title: 'Third Post', date: '2023-01-03', views: 150 }
  ];

  const result = posts.map((e,index)=>{
    return (
      <tr>
        <td>{e.id}</td>
        <td>{e.author}</td>
        <td>{e.title}</td>
        <td>{e.date}</td>
        <td>{e.views}</td>
      </tr>
    )
  })
  
  const result2 = posts.map((e,index)=>{
    return {index}
  })
  return (
    <div>
    <table border="1" align='center'>
    <tr>
      <td>글번호</td>
      <td>작성자</td>
      <td>제목</td>
      <td>작성일</td>
      <td>조회수</td>
    </tr>
    {result}
    </table>
    {result2}
    </div>
  );
}

export default App;
