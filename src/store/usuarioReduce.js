const initial_state = {usuarioEmail:"", usuarioLogado:0};
function usuarioReduce (state=initial_state, action){
    switch(action.type){
        case"Logue_In": return{... state, usuarioLogado:1, usuarioEmail:action.usuarioEmail};
        case"Logue_Out": return{... state, usuarioLogado:0, usuarioEmail:""};
        default: return state; 
    }
}
export default usuarioReduce;

