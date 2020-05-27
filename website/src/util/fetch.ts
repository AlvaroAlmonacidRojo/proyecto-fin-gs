import 'whatwg-fetch';

export class ResponseError extends Error {
  constructor(private response: Response) {
    super(response.statusText);
    Error.captureStackTrace(this, this.constructor);
  }

  public async details(): Promise<any> {
    try {
      const body = await this.response.json();
      return body;
    } catch (error) {
      return undefined;
    }
  }
}

export async function fetch(url: string, options?: RequestInit): Promise<any> {
  const response = await window.fetch(url, options);

  if (response.ok) {
    return response
      .json()
      .then(value => Promise.resolve(value))
      .catch(() => Promise.resolve(null));
  } else {
    return response.json().then(value => Promise.reject(value));
  }
}

export type SendMethod = 'PUT' | 'POST' | 'PATCH' | 'DELETE';

export async function sendJSON(
  url: string,
  method: SendMethod,
  data?: {},
): Promise<any> {
  return fetch(url, {
    method,
    mode: 'same-origin',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      data,
    }),
  });
}

export async function sendFile(
  url: string,
  method: SendMethod,
  file: FormData,
): Promise<any> {
  const options: RequestInit = {
    method,
    mode: 'same-origin',
    body: file,
  };

  const response = await window.fetch(url, options);

  if (response.ok) {
    return response
      .json()
      .then(value => Promise.resolve(value))
      .catch(() => Promise.resolve(null));
  } else {
    return response.json().then(value => Promise.reject(value));
  }
}
