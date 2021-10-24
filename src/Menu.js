import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <>

            <br /> <br />
            {/* <div class='container mx-auto'> */}
                <nav class="navbar navbar-light bg-secondary">
                    <NavLink exact to="/"> Home </NavLink>  
                    <NavLink exact to="/About"> About </NavLink>  
                    <NavLink exact to="/Features"> Features </NavLink>  
                    <NavLink exact to="/Services"> Services </NavLink>  
                    <NavLink exact to="/Blog"> Blog </NavLink>  
                    <NavLink exact to="/Tutorial"> Tutorial </NavLink>  
                    <NavLink exact to="/Community"> Community </NavLink>  
                    <NavLink exact to="/Contact"> Contact </NavLink>  
                    <NavLink exact to="/Register"> Register </NavLink>  
                    <NavLink exact to="/Login"> Login </NavLink>  
                </nav>

            {/* </div> */}
        </>
    );
}


export default Menu;