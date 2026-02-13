export const getPort = (): string => '9978';

export const getProxy = (local: boolean): string => {
  return `${getUrl(local)}?do=js`;
};

export const getUrl = (_local: boolean): string => {
  return `http://127.0.0.1:${getPort()}/proxy`;
};

export const js2Proxy = (
  dynamic: boolean,
  siteType: number,
  siteKey: string,
  url: string,
  headers: Record<string, any> = {},
): string => {
  const proxyUrl = getProxy(!dynamic);
  const headerStr = encodeURIComponent(JSON.stringify(headers));
  const encodedUrl = encodeURIComponent(url);

  return `${proxyUrl}&from=catvod&siteType=${siteType}&siteKey=${siteKey}&header=${headerStr}&url=${encodedUrl}`;
};
