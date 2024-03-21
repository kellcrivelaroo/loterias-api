import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastSuperSete = async() => {
  const superSete = await prisma.superSete.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return superSete[0]
}

export const getSuperSete = async(request: FastifyRequest, reply: FastifyReply) => {
  const superSete = await getLastSuperSete()

  if (!superSete) {
    return reply.status(400).send({ superSete: 'not found' })
  }

  return reply.status(200).send(superSete)
}

export const createSuperSete = async() => {
  const results = await api.get<Api>('/supersete').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastSuperSeteRegister = await getLastSuperSete()

  if (results?.numero === lastSuperSeteRegister?.numero) {
    return { status: 409, superSete: 'already exists' }
  }

  try {
    await prisma.superSete.create({
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
        valor_total_faixa_um: results?.valorTotalPremioFaixaUm || 0,
      }
    })
  } catch (err) {
    return { status: 400, superSete: 'error', err }
  }

  return { status: 201, superSete: 'created' }
}

export const registerSuperSete = async(request: FastifyRequest, reply: FastifyReply) => {
  const newSuperSete = await createSuperSete()

  return reply.status(newSuperSete.status).send(newSuperSete)
}