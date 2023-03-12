import React from "react";
import { Link } from "react-router-dom";
import {useEffect, useState} from 'react'
import axios from 'axios'

const Cart = () => {
const [myData,setMyData]=useState([]);
useEffect(()=>{
axios.get( "http://localhost:8000/books").then((res)=>setMyData(res.data));
}, []);
  return(
<div className="grid grid-cols-5 gap-2">
	{myData.map((data) => {
		const {title,author,pages,imageLink}=data;
		return(
		<div class="max-w-7xl mx-auto m-4">
		<div className="bg-white shadow-md rounded-lg max-w-xs dark:bg-gray-900 dark:border-gray-800">
			<img className="rounded-t-lg p-4 h-72 w-64" src={imageLink} alt="product image"/>
			<div className="px-5 pb-5">
				<Link to='bookdetails'><h3 className="text-blue-800 font-semibold text-xl tracking-tight dark:text-white">{title}</h3></Link>
			    <Link className="text-blue-800 font-medium text-base tracking-tight dark:text-white"> Author: {author}</Link>
			    <h3 className="text-xl font-semibold text-blue-800 dark:text-white mb-5">Price:$ {pages}</h3> 
			    <Link className="text-white bg-[#FF8345] hover:bg-[#FF8335]  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Add
							to cart</Link>	
			</div>
		</div>
	</div>)}
	)}
</div>
	)}

export default Cart;
