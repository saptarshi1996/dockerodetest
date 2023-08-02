import type IRoute from '../interfaces/route'

export const appendBasePath = ({
  basePath,
  routes
}: {
  basePath: string
  routes: IRoute[]
}) => routes.map((route: IRoute) => ({
  ...route,
  path: `/${basePath}/${route.path}`
}))
