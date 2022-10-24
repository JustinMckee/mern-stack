import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './styles.scss';
// Components
import {TextField, Stack, Box, Button} from '@mui/material';

import axios from 'axios';


const CreatePortfolioItem = () => {

  const defaultState = {
    title: '',
    client: '',
    description: '',
    link: '',
  }

  const [portfolio, updatePortfolio] = useState(defaultState)

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = portfolio;

    axios
      .post('http://localhost:8082/api/portfolio', data)
      .then(res => updatePortfolio(defaultState))
      .catch(err => {
        console.error('Error with posting data to /api/portfolio')
      })

  }

  const handleChange = (e) => {
    updatePortfolio({
      ...portfolio,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="create-work">
      <h1>Add New Work</h1>
      <Box maxWidth={500} marginX="auto">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
              <TextField
                id="standard-basic"
                label="Title"
                variant="standard"
                type="text"
                name="title"
                value={portfolio.title}
                onChange={handleChange}
              />

              <TextField
                id="standard-basic"
                label="Client Name"
                variant="standard"
                type="text"
                name="client"
                value={portfolio.client}
                onChange={handleChange}
                />

              <TextField
                id="standard-basic"
                label="Link"
                variant="standard"
                type="text"
                name="link"
                value={portfolio.link}
                onChange={handleChange}
                />

              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                type="text"
                multiline
                rows={4}
                name="description"
                value={portfolio.description}
                onChange={handleChange}
                />

                <Button type="submit" variant="contained">Add Work</Button>

          </Stack>


        </form>
      </Box>
    </div>

  )
}

export default CreatePortfolioItem;
