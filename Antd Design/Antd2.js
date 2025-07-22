import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: "500px",
  width:"800px",  
  textAlign: 'center',
};
const Antd2 = () => (
    <div className='car'>
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle} className='bgimg1'></h3>
    </div>
    <div>
      <h3 style={contentStyle} className='bgimg2'></h3>
    </div>
    <div>
      <h3 style={contentStyle} className='bgimg3'></h3>
    </div>
    <div>
      <h3 style={contentStyle} className='bgimg4'></h3>
    </div>
  </Carousel>
  </div>
);
export default Antd2;