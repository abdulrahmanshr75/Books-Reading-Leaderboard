const displayScores = (list) => {
  const container = document.querySelector('.scores');
  container.innerHTML = '';

  if (!list.length) {
    container.innerHTML = '<li>No scores..</li>';
    return;
  }

  list
    .sort((a, b) => a.score - b.score)
    .forEach((score) => {
      container.innerHTML += ` <li class ="score">${score.user} : ${score.score}</li>`;
    });
};

export default displayScores;
