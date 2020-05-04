import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Database';
import Showcategory from './Showcategory';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('notes');
    this.docRef = firebase.firestore().collection('categorias');
    this.unsubscribe= null;
    this.state = {
      title: '',
      description: '',
      category:'',
      categorias:[]
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.listaCategorias);
  }

  getCategory = (querySnapshot) => {

    const categorias=[];

        querySnapshot.forEach((doc) => {
          const { title} = doc.data();
          categorias.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title
          });
        });
        this.setState({
          categorias
        });
      }

  componentDidMount(){
    this.unsubscribe=this.docRef.onSnapshot(this.getCategory);
  }


  onSubmit = (e) => {
    e.preventDefault();

    const { title, description, category } = this.state;

    this.ref.add({
      title,
      description,
      category
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        category:''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error", error);
    });
  }

  render() {
    const { title, description, author, category } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Creando nuevo post
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Agrega un título a tu post" />
              </div>
              <div class="form-group">
              <label for="title">Contenido</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="¿Qué quieres compartir?" cols="80" rows="3">{description}</textArea>
              </div>
                <div class="form-group" onChange={category => this.onChange(category)}>
                  <select name="category">
                  <option value="" selected="selected"> Categoría </option>
                   {this.state.categorias.map(Valor =>
                    <option  value={Valor.title}>{Valor.title}</option>)}
                 </select>
                </div>
                
                <br></br>
                <br></br>
              <button type="submit" class="btn btn-success">Publicar</button>
            </form>
            <br></br>
            <h4><Link to="/" class="btn btn-primary">Volver</Link></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
