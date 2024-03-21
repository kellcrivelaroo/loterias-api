import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastTimemania = async() => {
  const timemania = await prisma.timemania.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return timemania[0]
}

export const getTimemania = async(request: FastifyRequest, reply: FastifyReply) => {
  const timemania = await getLastTimemania()

  if (!timemania) {
    return reply.status(400).send({ timemania: 'not found' })
  }

  return reply.status(200).send(timemania)
}

export const createTimemania = async() => {
  const results = await api.get<Api>('/timemania').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastTimemaniaRegister = await getLastTimemania()

  if (results?.numero === lastTimemaniaRegister?.numero) {
    return { status: 409, timemania: 'already exists' }
  }

  try {
    await prisma.timemania.create({
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
        time_coracao: results?.nomeTimeCoracaoMesSorte || "",
      }
    })
  } catch (err) {
    return { status: 400, timemania: 'error', err }
  }

  return { status: 201, timemania: 'created' }
}

export const registerTimemania = async(request: FastifyRequest, reply: FastifyReply) => {
  const newTimemania = await createTimemania()

  return reply.status(newTimemania.status).send(newTimemania)
}