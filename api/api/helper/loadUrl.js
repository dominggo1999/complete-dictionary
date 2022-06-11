import UserAgent from 'user-agents';
import fetch, { Headers } from 'node-fetch';

export const loadUrl = async (url, options = {}) => {
  const { json } = options;

  const userAgent = new UserAgent();
  const headers = new Headers(userAgent.data);

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (json) {
      return {
        json: await res.json(),
      };
    }

    return {
      html: await res.text(),
    };
  } catch (error) {
    return { error };
  }
};
