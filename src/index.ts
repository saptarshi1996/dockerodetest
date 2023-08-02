import { type Application } from 'express'

import { config } from 'dotenv'

import { getServer } from './config/server'

config()

getServer().then((server: Application) => {
  const PORT = process.env.PORT as string
  const HOST = process.env.HOST as string

  server.listen(+PORT, HOST, () => {
    console.log('Server on PORT', PORT)
  })
}).catch(err => { throw err })
