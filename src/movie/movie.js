
import React from 'react';
import '../App.css';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table,Button,Container,Modal,ModalBody,ModalHeader,FormGroup,ModalFooter} from 'reactstrap';
import { Search } from '@material-ui/icons';

/*
const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com',
    params: {s: 'Avengers Endgame', page: '1', r: 'json'},
    headers: {
      'x-rapidapi-key': '9d53d6f30amsh53ebbeef7e54d0fp19015bjsne8a09df5cb4e',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };
*/
const options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: {i: 'tt4154796', r: 'json'},
    headers: {
      'x-rapidapi-key': '9d53d6f30amsh53ebbeef7e54d0fp19015bjsne8a09df5cb4e',
      'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
  };

  export default class Movie extends React.Component { 

      state = {
        movies: []
      }
       
      async componentDidMount() {
         axios.request(options).then(res => {
            const movies =  res.data;  
            
            console.log(movies)
        }).catch(function (error) {
            console.error(error);
        });   
    }
    
  render(){
    return (
        <React.Fragment>            
      
            <Container>
            <Button color="success">Insertar Nuevo Registro</Button>
            <br />
            <br />
            <Table>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Año</th>
                    <th>Tipo</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {
                    (this.state.movies.map((pelicula)=>(
                        <tr>
                        <td>{pelicula.Title}</td>
                        <td>{pelicula.Year}</td>
                        <td>{pelicula.Type}</td>                        
                        <td>{pelicula.Poster}</td>
                        <td>
                            <Button color="primary">Editar</Button>
                            <Button color="danger">Eliminar</Button>
                        </td>
                        </tr>
                    )))
                }
                </tbody>
            </Table>
            </Container>                
        </React.Fragment>
    );
  }  
}

