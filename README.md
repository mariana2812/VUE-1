# Pokédex em Vue

Recriação da minha Pokédex feita em JavaScript vanilla, mantendo as cores, os cards por tipo e a paginação do trabalho original.

## Executar

Instale Node.js compatível com o Vite 8 (20.19+ ou 22.12+).

```bash
npm install
npm run dev
```

Para verificar o TypeScript e gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Organização

- `src/components/Header.vue`: cabeçalho.
- `src/components/Button.vue`: botão reutilizável com prop.
- `src/components/pokedex/`: lista, card, paginação, detalhes e características.
- `src/view/Home.vue`: tela inicial.
- `src/view/Pokemon.vue`: tela de um Pokémon.
- `src/router/index.ts`: rotas Home e Pokemon.
- `src/schemas/pokemon.interface.ts`: interfaces dos dados.

## Regras da atividade

- Requisições com Axios à PokéAPI.
- Componentes para as partes das telas.
- Props para passar Pokémon, textos e características.
- Vue Router para `/` e `/pokemon/:id`.
- Lista com 20 Pokémon por página, carregamento e mensagens de erro.

A tela de detalhes busca o Pokémon pelo ID da URL, inclusive ao abrir o endereço diretamente. Altura e peso são convertidos para metros e quilos.

Requer internet para consultar a PokéAPI e carregar imagens. Em hospedagem estática, configure o redirecionamento das rotas para `index.html`, pois o projeto usa `createWebHistory`.


