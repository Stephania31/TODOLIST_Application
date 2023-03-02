import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import "../../styles/styles.css";

//create your first component
const Home = () => {
  const [arrTemp, setArrtemp] =useState(["Ir al super", "lavar el auto"]) ;
  const eliminarTarea = (indice) => {
	setArrtemp(
		arrTemp.filter((item, index)=> {
	return index != indice
	})
	)
  }
  

  return (
    <div className="container justify-content-center align-items-center">
      <div className="row d-flex justify-content-center">
        <h1 className="row d-flex justify-content-center"> todos </h1>
        <input placeholder="What needs to be done?" 
		onKeyDown={(e)=>{
			if( e.keyCode=="13"){
				setArrtemp([...arrTemp, e.target.value])
			}
		}}
		/>
      </div>
      <div className="row d-flex justify-content-center">
	  {arrTemp && arrTemp.length > 0 ?
				    <>{arrTemp.map((item, index)=> { 
					return<li key={index} className="d-flex justify-content-between">
						{item} - {item.done ? "Realizada" : "Por Hacer"}
						<button 
						   className="ocultar" 
						   type="button"
						   onClick={() => {
							    eliminarTarea(index)
						}}					
					>
							<i class="fas fa-trash-alt"></i>
					</button>
					</li>
					})}</>
				:
				<><h1>There are no items, add items</h1></>
				}
	


      </div>
	  <h6>{arrTemp.length} item left</h6>
    </div>
  );
};

export default Home;
