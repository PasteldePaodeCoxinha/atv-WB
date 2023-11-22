import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Deleta from "./deleta";

export default class DeletaServico extends Deleta {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public deletar() {
        let nome = this.entrada.receberTexto(`Digite o nome do Serviço: `)
        let servico = this.servicos.filter((e) => e.nome == nome)
        while (servico.length < 0) {
            nome = this.entrada.receberTexto(`Esse serviço não exite, digite de novo: `)
            servico = this.servicos.filter((e) => e.nome == nome)
        }
        return this.servicos.filter((e) => e.nome != nome)
    }
}