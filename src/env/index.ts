import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  API_URL: z.string().url(),
  PORT: z.coerce.number().default(8080),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.log('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables')
} 

export const env = _env.data