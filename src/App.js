
import './App.css';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home';
import EditPage from './Pages/EditPage';

function App() {
  return (
    <div className="container">
     <h1>MemeGenerator</h1>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/edit' element={<EditPage />}></Route>
     </Routes>
     
    </div>
  );
}

export default App;
