import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualiza from "./atualiza";
import ListagemServicos from "./listagemServicos";

export default class AtualizaServico extends Atualiza {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto(`Digite o nome de um serviço (Digite 0 para cancelar): `)
        if (nome == "0") {
            return
        }
        let Listaservicos = new ListagemServicos(this.servicos)
        let servico = Listaservicos.getUmServico(nome)
        while (servico == undefined) {
            nome = this.entrada.receberTexto(`Esse serviço não existe, digite o nome de novo: `)
            servico = Listaservicos.getUmServico(nome)
            if (nome == "0") {
                return
            }
        }

        let perNome = this.entrada.receberTexto(`Você deseja alterar o nome do serviço (S ou N): `)
        while (!"SN".includes(perNome.toUpperCase())) {
            perNome = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perNome.toUpperCase() == "S") {
            let NoNome = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
            while (NoNome == "") {
                NoNome = this.entrada.receberTexto(`O produto precisa de um nome: `)
            }
            servico.nome = NoNome
        }

        let perPreco = this.entrada.receberTexto(`Você deseja alterar o preço do serviço (S ou N): `)
        while (!"SN".includes(perPreco.toUpperCase())) {
            perPreco = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perPreco.toUpperCase() == "S") {
            let NoPreco = this.entrada.receberNumero(`Digite o novo preço do serviço: `)
            while (isNaN(Number(NoPreco))) {
                NoPreco = this.entrada.receberNumero(`Valor inválido, digite de novo: `)
            }
            servico.preco = NoPreco.toFixed(2)
        }
    }
}