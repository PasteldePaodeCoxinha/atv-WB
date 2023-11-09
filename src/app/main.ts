import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
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
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}

export default empresa