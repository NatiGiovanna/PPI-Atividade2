import BDPacote from '../BaseDados/DBPacoteViagem.js';

export default class PacoteViagem {
    destino; 
    dataPartida;
    preco;
    descricao;
    id;

    constructor(destino, dataPartida, preco, descricao) {
        this.destino = destino;
        this.dataPartida = dataPartida;
        this.preco = preco;
        this.descricao = descricao;
    }

    
    get destino() {
        return this.destino;
    }
    set destino(NovoDestino) {
        this.destino = NovoDestino;
    }

    get dataPartida() {
        return this.dataPartida;
    }
    set dataPartida(NovaDataPartida) {
        this.dataPartida = NovaDataPartida;
    }

    get preco() {
        return this.preco;
    }
    set preco(NovoPreco) {
        this.preco = NovoPreco;
    }

    get descricao() {
        return this.descricao;
    }
    set descricao(NovaDescricao) {
        this.descricao = NovaDescricao;
    }

    toJSON() {
        return {
            id: this.id, 
            destino: this.destino,
            dataPartida: this.dataPartida,
            preco: this.preco,
            descricao: this.descricao,
        };
    }

    
    async gravar() {
        try {
            const BDPct = new BDPacote();
            await BDPct.gravar(this); 
            console.log('Pacote de viagem gravado com sucesso!');
        } catch (error) {
            console.error('Erro ao gravar o pacote de viagem:', error);
        }
    }

    async alterar() {
        try {
            const BDPct = new BDPacote();
            await BDPct.alterar(this);
            console.log('Pacote de viagem alterado com sucesso!');
        } catch (error) {
            console.error('Erro ao alterar o pacote de viagem:', error);
        }
    }

    async excluir() {
        try {
            const BDPct = new BDPacote();
            await BDPct.excluir(); 
            console.log('O último pacote inserido foi excluído com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir o último pacote de viagens: ', error);
        }
    }

    async consultar() {
        try {
            const BDPct = new BDPacote();
            const Pacotes = await BDPct.consultar();
            return Pacotes; 
        } catch (error) {
            console.error('Erro ao buscar todos os Pacotes de viagens: ', error);
            throw error; 
        }
    }
}
