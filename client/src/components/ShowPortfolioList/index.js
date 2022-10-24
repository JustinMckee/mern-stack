import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
import axios from 'axios';


const ShowPortfolioList = () => {

  const [portfolio, updatePortfolio] = useState([]);

  useEffect(()=> {
    axios
      .get('http://localhost:8082/api/portfolio')
      .then( res => {
        updatePortfolio(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  },[])

  console.log(portfolio)

  return (
    <div>
      {
        portfolio.length && (
          <ul>
          {
            portfolio.map((work) => (
              <li key={work._id}>{work.title}</li>
            ))
          }
          </ul>
        )
      }
    </div>
  )
}

export default ShowPortfolioList;
