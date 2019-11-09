const INITIAL_STATE = {
    codigo: '54421',
    descricao: 'Curso',
    cargaHoraria: 20,
    preco: '150.90',
    caegoria: 'INFORMATICA',
    textoBotao:'Adicionar',
    lista: [{_id: '-1', codigo: 123, descricao: 'curso teste'}]
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LIMPAR_FORM' : return INITIAL_STATE
        case 'ATUALIZA_FORM': return {...state, codigo : action.value}
        default : return state;
    }
}