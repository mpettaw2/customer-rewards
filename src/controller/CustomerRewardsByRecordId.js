import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  PointsCalculationService from "../service/PointsCalculationService";

const CustomerRewardsByRecordId = () => {
	const {id, recordid} = useParams()
	const [rec, setRec] = useState([])

	const fetchCustomerRecordByRecordId = (custId, recordId) =>{			
		fetch('http://localhost:3000/data.json', {
			headers:{
				'Content-Type':'applicaton/json',
				'Accept':'applicaton/json'
			}
		}).then((res) =>{
			return res.text()
		}).then((data) =>{
			var dt =JSON.parse(data)
			var filteredDt = dt.filter(record=>record.customerId == custId) 
			.filter(record => record.recordId == recordId)
			setRec(filteredDt)
		})
	}

	useEffect(()=>{
		fetchCustomerRecordByRecordId(id, recordid)
	}, [id, recordid])

	
	return (<PointsCalculationService rec = {rec}/>)
	
}
export default CustomerRewardsByRecordId;