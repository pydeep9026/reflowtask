import logo from './logo.svg';
import './App.css';
import Homedash from './components/Homedash';
import Header from './components/Header';
import { UserOutlined,BellOutlined } from '@ant-design/icons';
import { Avatar, Badge,Space } from 'antd';


function App() {
  return (
    <div className="App">
     <Homedash/>  
     <Space size={24} className='badge' >
    <Badge count={1}>
      <Avatar shape="square" icon={<UserOutlined />} />
    </Badge>
    <p>
      pradeep
    </p>
    <BellOutlined/>

  </Space>
     
    </div>
  );
}

export default App;
