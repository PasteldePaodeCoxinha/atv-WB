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
        let nome = this.entrada.receberTexto(`Digite o nome de um servico: `)
        let Listaservicos = new ListagemServicos(this.servicos)
        let servico = Listaservicos.getUmServico(nome)
        let NoNome = this.entrada.receberTexto(`Digite o novo nome do serviço: `)
        let NoPreco = this.entrada.receberTexto(`Digite o novo preço do serviço: `)
        servico.nome = NoNome
        servico.preco = NoPreco
    }
}