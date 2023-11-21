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
            try {
                console.log(`R$${cliente.getProdutosConsumidos.map(e => e.preco).reduce(function (x, y) { return x + y })
                    + cliente.getServicosConsumidos.map(e => e.preco).reduce(function (x, y) { return x + y })}`);
            } catch (e) {
                console.log(`R$00.00`);

            }

            console.log(`--------------------------------------`);
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
}