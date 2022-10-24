import { Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './App.scss';

import ShowPortfolioList from './components/ShowPortfolioList';
import CreatePortfolioItem from './components/CreatePortfolioItem';
import UpdatePortfolioInfo from './components/UpdatePortfolioInfo';
import ShowPortfolioDetails from './components/ShowPortfolioDetails';


function App() {
  return (


      <div className="App">
        <h1>App</h1>
        <Routes>
          <Route exact path='/' element={<ShowPortfolioList/>} />
          <Route path='/create-portfolio-item' element={<CreatePortfolioItem/>} />
          <Route path='/edit-portfolio/:id' element={<UpdatePortfolioInfo/>} />
          <Route path='/show-portfolio/:id' element={<ShowPortfolioDetails/>} />
        </Routes>
      </div>

  );
}

export default App;
