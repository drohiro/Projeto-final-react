const INITIAL_STATE = {
    data: '2019-10-26',
    nome: '',
    email: '',
    assunto: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ATUALIZA_DATA' : return {...state, data : action.info}
        case 'ATUALIZA_NOME' : return {...state, nome : action.info}
        case 'ATUALIZA_EMAIL' : return {...state, email : action.info}
        case 'ATUALIZA_ASSUNTO' : return {...state, assunto : action.info}
        case 'LIMPAR_FORM' : return INITIAL_STATE
        default : return state;
    }
}