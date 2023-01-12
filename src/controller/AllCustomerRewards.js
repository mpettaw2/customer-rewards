import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import  PointsCalculationService from "../service/PointsCalculationService";

const AllCustomerRewards = () => {
	const {id} = useParams()
	const [records, setRecords] = useState([])

	const fetchAllCustomerRecords = (custId) =>{
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
			setRecords(filteredDt)
		})
	}

	useEffect(()=>{
		fetchAllCustomerRecords(id)
	}, [id])

	return (<PointsCalculationService rec = {records}/>)
	
}
export default AllCustomerRewards;