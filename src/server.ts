import Fastify from 'fastify'
import { env } from './env/index.js'
import { appRoutes } from './http/routes.js'
import { schedule } from './scheduler/index.js'

const port = env.PORT

schedule()

export const fastify = Fastify({
	logger: false,
})

fastify.register(appRoutes)

fastify.listen({ host: '0.0.0.0', port }, (err) => {
	if (err) {
		fastify.log.error(err)
		process.exit(1)
	}
	console.log(`Servidor rodando na porta ${port}`)
})