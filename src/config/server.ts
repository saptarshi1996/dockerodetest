import express from 'express'

import { type Application } from 'express'
import cors from 'cors'

import router from '../routes'

export const getServer = async (): Promise<Application> => {
  const app: Application = express()

  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  app.use(cors())

  app.use('/', router)

  return app
}
