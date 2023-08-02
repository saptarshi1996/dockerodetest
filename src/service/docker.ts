import Docker from 'dockerode'

const docker = new Docker()

export const getDockerInfo = async () => {
  try {
    const {
      Containers,
      ContainersRunning,
      ContainersStopped,
      Images,
      NCPU,
      MemTotal
    } = await docker.info()
    return await Promise.resolve({
      container: Containers,
      running: ContainersRunning,
      stopped: ContainersStopped,
      image: Images,
      cpu: NCPU,
      memory: `${(MemTotal / (1024 * 1024 * 1024)).toFixed(2)} GB`
    })
  } catch (ex: any) {
    return await Promise.reject(new Error(ex.message))
  }
}

export const listAllContainers = async (status: string) => {
  try {
    let conditionList: string[] = []
    if (!status || (status && status === 'running')) {
      conditionList = ['running']
    } else if (status === 'all') {
      conditionList = [
        'created',
        'restarting',
        'running',
        'removing',
        'paused',
        'exited',
        'dead'
      ]
    }

    const containerList = await docker.listContainers({
      filters: {
        status: conditionList
      }
    })

    const containers = containerList.map((container) => {
      const {
        Id,
        Image,
        Names,
        ImageID,
        State,
        Status
      } = container
      return {
        id: Id,
        image: Image,
        name: Names[0].substring(1, Names[0].length),
        imageId: ImageID,
        state: State,
        status: Status
      }
    })
    return await Promise.resolve(containers)
  } catch (ex: any) {
    return await Promise.reject(new Error(ex.message))
  }
}
