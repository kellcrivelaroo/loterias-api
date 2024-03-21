import type { FastifyReply, FastifyRequest } from "fastify"
import { createMegasena } from "./lotteries/megasena.js"
import { createQuina } from "./lotteries/quina.js"
import { createLotofacil } from "./lotteries/lotofacil.js"
import { createMilionaria } from "./lotteries/maismilionaria.js"
import { createDiaDeSorte } from "./lotteries/diadesorte.js"
import { createDuplasena } from "./lotteries/duplasena.js"
import { createFederal } from "./lotteries/federal.js"
import { createLoteca } from "./lotteries/loteca.js"
import { createLotomania } from "./lotteries/lotomania.js"
import { createSuperSete } from "./lotteries/supersete.js"
import { createTimemania } from "./lotteries/timemania.js"

interface CreateAllResponse {
  status: number;
  response: Record<string, any>
}

export const createAll = async (): Promise<CreateAllResponse> => {
  let results
  try {
    const megasena = await createMegasena()
		const diadesorte = await createDiaDeSorte()
		const duplasena = await createDuplasena()
		const federal = await createFederal()
		const loteca = await createLoteca()
		const lotofacil = await createLotofacil()
		const lotomania = await createLotomania()
		const milionaria = await createMilionaria()
		const quina = await createQuina()
		const supersete = await createSuperSete()
		const timemania = await createTimemania()

    results = { 
      megasena,
      diadesorte,
      duplasena,
      federal,
      loteca,
      lotofacil,
      lotomania,
      milionaria,
      quina,
      supersete,
      timemania, 
    }
  } catch (err) {
    return { status: 400, response: { err } }
  }

	return { status: 201, response: results }
}

export const registerAll = async(request: FastifyRequest, reply: FastifyReply) => {
  let {status, response} = await createAll()

	return reply.status(status).send(response)
}