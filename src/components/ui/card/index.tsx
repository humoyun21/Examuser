import { Rate } from 'antd'
import './style.scss'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartStore, useLikeStore } from '@store'
import { HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { toast } from 'react-toastify'


function Card(data:any) {
  const {addCart, checkCart}:any = useCartStore()
  const [rate, setRate] = useState(data?.data?.rating || 1)
  const title = data?.data?.title.length > 32 ? data?.data?.title?.slice(0, 24) + '...' : data?.data?.title 
  const [check, setCheck] = useState(false)
  const [ischecklike, setChecklike] = useState(false)
  const navigate = useNavigate()
  const {addLike, isLiked}:any = useLikeStore()

  function addCartt(){
    addCart(data?.data)
    toast.success("Savatga qo'shildi")
    checkCar()
  }

  function isLike(){
    const response = isLiked(data?.data?._id)
    setChecklike(response)
  }

  function LikeAdd(){
    addLike(data?.data)
    toast.success('Mahsulotni yoqtirdingiz!')
    isLike()
  }
  useEffect(() => {
    checkCar()
    isLike()
  }, [])


  function checkCar(){
    const response = checkCart(data?.data?._id)
    setCheck(response)
  }

  return (
    <div className='card'>
        <img src={data?.data?.urls[0]} alt="NO IMAGE" />
        <div className='card-body'>
            <h3>{title}</h3>
            <div className='rating'>
              <Rate className='rate' value={rate} onChange={(e) => setRate(e)}/>
              <p>{rate}/<span style={{color: '#00000099'}}>5</span></p>
            </div>
            <div className='prices'>
              <h4 className='price'>${data?.data?.price}</h4>
              <h4 className='old-price'>${data?.data?.oldPrice}</h4>
              <h4 className='sale'>{data?.data?.sale}-20$</h4>
            </div>
            <button className='like' disabled={ischecklike} onClick={() => LikeAdd()}>
              <HeartOutlined/>
            </button>
            <button disabled={check} onClick={() => addCartt()}>
              <ShoppingOutlined/>
            </button>
        </div>
        <a href="#"> <div onClick={() => navigate(`/page/${data?.data?._id}`)} className='card-hover'>
          Learn More
        </div></a>
    </div>
  )
}

export default Card