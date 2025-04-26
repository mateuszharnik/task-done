export const resolvePath = (
  path: string,
  params: Record<string, string | number | boolean>,
): string => Object.entries(params).reduce((acc, [key, value]) => acc.replace(`:${key}`, `${value}`), path);
