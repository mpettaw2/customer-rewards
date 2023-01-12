# Customer Rewards App

## To Run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
b.io/create-react-app/docs/running-tests) for more information.

## API

### /:id
Returns total reward points for a specified customer id. This totals points for all records stored for the customer.

### /byRecordId/:id/:recordid
Returns total reward points for a specific customerid and recordid

### /byPeriod/:id/:period
Returns total reward points for a specific customer id and date range. "period" indicates the number of the number of months to be used for the date range. 

ex: "byPeriod/2/3" => for the customer with id "2" calculate total reward points for records between the date 3 months before today and today


