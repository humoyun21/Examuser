import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import './style.scss'
import { useState } from 'react';
import { useCartStore } from '@store';
import { toast } from 'react-toastify';

function Carts({data}:any) {
    const [count, setCount] = useState(1);
    const {removeCart}:any = useCartStore()

    function deleteProduct(){
        removeCart(data?._id)
        toast.success(`Product deleted successfully`)
    }

    return (
    <div className='carts-wrapper'>
        <img src={data?.urls[0]} alt="no image" />        
        <div className='carts-midle'>
            <h4>{data?.title}</h4>
            <p>Size: <span>Large</span></p>
            <p>Color: <span>Black</span></p>
            <h3>${data?.price * count}</h3>
        </div>
        <div className='carts-end'>
            <DeleteOutlined onClick={() => deleteProduct()}/>
            <div>
                <button onClick={() => setCount(count-1)} disabled={count == 1}><MinusOutlined/></button>
                <h4>{count}</h4>
                <button onClick={() => setCount(count+1)}><PlusOutlined/></button>
            </div>
        </div>
    </div>
  )
}

export default Carts