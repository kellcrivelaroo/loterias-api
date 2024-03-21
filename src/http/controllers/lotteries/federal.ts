import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastFederal = async() => {
  const federal = await prisma.federal.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return federal[0]
}

export const getFederal = async(request: FastifyRequest, reply: FastifyReply) => {
  const federal = await getLastFederal()

  if (!federal) {
    return reply.status(400).send({ federal: 'not found' })
  }

  return reply.status(200).send(federal)
}

export const createFederal = async() => {
  const results = await api.get<Api>('/federal').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastFederalRegister = await getLastFederal()

  if (results?.numero === lastFederalRegister?.numero) {
    return { status: 409, federal: 'already exists' }
  }

  try {
    await prisma.federal.create({
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
    return { status: 400, federal: 'error', err }
  }

  return { status: 201, federal: 'created' }
}

export const registerFederal = async(request: FastifyRequest, reply: FastifyReply) => {
  const newFederal = await createFederal()

  return reply.status(newFederal.status).send(newFederal)
}