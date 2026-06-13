let channels = [];

async function loadChannels() {
  try {
    const res = await fetch("/channels.json"); // 🔥 FIXED PATH

    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }

    channels = await res.json();
    renderChannels(channels);

  } catch (err) {
    console.log(err);
    document.querySelector(".channels").innerHTML =
      "❌ Channels load failed (check console)";
  }
}

function renderChannels(list) {
  const box = document.querySelector(".channels");
  box.innerHTML = "<h3>Select Channel</h3>";

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
