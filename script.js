// Test Content Data (Open-source sample videos)
const movies = [
  {
    id: 1,
    title: "Big Buck Bunny",
    category: "trending",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    desc: "A large bunny meets bullied forest creatures in this animated short."
  },
  {
    id: 2,
    title: "Elephant Dream",
    category: "trending",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    desc: "An open-source sci-fi story inside a massive machine."
  },
  {
    id: 3,
    title: "Tears of Steel",
    category: "series",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    desc: "Set in a dystopian future involving cyborgs and humans."
  },
  {
    id: 4,
    title: "For Bigger Blazes",
    category: "series",
    poster: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    desc: "High octane action test reel."
  }
];

const trendingContainer = document.getElementById("trendingList");
const seriesContainer = document.getElementById("seriesList");
const playerContainer = document.getElementById("playerContainer");
const videoPlayer = document.getElementById("videoPlayer");
const nowPlayingTitle = document.getElementById("nowPlayingTitle");
const nowPlayingDesc = document.getElementById("nowPlayingDesc");
const heroBanner = document.getElementById("heroBanner");

// Initialize Hero Banner with first item
heroBanner.style.backgroundImage = `url('${movies[0].poster}')`;
document.getElementById("heroTitle").innerText = movies[0].title;
document.getElementById("heroDesc").innerText = movies[0].desc;

function playCurrentHero() {
  playVideo(movies[0].videoUrl, movies[0].title, movies[0].desc);
}

// Populate movie cards
movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}">
    <p>${movie.title}</p>
  `;
  card.onclick = () => playVideo(movie.videoUrl, movie.title, movie.desc);

  if (movie.category === "trending") {
    trendingContainer.appendChild(card);
  } else {
    seriesContainer.appendChild(card);
  }
});

// Play Video handler
function playVideo(url, title, desc) {
  videoPlayer.src = url;
  nowPlayingTitle.innerText = title;
  nowPlayingDesc.innerText = desc;
  playerContainer.style.display = "block";
  window.scrollTo({ top: 0, behavior: 'smooth' });
  videoPlayer.play();
}

// Close Video handler
function closePlayer() {
  videoPlayer.pause();
  videoPlayer.src = "";
  playerContainer.style.display = "none";
}


