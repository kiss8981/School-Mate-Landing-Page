const routingPaths = [/\/board\/([^\/]+)\/([^\/]+)\//, /\/asked\/([^\/]+)\//];

export const CheckRouting = (path: string[]): boolean => {
  const routingpath = "/" + path.join("/");

  for (const routingPath of routingPaths) {
    if (routingPath.test(routingpath)) {
      return true;
    }
  }
  return false;
};
