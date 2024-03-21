import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastDuplasena = async() => {
  const duplasena = await prisma.duplasena.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return duplasena[0]
}

export const getDuplasena = async(request: FastifyRequest, reply: FastifyReply) => {
  const duplasena = await getLastDuplasena()

  if (!duplasena) {
    return reply.status(400).send({ duplasena: 'not found' })
  }

  return reply.status(200).send(duplasena)
}

export const createDuplasena = async() => {
  const results = await api.get<Api>('/duplasena').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastDuplasenaRegister = await getLastDuplasena()

  if (results?.numero === lastDuplasenaRegister?.numero) {
    return { status: 409, duplasena: 'already exists' }
  }

  try {
    await prisma.duplasena.create({
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
    return { status: 400, duplasena: 'error', err }
  }

  return { status: 201, duplasena: 'created' }
}

export const registerDuplasena = async(request: FastifyRequest, reply: FastifyReply) => {
  const newDuplasena = await createDuplasena()

  return reply.status(newDuplasena.status).send(newDuplasena)
}