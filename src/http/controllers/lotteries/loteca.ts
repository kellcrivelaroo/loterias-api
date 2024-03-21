import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastLoteca = async() => {
  const loteca = await prisma.loteca.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return loteca[0]
}

export const getLoteca = async(request: FastifyRequest, reply: FastifyReply) => {
  const loteca = await getLastLoteca()

  if (!loteca) {
    return reply.status(400).send({ loteca: 'not found' })
  }

  return reply.status(200).send(loteca)
}

export const createLoteca = async() => {
  const results = await api.get<Api>('/loteca').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastLotecaRegister = await getLastLoteca()

  if (results?.numero === lastLotecaRegister?.numero) {
    return { status: 409, loteca: 'already exists' }
  }

  try {
    await prisma.loteca.create({
      data: {
        numero: results?.numero,
        data_apuracao: results?.dataApuracao,
        data_proximo_concurso: results?.dataProximoConcurso || "", 
        acumulado: results?.acumulado || false,
        premiacao: results?.listaRateioPremio || [],
        dezenas: results?.listaDezenas || [],
        dezenas_segundo_sorteio: results?.listaDezenasSegundoSorteio || [],
        local_sorteio: results?.localSorteio || "",
        municipio_sorteio: results?.nomeMunicipioUFSorteio || "",
        lista_municipio_ganhadores: results?.listaMunicipioUFGanhadores || [],
        valor_arrecadado: results?.valorArrecadado || 0,
        valor_acumulado_especial: results?.valorAcumuladoConcursoEspecial || 0,
        valor_acumulado_proximo_concurso: results?.valorAcumuladoProximoConcurso || 0,
        valor_estimado_proximo_concurso: results?.valorEstimadoProximoConcurso || 0,
        valor_acumulado_concurso_zero_cinco: results?.valorAcumuladoConcurso_0_5 || 0,
        resultado_equipe_esportiva: results?.listaResultadoEquipeEsportiva || [],
      }
    })
  } catch (err) {
    return { status: 400, loteca: 'error', err }
  }

  return { status: 201, loteca: 'created' }
}

export const registerLoteca = async(request: FastifyRequest, reply: FastifyReply) => {
  const newLoteca = await createLoteca()

  return reply.status(newLoteca.status).send(newLoteca)
}