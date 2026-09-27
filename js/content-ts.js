(function (global) {
  global.StudyGuide = global.StudyGuide || {};

  const ts = {
    historia: `Criado pela <b>Microsoft</b> e liderado por <b>Anders Hejlsberg</b>, foi anunciado em <b>2012</b>. É um superconjunto do JavaScript: adiciona tipos estáticos e compila para JS puro.`,

    playground: `<a href="https://www.typescriptlang.org/play">TypeScript Playground</a> (oficial)<br><a href="https://codesandbox.io">CodeSandbox</a>`,

    instalacao: `Pré-requisito: <b>Node.js</b>. Instale o compilador globalmente:<br><code>npm install -g typescript</code><br>Conferir: <code>tsc --version</code><br>Sem instalar: <code>npx tsc --version</code>`,

    comandos: `Criar projeto: <code>npm init -y</code> + <code>npm install -D typescript</code><br>Gerar configuração: <code>npx tsc --init</code> (cria o <code>tsconfig.json</code>)<br>Compilar: <code>npx tsc</code> · assistir mudanças: <code>npx tsc --watch</code><br>Rodar o JS gerado: <code>node app.js</code><br>Executar direto: <code>npx tsx app.ts</code>`,

    tipos: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>// Tipos explícitos e inferência
const idade: number = 30;
const preco = 9.99;            // number (inferido)
const nome: string = "Ana";
const ativo: boolean = true;
const lista: number[] = [1, 2, 3];
const pessoa: { nome: string; idade: number } = { nome: "Ana", idade: 30 };

// Union e literal
let status: "ok" | "erro" = "ok";
let id: number | string = 42;

console.log(idade, preco, nome, ativo, lista, pessoa);
console.log(status, id);</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">30 9.99 Ana true [ 1, 2, 3 ] { nome: 'Ana', idade: 30 }
ok 42</pre>`,

    funcoes: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>// Parâmetros e retorno tipados
function soma(a: number, b: number): number {
  return a + b;
}

// Valor padrão + arrow function
const saudar = (nome: string = "visitante"): string =&gt; \`Olá, \${nome}!\`;

// Parâmetro opcional
function repetir(texto: string, vezes?: number): string {
  return texto.repeat(vezes ?? 1);
}

console.log(soma(2, 3));        // 5
console.log(saudar("Ana"));     // Olá, Ana!
console.log(repetir("oi", 2));  // oioi</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">5
Olá, Ana!
oioi</pre>`,

    entrada: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>// Entrada de dados no terminal (Node 18+)
import { createInterface } from "node:readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question("Seu nome? ", (nome) =&gt; {
  console.log(\`Olá, \${nome}!\`);
  rl.close();
});</pre></div><div class="rodar">▶ Rodar: <code>npx tsx app.ts</code></div><div class="saida-titulo">Saída</div><pre class="saida">Seu nome? Ana
Olá, Ana!</pre>`,

    calculos: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>const a = 10, b = 3;
console.log(a + b);              // 13
console.log(a - b);              // 7
console.log(a * b);              // 30
console.log(a / b);              // 3.333...
console.log(a % b);              // 1
console.log(a ** b);             // 1000
console.log(Math.floor(a / b));  // 3</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">13
7
30
3.3333333333333335
1
1000
3</pre>`,

    strings: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>const nome = "Ana";
const saudacao = \`Olá, \${nome}!\`;
console.log(saudacao.toUpperCase());         // OLÁ, ANA!
console.log(saudacao.length);                // 10
console.log(saudacao.replace("Ana", "Bia")); // Olá, Bia!
console.log(saudacao.split(" "));            // [ 'Olá,', 'Ana!' ]
console.log(saudacao.includes("Ana"));       // true
console.log("ana" === "Ana");                // false</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">OLÁ, ANA!
10
Olá, Bia!
[ 'Olá,', 'Ana!' ]
true
false</pre>`,

    loops: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>for (let i = 0; i &lt; 3; i++) console.log(i);

const frutas = ["maçã", "banana"];
for (const fruta of frutas) console.log(fruta);

let n = 0;
while (n &lt; 2) console.log(n++);</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">0
1
2
maçã
banana
0
1</pre>`,

    condicionais: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>const nota = 8;
if (nota &gt;= 7) console.log("Aprovado");
else if (nota &gt;= 5) console.log("Recuperação");
else console.log("Reprovado");

const dia = 1;
switch (dia) {
  case 0: console.log("domingo"); break;
  case 1: console.log("segunda"); break;
  default: console.log("outro");
}

const resultado = nota &gt;= 7 ? "passou" : "não passou";
console.log(resultado);</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">Aprovado
segunda
passou</pre>`,

    colecoes: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>const notas: number[] = [8, 9, 10];
const total = notas.reduce((acc, n) =&gt; acc + n, 0);
console.log(total);                 // 27

const idades = new Map&lt;string, number&gt;([["Ana", 30], ["Bia", 25]]);
console.log(idades.get("Ana"));     // 30

const unicos = new Set([1, 2, 2, 3]);
console.log([...unicos]);           // [ 1, 2, 3 ]</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">27
30
[ 1, 2, 3 ]</pre>`,

    datas: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>const agora = new Date();
console.log(agora.toISOString());
console.log(agora.toLocaleDateString("pt-BR"));

const fmt = new Intl.DateTimeFormat("pt-BR", { dateStyle: "full" });
console.log(fmt.format(agora));</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">2026-09-26T00:00:00.000Z
26/09/2026
sexta-feira, 26 de setembro de 2026</pre>`,

    poo: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>class Conta {
  constructor(protected saldo: number) {}
  depositar(valor: number): void { this.saldo += valor; }
  saldoAtual(): number { return this.saldo; }
}

class Poupanca extends Conta {
  render(): number { return this.saldo * 0.05; }
}

const conta = new Poupanca(100);
conta.depositar(50);
console.log(conta.saldoAtual());  // 150
console.log(conta.render());      // 7.5</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">150
7.5</pre>`,

    erros: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>try {
  JSON.parse("inválido");
} catch (erro) {
  console.log((erro as Error).message);
}</pre></div><div class="rodar">▶ Rodar: <code>npx tsc app.ts &amp;&amp; node app.js</code></div><div class="saida-titulo">Saída</div><pre class="saida">Unexpected token 'i', "inválido" is not valid JSON</pre>`,

    banco: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>// Precisa de: npm install mysql2
import mysql from "mysql2/promise";

const db = await mysql.createConnection({
  host: "localhost", user: "root", password: "", database: "teste",
});
const [rows] = await db.execute("SELECT * FROM usuarios");
console.log(rows);
await db.end();</pre></div><div class="rodar">▶ Rodar: <code>npx tsx app.ts</code></div><div class="saida-titulo">Saída</div><pre class="saida">[ { id: 1, nome: 'Ana', email: 'ana@ex.com' } ]</pre>`,

    crud: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>// Precisa de: npm install pg
import pg from "pg";

const client = new pg.Client({ user: "postgres", password: "", database: "teste" });
await client.connect();
await client.query(\`INSERT INTO usuarios (nome, email) VALUES ('Ana', 'ana@ex.com')\`);
const res = await client.query("SELECT * FROM usuarios");
console.log(res.rows);
await client.end();</pre></div><div class="rodar">▶ Rodar: <code>npx tsx app.ts</code></div><div class="saida-titulo">Saída</div><pre class="saida">[ { id: 1, nome: 'Ana', email: 'ana@ex.com' } ]</pre>`,

    http: `<div class="codigo"><button class="copiar" type="button">copiar</button><pre>import http from "node:http";

const server = http.createServer((req, res) =&gt; {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify([{ id: 1, nome: "Ana" }]));
});
server.listen(8080, () =&gt; console.log("Rodando em http://localhost:8080"));</pre></div><div class="rodar">▶ Rodar: <code>npx tsx app.ts</code> · depois <code>curl http://localhost:8080</code></div><div class="saida-titulo">Saída</div><pre class="saida">Rodando em http://localhost:8080
# em outro terminal: curl http://localhost:8080
[{"id":1,"nome":"Ana"}]</pre>`,

    frameworks: `<a href="https://angular.dev">Angular</a> (framework completo)<br><a href="https://nestjs.com">NestJS</a> (backend)<br><a href="https://nextjs.org">Next.js</a> e <a href="https://nuxt.com">Nuxt</a> usam TypeScript por padrão`,

    usos: `Aplicações web e APIs com segurança de tipos: frontend (Angular, React) e backend (Node.js, NestJS). Ideal para bases de código grandes mantidas em equipe.`,
  };

  for (const topicId in ts) {
    global.StudyGuide.cells[topicId] = global.StudyGuide.cells[topicId] || {};
    global.StudyGuide.cells[topicId].ts = ts[topicId];
  }
})(window);
