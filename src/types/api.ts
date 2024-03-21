export interface Api {
  acumulado: boolean
  dataApuracao: string
  dataProximoConcurso: string
  dezenasSorteadasOrdemSorteio: string[]
  exibirDetalhamentoPorCidade: boolean
  id: any
  indicadorConcursoEspecial: number
  listaDezenas: string[]
  listaDezenasSegundoSorteio: string[]
  listaMunicipioUFGanhadores: ListaMunicipioUfganhadore[]
  listaRateioPremio: ListaRateioPremio[]
  listaResultadoEquipeEsportiva: ListaResultadoEquipeEsportiva[]
  localSorteio: string
  nomeMunicipioUFSorteio: string
  nomeTimeCoracaoMesSorte: string
  numero: number
  numeroConcursoAnterior: number
  numeroConcursoFinal_0_5: number
  numeroConcursoProximo: number
  numeroJogo: number
  observacao: string
  premiacaoContingencia: any
  tipoJogo: string
  tipoPublicacao: number
  ultimoConcurso: boolean
  valorArrecadado: number
  valorAcumuladoConcurso_0_5: number
  valorAcumuladoConcursoEspecial: number
  valorAcumuladoProximoConcurso: number
  valorEstimadoProximoConcurso: number
  valorSaldoReservaGarantidora: number
  valorTotalPremioFaixaUm: number
  trevosSorteados: string[]
}

type ListaRateioPremio = {
  descricaoFaixa: string
  faixa: number
  numeroDeGanhadores: number
  valorPremio: number
}

type ListaMunicipioUfganhadore = {
  ganhadores: number
  municipio: string
  nomeFatansiaUL: string
  posicao: number
  serie: string
  uf: string
}

type ListaResultadoEquipeEsportiva = {
  diaSemana: string
  dtJogo: string
  icSorteioResultado: number
  nomeCampeonato: string
  nomeEquipeDois: string
  nomeEquipeUm: string
  nuConcurso: number
  nuGolEquipeDois: number
  nuGolEquipeUm: number
  nuJogo: number
  nuSequencial: number
  resultado: any
  siglaPaisDois: string
  siglaPaisUm: string
  siglaUFDois: string
  siglaUFUm: string
}