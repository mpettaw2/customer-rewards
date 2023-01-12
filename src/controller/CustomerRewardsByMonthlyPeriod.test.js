import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {RouterProvider, createMemoryRouter} from 'react-router-dom'
import CustomerRewardsByMonthlyPeriod from './CustomerRewardsByMonthlyPeriod'

test('should render 570 points', () => {
  const routes = [
    {
      path:'/byPeriod/:id/:period',
      element:<CustomerRewardsByMonthlyPeriod />
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/byPeriod/2/3"],
    initialIndex:3
  })
  
  render(<RouterProvider router = {router} />);
  waitFor(() => screen.getByText(/570/i))
  .then(()=>{
    const elem = screen.getByText(/570/i);
    expect(elem).toBeInTheDocument();

  }) 
});