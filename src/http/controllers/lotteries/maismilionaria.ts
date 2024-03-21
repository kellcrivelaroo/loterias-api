import { api } from "../../../lib/axios.js"
import { prisma } from "../../../lib/prisma.js"
import { type Api } from "../../../types/api.js"
import type { FastifyRequest, FastifyReply } from "fastify"

export const getLastMilionaria = async() => {
  const milionaria = await prisma.maisMilionaria.findMany({
    orderBy: {
      numero: 'desc',
    },
    take: 1,
  })

  return milionaria[0]
}

export const getMilionaria = async(request: FastifyRequest, reply: FastifyReply) => {
  const milionaria = await getLastMilionaria()

  if (!milionaria) {
    return reply.status(400).send({ milionaria: 'not found' })
  }

  return reply.status(200).send(milionaria)
}

export const createMilionaria = async() => {
  const results = await api.get<Api>('/maismilionaria').then(res => res.data)

  if (!results) return { status: 500, error: 'could not connect to API' }

  const lastMilionariaRegister = await getLastMilionaria()

  if (results?.numero === lastMilionariaRegister?.numero) {
    return { status: 409, milionaria: 'already exists' }
  }

  try {
    await prisma.maisMilionaria.create({
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
        valor_saldo_reserva_garantidora: results?.valorSaldoReservaGarantidora || 0,
        trevos_sorteados: results?.trevosSorteados || [],
      }
    })
  } catch (err) {
    return { status: 400, milionaria: 'error', err }
  }

  return { status: 201, milionaria: 'created' }
}

export const registerMilionaria = async(request: FastifyRequest, reply: FastifyReply) => {
  const newMilionaria = await createMilionaria()

  return reply.status(newMilionaria.status).send(newMilionaria)
}