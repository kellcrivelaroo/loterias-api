import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastDiaDeSorte = async() => {
  const diaDeSorte = await prisma.diaDeSorte.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return diaDeSorte[0]
}

export const getDiaDeSorte = async(request: FastifyRequest, reply: FastifyReply) => {
  const diaDeSorte = await getLastDiaDeSorte()

  if (!diaDeSorte) {
    return reply.status(400).send({ diaDeSorte: 'not found' })
  }

  return reply.status(200).send(diaDeSorte)
}

export const createDiaDeSorte = async() => {
  const results = await api.get<Api>('/diadesorte').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastDiaDeSorteRegister = await getLastDiaDeSorte()

  if (results?.numero === lastDiaDeSorteRegister?.numero) {
    return { status: 409, diaDeSorte: 'already exists' }
  }

  try {
    await prisma.diaDeSorte.create({
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
        mes_sorte: results?.nomeTimeCoracaoMesSorte || "",
      }
    })
  } catch (err) {
    return { status: 400, diaDeSorte: 'error', err }
  }

  return { status: 201, diaDeSorte: 'created' }
}

export const registerDiaDeSorte = async(request: FastifyRequest, reply: FastifyReply) => {
  const newDiaDeSorte = await createDiaDeSorte()

  return reply.status(newDiaDeSorte.status).send(newDiaDeSorte)
}