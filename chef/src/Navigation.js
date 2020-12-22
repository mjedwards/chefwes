import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Menu } from 'antd';


const Nav = () => {
    const [current, setCurrent] = useState();
    const handleClick = e => {
        setCurrent({ current: e.key });
      };
      
    return (
        <div>
            <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" className='nav-bar'>
                <Menu.Item key="menu">
                    <Link to="/"> See the menu!</Link>
                </Menu.Item>
                {/* <Menu.Item key="photos">
                    <Link to="/photos">See the food!</Link>
                </Menu.Item> */}
            </Menu>
        </div>
    )
}


export default Nav;