import React from 'react'
import { useDispatch } from "react-redux";
import { clearToken } from "../redux/authSlice";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className='Navbar'>
      <Link  to="/" className='logo'><span style={{display:"flex" ,fontSize:"45px", fontWeight:"bold"}}><p style={{color:"white"}}>sarafa</p><p style={{color:"gold"}}>bazar</p></span></Link>
      <Link to="/search-products" style={{display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none"}}><button className='button-search'>Search Products</button></Link>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><button className='logout-button' onClick={() => dispatch(clearToken())}>Logout</button></div>

    </div>
  )
}

export default Navbar