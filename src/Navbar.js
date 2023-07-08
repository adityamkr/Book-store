import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from "./navbarelement"

import {FaShoppingCart} from "react-icons/fa"


const Navbar = () => {
return (
	<>
	<Nav style={{fontWeight:'bolder'}}>
		<Bars />
		<a href="/home" className="logo" style={{marginTop:37,position:'absolute',left:100,fontWeight:'bolder'}}> Priya Books </a>

		<NavMenu style={{position: 'relative',left: 300}}>
		<NavLink to='/home' activeStyle style={{marginLeft:300,marginRight:20}}>
			Home
		</NavLink>
		<NavLink to='/register' activeStyle style={{marginRight:20}}>
			signin
		</NavLink>
		<NavLink to='/login' activeStyle style={{marginRight:20}}>
			login
		</NavLink>
		<NavLink to='/addbooks' activeStyle style={{marginRight:20}}>
			Add book
		</NavLink>

        <NavLink to="/cart"  activeStyle style={{fontSize:27,position: 'relative',left: 100}}>
		<FaShoppingCart/>
		</NavLink>

		
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/register'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
