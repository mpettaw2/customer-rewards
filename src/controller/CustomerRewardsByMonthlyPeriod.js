import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PointsCalculationService from "../service/PointsCalculationService";

const CustomerRewardsByMonthlyPeriod = () => {
	const {id, period} = useParams()
	const [recs, setRecs] = useState([])

	const calculateStartDate = (period) =>{		
		var startDate = new Date()
		var offSet = (24*60*60*1000)*(30*period)
		var startDateTime = (offSet - startDate.getTime())
		
		startDate.setTime(startDateTime)		
		return startDate
	}

	const fetchCustomerRecordsByMonthlyPeriod = (custId, period) =>{
		var startDate = calculateStartDate(period)

 		fetch('http://localhost:3000/data.json', {
		      headers:{
		        'Content-Type':'application/json',
		        'Accept':'application/json'
		      }
    	}).then((res) =>{
			return res.text()
		}).then((data) =>{
			var dt =JSON.parse(data)
			var filteredDt = dt.filter(record=>record.customerId == custId) 
			.filter(record =>{
				var recordDate = new Date(record.date)				
				return recordDate.getTime()>=startDate.getTime() &&
					recordDate.getTime()<=Date.now()
		})	

			setRecs(filteredDt)
		})
	}

	useEffect(()=>{			
		fetchCustomerRecordsByMonthlyPeriod(id, period)		
	}, [id,period])

	
	return (<PointsCalculationService rec = {recs}/>)
	
}
export default CustomerRewardsByMonthlyPeriod;