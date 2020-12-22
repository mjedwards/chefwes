import React from 'react';
import Jumbo from '../Jumbotron'
import { Row, Col, List, Divider, Popover, Image } from 'antd';
import image1 from '../images/Black and-Yellow-Border 3.png'
import image2 from '../images/Black and Yellow Border 2.png'
import tilapia from '../images/tilapia.jpg'
import baked from '../images/baked.jpg'
import honeygarlic from '../images/honeygarlic.jpeg'


const entrees = [
    {
        title: 'Pork chops in Applewood sauce ',
        description: 'Perfectly cooked porkchops tossed with our homemade applewood sauce',
        price: '$13.00',
        foodImage: <img src='https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg' alt='food'></img>
      },
      {
        title: 'Turkey Balls',
        description: 'Turkey balls made to perfection',
        price: '$13.00',
        foodImage: <img src='https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg' alt='food'></img>
      },
      {
        title: 'Tilapia Fish Fried',
        description: 'Tilapia fried to perfection with our best seasoning',
        price: '$11.00',
        foodImage: <Image width={250} src={tilapia}/>
      },
      {
        title: 'BBQ Wings',
        description: 'Wings tossed with our special bbq sauce',
        price: '$15.00',
        foodImage: <img src='https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg' alt='food'></img>
      },
      {
        title: 'Honey Garlic Wings',
        description: 'Wings tossed with our homemade honey garlic sauce',
        price: '$15.00',
        foodImage: <Image width={250} src={honeygarlic}/>
      },
      {
        title: 'Baked Wings',
        description: 'Flavorful wings baked with seasoning and herbs',
        price: '$15.00',
        foodImage: <Image width={250} src={baked}/>
      },
      {
        title: 'Lemon Zest Wings',
        description: 'Wings tossed with fresh lemon zest and herbs',
        price: '$15.00',
        foodImage: <img src='https://ca-times.brightspotcdn.com/dims4/default/444499c/2147483647/strip/true/crop/3000x2000+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7d%2F24%2F0d9fed4c40c285ffca41843ae569%2Fdecadefood.jpg' alt='food'></img>
      },
  ];




let menuClass = [
    'menu-text', 'menu-setions'
  ]
  menuClass = menuClass.join(' ')

const FoodMenu = () => {
    return (
        <div className="main-menu">
            <Jumbo />
            <Row style={{ width: '100vw'}} gutter={[32, 32]} className='menu-container'>
                <Col span={12} style={{height: '100%'}}>
                    <Row gutter={[8, 8]} className='menu-setions'>
                        <Col span={24} style={{height: '100%'}}><h1><div className='menu-header'>ME</div><div className='menu-header1'>NU</div></h1></Col>
                    </Row>
                    <Row gutter={[8, 8]} className='menu-setions'>
                        <Col span={24} style={{height: '100%'}}>
                            <Divider orientation="left" className='menu-subheader'>WEST HOT LIST</Divider>
                            <Divider orientation="left" style={{background: "#FAFAFA", height: "30px"}}><p className='hours'>HOURS: 2:30pm - 11pm, 7 days per week</p></Divider>

                            <List
                            className='menu-list'
                            size="small"
                            itemLayout="horizontal"
                            dataSource={entrees}
                            renderItem={item => <Popover content={item.foodImage} title={item.title}>
                                    <List.Item style={{borderBottom: 'none', color:'white'}}>
                                    <List.Item.Meta
                                        title={<h3>{item.title}</h3>}
                                        description={<p className="item-description">{item.description}</p>}
                                        style={{color:'white'}}
                                    />
                                {item.price}
                            </List.Item></Popover>}
                            />
                            <br></br>
                            <br></br>
                            <br></br>
                            <p style={{color:'white'}}>All with Fries, Special Aioli Sauce, Sweet Roll, and Soda.</p>
                        </Col>
                    </Row>
                </Col>
                <Col span={12} style={{height: '100%'}}>
                    <Row gutter={[8, 8]} className='menu-setions'>
                        <Col span={24} style={{height: '100%'}}>
                            <Divider orientation="left" className='menu-subheader'>COME and SEE!</Divider>
                            <Image src={image2}/>
                        </Col>
                    </Row>
                    <Row gutter={[8, 8]} className='menu-setions'>
                        <Col span={24} style={{height: '100%'}}>
                            <Divider orientation="left" className='menu-subheader'>FLAVORS</Divider>
                            <Image src={image1}/>
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
