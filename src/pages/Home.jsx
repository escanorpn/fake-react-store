// import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import React from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Item from '../components/Item';

const { Header, Content, Footer, Sider } = Layout;

const Home = ({items,fetchProductByCategory,fetchProducts,addToCart,showLoading}) => { 
  const {
    token: { colorBgContainer },
  } = theme.useToken();

//   const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
//     const key = String(index + 1);
//     return {
//       key: `sub${key}`,
//       icon: React.createElement(icon),
//       label: `subnav ${key}`,
//       children: new Array(4).fill(null).map((_, j) => {
//         const subKey = index * 4 + j + 1;
//         return {
//           key: subKey,
//           label: `option${subKey}`,
//         };
//       }),
//     };
//   });
// function getItem(label, key,filter ) {
//     return {
//       key,
//       label,
//       filter,
      
//     };
//   }
//   const itemsz = [
//     getItem('All Products', '1', 'all'),
//     getItem('Electronics', '2', 'electronics'),
   
//   ];
const itemsz = [
    {
      label: 'All Products',
      key: 'all',
    },
    {
      label: 'Electronics',
      key: 'electronics',
    },
    {
      label: 'Jewelery',
      key: 'jewelery',
    },
    {
      label: "Men's clothing",
      key: "men's clothing",
    },
    {
      label: "Women's clothing",
      key: "women's clothing",
    },
]
  const onClick = (e) => {
    console.log('click ', e.key);
    fetchProductByCategory(e.key)
    // setCurrent(e.key);
  };
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <br/>
        <h3 style={{color:"white",padding:"22px"}}>Filters</h3>
        <br/>
        <Menu theme="dark" defaultSelectedKeys={['1']} onClick={onClick} mode="inline" items={itemsz} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '2px 1px 0',
          }}
        >
          <div
            style={{
              padding: 2,
              background: colorBgContainer,
            }}
          >
           <div className='w-full bg-slate-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8 place-items-center px-4 py-3 mt-8 relative z-[5]'>      
        {items && items.map(item=>(
            item.count=1,           
            <Item key={item.id} item={item} addToCart={addToCart} />
        ))}
    </div> 
    <LoadingScreen  showLoading={showLoading}/>
    </div>
        </Content>
      
      </Layout>
    </Layout>
  );
};
export default Home;