import { render, screen } from '@testing-library/react';
import PointsCalculationService from './PointsCalculationService';


test('should return 50 points for $100', () => {
  const records =[
        {
      "recordId": 2,
      "customerId":2,
      "date": "12/01/2021",
      "totalAmount": 50
    },
    {
      "recordId": 3,
      "customerId":2,
      "date": "10/01/2021",
      "totalAmount": 50
    }
  ]
  render(<PointsCalculationService rec={records} />);
  const elem = screen.getByText(/50/i);
  expect(elem).toBeInTheDocument();
});

test('should return 0 points for $49', () => {
  const records =[
   
    {
      "recordId": 3,
      "customerId":2,
      "date": "10/01/2021",
      "totalAmount": 49
    }
  ]
  render(<PointsCalculationService rec={records} />);
  const elem = screen.getByText(/0/i);
  expect(elem).toBeInTheDocument();
});


test('should return 90 points for $120', () => {  
  const records =[
        {
      "recordId": 2,
      "customerId":2,
      "date": "12/01/2021",
      "totalAmount": 60
    },
    {
      "recordId": 3,
      "customerId":2,
      "date": "10/01/2021",
      "totalAmount": 60
    }
  ]
  render(<PointsCalculationService rec={records} />);
  const elem = screen.getByText(/90/i);
  expect(elem).toBeInTheDocument();
});