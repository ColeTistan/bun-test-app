import { Hono } from 'hono'
import { config } from 'dotenv'

config();

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Bun and Hono!')
})

export default app;