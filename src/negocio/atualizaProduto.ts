import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Atualiza from "./atualiza";
import ListagemProdutos from "./listagemProdutos";

export default class AtualizaProduto extends Atualiza {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let nome = this.entrada.receberTexto(`Digite o nome de um produto (Digite 0 para cancelar): `)
        if (nome == "0") {
            return
        }
        let Listaproduto = new ListagemProdutos(this.produtos)
        let produto = Listaproduto.getUmProduto(nome)
        while (produto == undefined) {
            nome = this.entrada.receberTexto(`Esse produto não existe, digite o nome de novo: `)
            produto = Listaproduto.getUmProduto(nome)
            if (nome == "0") {
                return
            }
        }

        let perNome = this.entrada.receberTexto(`Você deseja alterar o nome do produto (S ou N): `)
        while (!"SN".includes(perNome.toUpperCase())) {
            perNome = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perNome.toUpperCase() == "S") {
            let NoNome = this.entrada.receberTexto(`Digite o novo nome do produto: `)
            while (NoNome == "") {
                NoNome = this.entrada.receberTexto(`O produto precisa de um nome: `)
            }
            produto.nome = NoNome
        }

        let perPreco = this.entrada.receberTexto(`Você deseja alterar o preço do produto (S ou N): `)
        while (!"SN".includes(perPreco.toUpperCase())) {
            perPreco = this.entrada.receberTexto(`Operação não entendida, digite de novo: `)
        }
        if (perPreco.toUpperCase() == "S") {
            let NoPreco = this.entrada.receberNumero(`Digite o novo preço do produto: `)
            while (isNaN(Number(NoPreco))) {
                NoPreco = this.entrada.receberNumero(`Valor inválido, digite de novo: `)
            }
            produto.preco = Number(NoPreco).toFixed(2)
        }
    }
}