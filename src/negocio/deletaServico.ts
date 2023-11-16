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
        return this.servicos.filter((e) => e.nome != nome)
    }
}