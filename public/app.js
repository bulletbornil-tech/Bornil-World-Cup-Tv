let channels = [];

async function loadChannels() {
  const res = await fetch("/api/channels");
  channels = await res.json();

  renderChannels(channels);
}

function renderChannels(list) {
  const box = document.querySelector(".channels");
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

/* SEARCH */
function searchChannel(value) {
  const filtered = channels.filter(ch =>
    ch.name.toLowerCase().includes(value.toLowerCase())
  );

  renderChannels(filtered);
}

/* PLAYER (HLS FIX) */
function playChannel(url) {
  const video = document.getElementById("video");

  if (Hls.isSupported()) {
    if (window.hls) window.hls.destroy();

    const hls = new Hls();
    window.hls = hls;

    hls.loadSource(url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      video.play();
    });
  } else {
    video.src = url;
  }
}

window.onload = loadChannels;
