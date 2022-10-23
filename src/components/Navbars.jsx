import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { add } from '../icons/Icon';



class Navbars extends Component {
    render() {
        return (
            <div>
                <Navbar>
                
    <Nav className="ms-auto" defaultActiveKey="/" as="ul" style={{ padding: "15px",}} >
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "success", textDecoration: "none"}} to="/addform">{add}</Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Link  style={{marginRight: "1rem", color: "success", textDecoration: "none"}} to="/"></Link>
        </Nav.Item>
    </Nav>
  </Navbar>
            </div>
        );
    }
}

export default Navbars;
