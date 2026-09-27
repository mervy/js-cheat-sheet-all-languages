# Syntax Field Guide

Guia interativo para estudar fundamentos de programação em **uma linguagem por vez**: escolha a linguagem, escolha o tópico e veja só o material daquela linguagem. Interface em português brasileiro, 100% estática.

- **Início do projeto:** 2026-09-26
- **Repositório:** <https://github.com/mervy/js-cheat-sheet-all-languages>
- **Site (GitHub Pages):** <https://mervy.github.io/js-cheat-sheet-all-languages/>

## Plano

**Objetivo:** transformar uma comparação densa entre linguagens em uma experiência de estudo legível — selecionar a linguagem, escolher o tópico e consultar somente o material daquela linguagem.

**Escopo:** catálogo curado de 10 linguagens (JavaScript, TypeScript, Python, PHP, Go, Rust, C, C++, C# e Java) com **20 tópicos** comuns — da história e instalação até banco de dados, CRUD e API HTTP. Cada ficha mostra um **programa completo e testado**: o código, como rodar e a saída esperada.

**Implementação:** site estático em HTML e JavaScript, sem backend, framework ou etapa de build. Código modular em `js/` (dados, conteúdo, renderização e bootstrap separados), dirigido por dados para permitir adicionar linguagens e tópicos sem mexer na lógica.

**Critérios de aceite:** a troca de linguagem atualiza título, perfil, extensão, comando e exemplo; a troca de tópico atualiza conteúdo, índice, progresso e URL; só o conteúdo da linguagem selecionada aparece por vez; o layout é utilizável em telas estreitas e largas; o README explica execução, catálogo e escopo.

## Como usar

Abra `index.html` em um navegador (ou sirva a pasta com qualquer servidor estático). Escolha a linguagem no seletor superior e navegue pelos tópicos na lateral. Cada ficha apresenta:

- o código (programa completo, com botão **copiar**);
- o comando para rodar;
- a saída esperada;
- observações do tópico.

A seleção fica na query string — ex.: `?lang=ts&topic=funcoes` — então dá para compartilhar uma ficha específica.

## Linguagens incluídas

JavaScript, TypeScript, Python, PHP, Go, Rust, C, C++, C# e Java.

## Tópicos desta versão

1. História (quem, quando, por quê)
2. Playground online
3. Instalação (Windows / Linux)
4. Comandos: criar / rodar programas
5. Tipos de dados
6. Funções
7. Entrada de dados no terminal (prompt)
8. Cálculos
9. Strings
10. Loops
11. if / else / match / switch
12. Arrays / Listas / Dicionários
13. Datas e horas
14. Classes / POO
15. Tratamento de erros
16. Banco de dados: conectar e listar (MySQL)
17. CRUD: criar, ler, editar, apagar (Postgres)
18. API HTTP (teste com curl)
19. Frameworks e bibliotecas populares
20. Principais usos

O catálogo é curado, não uma lista literal de todas as linguagens existentes. Para adicionar um tópico ou linguagem, crie a entrada em `js/data.js` e preencha a célula em `js/content.js` (e `js/content-ts.js`).

## Publicação

O projeto é estático e pode ser publicado no GitHub Pages. Não há etapa de build ou dependência de runtime; abra `index.html` localmente para testar. DM Sans, DM Mono e Fraunces são carregadas do Google Fonts; sem conexão, o navegador usa fontes alternativas locais.

## Arquivos

- `index.html`: estrutura e estilos da página.
- `js/data.js`: tópicos (20) e metadados das 10 linguagens.
- `js/content.js`: células das 9 linguagens (código, como rodar, saída).
- `js/content-ts.js`: células do TypeScript.
- `js/render.js`: renderização da interface.
- `js/app.js`: estado, eventos e inicialização.
- `.docs/plan.md`: objetivo e critérios do projeto.
- `.docs/tasks.md`: acompanhamento das entregas.
