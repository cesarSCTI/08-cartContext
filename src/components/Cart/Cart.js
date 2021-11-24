import React, {useContext, useEffect, useState} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { cartContext } from '../context/cartContext';
import { Table } from 'react-bootstrap';
import './Cart.css';


const Cart = () => {
    const {cartList, clear, itemCounter, removeItem} = useContext(cartContext)
    const [cartQty, setcartQty] = useState(0)
    
    useEffect(() => {
        setcartQty(itemCounter)
    })

    return (
        <Container>
            <Row className="justify-content-md-center" style={{minHeight:'30vh', display:'flex', alignItems:'center'}}>
                <Col >
                <p><b>Bienvenido a tu carrito </b></p>
                    <hr></hr>
                <p>Aqui podras ver el regisro de todos los articulos </p>
                </Col>
            </Row>
            <Row>
                <Col>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Cantidad</th>
                            <th>Costo</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {cartList.map(prod =>
                        <tr Key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.title}</td>
                            <td>{prod.cantidad}</td>
                            <td>${prod.price}.00</td>
                            <td><button className="btnRmv" onClick={() => removeItem(prod.id)}>x</button></td>
                        </tr>
                    )}
                    </tbody>
                    </Table>
                    <button className="btn addOn" onClick={clear}>Limpiar carrito</button>
                </Col>
            </Row>
            </Container>
    )
}

export default Cart;