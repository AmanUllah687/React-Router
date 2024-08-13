import React from "react"
import { NavLink } from "react-router-dom"
 export const  Navbar = () => {
    const navlinkstyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
 return (
    <nav className="primary-nav">
    <NavLink style={navlinkstyle} to='/'>Home</NavLink>
    <NavLink style={navlinkstyle} to='/About'>About</NavLink>
    <NavLink style={navlinkstyle} to='/products'>Products</NavLink>
    </nav>
 )
 }