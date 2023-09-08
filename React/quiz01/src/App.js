import './App.css';
import Header from './pages/Home/Header/Myheader';
import Navi from './pages/Home/Navi/MyNavi';
import Contents from './pages/Home/Contents/MyContents';
import Footer from './pages/Home/Footer/MyFooter';

function App() {
  return (
    <div className='App'>
      <div className='container'>
      <Header/>
      <Navi></Navi>
      <Contents></Contents>
      <Footer></Footer>
    </div>
    </div>
  );
}

export default App;
