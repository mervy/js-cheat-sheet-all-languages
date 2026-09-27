# Plano: Syntax Field Guide

## Objetivo

Transformar uma comparação densa entre linguagens em uma experiência de estudo legível: selecionar uma linguagem, escolher um tópico e consultar somente o material daquela linguagem.

## Escopo

- Catálogo curado de 10 linguagens: JavaScript, TypeScript, Python, PHP, Go, Rust, C, C++, C# e Java.
- 20 tópicos comuns, da história e instalação até banco de dados, CRUD e API HTTP.
- Cada ficha traz um programa completo e testado: código, como rodar e saída esperada, com observações do tópico e cópia do código.
- Seleção persistida na query string para links compartilháveis.
- Layout responsivo e navegação acessível por teclado.

## Implementação

Site estático em HTML e JavaScript, sem backend, framework ou etapa de build. Código modular em `js/`: `data.js` (tópicos e linguagens), `content.js` (células das 9 linguagens), `content-ts.js` (células TypeScript), `render.js` (interface) e `app.js` (estado e eventos). O catálogo é dirigido por dados para permitir incluir novas linguagens e tópicos sem mexer na lógica.

## Critérios de aceite

- A troca de linguagem atualiza título, perfil e conteúdo.
- A troca de tópico atualiza conteúdo, índice, progresso e URL.
- Só o conteúdo da linguagem selecionada aparece por vez.
- Os exemplos são programas completos e executáveis.
- Layout utilizável em telas estreitas e largas.
- README explica execução, catálogo e escopo atual.
