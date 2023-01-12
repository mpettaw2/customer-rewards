import React from 'react';

const PointsCalculationService =({rec}) => {
	
	const calculatePoints = (records) =>{
		var total = 0;
		var points = 0;

		if(records.length == 0){
			return 0;
		}

		records.forEach((record)=>{
			total+=record.totalAmount;
		})

		if(total > 100){
			points = (total-100)*2 + 50
		}else if(total >= 50 && total <= 100){
			points = 50
		}else{
			points = 0
		}		

		
		return points

	}

	
	return (
			<div className ="PointsCalculationService">
			<div> total rewards: <span className="rewards">{calculatePoints(rec)} </span></div>
			</div>
		)
	
}
export default PointsCalculationService;