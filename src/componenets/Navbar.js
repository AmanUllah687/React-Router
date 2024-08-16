import React from "react"
import { NavLink } from "react-router-dom"
import { useAuth } from "./auth"
 export const  Navbar = () => {
    const navlinkstyle = ({isActive}) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    const auth = useAuth()

 return (
    <nav className="primary-nav">
    <NavLink style={navlinkstyle} to='/'>Home</NavLink>
    <NavLink style={navlinkstyle} to='/About'>About</NavLink>
    <NavLink style={navlinkstyle} to='/products'>Products</NavLink>
    <NavLink style={navlinkstyle} to='/profile'>Profile</NavLink>
    {
    !auth.user && (
        <NavLink style={navlinkstyle} to='/login'>Login</NavLink>

    )}
    </nav>
 )
 }