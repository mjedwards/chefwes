import React from 'react';
import Jumbo from '../Jumbotron'
import { Row, Col, List, Divider, Image, Carousel } from 'antd';
import { InstagramOutlined, FacebookOutlined } from '@ant-design/icons';
import Gallery from '../Gallery'
import tilapia from '../images/seasonedtilapia.JPG'
import baked from '../images/bakedwings.jpg'
import honeygarlic from '../images/honeygarlic.jpg'
import turkey from '../images/turkeyballs.JPG'
import porkchops from '../images/porkchops.JPG'
import bbqwings from '../images/bbq.JPG'
import zest from '../images/lemonzest.JPG'
import boneless from '../images/bonelesschicken.JPG'
import shrimp from '../images/shrimp.JPG'
import one from '../images/carousel/one.JPG'
import two from '../images/carousel/two.JPG'
import three from '../images/carousel/three.JPG'
import four from '../images/carousel/four.JPG'
import five from '../images/carousel/five.JPG'
import six from '../images/carousel/six.JPG'
import seven from '../images/carousel/seven.JPG'
import eight from '../images/carousel/eight.JPG'
import nine from '../images/carousel/nine.JPG'
import ten from '../images/carousel/ten.JPG'
import eleven from '../images/carousel/eleven.JPG'
import yelp from '../images/yelp.svg'


const entrees = [
    {
        title: 'Pork chops in Applewood sauce ',
        description: 'Perfectly cooked porkchops tossed with our homemade applewood sauce',
        price: '$13.00',
        foodImage: <Image className="new-size"  src={porkchops}/>
      },
      {
        title: 'Turkey Infusion (regular or sweet)',
        description: 'Ground turkey prepared with our special seasoning and made to perfection',
        price: '$13.00',
        foodImage: <Image className="new-size"  src={turkey}/>
      },
      {
        title: 'Tilapia Fish Fried',
        description: 'Tilapia fried to perfection with our best seasoning',
        price: '$11.00',
        foodImage: <Image className="new-size"  src={tilapia}/>
      },
      {
        title: 'BBQ Wings',
        description: 'Wings tossed with our special bbq sauce',
        price: '$15.00',
        foodImage: <Image className="new-size"  src={bbqwings}/>
      },
      {
        title: 'Honey Garlic Wings',
        description: 'Wings tossed with our homemade honey garlic sauce',
        price: '$15.00',
        foodImage: <Image className="new-size"  src={honeygarlic}/>
      },
      {
        title: 'Baked Wings',
        description: 'Flavorful wings baked with seasoning and herbs',
        price: '$15.00',
        foodImage: <Image className="new-size"  src={baked}/>
      },
      {
        title: 'Lemon Zest Wings',
        description: 'Wings tossed with fresh lemon zest and herbs',
        price: '$15.00',
        foodImage: <Image className="new-size"  src={zest}/>
      },
      {
        title: 'Fried Boneless Chicken',
        description: 'Chicken fried and seasoned to perfection.',
        price: '$15.00',
        foodImage: <Image className="new-size"  src={boneless}/>
      },
      {
        title: 'Fried Shrimp',
        description: 'Shrimp fried and seasoned to perfection.',
        price: '$15.00',
        foodImage: <Image className="new-size"  src={shrimp}/>
      }
  ];




let menuClass = [
    'menu-text', 'menu-setions'
  ]
  menuClass = menuClass.join(' ')

const FoodMenu = () => {
    return (
        <div className="main-menu" id='menu'>
            <Jumbo />
            <Row style={{ width: '100vw'}} gutter={[32, 32]} className='menu-container'>
                <Col span={12} style={{height: '100%', maxWidth:'100%'}}>
                    <Row gutter={[8, 8]} className='menu-setions' id='menu-title'>
                        <Col span={24} style={{height: '100%'}}><h1><div className='menu-header'>MENU</div></h1></Col>
                    </Row>
                    <Row gutter={[8, 8]} className='menu-setions'>
                        <Col span={24} style={{height: '100%'}}>
                            <Divider orientation="left" className='menu-subheader'>WEST HOT LIST</Divider>
                            <Divider orientation="left" style={{background: "#FAFAFA", height: "30px"}}><p className='hours'>HOURS: 2:30pm - 11pm, 7 days per week</p></Divider>
                            <p style={{color:'white', fontSize: '2rem', fontWeight: 'bolder'}}>All with Fries, Special Aioli Sauce, Sweet Roll, and Soda.</p>
                            <br></br>
                            <br></br>
                            <br></br>
                           
                            <List
                            className='menu-list'
                            size="small"
                            itemLayout="horizontal"
                            dataSource={entrees}
                            renderItem={item => 
                                    <List.Item style={{borderBottom: 'none', color:'white', marginBottom:'100px'}}>
                                    <List.Item.Meta    
                                        style={{color:'white'}}
                                    />
                                {item.foodImage}
                                {<h3>{item.title}</h3>}
                                {<p className="item-description">{item.description}</p>}
                                {item.price}
                            </List.Item>}
                            />
                            <br></br>
                            <br></br>
                            <br></br>
                            <h2 className='customer'>See What Our Customers Are Sharing!</h2>
                            <Gallery />
                           
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} className='menu-setions'>
                        <Col span={24} style={{height: '100%'}}>
                            <Divider orientation="left" className='menu-subheader'>COME and SEE!</Divider>
                            <Carousel autoplay>
                                <div>
                                    <Image width={500} src={one}/>
                                </div>
                                <div>
                                    <Image width={500} src={two}/>
                                </div>
                                <div>
                                    <Image width={500} src={three}/>
                                </div>
                                <div>
                                    <Image width={500} src={four}/>
                                </div>
                                <div>
                                    <Image width={500} src={five}/>
                                </div>
                                <div>
                                    <Image width={500} src={six}/>
                                </div>
                                <div>
                                    <Image width={500} src={seven}/>
                                </div>
                                <div>
                                    <Image width={500} src={eight}/>
                                </div>
                                <div>
                                    <Image width={500} src={nine}/>
                                </div>
                                <div>
                                    <Image width={500} src={ten}/>
                                </div>
                                <div>
                                    <Image width={500} src={eleven}/>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} className='menu-setions'>
                        <Col span={24} style={{height: '100%'}}>
                            <Divider orientation="left" className='menu-subheader'>FOLLOW US!</Divider>
                            <a href='https://www.instagram.com/chef.west.creations/'><InstagramOutlined className='social'/></a>
                            <a href='https://www.facebook.com/ChefWestCreations/'><FacebookOutlined className='social'/></a>
                            <a href='https://www.yelp.com/biz/chef-west-creations-pompano-beach'><img src={yelp} className='social yelp' alt="social media icon"/></a>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} className={menuClass}>
                        <Col span={24} className='store-info'><p>To Place A Pre-Order Call: <br/><br/> <a href='tel:954-203-1996'>954-203-1996</a></p>
                            <br></br>
                            <br></br>
                            <br></br>
                        <p>Please Pre-pay @cashapp: <br/><br/>$Chefwestcreations</p></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default FoodMenu;
