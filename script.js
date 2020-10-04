'use strict';

/*
    Put your JavaScript here
*/

function creatHtml() {
  const body = document.querySelector('body');
  const selector = document.createElement('select');
  body.append(selector);
  const div = document.createElement('div');
  body.append(div);
}
creatHtml();
const arrayOfDAta = [];

async function fetchApi(url) {
  try {
    const selector = document.querySelector('select');

    const res = await fetch(url);
    const data = await res.json();

    const option = document.createElement('option');
    option.innerText = data.Title;

    selector.append(option);
    await arrayOfDAta.push({
      title: data.Title,
      Poster: data.Poster,
      Plot: data.Plot,
    });
  } catch (err) {
    console.log(err);
  }
}
async function callOptions() {
  try {
    const first = await fetchApi(
      'http://www.omdbapi.com/?i=tt3896198&apikey=3943c59a'
    );
    const second = await fetchApi(
      'http://www.omdbapi.com/?t=a&apikey=3943c59a'
    );
    const third = await fetchApi(
      'http://www.omdbapi.com/?t=in&apikey=3943c59a'
    );
  } catch (err) {
    console.log(err);
  }
}
callOptions();

const selector = document.querySelector('select');

selector.addEventListener('change', showDeatils);

async function showDeatils() {
  try {
    const div = document.querySelector('div');

    div.innerHTML = '';
    for (let el of arrayOfDAta) {
      if (selector.value == el.title) {
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        img.src = el.Poster;
        div2.append(img);
        div2.style.maxWidth = '100%';
        img.style.maxWidth = '100%';
        const p = document.createElement('p');
        p.innerText = el.Plot;
        div.append(p);
        div.append(div2);
      }
    }
  } catch (err) {
    console.log(err);
  }
}
