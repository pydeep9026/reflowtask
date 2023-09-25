import { AudioOutlined } from '@ant-design/icons';
import React from 'react';
import { Input, Space } from 'antd';


const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Header = () => {
  return (<>
    <div>
    <Search
      placeholder="Search artists,projects"
      onSearch={onSearch}
      style={{
        width: 450,
        height: 10,
        marginTop: '5px',
      }}
    />   

    </div>


    </>
  )
}


export default Header