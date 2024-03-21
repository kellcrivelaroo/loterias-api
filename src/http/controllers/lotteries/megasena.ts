import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastMegasena = async() => {
  const mega = await prisma.megasena.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return mega[0]
}

export const getMegasena = async(request: FastifyRequest, reply: FastifyReply) => {
  const mega = await getLastMegasena()

  if (!mega) {
    return reply.status(400).send({ mega: 'not found' })
  }

  return reply.status(200).send(mega)
}

export const createMegasena = async() => {
  const results = await api.get<Api>('/megasena').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }
  
  const lastMegasenaRegister = await getLastMegasena()

  if (results?.numero === lastMegasenaRegister?.numero) {
    return { status: 409, mega: 'already exists' }
  }

  try {
    await prisma.megasena.create({
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
    return { status: 400, mega: 'error', err }
  }

  return { status: 201, mega: 'created' }
}

export const registerMegasena = async(request: FastifyRequest, reply: FastifyReply) => {
  const newMega = await createMegasena()

  return reply.status(newMega.status).send(newMega)
}