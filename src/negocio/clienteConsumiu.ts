import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import ListagemProdutos from "./listagemProdutos";
import ListagemServicos from "./listagemServicos";

export default class clienteConsumiu {
    private cliente: Cliente
    private entrada: Entrada
    private listaProduto: Array<Produto>
    private listaServico: Array<Servico>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(cliente: Cliente, listaProduto: Array<Produto>, listaServico: Array<Servico>) {
        this.cliente = cliente
        this.entrada = new Entrada()
        this.listaProduto = listaProduto
        this.listaServico = listaServico
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }

    public consumir() {
        console.log(`1 - Registrar Produto`);
        console.log(`2 - Registrar Serviço`);
        console.log(`0 - Sair`);
        let res = this.entrada.receberNumero(`Digite a opção de registro: `)
        while (res != 0) {
            if (res == 1) {
                let produtoNome = this.entrada.receberTexto(`Digite o nome do produto: `)
                let todosProdutos = new ListagemProdutos(this.listaProduto)
                let produto = todosProdutos.getUmProduto(produtoNome)
                while (produto == undefined) {
                    produtoNome = this.entrada.receberTexto(`Esse produto não existe, digite de novo: `)
                    produto = todosProdutos.getUmProduto(produtoNome)
                }
                this.cliente.setProdutosConsumidos = produto
                produto.compradoMaisUm()
            }
            else if (res == 2) {
                let servicoNome = this.entrada.receberTexto(`Digite o nome do serviço: `)
                let todosServicos = new ListagemServicos(this.listaServico)
                let servico = todosServicos.getUmServico(servicoNome)
                while (servico == undefined) {
                    servicoNome = this.entrada.receberTexto(`Esse serviço não existe, digite de novo: `)
                    servico = todosServicos.getUmServico(servicoNome)
                }
                this.cliente.setServicosConsumidos = servico
                servico.compradoMaisUm()
            }
            else {
                console.log(`Operação náo entendida`);
            }
            console.log(`1 - Registrar Produto`);
            console.log(`2 - Registrar Serviço`);
            console.log(`0 - Sair`);
            res = this.entrada.receberNumero(`Digite a opção de registro: `)
        }
    }
}