import React from 'react';
import App from './App';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Data from './Data';

jest.mock('axios');

// it('should display one "Hello" heading', () => {
//   axios.get.mockResolvedValue({
//     data: {
//       "userId": 1,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     }
//   });
//   render(<App />);
//   screen.getByRole('heading', {name: 'Hello'});
// });

test('should show to do item', () => {
  axios.get.mockResolvedValue({
    data: {
      "userId": 1,
      "id": 1,
      "title": "Stephen",
      "completed": false
    }
  });

  axios.get().then((response) => {
    console.log('IN TEST', response.data);
  });

  render(<App />);
  screen.findByRole('heading', {name: /ham/i})
    .then((data) => {
      console.log('success', data);
    })
    .catch((err) => {
      console.log('error', err);
    })
});
