import React, { Component } from 'react';
import Cabecalho from '../../components/menu/Cabecalho'
import Cadastro from './cadastro';


export default class Curso extends Component {
    render() {
        return (
            <div className="container">
               <Cabecalho titulo="Cursos" subtitulo="cadastro de Cursos" />
               <Cadastro></Cadastro>
            </div>
        )
    }
}