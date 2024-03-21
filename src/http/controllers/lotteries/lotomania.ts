import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastLotomania = async() => {
  const lotomania = await prisma.lotomania.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return lotomania[0]
}

export const getLotomania = async(request: FastifyRequest, reply: FastifyReply) => {
  const lotomania = await getLastLotomania()

  if (!lotomania) {
    return reply.status(400).send({ lotomania: 'not found' })
  }

  return reply.status(200).send(lotomania)
}

export const createLotomania = async() => {
  const results = await api.get<Api>('/lotomania').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastLotomaniaRegister = await getLastLotomania()

  if (results?.numero === lastLotomaniaRegister?.numero) {
    return { status: 409, lotomania: 'already exists' }
  }

  try {
    await prisma.lotomania.create({
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
      }
    })
  } catch (err) {
    return { status: 400, lotomania: 'error', err }
  }

  return { status: 201, lotomania: 'created' }
}

export const registerLotomania = async(request: FastifyRequest, reply: FastifyReply) => {
  const newLotomania = await createLotomania()

  return reply.status(newLotomania.status).send(newLotomania)
}