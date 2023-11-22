import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:`);
        this.clientes.forEach(cliente => {
            console.log(`------------------------------------------------------`);
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`Genêro: ` + cliente.genero);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            cliente.getRgs.forEach(rg => {
                console.log(`RG: ` + rg.getValor)
            });
            cliente.getTelefones.forEach(tel => {
                console.log(`Telefone/celular: ` + tel.geTelCompleto)
            });
            console.log(`-----------PRODUTOS CONSUMIDOS-----------`);
            cliente.getProdutosConsumidos.forEach(pro => {
                console.log(`${pro.nome}`);
            });
            console.log(`-----------SERVIÇOS CONSUMIDOS-----------`);
            cliente.getServicosConsumidos.forEach(ser => {
                console.log(`${ser.nome}`);
            });
            console.log(`\nTotal gasto: `);

            console.log(`R$${((cliente.getProdutosConsumidos.length > 0) ?
                cliente.getProdutosConsumidos.map(e => e.preco).reduce(function (x, y) { return x + y }) :
                0)
                +
                ((cliente.getServicosConsumidos.length > 0) ?
                    cliente.getServicosConsumidos.map(e => e.preco).reduce(function (x, y) { return x + y }) :
                    0)}`);

            console.log(`------------------------------------------------------`);
        });
        console.log(`\n`);
    }

    public getUmCliente(nome: String) {
        let cliente
        for (let cli of this.clientes) {
            if (cli.nome == nome) {
                cliente = cli
                break
            }
        }
        return cliente
    }

    public listaProQTD() {
        this.clientes.sort(function (a, b) { return b.getProdutosConsumidos.length - a.getProdutosConsumidos.length }).forEach((c) => {
            console.log(`Nome: ${c.nome}`);
            console.log(`Genêro: ${c.genero}`);
            console.log(`Quantidade de produtos consumidos: ${c.getProdutosConsumidos.length}`);
            console.log(`------------------------------------------------------`);
        })
    }

    public listaSerQTD() {
        this.clientes.sort(function (a, b) { return b.getServicosConsumidos.length - a.getServicosConsumidos.length }).forEach((c) => {
            console.log(`Nome: ${c.nome}`);
            console.log(`Genêro: ${c.genero}`);
            console.log(`Quantidade de serviços consumidos: ${c.getServicosConsumidos.length}`);
            console.log(`------------------------------------------------------`);
        })
    }
}