/*!
 * @module drpyInject
 * @brief T3网络请求、缓存模块处理库
 * @version 3.1.2
 *
 * @original-author hjdhnx
 * @original-source {@link https://github.com/hjdhnx/hipy-server/blob/master/app/utils/quickjs_ctx.py | Source on GitHub}
 *
 * @modified-by HiramWong <admin@catni.cn>
 * @modification-date 2023-05-09T22:16:27+08:00
 * @modification-description Python转TypeScript, 适用于JavaScript项目
 */

import syncFetch from 'sync-fetch';
import jsoup from './htmlParser';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'HEAD';

interface RequestOptions {
  method?: HttpMethod;
  timeout?: number;
  body?: string;
  data?: { [key: string]: string };
  headers?: { [key: string]: string };
  withHeaders?: boolean;
  buffer?: number;
  redirect?: 0 | 1 | true | false;
}

interface Response {
  content?: string;
  body?: string;
  headers?: { [key: string]: string };
}

/**
 * 将obj所有key变小写
 * @param obj
 */
function keysToLowerCase(obj) {
  return Object.keys(obj).reduce((result, key) => {
    const newKey = key.toLowerCase();
    result[newKey] = obj[key]; // 如果值也是对象，可以递归调用本函数
    return result;
  }, {});
}

const baseRequest = (_url: string, _object: RequestOptions, _js_type: number = 0): Response => {
  const method: HttpMethod = (_object.method || 'GET').toUpperCase() as HttpMethod;
  // const timeout: number = _object.timeout || 5000;
  const withHeaders: boolean = _object.withHeaders || false;
  const body: string = _object.body || '';
  const bufferType: number = _object.buffer || 0;
  let data: any = _object.data || {};
  let headers = _object.headers || {};
  const emptyResult: Response = { content: '', body: '', headers: {} };

  if (_object.hasOwnProperty('redirect')) {
    const redirect = _object.redirect === 1 || _object.redirect === true ? 'follow' : 'manual';
    headers['Redirect'] = redirect;
  }

  if (body && Object.keys(data).length === 0) {
    if(body.includes('&')) {
      body.split('&').forEach((param) => {
        const [key, value] = param.split('=');
        data[key] = value;
      });
    }else{
      data = body
    }
  } else if (!body && Object.keys(data).length !== 0 && method !== 'GET') {
    const contentTypeKeys = Object.keys(headers).filter((key) => key.toLowerCase() === 'content-type');
    const contentType = 'application/json';
    if (contentTypeKeys.length > 0) {
      const contentTypeKey = contentTypeKeys.slice(-1)[0];
      const oldContentType = headers[contentTypeKey];
      if (!oldContentType.includes(contentType)) {
        headers[contentTypeKey] = contentType;
      }
    } else {
      headers['Content-Type'] = contentType;
    }
  }

  if (headers['Content-Type']?.includes('application/x-www-form-urlencoded')) {
    data = new URLSearchParams(data).toString();
  }

  const customHeaders = {
    Cookie: 'custom-cookie',
    Origin: 'custom-origin',
    Host: 'custom-host',
    Connection: 'custom-connection',
    'User-Agent': 'custom-ua',
    Referer: 'custom-referer',
    Redirect: 'custom-redirect',
  };
  headers = keysToLowerCase(headers);

  for (const [originalHeader, customHeader] of Object.entries(customHeaders)) {
    let originalHeaderKey = originalHeader.toLowerCase();
    if (headers.hasOwnProperty(originalHeaderKey)) {
      headers[customHeader] = headers[originalHeaderKey];
      delete headers[originalHeaderKey];
    }
  }

  let r: any;

  if (method === 'GET') {
    const url = Object.keys(data).length === 0 ? _url : `${_url}?${new URLSearchParams(data).toString()}`;
    r = syncFetch(url, {
      headers,
    });
  } else {
    let req_body = '';
    if(typeof (data) === 'string'){
      req_body = decodeURIComponent(data);
    }else if(typeof (data) === 'object' && headers['content-type'] && headers['content-type'].includes('application/json')){
      req_body = JSON.stringify(data);
    }else{
      req_body = new URLSearchParams(data).toString();
    }
    const requestOptions: any = {
      method,
      headers,
      body: req_body,
      credentials: 'omit', // 禁止自动带cookie
      // credentials: 'include',
    };
    r = syncFetch(_url, requestOptions);
  }

  const formatHeaders: { [key: string]: string } = {};
  for (const [key, value] of r.headers.entries()) {
    if (key.toLowerCase() === 'custom-set-cookie') {
      formatHeaders['set-cookie'] = value;
    } else {
      formatHeaders[key] = value;
    }
  }

  if (_js_type === 0) {
    if (withHeaders) {
      return { body: r.text(), headers: formatHeaders } || emptyResult;
    } else {
      return r.text() || '';
    }
  } else if (_js_type === 1) {
    let content;
    if (bufferType === 2) {
      const uint8Array = new Uint8Array(r.arrayBuffer()); // 将 ArrayBuffer 转换为一个 Uint8Array
      const buffer = Buffer.from(uint8Array); // 使用 Buffer.from 将 Uint8Array 转换为 Buffer
      const base64String = buffer.toString('base64'); // 将 Buffer 转换为 Base64 字符串
      content = base64String;
    } else content = r.text();
    return { content, headers: formatHeaders } || emptyResult;
  } else {
    return emptyResult;
  }
};

