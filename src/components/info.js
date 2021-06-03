import React from "react";
import './info.css';
import {Navbar,Nav,Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const login=()=>{
    return(
        <div className="info">
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand style={{ color: '#dd571c', fontWeight: 'bold'}}>FE Task</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Nav.Item>
                        <Button href="/" style={{ backgroundColor: '#dd571c', color: "black", margin:"7px"}}>Info</Button>
                    </Nav.Item>
                    <Nav.Item>
                    <Button href="/task" style={{ backgroundColor: 'white', color: "black", margin:"7px"}}>Task</Button>
                    </Nav.Item>
                    </Navbar.Collapse>
            </Navbar>
        </div>
        <div className="info-text">
            <h2>Rules</h2>
            <p>1. You must use React in your submission</p>
            <p>2. DO NOT follow a tutorial/code-along/youtube video, or blatantly copy code in your submission, it will result in instant dismissal</p>
            <p>3. Taking help from stackoverflow or similar apps for parts of the functionality is completely fine, but you must mention it in code comments</p>
            <br></br>
            <h2>Task Info</h2>
            <p>You'll be recreating everything in the task section, including the navbar. You don't have to include this page though</p>
            <p>This task was made without any 3rd party library, but you can use any 3rd party library if you want to.</p>
            <p>Don't worry about exactly copying the designs, as long as the layout is similar and all elements are present</p>
            <p>It is a fairly basic CRUD application, test it out and see how everything is supposed to work.</p>
            <p>Click on the "task" button on the top right corner to get started</p>
        </div>
        </div>
        );
    }
export default login;
