import { Router } from 'express'

import dockerRoute from './docker'

import wrapAsync from '../wrappers/async'

import type IRoute from '../interfaces/route'

const router = Router()

const routes = [
  ...dockerRoute
]

routes.forEach((route: IRoute) => {
  switch (route.method) {
    case 'POST': {
      router.post(route.path, wrapAsync(route.controller))
      break
    }
    case 'GET': {
      router.get(route.path, wrapAsync(route.controller))
      break
    }
  }
})

export default router
