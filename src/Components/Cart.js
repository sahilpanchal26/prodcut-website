import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { remove } from "./Store/cartSlice";

const Cart=()=>{
    const products = useSelector(state=>state.cart)

    const dispatch = useDispatch();

    const removeFromCart=(id)=>{
        //  dispatch remove action
        dispatch(remove(id))
    }

    const cards = products.map((product) => (
        <div className="col-md-12" style={{marginBottom: '15px'}}>
          <Card key={product.key} className="h-100">
            <div className="text-center">
          <Card.Img variant="top" src={product.image} style={{hieght:'100px' , width:'100px'}} />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              INR.{product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor:'white'}}>
          <Button variant="danger" onClick={()=>removeFromCart(product.id)}>Remove Item</Button>
          </Card.Footer>
        </Card>
        </div>
      ));
    return(
        <div>
            <div className="row">
                {cards}
            </div>
        </div>
    )
}
export default Cart