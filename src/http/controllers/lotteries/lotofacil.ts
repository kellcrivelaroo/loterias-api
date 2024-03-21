import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastLotofacil = async() => {
  const lotofacil = await prisma.lotofacil.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return lotofacil[0]
}

export const getLotofacil = async(request: FastifyRequest, reply: FastifyReply) => {
  const lotofacil = await getLastLotofacil()

  if (!lotofacil) {
    return reply.status(400).send({ lotofacil: 'not found' })
  }

  return reply.status(200).send(lotofacil)
}

export const createLotofacil = async() => {
  const results = await api.get<Api>('/lotofacil').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastLotofacilRegister = await getLastLotofacil()

  if (results?.numero === lastLotofacilRegister?.numero) {
    return { status: 409, lotofacil: 'already exists' }
  }

  try {
    await prisma.lotofacil.create({
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
    return { status: 400, lotofacil: 'error', err }
  }

  return { status: 201, lotofacil: 'created' }
}

export const registerLotofacil = async(request: FastifyRequest, reply: FastifyReply) => {
  const newLotofacil = await createLotofacil()

  return reply.status(newLotofacil.status).send(newLotofacil)
}