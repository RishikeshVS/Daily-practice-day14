import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button} from 'antd';
import { Carousel } from 'antd';
import Antd2 from './Antd2';
import Antd3 from './Antd3'
function Antd1()
{
  return (
    <div>
        <div className="searchdiv">
            <div className="search"> 
                <input type="text" placeholder="Search" />
            </div>
        <Button icon={<SearchOutlined />} className="btn" href="https://www.google.com" target="_blank" />
        </div>
        <Antd2/>
          <h2 style={{textAlign:"center"}}> Form </h2>
        <Antd3/>

    </div>
  
  )
}
export default Antd1;