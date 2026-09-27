(function (global) {
  global.StudyGuide = global.StudyGuide || {};

  // Trilha de estudo: adicione novos tópicos aqui e preencha a célula em content.js.
  global.StudyGuide.topics = [
    { id: "historia", label: "História", title: "História (quem, quando, por quê)", note: null },
    { id: "playground", label: "Playground", title: "Playground online", note: "Para testar sem instalar nada." },
    { id: "instalacao", label: "Instalação", title: "Instalação (Windows / Linux)", note: "Comandos de Linux para Ubuntu/Debian." },
    { id: "comandos", label: "Comandos", title: "Comandos: criar / rodar programas", note: null },
    { id: "tipos", label: "Tipos de dados", title: "Tipos de dados", note: null },
    { id: "funcoes", label: "Funções", title: "Funções", note: null },
    { id: "entrada", label: "Entrada", title: "Entrada de dados no terminal (prompt)", note: "O programa pausa e espera você digitar + Enter." },
    { id: "calculos", label: "Cálculos", title: "Cálculos", note: null },
    { id: "strings", label: "Strings", title: "Strings", note: null },
    { id: "loops", label: "Loops", title: "Loops", note: null },
    { id: "condicionais", label: "Condicionais", title: "if / else / match / switch", note: null },
    { id: "colecoes", label: "Coleções", title: "Arrays / Listas / Dicionários", note: null },
    { id: "datas", label: "Datas e horas", title: "Datas e horas", note: "A saída mostra o horário de quando o teste rodou." },
    { id: "poo", label: "Classes / POO", title: "Classes / POO", note: "Mesmo exemplo em todas: conta bancária com herança (Poupança) e polimorfismo." },
    { id: "erros", label: "Erros", title: "Tratamento de erros", note: null },
    { id: "banco", label: "Banco de dados", title: "Banco de dados: conectar e listar (MySQL)", note: "Tabela usada:<br><code>CREATE TABLE usuarios (id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(100), email VARCHAR(100));</code>" },
    { id: "crud", label: "CRUD", title: "CRUD: criar, ler, editar, apagar (Postgres)", note: "Lista a tabela depois de cada operação para você ver o efeito.<br>Tabela:<br><code>CREATE TABLE usuarios (id SERIAL PRIMARY KEY, nome TEXT, email TEXT);</code>" },
    { id: "http", label: "API HTTP", title: "API HTTP (teste com curl)", note: "Sobe um servidor na porta 8080. Em outro terminal:<br><code>curl http://localhost:8080/usuarios</code><br>ou abra o endereço no navegador." },
    { id: "frameworks", label: "Frameworks", title: "Frameworks e bibliotecas populares", note: "Clique para abrir o site oficial." },
    { id: "usos", label: "Principais usos", title: "Principais usos", note: null },
  ];

  // Catálogo de linguagens: adicione uma nova aqui e preencha as células em content.js.
  global.StudyGuide.languages = [
    { id: "js", name: "JavaScript", ext: "js", color: "#e6b840", run: "node app.js", family: "Multiparadigma", summary: "A linguagem da web: roda no navegador e no servidor, com tipagem dinâmica e um ecossistema enorme." },
    { id: "ts", name: "TypeScript", ext: "ts", color: "#4d79b7", run: "npx tsc app.ts && node app.js", family: "Tipagem estática · JavaScript", summary: "JavaScript com verificação estática de tipos, que compila para JS puro." },
    { id: "py", name: "Python", ext: "py", color: "#4c8c4a", run: "python3 app.py", family: "Multiparadigma", summary: "Sintaxe legível, muito usada em automação, ciência de dados e inteligência artificial." },
    { id: "php", name: "PHP", ext: "php", color: "#777bb3", run: "php app.php", family: "Multiparadigma", summary: "Linguagem de servidor que alimenta grande parte da web." },
    { id: "go", name: "Go", ext: "go", color: "#00add8", run: "go run main.go", family: "Compilada · concorrente", summary: "Compilada, simples de distribuir e com concorrência nativa." },
    { id: "rust", name: "Rust", ext: "rs", color: "#de6f3f", run: "cargo run", family: "Compilada · memória segura", summary: "Desempenho nativo com segurança de memória verificada em compilação." },
    { id: "c", name: "C", ext: "c", color: "#547fbd", run: "cc main.c -o main && ./main", family: "Compilada · procedural", summary: "A base dos sistemas operacionais e do software de baixo nível." },
    { id: "cpp", name: "C++", ext: "cpp", color: "#5a75bf", run: "c++ main.cpp -o main && ./main", family: "Compilada · multiparadigma", summary: "C com abstrações de alto nível; jogos e sistemas de desempenho." },
    { id: "cs", name: "C#", ext: "cs", color: "#6b6eaf", run: "dotnet run", family: "Compilada · orientada a objetos", summary: "Linguagem moderna do ecossistema .NET, multiplataforma." },
    { id: "java", name: "Java", ext: "java", color: "#df7947", run: "javac Main.java && java Main", family: "Compilada · orientada a objetos", summary: "Portabilidade via JVM e forte presença em sistemas corporativos." },
  ];
})(window);
