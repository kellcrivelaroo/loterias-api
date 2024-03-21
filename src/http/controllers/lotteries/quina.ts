import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastQuina = async() => {
  const quina = await prisma.quina.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return quina[0]
}

export const getQuina = async(request: FastifyRequest, reply: FastifyReply) => {
  const quina = await getLastQuina()

  if (!quina) {
    return reply.status(400).send({ quina: 'not found' })
  }

  return reply.status(200).send(quina)
}

export const createQuina = async() => {
  const results = await api.get<Api>('/quina').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastQuinaRegister = await getLastQuina()

  if (results?.numero === lastQuinaRegister?.numero) {
    return { status: 409, quina: 'already exists' }
  }

  try {
    await prisma.quina.create({
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
    return { status: 400, quina: 'error', err }
  }

  return { status: 201, quina: 'created' }
}

export const registerQuina = async(request: FastifyRequest, reply: FastifyReply) => {
  const newQuina = await createQuina()

  return reply.status(newQuina.status).send(newQuina)
}