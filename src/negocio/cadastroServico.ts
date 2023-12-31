import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";
import ListagemServicos from "./listagemServicos";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do serviço (Digite 0 para cancelar)`);

        // nome
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        if (nome == "0") {
            return
        }
        while (new ListagemServicos(this.servicos).getUmServico(nome) != undefined || nome == "") {
            if (nome == "") {
                nome = this.entrada.receberTexto(`Você tem que digitar um nome: `)
            } else {
                nome = this.entrada.receberTexto(`Esse serviço já existe, digite de novo: `)
            }
        }
        if (nome == "0") {
            return
        }

        // Preço
        let preco = this.entrada.receberNumero(`Por favor informe o preço desse serviço (use ponto invez de virgula): R$`)
        while (isNaN(preco)) {
            preco = this.entrada.receberNumero(`Valor inválido, digite de novo: `)
        }

        let servico = new Servico(nome, Number(preco.toFixed(2)));
        this.servicos.push(servico)
        console.log(`\n SERVIÇO CADASTRADO :)\n`);
    }
}