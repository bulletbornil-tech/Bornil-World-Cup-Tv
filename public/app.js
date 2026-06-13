const video = document.getElementById("videoPlayer");
const channelList = document.getElementById("channelList");
const nowPlaying = document.getElementById("nowPlaying");
const search = document.getElementById("search");

let channels = [];

// Load JSON
fetch("channels.json")
  .then(res => res.json())
  .then(data => {
    channels = data;
    renderChannels(channels);
  });

// Render channels
function renderChannels(list) {
  channelList.innerHTML = "";

  list.forEach(ch => {
    const div = document.createElement("div");
    div.className = "channel";

    div.innerHTML = `
      <img src="${ch.logo}" />
      <p>${ch.name}</p>
    `;

    div.onclick = () => playChannel(ch);

    channelList.appendChild(div);
  });
}

// Play channel (HLS fix)
function playChannel(channel) {
  nowPlaying.innerText = "Playing: " + channel.name;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(channel.stream_url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }
  else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = channel.stream_url;
    video.play();
  }
}

// Search filter
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  const filtered = channels.filter(ch =>
    ch.name.toLowerCase().includes(value)
  );
  renderChannels(filtered);
});
