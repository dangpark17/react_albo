
import React from 'react';
import './App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';



const data = [
  {id:1,name: "daniel",apPat: "Perez"},
  {id:2,name: "Alejandra",apPat: "Perez"},
  {id:3,name: "Eduardo",apPat: "Perez"}
  
]; 

class App extends React.Component {
  state={
    data: data
  }
  render(){
    return (
      <>
        <Container>
          <Button color="success">Insertar Nuevo Registro</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Apellido Paterno</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {
                (
                  this.state.data.map((elemento)=>(
                    <tr>
                      <td>{elemento.id}</td>
                      <td>{elemento.name}</td>
                      <td>{elemento.apPat}</td>
                      <td>
                        <Button color="primary">Editar</Button>
                        <Button color="danger">Eliminar</Button>
                      </td>
                    </tr>
                  ))
                )
              }
            </tbody>
          </Table>
        </Container>
      </>
    );
  }  
}

export default App;
