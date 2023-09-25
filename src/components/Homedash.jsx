import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Switch } from 'antd';
import logo from '../images/logo.png'
import Header from './Header';
import stats from '../images/stats.png'
import { Table } from 'antd';
import verified from '../images/verified.png'
import pending from '../images/pending.png'
import ratings from '../images/ratings.png'
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';
import artistssell from '../images/artistssell.png'



function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem('Navigation One', 'sub1', <MailOutlined />, [
      getItem(' Dashboard', '1'),
      getItem('Artist', '2'),
      getItem('Projects', '3'),
      getItem('Sales', '4'),
    ]),
    getItem('Navigation Three', 'sub4', <SettingOutlined />, [
      getItem('Settings', '9'),
      getItem('Logout', '10'),
    ]),
  ];

  const columns = [
    {
      title: 'Artist',
      dataIndex: 'artist',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
    {
      title: 'ratings',
      dataIndex: 'ratings',
    },
    {
      title: 'Projects Sold',
      dataIndex: 'Projectssold',
    },
    {
        title: 'Highest Sale',
        dataIndex: 'highestsale',

      },
  ];
  const data = [
    {
      key: '1',
      artist: 'Bluenose',
      status: <img src={verified} style={{width:"50px"}} alt='verified'></img>,
      ratings: <img src={ratings} style={{width:"150px"}} alt='verified'></img>,
      Projectssold: 400,
        highestsale: '$4334',
    },
    {
      key: '2',
      artist: 'pennywise',
      status: <img src={pending} style={{width:"50px"}} alt='verified'></img>,
      ratings: <img src={ratings} style={{width:"150px"}} alt='verified'></img>,
      Projectssold: 200,
        highestsale: '$13500',
    },
    {
      key: '3',
      artist: 'Flotsam',
      status: <img src={verified} style={{width:"50px"}} alt='verified'></img>,
      ratings: <img src={ratings} style={{width:"150px"}} alt='verified'></img>,
      Projectssold: 40000,
        highestsale: '$1040',
    },
    {
      key: '4',
      artist: 'Gregautsch',
      status: <img src={pending} style={{width:"50px"}} alt='verified'></img>,
      ratings: <img src={ratings} style={{width:"150px"}} alt='verified'></img>,
      Projectssold: 30,
        highestsale:'$1400',
    },
  ];




const Homedash = () => {

    const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState('1');
  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };


  return (
    <>
    <div className='header'>
        <Header/>
    </div>
    <div className='menubar'>
        <img src={logo} alt='logo'></img>
<Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        className='switch'
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        className='menu'
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
      </div>
      <div className='stats'>
        <img src={stats} alt='stats'></img>
        
      </div>
      <div className='table'>
        <h2 style={{marginLeft:"35px"}}>All Artists</h2>
        <p style={{marginBottom:"40px",marginLeft:"35px"}}>moniter artists sales,reviews,etc</p>
      <Table columns={columns} dataSource={data} onChange={onChange} />

      </div>
      <div className='sidelines1'>
        <h3>best selling artists</h3>
        <ul>
            <li>
                <img src={artistssell} width={280} alt='verified'></img>
            </li>
            <li>
                <img src={artistssell} width={280} alt='verified'></img>
            </li>
            <li>
                <img src={artistssell} width={280} alt='verified'></img>
            </li>
            <li>
            <button style={{marginLeft:"80px",border:"none",width:"100px",height:"30px"}}>view all artists</button>
            </li>
        </ul>
      </div>

      <div className='sidelines2'>
        <h3>best selling artists</h3>
        <ul>
            <li>
                <img src={artistssell} width={280} alt='verified'></img>
            </li>
            <li>
                <img src={artistssell} width={280} alt='verified'></img>
            </li>
            <li>
                <img src={artistssell} width={280} alt='verified'></img>
            </li>
            <li>
                <button>view all artists</button>
            </li>
        </ul>
      </div>

    
    </>
  )
}

export default Homedash