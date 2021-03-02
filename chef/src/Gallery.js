import React from 'react';
import { List, Image } from 'antd';
import one from './images/gallery/one.jpeg'
import two from './images/gallery/two.jpeg'
import three from './images/gallery/three.jpeg'
import four from './images/gallery/four.JPG'
import six from './images/gallery/six.JPG'
import seven from './images/gallery/seven.JPG'
import eight from './images/gallery/eight.JPG'
import nine from './images/gallery/nine.JPG'
import twelve from './images/gallery/twelve.JPG'
import thirteen from './images/gallery/thirteen.JPG'
import fourteen from './images/gallery/fourteen.JPG'
import fifteen from './images/gallery/fifteen.JPG'


const data = [
    {
      image: one,
    },
    {
      image: two,
    },
    {
      image: three,
    },
    {
      image: four,
    },
    {
      image: six,
    },
    {
      image: seven,
    },
    {
      image: eight,
    },
    {
      image: nine,
    },
    {
      image: twelve,
    },
    {
      image: thirteen,
    },
    {
      image: fourteen,
    },
    {
      image: fifteen,
    }
  ];


const Gallery = () => {
    return (
        <List
        id='gallery'
          grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
          }}
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <Image width={150} src={item.image} />
          </List.Item>
        )}
      />
    )
}

export default Gallery;
