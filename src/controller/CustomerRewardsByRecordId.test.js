import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {RouterProvider, createMemoryRouter} from 'react-router-dom'
import CustomerRewardsByRecordId from './CustomerRewardsByRecordId'

test('should render 394 points', () => {

   const routes = [
    {
      path:'/byRecordId/:id/:recordid',
      element:<CustomerRewardsByRecordId />
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/byRecordId/30/5"],
    initialIndex:2
  })
  
  render(<RouterProvider router = {router} />);

  waitFor(() => screen.getByText(/394/i))
  .then(()=>{
    const elem = screen.getByText(/394/i);
    expect(elem).toBeInTheDocument();

  })  
});