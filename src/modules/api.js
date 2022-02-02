const id = 'rzxHQtLEjqvQ1BA47Nj7';
export const getTheScores = async () => {
  const res = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
  );
  const { result } = await res.json();
  return result;
};

export const updateTheScores = async (data) => {
  const res = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`,
    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
  const { result } = await res.json();

  return result;
};
