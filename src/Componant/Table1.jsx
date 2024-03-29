import React from 'react';
// import { Link } from 'react-router-dom'

function RenderingArrayOfObjects(){
const data=[
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
	{"Name":"John","Age":"24","Course":"MERN","Batch":"Octobor","Change":"edit"},
]
const tableRows=data.map(
	(element,index)=>{
		return(
			<tr key={index}>
			<td>{element.Name}</td>
			<td>{element.Age}</td>
			<td>{element.Course}</td>
			<td>{element.Batch}</td>
			<td><button>{element.Change}</button></td>
			</tr>
		)
	}
)
return(
	<div id='tableHead'>
		<table >
			<thead>
			<tr>	
				<th> Name</th>
				<th>Age</th>
				<th>Course</th>
				<th>Batch</th>
				<th>Change</th>
			</tr>
			</thead>
			<tbody>
			{tableRows}
			</tbody>
		</table>	
			
	</div>
)
}
function Table1() {
return (
	<div>
		<RenderingArrayOfObjects />
	</div>
);
}

export default Table1;


// import axios from 'axios'
// import React, {useState, useEffect } from 'react'
// import {useNavigate } from 'react-router-dom'
// // import { Link } from 'react-router-dom'

// const Table1 = () => {
//   const[data,setData]=useState([])
//   function getData(){
//     axios.get('https://63d03474e52f587829ae07a7.mockapi.io/react-use')
//     .then((res)=>{
//       console.log(res.data);
//       setData(res.data)
//     })
//   }
//   useEffect(()=>{
//     getData();
//   },[])

//   function handleDelete(id){
// 	axios.delete(`https://63d03474e52f587829ae07a7.mockapi.io/react-use/${id}`)
// 	.then(()=>{
// 	  getData();
// 	})
//   }
//   const navigate=useNavigate();
//   const setToLocalStorage=(id,name,age,course,batch)=>{
// 	localStorage.setItem("id",id)
// 	localStorage.setItem("name",name)
// 	localStorage.setItem("age",age)
// 	localStorage.setItem("course",course)
// 	localStorage.setItem("batch",batch)
// 	navigate('/Edit')
//   }
//   return (
// 	<div id='tableHead'>
// 		      <table className="table">
//   <thead>
//   <tr>	
// 	<th>ID</th>
// 	<th> Name</th>
// 	<th>Age</th>
// 	<th>Course</th>
// 	<th>Batch</th>
// 	<th>Change</th>
// 	<th>Delete</th>
// 	</tr>
//   </thead>
//   { data.map((eachData)=>{
//     return(
//       <tbody>
//       <tr>
//         <th>{eachData.id}</th>
//         <td>{eachData.name}</td>
//         <td>{eachData.age}</td>
//         <td>{eachData.course}</td>
//         <td>{eachData.batch}</td>
//         {/* <Link to="/Edit"> */}
//         <td><button  onClick={()=> setToLocalStorage(eachData.id,eachData.name,eachData.age,eachData.course,eachData.batch)}>Edit</button></td>
//         {/* </Link> */}
//         <td><button onClick={()=>handleDelete(eachData.id)}>Delete</button></td>
//       </tr>
   
//     </tbody>
//     )
//   })
// }
// </table>
// 	</div>
//   )
// }

// export default Table1