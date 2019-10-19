import React from 'react'
import axios from 'axios';

import CursoForm from '../form'
import CursoList from  '../list'

const URL = "http://localhost:3200/api/curso";

export default class Cadastro extends React.Component {

    state = {
        data : []
    }

    componentWillMount(){
        this.listar()
    }

    listar() {
        axios.get(URL).then(responde => this.setState({...this.state}))
    }

    render(){
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <CursoForm />
                </div>
                <div className="col-md-6">
                    <CursoList />
                </div>
            </div>
        )
    }
}