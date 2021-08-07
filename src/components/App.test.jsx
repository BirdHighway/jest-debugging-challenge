import React from 'react';
import App from './App';
// @testing-library/jest-dom pulls in the set of methods attached to expect()
// here we are using expect(...).toBeVisible();
// this uses jest-dom's simulation of the rendering to determine if it would be visible to users
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import Data from './Data';

jest.mock('axios');

// note that this is now an async function
// in order to do async with babel you have to install @babel/plugin-transform-runtime
// and add it as a "plugin" to your .babelrc file
test('should show to do item', async () => {
  axios.get.mockResolvedValue({
    data: {
      "userId": 1,
      "id": 1,
      "title": "Stephen",
      "completed": false
    }
  });

  render(<App />);
  expect( await screen.findByRole('heading', { name: /stephen/i })).toBeVisible();
});

test('same test but broken up more', async () => {
  axios.get.mockResolvedValue({
    data: {
      "userId": 1,
      "id": 1,
      "title": "Stephen",
      "completed": false
    }
  });

  render(<App />);
  // expect - any errors that occur within this call of expect will be handled
  // without the expect wrapping the findByRole our console would be uglier when fail
  expect(
    // await because the .findByRole method is async
    // once it does return a value, that value is passed into expect()
    await screen.findByRole('heading', { name: /stephen/i })
    // expect() returns an object we can call jest-dom methods on (imported above)
    // here we just expect that it will be visible
    // if it doesn't exist or isn't visible, the test will fail
  ).toBeVisible();
});
