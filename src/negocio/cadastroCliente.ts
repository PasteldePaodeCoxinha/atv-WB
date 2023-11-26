import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";
import ListagemClientes from "./listagemClientes";

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
        while (new ListagemClientes(this.clientes).getUmCliente(nome) != undefined || nome == "") {
            if (nome == "") {
                nome = this.entrada.receberTexto(`Você tem que digitar um nome: `)
            } else {
                nome = this.entrada.receberTexto(`Esse cliente já existe, digite de novo: `)
            }
        }
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o seu gênero (M ou F): `).toUpperCase()
        while (!"MF".includes(genero) || genero == "") {
            genero = this.entrada.receberTexto(`Resposta inválida digite de novo (M ou F): `).toUpperCase()
        }
        let valorCpf = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        while ((valorCpf.split.length != 11 || valorCpf == "") && !+valorCpf) {
            valorCpf = this.entrada.receberTexto(`CPF invalido digite denovo: `)
        }
        let dataCpf = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf (dd/mm/yyyy): `);
        while (dataCpf.split("/").length < 3 || dataCpf.split("/").length > 3 || dataCpf == "") {
            dataCpf = this.entrada.receberTexto(`Data invalidar, digite de novo (dd/mm/yyyy): `)
        }
        let partesDataCpf = dataCpf.split('/')
        let anoCpf = new Number(partesDataCpf[2].valueOf()).valueOf()
        let mesCpf = new Number(partesDataCpf[1].valueOf()).valueOf()
        while (!(+mesCpf in Array.from(Array(5).keys()).map(x => x + 1))) {
            mesCpf = this.entrada.receberNumero(`Mês inválido digite de novo: `)
        }
        let diaCpf = new Number(partesDataCpf[0].valueOf()).valueOf()
        while (diaCpf > 31 || diaCpf < 1) {
            diaCpf = this.entrada.receberNumero(`Dia inválido, digite de novo: `)
        }
        let dataEmissaoCpf = new Date(anoCpf, mesCpf, diaCpf)
        let cpf = new CPF(valorCpf, dataEmissaoCpf);
        let cliente = new Cliente(nome, nomeSocial, genero, cpf);
        let qtdRg = this.entrada.receberNumero(`Digite quantos RG's você possui: `);
        while (qtdRg > 27 || qtdRg < 1) {
            qtdRg = this.entrada.receberNumero(`Quantidade de RG inválida: `)
        }
        for (let i = 0; i < qtdRg; i++) {
            let valorRg = this.entrada.receberTexto(`Por favor informe o número do RG: `);
            while ((valorRg.split.length != 9 || valorRg == "") && !+valorRg) {
                valorRg = this.entrada.receberTexto(`RG inválido digite denovo: `)
            }
            let dataRg = this.entrada.receberTexto(`Por favor informe a data de emissão do RG (dd/mm/yyyy): `);
            while (dataRg.split("/").length < 3 || dataRg.split("/").length > 3 || dataRg == "") {
                dataRg = this.entrada.receberTexto(`Data invalidar, digite de novo (dd/mm/yyyy): `)
            }
            let partesDataRg = dataRg.split('/')
            let anoRg = new Number(partesDataRg[2].valueOf()).valueOf()
            let mesRg = new Number(partesDataRg[1].valueOf()).valueOf()
            while (!(+mesRg in Array.from(Array(5).keys()).map(x => x + 1))) {
                mesRg = this.entrada.receberNumero(`Mês inválido digite de novo: `)
            }
            let diaRg = new Number(partesDataRg[0].valueOf()).valueOf()
            while (diaRg > 31 || diaRg < 1) {
                diaRg = this.entrada.receberNumero(`Dia inválido, digite de novo: `)
            }
            let dataEmissaoRg = new Date(anoRg, mesRg, diaRg)
            partesDataRg = []
            let rg = new RG(valorRg, dataEmissaoRg);
            cliente.setRgs = rg
        }
        let qtdTel = this.entrada.receberNumero(`Digite quantos telefones/celulares você possui: `);
        for (let i = 0; i < qtdTel; i++) {
            let dddTel = this.entrada.receberTexto(`Por favor informe o DDD do seu telefone/celular: `);
            while (dddTel.split.length != 2 || !+dddTel) {
                dddTel = this.entrada.receberTexto(`DDD inválido, digite de novo: `)
            }
            let numTel = this.entrada.receberTexto(`Por favor informe o número do seu telefone/celular: `);
            while (numTel.split.length != 9 || !+numTel) {
                numTel = this.entrada.receberTexto(`Número inválido, digite de novo: `)
            }
            let telefone = new Telefone(dddTel, numTel);
            cliente.setTel = telefone
        }
        this.clientes.push(cliente)
        console.log(`\nCLIENTE CADASTRADO :)\n`);
    }
}