import './style.css';
import { updateTheScores, getTheScores } from './modules/api.js';
import displayScores from './modules/displayScores.js';

window.onload = async () => {
  displayScores(await getTheScores());
};
const refresh = document.querySelector('.btn');

refresh.addEventListener('click', async () => {
  const list = await getTheScores();
  displayScores(list);
});

const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const printScore = {
    user: document.querySelectorAll('input')[0].value.trim(),
    score: document.querySelectorAll('input')[1].value.trim(),
  };
  form.reset();
  await updateTheScores(printScore);
});
