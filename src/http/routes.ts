import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { getAll } from "./controllers/get-all.js";
import { getMegasena, registerMegasena } from "./controllers/lotteries/megasena.js";
import { getQuina, registerQuina } from "./controllers/lotteries/quina.js";
import { getLotofacil, registerLotofacil } from "./controllers/lotteries/lotofacil.js";
import { registerAll } from "./controllers/register-all.js";
import { getMilionaria, registerMilionaria } from "./controllers/lotteries/maismilionaria.js";
import { getDiaDeSorte, registerDiaDeSorte } from "./controllers/lotteries/diadesorte.js";
import { getDuplasena, registerDuplasena } from "./controllers/lotteries/duplasena.js";
import { getFederal, registerFederal } from "./controllers/lotteries/federal.js";
import { getLoteca, registerLoteca } from "./controllers/lotteries/loteca.js";
import { getLotomania, registerLotomania } from "./controllers/lotteries/lotomania.js";
import { getSuperSete, registerSuperSete } from "./controllers/lotteries/supersete.js";
import { getTimemania, registerTimemania } from "./controllers/lotteries/timemania.js";
import { api } from "src/lib/axios.js";
import { Api } from "src/types/api.js";

export const appRoutes = async (app: FastifyInstance) => {
  app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    const results = await api.get<Api>('megasena/latest').then(res => res.data)
    return reply.status(200).send(results)
  })

  app.get('/get-all', getAll)
  app.get('/register-all', registerAll)
  
  app.get('/megasena', getMegasena)
  app.get('/register-megasena', registerMegasena)
  
  app.get('/diadesorte', getDiaDeSorte)
  app.get('/register-diadesorte', registerDiaDeSorte)
  
  app.get('/duplasena', getDuplasena)
  app.get('/register-duplasena', registerDuplasena)
  
  app.get('/federal', getFederal)
  app.get('/register-federal', registerFederal)
  
  app.get('/loteca', getLoteca)
  app.get('/register-loteca', registerLoteca)
  
  app.get('/lotofacil', getLotofacil)
  app.get('/register-lotofacil', registerLotofacil)
  
  app.get('/lotomania', getLotomania)
  app.get('/register-lotomania', registerLotomania)
  
  app.get('/milionaria', getMilionaria)
  app.get('/register-milionaria', registerMilionaria)

  app.get('/quina', getQuina)
  app.get('/register-quina', registerQuina)

  app.get('/supersete', getSuperSete)
  app.get('/register-supersete', registerSuperSete)

  app.get('/timemania', getTimemania)
  app.get('/register-timemania', registerTimemania)
}