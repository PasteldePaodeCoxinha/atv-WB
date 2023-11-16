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

while (execucao) {
    let execucao2 = true
    console.log(`Escolha uma das opções:`);
    console.log(`1 - Cadastrar Cliente`);
    console.log(`2 - Listar Clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar produtos`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar serviços`);
    console.log(`7 - Atualizar Cliente`);
    console.log(`8 - Atualizar Produto`);
    console.log(`9 - Atualizar Serviço`);
    console.log(`10 - Deletar Cliente`);
    console.log(`11 - Deletar Produto`);
    console.log(`12 - Deletar Serviço`);
    console.log(`13 - Registar consumo`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastroCli = new CadastroCliente(empresa.getClientes)
            cadastroCli.cadastrar()
            break;
        case 2:
            let listagemCli = new ListagemClientes(empresa.getClientes)
            listagemCli.listar()
            break;
        case 3:
            let cadastroPro = new CadastroProduto(empresa.getProdutos)
            cadastroPro.cadastrar()
            break;
        case 4:
            let listagemPro = new ListagemProdutos(empresa.getProdutos)
            listagemPro.listar()
            break;
        case 5:
            let cadastroSer = new CadastroServico(empresa.getServicos)
            cadastroSer.cadastrar()
            break;
        case 6:
            let listagemSer = new ListagemServicos(empresa.getServicos)
            listagemSer.listar()
            break;
        case 7:
            let atualizarCliente = new AtualizaCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break;
        case 8:
            let atualizarProduto = new AtualizaProduto(empresa.getProdutos)
            atualizarProduto.atualizar()
            break;
        case 9:
            let atualizarServico = new AtualizaServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        case 10:
            let deletarCliente = new DeletaCliente(empresa.getClientes)
            empresa.setClientes = deletarCliente.deletar()
            console.log(`Cliente deletado`);
            break;
        case 11:
            let deletarProduto = new DeletaProduto(empresa.getProdutos)
            empresa.setProdutos = deletarProduto.deletar()
            console.log(`Produto deletado`);
            break;
        case 12:
            let deletarServico = new DeletaServico(empresa.getServicos)
            empresa.setServicos = deletarServico.deletar()
            console.log(`Serviço deletado`);
            break;
        case 13:
            let nomeReq = new Entrada()
            let clienteNome = nomeReq.receberTexto(`Digite o nome do cliente desejado: `)
            let todosCliente = new ListagemClientes(empresa.getClientes)
            let cliente = todosCliente.getUmCliente(clienteNome)
            let registrarConsumo = new clienteConsumiu(cliente, empresa.getProdutos, empresa.getServicos)
            let contReq = new Entrada()
            let cont = "s"
            while (cont == "s") {
                registrarConsumo.consumir()
                cont = contReq.receberTexto(`Continuar: `)
            }
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}

export default empresa