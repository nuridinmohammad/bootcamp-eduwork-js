const searchInput = document.getElementById("input-search");
const news = document.getElementById("news");

searchInput.addEventListener("keyup", findMovie);

function findMovie(e) {
  const searchValue = e.target.value.trim();
  if (searchValue.length > 0) {
    console.log(searchValue);
    getNews(searchValue);
  }
}

async function getNews(value) {
  const date = new Date();
  const dateNow = date.toISOString().slice(0, 10);
  const url =
    "https://newsapi.org/v2/everything?" +
    `q=${value}&` +
    `from=${dateNow}&` +
    "sortBy=popularity&" +
    "apiKey=e4b3a56f213640a5a646dace0a0d5c49";
  const req = new Request(url);

  try {
    const res = await fetch(req);
    const data = await res.json();
    if (data.status !== "error") await displayNews(data.articles);
  } catch (error) {
    if (data.status === "error") await displayError(error);
  }
}

async function displayNews(data) {
  news.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let newsItem = document.createElement("div");
    newsItem.dataset.id = await data[i].source.id;
    newsItem.classList.add(".news-item");
    newsItem.innerHTML = `
    <ul>
        <li>${data.title}</li>
    </ul>
    `;
    news.appendChild(newsItem);
  }
}

async function displayError(error) {
  alert(await error.message);
}
