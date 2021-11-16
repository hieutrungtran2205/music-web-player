var API_VPOP = "http://localhost:3000/v-pop";
var API_USUK = "http://localhost:3000/us-uk";
var API_KPOP = "http://localhost:3000/k-pop";

const $ = document.querySelector.bind(document);

function start() {
  getVPOP(renderVPOP);
  getUSUK(renderUSUK);
  getKPOP(renderKPOP);
}

start();

function getVPOP(callback) {
  fetch(API_VPOP)
    .then(function (response) {
      return response.json();
    })
    .then(callback)
}

function getUSUK(callback) {
  fetch(API_USUK)
    .then(function (response) {
      return response.json();
    })
    .then(callback)
}

function getKPOP(callback) {
  fetch(API_KPOP)
    .then(function (response) {
      return response.json();
    })
    .then(callback)
}

function renderVPOP(albums) {
  var listVPOP = $(".v-pop");
  console.log(albums)
  var htmls = albums.map(function (album) {
    return `
          <li class="album">
            <a href="play.html">
              <div
                class="thumb"
                style="background-image: url('${album.thumbnail}')"
              ></div>
              <div class="info">
                <span class="song">${album.album_name}</span>
                <p class="singer">${album.singer}</p>
              </div>
            </a>
          </li>
          `
  });
  listVPOP.innerHTML = htmls.join('');
}

function renderUSUK(albums) {
  var listUSUK = $(".us-uk");
  console.log(albums)
  var htmls = albums.map(function (album) {
    return `
          <li class="album">
            <a href="play.html">
              <div
                class="thumb"
                style="background-image: url('${album.thumbnail}')"
              ></div>
              <div class="info">
                <span class="song">${album.album_name}</span>
                <p class="singer">${album.singer}</p>
              </div>
            </a>
          </li>
          `
  });
  listUSUK.innerHTML = htmls.join('');
}

function renderKPOP(albums) {
  var listKPOP = $(".k-pop");
  console.log(albums)
  var htmls = albums.map(function (album) {
    return `
          <li class="album">
            <a href="play.html">
              <div
                class="thumb"
                style="background-image: url('${album.thumbnail}')"
              ></div>
              <div class="info">
                <span class="song">${album.album_name}</span>
                <p class="singer">${album.singer}</p>
              </div>
            </a>
          </li>
          `
  });
  listKPOP.innerHTML = htmls.join('');
}

function goBack() {
  window.history.back();
}

function goPrev() {
  window.history.forward();
}

function logClick() {
  const log = document.querySelector(".log");
  log.classList.toggle("hidden");
}







