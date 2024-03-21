import type { FastifyReply, FastifyRequest } from "fastify"
import { getLastMegasena } from "./lotteries/megasena.js"
import { getLastQuina } from "./lotteries/quina.js"
import { getLastLotofacil } from "./lotteries/lotofacil.js"
import { getLastMilionaria } from "./lotteries/maismilionaria.js"
import { getLastDiaDeSorte } from "./lotteries/diadesorte.js"
import { getLastDuplasena } from "./lotteries/duplasena.js"
import { getLastFederal } from "./lotteries/federal.js"
import { getLastLoteca } from "./lotteries/loteca.js"
import { getLastLotomania } from "./lotteries/lotomania.js"
import { getLastSuperSete } from "./lotteries/supersete.js"
import { getLastTimemania } from "./lotteries/timemania.js"

export const getAll = async(request: FastifyRequest, reply: FastifyReply) => {
	let response
	try {
		const megasena = await getLastMegasena()
		const diadesorte = await getLastDiaDeSorte()
		const duplasena = await getLastDuplasena()
		const federal = await getLastFederal()
		const loteca = await getLastLoteca()
		const lotofacil = await getLastLotofacil()
		const lotomania = await getLastLotomania()
		const milionaria = await getLastMilionaria()
		const quina = await getLastQuina()
		const supersete = await getLastSuperSete()
		const timemania = await getLastTimemania()
		const notFound = { not: 'found' }
		
		response = {
			megasena: megasena ?? notFound,
			lotofacil: lotofacil ?? notFound,
			diadesorte: diadesorte ?? notFound,
			duplasena: duplasena ?? notFound,
			federal: federal ?? notFound,
			loteca: loteca ?? notFound,
			lotomania: lotomania ?? notFound,
			milionaria: milionaria ?? notFound,
			quina: quina ?? notFound,
			supersete: supersete ?? notFound,
			timemania: timemania ?? notFound,
		}
	} catch (err) {
		return reply.status(400).send({ err })
	}

	return reply.status(200).send(response)
}