# API

## RFs (Requisitos funcionais)

- [x] Deve ser possível obter os dados de todas as loterias em uma única rota;
- [x] Deve ser possível obter os dados de cada loteria individualmente;

## RNS (Regras de negócio)

- [x] Deve armazenar os dados de todas as rotas de loterias da caixa;
- [ ] Deve registrar automaticamente os dados da api da caixa próximo ao horário de virada de resultados;

## RNFs (Requisitos não-funcionais)

- [ ] A rota só pode ser acessada por aplicações cadastradas;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL


```
[
  "maismilionaria",
  "megasena",
  "lotofacil",
  "quina",
  "lotomania",
  "timemania",
  "duplasena",
  "federal",
  "diadesorte",
  "supersete"
  "loteca",
]
```