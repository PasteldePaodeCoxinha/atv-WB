import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import AtualizaCliente from "../negocio/atualizaCliente";
import AtualizaProduto from "../negocio/atualizaProduto";
import AtualizaServico from "../negocio/atualizaServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import clienteConsumiu from "../negocio/clienteConsumiu";
import DeletaCliente from "../negocio/deletaCliente";
import DeletaProduto from "../negocio/deletaProduto";
import DeletaServico from "../negocio/deletaServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServicos from "../negocio/listagemServicos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

const Cadastro = (op: number) => {
    let cadastro = [new CadastroCliente(empresa.getClientes),
    new CadastroProduto(empresa.getProdutos),
    new CadastroServico(empresa.getServicos)]
    cadastro[op].cadastrar()
}

const ListarTodos = (op: number) => {
    let listarTodos = [new ListagemClientes(empresa.getClientes),
    new ListagemProdutos(empresa.getProdutos),
    new ListagemServicos(empresa.getServicos)]
    listarTodos[op].listar()
}

const Atualizar = (op: number) => {
    let atualizar = [new AtualizaCliente(empresa.getClientes),
    new AtualizaProduto(empresa.getProdutos),
    new AtualizaServico(empresa.getServicos)]
    atualizar[op].atualizar()
}

const Deletar = (op: number) => {
    let deletar = [new DeletaCliente(empresa.getClientes),
    new DeletaProduto(empresa.getProdutos),
    new DeletaServico(empresa.getServicos)]

    let possi = ["setClientes",
        "setProdutos",
        "setServicos"]

    empresa[possi[op]] = deletar[op].deletar()
}

const Listagens = (p) => {
    let exe = true
    while (exe) {
        console.log(`Opções de listagens:`);
        console.log(`1 - Listar todos`);
        console.log(`2 - Listar por quantidade de produtos`);
        console.log(`3 - Listar por quantidade de produtos`);
        console.log(`0 - Sair`);

        let ent = new Entrada()
        let op = ent.receberNumero(`Digite uma opção: `)

        switch (op) {
            case 1:
                ListarTodos(p)
                break
            case 2:
                let listaCliente = new ListagemClientes(empresa.getClientes)
                listaCliente.listaProQTD()
                break
            case 3:
                let listaCliente2 = new ListagemClientes(empresa.getClientes)
                listaCliente2.listaSerQTD()
                break
            case 0:
                exe = false
                console.log(`Voltando`)
                break;
            default:
                console.log(`Operação não entendida :(`)
                break
        }
    }
}

const opcoes = (p: number) => {
    let exe = true
    let possi = ["cliente", "produto", "serviço"]
    while (exe) {
        console.log(`Opções de ${possi[p]}:`);
        console.log(`1 - Cadastro`);
        console.log(`2 - Listagens`);
        console.log(`3 - Atualizar`);
        console.log(`4 - Deletar`);
        (p == 0) ? console.log(`5 - Registrar Compra`) : ""
        console.log(`0 - Sair`);

        let ent = new Entrada()
        let op = ent.receberNumero(`Digite uma opção: `)

        switch (op) {
            case 1:
                Cadastro(p)
                break
            case 2:
                Listagens(p)
                break
            case 3:
                Atualizar(p)
                break
            case 4:
                Deletar(p)
                break
            case 5:
                let cont = "s"
                while (cont.toUpperCase() == "S") {
                    let nomeReq = new Entrada()
                    let clienteNome = nomeReq.receberTexto(`Digite o nome do cliente desejado: `)
                    let todosCliente = new ListagemClientes(empresa.getClientes)
                    let cliente = todosCliente.getUmCliente(clienteNome)
                    let registrarConsumo = new clienteConsumiu(cliente, empresa.getProdutos, empresa.getServicos)
                    let contReq = new Entrada()
                    registrarConsumo.consumir()
                    cont = contReq.receberTexto(`Você deseja registrar as compras de outro cliente (S ou N): `)
                }
                break;
            case 0:
                exe = false
                console.log(`Voltando`)
                break;
            default:
                console.log(`Operação não entendida :(`)
                break
        }
    }
}

while (execucao) {
    console.log(`Escolha uma das opções:`);
    console.log(`1 - Cliente`);
    console.log(`2 - Produto`);
    console.log(`3 - Serviço`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    if (opcao == 0) {
        execucao = false
        console.log(`Até mais`)
        break;
    } else if (opcao > 3) {
        console.log(`Operação Não compreendida, tente de novo`);
    } else {
        opcoes(opcao - 1)
    }
}

export default empresa