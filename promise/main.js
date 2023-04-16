// import image from './img/gambar.jpeg'

const searchInput = document.getElementById("input-search");
const news = document.getElementById("news");

searchInput.addEventListener("keyup", findMovie);

function findMovie(e) {
  const searchValue = e.target.value.trim();
  if (searchValue.length > 0) {
    getNews(searchValue);
  } else {
    return headLineNews();
  }
}

async function getNews(value) {
  // const date = new Date();
  // const dateNow = date.toISOString().slice(0, 10);
  const url =
    "https://newsapi.org/v2/everything?" +
    `q=${value}&` +
    "apiKey=05163d63e0d14a79a11f4b30a8eecf29";
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
    <div class="news-item">
      <div class="header">
        <h3>${data[i].title}</h3>
          </div>
            <div class="body">
              <div class="image">
              <img src=${data[i].urlToImage } alt="image-news" srcset="">
            </div>
          <div class="link"><a href=${data[i].url} target="_blank">More..</a></div>
      </div>
    </div>
    `;
    news.appendChild(newsItem);
  }
}

window.onload = async function () {
  await headLineNews();
};

async function headLineNews() {
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=id&" +
    "apiKey=05163d63e0d14a79a11f4b30a8eecf29";
  const req = new Request(url);

  try {
    const res = await fetch(req);
    const data = await res.json();
    console.log(data);
    setTimeout(() => {
      if (data.status !== "error") displayNews(data.articles);
    }, 3000);
  } catch (error) {
    if (data.status === "error") await displayError(error);
  }
}
