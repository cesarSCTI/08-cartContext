import React, {useContext, useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { cartContext } from '../context/cartContext';



const Cart = () => {
    const {cartList, clear, itemCounter, removeItem} = useContext(cartContext)
    const [cartQty, setcartQty] = useState(0)
    
    useEffect(() => {
        setcartQty(itemCounter)
    })

    return (
        <Container>
            <Row className="justify-content-md-center" style={{minHeight:'100vh', display:'flex', alignItems:'center'}}>
                <Col >
                <p><b>Bienvenido a tu carrito </b></p>
                    <hr></hr>
                <p>Aqui podras ver el regisro de todos los articulos que comiences a añadir</p>

                {cartQty}

                {cartList.map(prod => <li key={prod.id}>{prod.id}  |  {prod.title} cantidad: {prod.cantidad} <button onClick={() => removeItem(prod.id)}>x</button></li>)}

                <button className="btn addOn" onClick={clear}>Limpiar carrito</button>

                </Col>
            </Row>
            </Container>
    )
}

export default Cart;