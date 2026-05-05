// 1. CLASSE FUNCIONÁRIO

class Funcionario {
    public matricula: number;
    public nome: string;
    public cargo: string;
    public salario: number;

    // Cria um novo funcionário com os dados informados
    constructor(matricula: number, nome: string, cargo: string, salario: number) {
        this.matricula = matricula;
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

// 2. CLASSE EMPRESA

class Empresa {
    // Guarda a lista de funcionários. Privado.
    private funcionarios: Funcionario[] = [];

    // Adiciona o funcionário à lista da empresa
    public adicionarFuncionario(funcionario: Funcionario): void {
        this.funcionarios.push(funcionario);
        console.log(`[Sucesso] Funcionário '${funcionario.nome}' cadastrado no sistema.`);
    }

    // Busca o funcionário pela matrícula e altera o salário dele
    public atualizarSalario(matricula: number, novoSalario: number): void {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);

        // Tratamento de erro caso o funcionário não exista na base
        if (!funcionario) {
            console.error(`[Erro] Falha ao atualizar. Matrícula ${matricula} não encontrada.`);
            return;
        }

        // Atualiza o valor do salário
        funcionario.salario = novoSalario;
        console.log(`[Sucesso] O salário de '${funcionario.nome}' foi atualizado para R$ ${novoSalario}.`);
    }

    // Retorna as informações do funcionário. O retorno pode ser Funcionario OU undefined (caso não ache)
    public consultarFuncionario(matricula: number): Funcionario | undefined {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);

        // Tratamento de erro caso a pesquisa não encontre ninguém
        if (!funcionario) {
            console.error(`[Erro] Consulta falhou. Funcionário de matrícula ${matricula} não existe.`);
            return undefined;
        }

        return funcionario;
    }
}


// 3. FUNÇÕES DE TESTE

function cadastrarFuncionarios(empresa: Empresa): void {
    // Criando os funcionários para teste
    const func1 = new Funcionario(101, "Carlos Silva", "Desenvolvedor", 4500);
    const func2 = new Funcionario(102, "Mariana Costa", "Analista de RH", 4000);
    const func3 = new Funcionario(103, "Roberto Gomes", "Gerente de Projetos", 9500);

    // Alimentando o sistema da empresa
    empresa.adicionarFuncionario(func1);
    empresa.adicionarFuncionario(func2);
    empresa.adicionarFuncionario(func3);
}

function atualizarSalarioTeste(empresa: Empresa): void {
    console.log("\n-> Atualizando o salário do funcionário 102:");
    empresa.atualizarSalario(102, 5000); // Sucesso

    console.log("\n-> Tentando atualizar o salário de uma matrícula inexistente (999):");
    empresa.atualizarSalario(999, 3000); // Vai dar erro
}

function consultarFuncionarioTeste(empresa: Empresa): void {
    console.log("\n-> Consultando funcionário 101:");
    const f1 = empresa.consultarFuncionario(101);
    // Como o retorno pode ser undefined, verificamos se ele achou antes de imprimir no console
    if (f1) {
        console.log(`Dados encontrados: Nome: ${f1.nome} | Cargo: ${f1.cargo} | Salário atual: R$ ${f1.salario}`);
    }

    console.log("\n-> Consultando funcionário inexistente (999):");
    empresa.consultarFuncionario(999); // Vai imprimir a mensagem de erro do método
}

// 4. EXECUTANDO A APLICAÇÃO

console.log("=== INICIANDO SISTEMA DE RH ===");
const minhaEmpresa = new Empresa();

console.log("\n=== CADASTRANDO FUNCIONÁRIOS ===");
cadastrarFuncionarios(minhaEmpresa);

console.log("\n=== ATUALIZANDO SALÁRIOS ===");
atualizarSalarioTeste(minhaEmpresa);

console.log("\n=== CONSULTANDO FUNCIONÁRIOS ===");
consultarFuncionarioTeste(minhaEmpresa);