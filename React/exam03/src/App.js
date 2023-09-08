import { Container } from 'reactstrap';
import './App.css';

import TopNavi from './Components/TopNavi/TopNavi';
import Main from './pages/Main/Mainpage';

function App() {
  return (
    // fragment <></>
    <> 
    <TopNavi></TopNavi>
    <Container style={{marginTop:"58px",maxWidth:"1200px"}}>
      <Main></Main>
    </Container>
    </>
  );
}

export default App;
