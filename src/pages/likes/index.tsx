import { Container } from "@components"
import { useLikeStore } from "@store"
import { Card } from "@ui"
import './style.scss'
import { Button } from "antd"
import { DeleteOutlined } from "@ant-design/icons"

function Likes() {
const {likes, removeLike}:any = useLikeStore()
console.log(likes);
  

    return (
    <div>
        <Container>
            <div className="likes-wrapper">
            {
                likes.length > 0 ? likes.map((like:any, i:number) => (
                   <div className="likee">
                        <Card
                            key={i}
                            data={like}
                        />
                        <Button className="delete-btn" type="text" danger onClick={() => removeLike(like._id)} ><DeleteOutlined /></Button>
                   </div>
                ))
                :
                <p style={{textAlign: 'center', marginTop: 20, fontWeight: 500}}>Malumotlar topilmadi</p>
            }
            </div>
        </Container>
    </div>
  )
}

export default Likes