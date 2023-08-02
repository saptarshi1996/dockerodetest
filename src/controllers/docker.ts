import { type Request } from 'express'

import {
  getDockerInfo,
  listAllContainers
} from '../service/docker'

export const listContainer = async (req: Request) => {
  const { status } = req.query as {
    status: string
  }
  const containerList = await listAllContainers(status)
  return { containerList }
}

export const getInfo = async (_: Request) => {
  const info = await getDockerInfo()
  return info
}
