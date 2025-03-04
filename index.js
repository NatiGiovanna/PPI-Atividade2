import PacoteViagem from './Model/Pacote-Viagem.js';

const pacote = new PacoteViagem( 'Salvador', 
                                '2026-11-25', 
                                30000, 
                                'A cidade das Praias mais bonitas',
                            );
                            
/*                               
pacote.excluir().then(() => {
    console.log('Pacote de viagem excluído com sucesso!');
}).catch((erro) => {
    console.log('Erro ao excluir pacote: ' + erro);
});

pacote.consultar().then((pacotes) => {        
    for (const pacote of pacotes) {
        console.log(pacote.toJSON());
    }
});

pacote.gravar().then(() => {
    console.log('Pacote de viagem gravado com sucesso!');
}).catch((erro) => {
    console.log('Erro ao gravar pacote: ' + erro);
});

pacote.id = 1;
pacote.alterar().then(() => {
    console.log('Pacote de viagem alterado com sucesso!');
}).catch((erro) => {
    console.log('Erro ao alterar pacote: ' + erro);
});

*/

