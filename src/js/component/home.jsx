import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/styles.css";

//create your first component
const Home = () => {
  const [arrTemp, setArrtemp] =useState(["Yoga class", "Lunch with Martin", "Buy dog food"]) ;
  const eliminarTarea = (indice) => {
	setArrtemp(
		arrTemp.filter((item, index)=> {
	return index != indice
	})
	)
  }
  

  return (
    <div className="container justify-content-center align-items-center mt-4 ">
    
        <h1 className="titulo row d-flex justify-content-center mb-4 text-danger text-opacity-25 display-1"> to do list </h1>
		<div className="row d-flex justify-content-center  my-4 shadow-lg p-3 mb-5">
		<input ype="text" className="form-control form-control-lg rounded-0 text-secondary" name="search"placeholder="What needs to be done?" 
		onKeyDown={(e)=>{
			if( e.keyCode=="13"){
				setArrtemp([...arrTemp, e.target.value])
			}
		}}
		/>
      
      <div className="row d-flex justify-content-center list-group-item rounded-0">
	  {arrTemp && arrTemp.length > 0 ?
				    <>{arrTemp.map((item, index)=> { 
					return<li key={index} className="d-flex justify-content-between align-items-center form-control rounded-0 text-secondary">
						{item}  {item.done ? "Realizada" : ""}
						<button 
						   className="ocultar" 
						   type="button"
						   onClick={() => {
							    eliminarTarea(index)
						}}					
					>
							<i class="fas fa-times"></i>
					</button>
					</li>
					})}</>
				:
				<><h4 className="text-secondary text-opacity-50">There are no items.<span className="text-danger text-opacity-25"> Add items</span></h4></>
				}
	


      </div>
	  			<h6 className="d-flex justify-content-between align-items-center form-control rounded-0 text-secondary"><small>{arrTemp.length} item left</small></h6>
				  </div> 
    </div>
  );
};

export default Home;
