import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {RouterProvider, createMemoryRouter} from 'react-router-dom'
import AllCustomerRewards from './AllCustomerRewards'

test('should render 690 points', () => {
  const routes = [
    {
      path:'/:id',
      element:<AllCustomerRewards />
    }
  ]

  const router = createMemoryRouter(routes, {
    initialEntries: ["/", "/2"],
    initialIndex:1
  })
  render(    
    <RouterProvider router = {router} />
    
    );
  waitFor(() => screen.getByText(/690/i))
  .then(()=>{
    const elem = screen.getByText(/690/i);
    expect(elem).toBeInTheDocument();

  })
  
});