
## Resumo

1. [Sobre o Projeto](#sobre-o-projeto)  
2. [Estrutura do Projeto](#estrutura-do-projeto)  
3. [Algoritmo Flood Fill](#algoritmo-flood-fill)  
    - [Exemplo de Uso](#exemplo-de-uso)  
    - [Objetivo do Jogo](#objetivo-do-jogo)  

## Sobre o Projeto

O projeto **FloodFill** é uma aplicação interativa desenvolvida utilizando **React**, **TypeScript** e **Vite**. Ele simula o famoso algoritmo flood fill, comumente usado em editores de imagem (como a ferramenta "balde de tinta"). O objetivo do jogo é preencher uma grade de quadrados com a mesma cor utilizando o menor número de cliques possível.

A interface do usuário permite:  
- Selecionar uma cor para preencher os quadrados.  
- Clicar em um quadrado para aplicar o preenchimento.  
- Embaralhar a grade para iniciar um novo jogo.  
- Visualizar o número de cliques realizados e receber feedback visual ao vencer.  

## Estrutura do Projeto

O projeto está organizado em arquivos modulares, com as principais funcionalidades divididas da seguinte forma:  
- **`src/App.tsx`**: O componente principal que gerencia o estado da grade, a cor selecionada e a contagem de cliques.  
- **`src/components/SquareMatrixComponent/index.tsx`**: Componente que renderiza a grade de quadrados e aplica o algoritmo flood fill.  
- **`src/utils/floodFill.ts`**: Implementação do algoritmo flood fill.  
- **`src/utils/allSameColor.ts`**: Função que verifica se todos os quadrados da grade possuem a mesma cor.  
- **`src/types/colorClasses.ts`**: Define as cores disponíveis no jogo.  

## Algoritmo Flood Fill

- O algoritmo `floodFill` é um método usado para preencher uma área conectada em um array multidimensional (como uma grade ou imagem) a partir de um ponto inicial. Ele é comumente utilizado em aplicações como edição de imagens (ex.: a ferramenta "balde de tinta") e busca de caminhos.  
- O algoritmo começa em um ponto específico da grade e substitui todas as células conectadas com a mesma cor alvo por uma nova cor. Ele utiliza uma abordagem recursiva de Busca em Profundidade (DFS) para percorrer a grade.  
- Esta implementação é escrita em TypeScript e projetada para funcionar com uma grade de objetos, onde cada objeto possui uma propriedade `color`.  

O arquivo [`src/utils/floodFill.ts`](src/utils/floodFill.ts) implementa o algoritmo flood fill. Aqui está um resumo de como ele funciona:  

1. **Entrada**:  
  - **`matrix`**: Um array 2D de objetos, onde cada objeto possui uma propriedade `color`.  
  - **`row`**: O índice da linha inicial.  
  - **`col`**: O índice da coluna inicial.  
  - **`newColor`**: A cor que substituirá a cor alvo.  

2. **Inicialização**:  
  - Determinar as dimensões da grade (`numRows` e `numCols`).  
  - Identificar a cor alvo no ponto inicial.  

3. **Caso Base**:  
  - Se a cor alvo for igual à nova cor, retornar a grade original (nenhuma alteração é necessária).  

4. **DFS Recursivo**:  
  - Verificar se a célula atual está dentro dos limites e corresponde à cor alvo.  
  - Substituir a cor alvo pela nova cor.  
  - Chamar a função recursivamente para as células vizinhas (acima, abaixo, à esquerda, à direita).  

5. **Terminação**:  
  - A recursão para quando a célula está fora dos limites ou não corresponde à cor alvo.  

### Exemplo de Uso

No componente [`SquareMatrix`](src/components/SquareMatrixComponent/index.tsx), o algoritmo é acionado quando um quadrado é clicado. Ele atualiza a grade com as novas cores e incrementa o contador de cliques.  

### Objetivo do Jogo

O objetivo é preencher toda a grade com a mesma cor utilizando o menor número de cliques possível. A vitória é detectada pela função [`allSameColor`](src/utils/allSameColor.ts), que verifica se todas as células possuem a mesma cor.  

Este projeto combina conceitos de algoritmos, interatividade e design responsivo, sendo uma ótima demonstração de como unir lógica e interface de usuário em uma aplicação moderna.  

