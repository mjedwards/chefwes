import React from 'react';
import { Avatar } from 'antd';
import logo from './images/cwclogo.JPG'

const Jumbo = () => {
    return (
        <div className='jumbotron'>
            <Avatar className='branding'
                src={logo}
            />
            <p className='bio'>
                Hey! How are you? My name is Clarence (Chuck) West. I am the owner and founder of Chef West Creations, a food service company operating in Pompano Beach, Florida. The name Chef West creations comes from my desctiption of my earned title Chef West. Chef West Creations began in the summer of 2020 during the pandemic that left a lot of people in tough situations. I was motivated to provide delicious homemade meals at an affordable price with delivery options that gave people some sort of stability, normality and happiness. I offer a creative and flavorful food selection and the convenience of online ordering. Chef West creates urban soul food that will hit the spot leaving you wanting more!
            </p>
        </div>
    )
}

export default Jumbo