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
        let nome = this.entrada.receberTexto(`Digite o nome de um serviço: `)
        let Listaservicos = new ListagemServicos(this.servicos)
        let servico = Listaservicos.getUmServico(nome)
        while (servico != Servico) {
            nome = this.entrada.receberTexto(`Esse serviço não existe, digite o nome de novo: `)
        }

        let perNome = this.entrada.receberTexto(`Você deseja alterar o nome do serviço (S ou N): `)
        while (perNome.toUpperCase() != "S" || perNome.toUpperCase() != "N") {
            perNome = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perNome.toUpperCase() == "S") {
            let NoNome = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
            servico.nome = NoNome
        }

        let perPreco = this.entrada.receberTexto(`Você deseja alterar o preço do serviço (S ou N): `)
        while (perPreco.toUpperCase() != "S" || perPreco.toUpperCase() != "N") {
            perPreco = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perPreco.toUpperCase() == "S") {
            let NoPreco = this.entrada.receberTexto(`Digite o novo preço do serviço: `)
            servico.preco = NoPreco
        }
    }
}