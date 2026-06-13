let channels = [];

async function loadChannels() {
  const res = await fetch("/channels.json");
  channels = await res.json();
  renderChannels(channels);
}

function renderChannels(list) {
  const box = document.getElementById("channels");
  box.innerHTML = "";

  list.forEach(ch => {
    const div = document.createElement("div");
    div.className = "channel";

    div.innerHTML = `
      <img src="${ch.logo}">
      <div>${ch.name}</div>
    `;

    div.onclick = () => playChannel(ch.stream_url);

    box.appendChild(div);
  });
}

function searchChannel(value) {
  const filtered = channels.filter(ch =>
    ch.name.toLowerCase().includes(value.toLowerCase())
  );
  renderChannels(filtered);
}

function playChannel(url) {
  const video = document.getElementById("video");

  if (window.Hls && Hls.isSupported()) {
    if (window.hls) window.hls.destroy();

    const hls = new Hls();
    window.hls = hls;

    hls.loadSource(url);
    hls.attachMedia(video);
  } else {
    video.src = url;
  }

  video.play();
}

window.onload = loadChannels;