const req = (_url, _object) => {
  return baseRequest(_url, _object, 1);
};

const joinUrl = (base: string, url: string) => {
  base = base || '';
  url = url || '';
  base = base.trim().replace(/\/+$/, '');
  url = url.trim().replace(/\/+$/, '');
  console.log('joinUrl:', base, url);

  let u;

  if (url.startsWith('http://') || url.startsWith('https://')) {
    u = new URL(url);
  } else if (url.startsWith('://')) {
    u = new URL(base + url);
  } else if (url.startsWith('//')) {
    u = new URL(base.startsWith('http:') ? 'http:' + url : 'https:' + url);
  } else {
    u = new URL(base + '/' + url);
  }

  if (!u.pathname && new URL(base).pathname) {
    u.pathname = new URL(base).pathname;
  }

  if (!u.search && new URL(base).search) {
    u.search = new URL(base).search;
  }

  return u.toString();
};

const resolve = (from, to) => {
  const resolvedUrl = new URL(to, new URL(from, 'resolve://'));
  if (resolvedUrl.protocol === 'resolve:') {
    const { pathname, search, hash } = resolvedUrl;
    return pathname + search + hash;
  }
  return resolvedUrl.href;
};

const pdfh = (html: string, parse: string, base_url: string = '') => {
  const jsp = new jsoup(base_url);
  return jsp.pdfh(html, parse, base_url);
};

const pd = (html: string, parse: string, base_url: string = '') => {
  const jsp = new jsoup(base_url);
  return jsp.pd(html, parse);
};

const pdfa = (html: string, parse: string) => {
  const jsp = new jsoup();
  return jsp.pdfa(html, parse);
};

const pdfl = (html: string, parse: string, list_text: string, list_url: string, url_key: string) => {
  const jsp = new jsoup();
  return jsp.pdfl(html, parse, list_text, list_url, url_key);
};

const CACHE_URL =
  String(import.meta.env.DEV ? '/api' : `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_URL_PREFIX}`) +
  '/v1/cache';

const local_get = (_id: string, key: string, value: string = '') => {
  const url = `${CACHE_URL}/${_id}${key}`;
  const res: any = req(url, {});
  return JSON.parse(res.content).data || value;
};

const local_set = (_id, key, value) => {
  const headers = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: {
      key: `${_id}${key}`,
      value,
    },
  };
  const res: any = req(CACHE_URL, headers);
  return JSON.parse(res.content).data;
};

const local_delete = (_id, key) => {
  const url = `${CACHE_URL}/${_id}${key}`;
  const headers = {
    method: 'DELETE',
  };
  const res: any = req(url, headers);
  return JSON.parse(res.content).data;
};

const local = {
  get: local_get,
  set: local_set,
  delete: local_delete,
};

export { pdfh, pdfa, pdfl, pd, local, req, joinUrl, resolve };
