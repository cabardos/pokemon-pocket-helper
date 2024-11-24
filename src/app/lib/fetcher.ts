export const fetcher = async <T>(url: string): Promise<T> => {
  const res = await fetch(url, {
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_POKEMON_TCG_API_KEY || '',
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch');
  }

  return res.json();
};
