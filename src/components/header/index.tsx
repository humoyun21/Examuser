import { HeartOutlined, SearchOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons'
import './style.scss'
import { Container } from '@components'
import Logo from '@images/shop.png'
import { Badge, Button, Input, Dropdown, Menu } from 'antd'
import { HeaderDrawer } from '@ui'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore, useLikeStore } from '@store'
import profileimg from '../../../public/profile.svg'
function Header() {
  const navigate = useNavigate()
  const {carts}: any = useCartStore()
  const {likes}: any = useLikeStore()

  // Menu items for the dropdown
  const shopMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => navigate('/')}>
        Shop 1
      </Menu.Item>
      <Menu.Item key="2" onClick={() => navigate('/cart')}>
        shop 2
      </Menu.Item>
      <Menu.Item key="3" onClick={() => navigate('/like')}>
        Shop 3
      </Menu.Item>
    </Menu>
  )

  return (
    <header>
      <div className='header-top'>
        <p>Sign up and get 20% off your first order. 
        <Link className='link' to={'login'}>Sign Up Now</Link></p>
      </div>
      <Container>
        <nav>
          <HeaderDrawer />  
          <div className='nav-left'>
            <img style={{cursor: 'pointer'}} onClick={() => navigate('/')} src={Logo} alt="IMG LOGO" />
            <ul>
              <li>
                {/* Shop dropdown */}
                <Dropdown overlay={shopMenu} trigger={['click']} className='shop-now-select'>
                  <a onClick={(e) => e.preventDefault()}>
                    Shop <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              <li><a href="#">On Sale</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>
          
          <div className='nav-right'>
            <p onClick={() => navigate('/category')} style={{cursor: 'pointer'}}>Brands</p>
            <Button><SearchOutlined/></Button>
            <div className='input-div'>
              <Input className='header-search' placeholder='Search for products...'/>
              
              <div className='cart-img-profile'>
                <Badge className='badge' count={carts?.length}>
                  <ShoppingCartOutlined onClick={() => navigate('/cart')}/>
                </Badge>
                <Badge className='badge' count={likes?.length}>
                  <HeartOutlined onClick={() => navigate('/like')}/>
                </Badge>
             
                <Link to="/login">
                <img src={profileimg} alt="dewd"/>
          </Link>
              </div>
            </div>
          </div>
          
        </nav>
      </Container>
    </header>
  )
}

export default Header
