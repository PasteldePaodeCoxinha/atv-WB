import empresa from "../app/main";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Empresa from "../modelo/empresa";
import Atualiza from "./atualiza";
import ListagemClientes from "./listagemClientes";

export default class AtualizaCliente extends Atualiza {
    private entrada: Entrada
    constructor() {
        super()
        this.entrada = new Entrada()
    }
    public atualizar(Id: String): void {
        let Listacliente = new ListagemClientes(empresa.getClientes)
        let nome = this.entrada.receberTexto(`Digite o nome de um cliente: `)
        let cliente = Listacliente.getUmCliente(nome)
        let NoNome = this.entrada.receberTexto(`Digite o novo nome do clinete: `)
        let NoNomeSo = this.entrada.receberTexto(`Digite o novo nome social do cliente: `)
        cliente.nome = NoNome
        cliente.nomeSocial = NoNomeSo
    }
}