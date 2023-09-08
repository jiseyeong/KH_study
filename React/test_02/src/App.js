import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {

  const[movies,setMovies] = useState([
    { id: 1, title: 'Movie 1', genre: 'Drama', relese_date: '2022-01-01' },
    { id: 2, title: 'Movie 2', genre: 'Action', relese_date: '2022-02-01' },
    { id: 3, title: 'Movie 3', genre: 'Comedy', relese_date: '2022-03-01' }
  
  ])
  const [newMovie,setNewMovie] = useState(
    {id:'',title:'',genre:'',relese_date:''}
  )
  
  function handleChange(e) {
    const{name,value} = e.target;
    setNewMovie({...newMovie,[name]:value});
  }
  
  function handleAdd() {
  
    if(!newMovie.id || !newMovie.title || !newMovie.genre || !newMovie.relese_date) {
      alert("모든 항목을 채워주세요")
      return
    }
  
    const isDuplicate = movies.some(movie => String(movie.id) === newMovie.id);
  
    if(isDuplicate) {
      alert("이미 존재하는 아이디입니다.")
      setNewMovie({...newMovie,'id':''});
    }
  
    setMovies([...movies,newMovie])
    setNewMovie({
      id:0,
      title:"",
      genre:"",
      relese_date:""
    })
  }
  
  function handleDelete (id) {
    const updateMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updateMovies)
  }

  return (
    <Router>
      <div className='container'>
        <nav>
          <ul>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              <Link to="/create">Add New Movie</Link>
            </li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<MovieList movies={movies} handleDelete={handleDelete}></MovieList>}></Route>
        <Route path="/create" element={<CreateMovie handleChange={handleChange} handleAdd={handleAdd} newMovie={newMovie}></CreateMovie>}></Route>
      </Routes>
      </div>
    </Router>
  );
};

function CreateMovie (props) {
  const{handleChange,handleAdd,newMovie} = props;
  return (
    <div>
      <input type="text" name="id" value={newMovie.id} onChange={handleChange} placeholder='input id'></input><br/>
      <input type="text" name="title" value={newMovie.title} onChange={handleChange} placeholder='input title'></input><br/>
      <input type="text" name="genre" value={newMovie.genre} onChange={handleChange} placeholder='input genre'></input><br/>
      <input text="text" name="relese_date" value={newMovie.relese_date} onChange={handleChange} placeholder='input release_date'></input><br/>
      <button onClick={handleAdd}>Add Movie</button>
    </div>
  )
}

function MovieList(props) {
  const{movies,handleDelete} = props;
  
  return(
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Genre</th>
        <th>Relese_Date</th>
        <th>Action</th>
      </tr>
      {
        movies.map((movie)=>(
          <tr>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.relese_date}</td>
            <td><button onClick={()=>handleDelete(movie.id)}>delete</button></td>
          </tr>
        ))}
       
    </table>
  )
}

export default App;