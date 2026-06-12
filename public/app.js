const list = document.getElementById("list");
const video = document.getElementById("video");
const title = document.getElementById("title");

fetch("/api/channels")
  .then(res => res.json())
  .then(data => {
    data.forEach(ch => {
      let div = document.createElement("div");
      div.className = "channel";

      div.innerHTML = `
        <img src="${ch.logo}">
        <span>${ch.name}</span>
      `;

      div.onclick = () => play(ch);
      list.appendChild(div);
    });
  });

function play(ch) {
  title.innerText = ch.name;

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(ch.url);
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, () => video.play());
  } else {
    video.src = ch.url;
  }
}
