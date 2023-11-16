import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Deleta from "./deleta";

export default class DeletaProduto extends Deleta {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }

    public deletar() {
        let nome = this.entrada.receberTexto(`Digite o nome do Produto: `)
        return this.produtos.filter((e) => e.nome != nome)
    }
}