import React from "react"; 
import { Nav, NavLink, NavMenu} from "./NavbarElements"; 


const Navbar = () => {
    return (

        <div className="NavBar">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">VALORANT API</a>
                </div>
                <ul class="nav navbar-nav">

                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/Agents" activeStyle>
                    Agents
                </NavLink>
                
                </ul>
            </div>
        </nav >
    </div >

    );
};

export default Navbar;