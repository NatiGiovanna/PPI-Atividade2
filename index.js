import PacoteViagem from './Model/Pacote-Viagem.js';

const pacote = new PacoteViagem( 'Paris', 
                                '2029-10-10', 
                                3000, 
                                'A torre Eiffel é um dos pontos turísticos mais visitados do mundo.',
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

pacote.consultar().then((pacotes) => {        
    for (const pacote of pacotes) {
        console.log(pacote.toJSON());
    }
});
