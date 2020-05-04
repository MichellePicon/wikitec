import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from './Logout';

import {AuthUserContext} from './Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = () => (
    <div class="container">
        <div class="panel panel-default">
            <div class="panel-body">
                <br></br>
                <h4><Link to="/showcategory" class="btn btn-primary">Categorías</Link></h4>
                <h4><Link to="/create" class="btn btn-primary">Nuevo Post</Link></h4>
                <h4><LogoutButton/></h4>
                <br></br>
                <h3 class="panel-title">Todos los Posts</h3>
                <table class="table table-stripe">
                    <thead>
                        <tr>
                        <th>Título</th>
                        <th>Contenido</th>
                        <th>Autor</th>
                        <th>Categoría</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.posts.map(Post =>
                        <tr>
                            <td><Link to={`/show/${Post.key}`}>{Post.title}</Link></td>
                            <td>{Post.description}</td>
                            <td>{Post.author}</td>
                            <td>{Post.category}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const NavigationNonAuth = () => (
    <div class="container">
    <div class="panel panel-default">
        <div class="panel-body">
            <br></br>
            <h4><Link to="/Login" class="btn btn-primary">Iniciar Sesión</Link></h4>
            <h4><Link to="/showcategory" class="btn btn-primary">Categorías</Link></h4>
            <br></br>
            <h3 class="panel-title">Todos los Posts</h3>
            <table class="table table-stripe">
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Contenido</th>
                    <th>Autor</th>
                    <th>Categoría</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.posts.map(Post =>
                    <tr>
                        <td><Link to={`/show/${Post.key}`}>{Post.title}</Link></td>
                        <td>{Post.description}</td>
                        <td>{Post.author}</td>
                        <td>{Post.category}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
</div>
);

export default Navigation;