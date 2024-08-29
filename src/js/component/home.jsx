import React, { useEffect } from "react";
import react, {useState} from "react";
import SecondsCounter from "./secondsCounter";


const Home = () => {

	const [timer, setTimer] = useState(0)

	useEffect (() => {

		setTimeout(()=> {
			setTimer(timer +1)
		},1000)

	},[timer])

	return (
		
		<div className= 'text-center'>

			<div className= "container">
				<SecondsCounter number={<span className= 'fa fa-clock'></span>}/>
				<SecondsCounter number={Math.floor  (timer/10)%100000}/>
				<SecondsCounter number={Math.floor (timer/10)%10000}/>
				<SecondsCounter number={Math.floor (timer/10)%1000}/>
				<SecondsCounter number={Math.floor (timer/10)%100}/>
				<SecondsCounter number={Math.floor (timer/10)%10}/>
				<SecondsCounter number={Math.floor (timer%10)}/>
			</div>

		</div>
			
	);
};

export default Home;
