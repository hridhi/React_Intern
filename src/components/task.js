import React from "react";
import './task.css';
import { useState,useEffect} from 'react';
import {Button, Navbar,Nav,Form } from "react-bootstrap";     
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from '../firebase'


const Login=()=>{
    const [target,settarget]=useState(0);
    const db = firebase.firestore();
    const [D,setD]=useState([]);
    const [row,setrow]=useState([]);
    useEffect(() =>{
    db.collection('Info').onSnapshot(snapshot =>{
      setD(snapshot.docs.map(doc => doc.data()))
    })
    },[]);

    function task_cancel(e){
        settarget(0);
    }
    function task_edit2(e){
        e.preventDefault();
        let request =  {
            name:document.getElementById('name').value,
            cocktail:document.getElementById('cocktail').value,
            points:document.getElementById('points').value,
        }
        for (var i=0;i<D.length;i++){
            if (D[i].Name==row.Name){
                D[i].Name=request.name;
                D[i].points=request.points;
                D[i].Cocktail=request.cocktail
            }
        }
        settarget(0);
        
    }
    function task_edit(row){
        setrow(row);
        settarget(1);
    }
    function first_div(){
        // console.log(D)
        return (
            <div className="task">
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
            <div className="task-form">
            <h1 style={{color:"white", left: "130px" , position:"relative"}}>Add Entry</h1>
            <Form >
                <Form.Group>
                <Form.Label style={{color:"white"}}>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" id="name" value={inputValue1} onChange={handleUserInput1}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label style={{color:"white"}}>Select cocktail</Form.Label>
                    <Form.Control as="select" id="cocktail" value={inputValue2} onChange={handleUserInput2}>
                        <option>Malta</option>
                        <option>Santra</option>
                        <option>Sonfee</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label style={{color:"white"}} >Points (0 to 10)</Form.Label>
                <br></br>
                <Form.Control id="points" type="number" min="0" max="10" maxLength="30px" className="task-input" placeholder="   Give points " value={inputValue3} onChange={handleUserInput3}></Form.Control>
            </Form>
            <br></br>
            <Button className="task-reset" style={{ backgroundColor: 'white', color: "black", margin:"7px"}} onClick={(e)=>task_reset(e)}>Reset</Button>
            <Button className="task-reset" onClick={(e)=>task_add(e)} style={{ backgroundColor: '#dd571c', color: "black", margin:"7px"}}>Add</Button>
        </div>
        <div className="task-table">
            <h1 style={{color:"white", left: "240px" , position:"relative"}}>Entries</h1>
            <br></br>
            <p style={{color:"white"}}>#1 Malta({mm()})     #2 Sönfee({mm2()})     #3 Santrá({mm3()})</p>
            <TableContainer component={Paper}>
      <Table style={{backgroundColor: "#202020", color:"white"}}>
        <TableHead>
          <TableRow style={{backgroundColor: "#dd571c"}}>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Name</TableCell>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Cocktail</TableCell>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Points given</TableCell>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {D.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell style={{color:"white" ,borderBottom:"none"}} component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell style={{color:"white" ,borderBottom:"none"}}>{row.Cocktail}</TableCell>
              <TableCell style={{color:"white" ,borderBottom:"none"}}>{row.points}</TableCell>
              <TableCell style={{color:"white" ,borderBottom:"none"}}><Button style={{backgroundColor:"white", color:"black", padding:"8px"}} onClick={()=>task_edit(row)}>Edit</Button> &nbsp;&nbsp; <Button style={{backgroundColor:"white", color:"black", padding:"8px"}} onClick={()=>task_delete(row)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
        </div>
        );
    }
    function second_div(){
        return (
            <div className="task">
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
            <div className="task-form1">
            <h1 style={{color:"white", left: "130px" , position:"relative"}}>Edit Entry</h1>
            <Form >
                <Form.Group>
                <Form.Label style={{color:"white"}}>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" id="name" value={inputValue1} onChange={handleUserInput1}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label style={{color:"white"}}>Select cocktail</Form.Label>
                    <Form.Control as="select" id="cocktail" value={inputValue2} onChange={handleUserInput2}>
                        <option>Malta</option>
                        <option>Santra</option>
                        <option>Sonfee</option>
                    </Form.Control>
                </Form.Group>
                <Form.Label style={{color:"white"}} >Points (0 to 10)</Form.Label>
                <br></br>
                <Form.Control id="points" type="number" min="0" max="10" maxLength="30px" className="task-input" placeholder="   Give points " value={inputValue3} onChange={handleUserInput3}></Form.Control>
            </Form>
            <br></br>
            <Button className="task-reset" style={{ backgroundColor: 'white', color: "black", margin:"7px"}} onClick={(e)=>task_cancel(e)}>Cancel</Button>
            <Button className="task-reset" onClick={(e)=>task_edit2(e)} style={{ backgroundColor: '#dd571c', color: "black", margin:"7px"}}>Edit</Button>
        </div>
        <div className="task-table">
            <h1 style={{color:"white", left: "240px" , position:"relative"}}>Entries</h1>
            <br></br>
            <p style={{color:"white"}}>#1 Malta({mm()})     #2 Sönfee({mm2()})     #3 Santrá({mm3()})</p>
            <TableContainer component={Paper}>
      <Table style={{backgroundColor: "#202020", color:"white"}}>
        <TableHead>
          <TableRow style={{backgroundColor: "#dd571c"}}>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Name</TableCell>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Cocktail</TableCell>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Points given</TableCell>
            <TableCell style={{color:"white" , borderBottom:"none"}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {D.map((row,index) => (
            <TableRow key={row.name}>
              <TableCell style={{color:"white" ,borderBottom:"none"}} component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell style={{color:"white" ,borderBottom:"none"}}>{row.Cocktail}</TableCell>
              <TableCell style={{color:"white" ,borderBottom:"none"}}>{row.points}</TableCell>
              <TableCell style={{color:"white" ,borderBottom:"none"}}><Button style={{backgroundColor:"white", color:"black", padding:"8px"}} onClick={()=>task_edit(index)}>Edit</Button> &nbsp;&nbsp; <Button style={{backgroundColor:"white", color:"black", padding:"8px"}} onClick={()=>task_delete(index)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
        </div>
        );
    }
    function task_delete(row){
        //row.preventDefault();
        console.log(row);
        // var jobskill_query = db.collection('Info').where('Name','==',row.Name);
        // jobskill_query.get().then(function(querySnapshot) {
        // querySnapshot.forEach(function(doc) {
        //     doc.ref.delete();
        // });
        // });
        setD(D.filter(item => item.Name !== row.Name));
    }

    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState();
    const handleUserInput1 = (e) => {
        setInputValue1(e.target.value);
      };
      const resetInputField1 = () => {
        setInputValue1("");
      };

      const handleUserInput2 = (e) => {
        setInputValue2(e.target.value);
      };
      const resetInputField2 = () => {
        setInputValue2("");
      };

      const handleUserInput3 = (e) => {
        setInputValue3(e.target.value);
      };
      const resetInputField3 = () => {
        setInputValue3("");
      };
      function task_reset(e){
        resetInputField1()
        resetInputField2()
        resetInputField3()
    }
    function task_add(e){
        e.preventDefault();
        let request =  {
            name:document.getElementById('name').value,
            cocktail:document.getElementById('cocktail').value,
            points:document.getElementById('points').value,
        }
        console.log(request.points)
        const info = {Name: request.name , Cocktail:request.cocktail, points: "" + request.points}
        db.collection("Info").doc().set(info)
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        task_reset(e)
    }
    function mm(){
        var count=0
        for (var i=0;i<D.length;i++){
            if (D[i].Cocktail=="Malta"){
                count=count+Number(D[i].points)
            }
        }
        return count;
    }
    function mm2(){
        var count=0
        for (var i=0;i<D.length;i++){
            if (D[i].Cocktail=="Sonfee"){
                count=count+Number(D[i].points)
            }
        }
        return count;
    }
    function mm3(){
        var count=0
        for (var i=0;i<D.length;i++){
            if (D[i].Cocktail=="Santra"){
                count=count+Number(D[i].points)
            }
        }
        return count;
    }
    if(target==0){
        return first_div()
    }
    else{
        return second_div()
    }
    return(
       first_div()     
     ); }
export default Login;
