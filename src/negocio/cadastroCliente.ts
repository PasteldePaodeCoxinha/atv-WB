import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o seu gênero (M ou F): `).toUpperCase()
        while (!"MF".includes(genero)) {
            genero = this.entrada.receberTexto(`Resposta inválida digite de novo (M ou F): `).toUpperCase()
        }
        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let dataCpf = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf (dd/mm/yyyy): `);
        let partesDataCpf = dataCpf.split('/')
        let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf()
        let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf()
        let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf()
        let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf)
        let cpf = new CPF(valorCpf, dataEmissaoCpf);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf);
        let qtdRg = this.entrada.receberNumero(`Digite quantos RG's você possui: `);
        for (let i = 0; i < qtdRg; i++) {
            let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
            let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG (dd/mm/yyyy): `);
            while (dataRg.split("/").length < 3 || dataRg.split("/").length > 3) {
                dataRg = this.entrada.receberTexto(`Data invalidar, digite de novo (dd/mm/yyyy): `)
            }
            let partesDataRg = dataRg.split('/')
            let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
            let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
            let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
            partesDataRg = []
            let rg = new RG(valorRg, dataEmissaoRg);
            cliente.setRgs = rg
        }
        let qtdTel = this.entrada.receberNumero(`Digite quantos telefones/celulares você possui: `);
        for (let i = 0; i < qtdTel; i++) {
            let dddTel = this.entrada.receberTexto(`Por favor informe o DDD do seu telefone/celular: `);
            let numTel = this.entrada.receberTexto(`Por favor informe o número do seu telefone/celular: `);
            let telefone = new Telefone(dddTel, numTel);
            cliente.setTel = telefone
        }
        this.clientes.push(cliente)
        console.log(`\nCLIENTE CADASTRADO :)\n`);
    }
}