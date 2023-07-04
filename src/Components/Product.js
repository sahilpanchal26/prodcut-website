import { useEffect,useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { add } from "./Store/cartSlice";

const Product = () => {
    const dispatch = useDispatch()
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  },[]);

  const addToCart=(product)=>{
        //   dispatch add action
        dispatch(add(product))
  }

  const cards = products.map((product) => (
    <div className="col-md-3" style={{marginBottom: '15px'}}>
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
      <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
    </div>
  ));
  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
};
export default Product;
