import { backendURL } from '../config/backendURL.js';

export const fetchDictionary = async (word, type) => {
  if (!word) return;

  const res = await fetch(`${backendURL}/api/${type}/${word}`);

  return res.json();
};
