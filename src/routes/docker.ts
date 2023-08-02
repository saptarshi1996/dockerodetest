import { getInfo, listContainer } from '../controllers/docker'

import { appendBasePath } from '../helpers/route'

import type IRoute from '../interfaces/route'

const routes: IRoute[] = [
  {
    path: 'container',
    method: 'GET',
    controller: listContainer
  },
  {
    path: 'info',
    method: 'GET',
    controller: getInfo
  }
]

export default appendBasePath({
  basePath: 'docker',
  routes
})
