const list = document.getElementById("channelList");
const video = document.getElementById("videoPlayer");

fetch("/channels.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(channel => {
      const div = document.createElement("div");
      div.className = "channel";

      div.innerHTML = `
        <img src="${channel.logo}" />
        <span>${channel.name}</span>
      `;

      div.onclick = () => {
        video.src = channel.stream_url;
        video.play();
      };

      list.appendChild(div);
    });
  })
  .catch(err => {
    list.innerHTML = "Channels load failed!";
    console.log(err);
  });
