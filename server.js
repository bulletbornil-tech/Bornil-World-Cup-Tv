const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.static("public"));

const channels = [
  {
    name: "FIFA Plus English",
    logo: "https://i.ibb.co.com/vnbkF0r/fifa-world-cup-2026-logo-png-seeklogo-665644.png",
    stream_url: "https://a62dad94.wurl.com/master/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWV1X0ZJRkFQbHVzRW5nbGlzaF9ITFM/playlist.m3u8",
    category: "Sports"
  },
  {
    name: "FIFA Plus B",
    logo: "https://i.ibb.co.com/vnbkF0r/fifa-world-cup-2026-logo-png-seeklogo-665644.png",
    stream_url: "https://37b4c228.wurl.com/manifest/f36d25e7e52f1ba8d7e56eb859c636563214f541/UmFrdXRlblRWLWZyX0ZJRkFQbHVzRnJlbmNoX0hMUw/6f5437c5-e015-4754-8476-c8c6d27d3a55/1.m3u8",
    category: "Sports"
  },
  {
    name: "Fox Sports 2 (FIFA)",
    logo: "https://imglink.cc/cdn/o5BoWU_BEz.png",
    stream_url: "https://tvsen7.aynaott.com/foxsports2/index.m3u8?e=1779283790&u=78be6644-0a65-48ec-81a4-089ac65a2619&token=cbb7f40b4af7be51a91e0629a5ac7238",
    category: "Sports"
  },
  {
    name: "Bein Sports 2 France",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "http://145.239.5.177/559/mpegts",
    category: "Sports"
  },
  {
    name: "Bein Sports 2 B France",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "http://145.239.5.177:80/559/index.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 1 Serbia",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "http://ua.online24.pm/play/1101/350B326FB34F4B8/video.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 2 Serbia",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "http://ua.online24.pm/play/1102/350B326FB34F4B8/video.m3u8",
    category: "Sports"
  },
  {
    name: "TUDN HD",
    logo: "https://imglink.cc/cdn/Tf3GP8uGY_.jpg",
    stream_url: "http://74.208.30.121/a192/mono.m3u8",
    category: "Sports"
  },
  {
    name: "TUDN 1080",
    logo: "https://imglink.cc/cdn/Tf3GP8uGY_.jpg",
    stream_url: "http://162.19.255.233:8080/play/UNbAl57p9hXZClOu56FCTVL9TbgOeYnXUEC2UjoDBYk/m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 1",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "http://27.124.71.27/beIN_Sports_1/index.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 2",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "http://27.124.71.27/beIN_Sports_2/index.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 3",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "http://27.124.71.27/beIN_Sports_3/index.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 4",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "https://bein-esp-xumo.amagi.tv/playlistR1080p.m3u8",
    category: "Sports"
  },
  {
    name: "TNT Sports 1",
    logo: "https://imglink.cc/cdn/VHUi569tAW.jpg",
    stream_url: "http://27.124.71.27/TNT_Sports_1/index.m3u8",
    category: "Sports"
  },
  {
    name: "TNT Sports 2",
    logo: "https://imglink.cc/cdn/VHUi569tAW.jpg",
    stream_url: "http://27.124.71.27/TNT_Sports_2/index.m3u8",
    category: "Sports"
  },
  {
    name: "TNT Sports 3",
    logo: "https://imglink.cc/cdn/VHUi569tAW.jpg",
    stream_url: "http://27.124.71.27/TNT_Sports_3/index.m3u8",
    category: "Sports"
  },
  {
    name: "Tyc Sports",
    logo: "https://imglink.cc/cdn/1oSRQnyUqK.jpg",
    stream_url: "https://amg26268-amg26268c14-freelivesports-emea-10267.playouts.now.amagi.tv/ts-us-e2-n2/playlist/amg26268-sportsstudio-tycsports-freelivesportsemea/playlist.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 1 (Alt)",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "https://andro.226503.xyz/checklist/androstreamlivebs1.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 2 (Alt)",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "https://andro.226503.xyz/checklist/androstreamlivebs2.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 3 (Alt)",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "https://andro.226503.xyz/checklist/androstreamlivebs3.m3u8",
    category: "Sports"
  },
  {
    name: "Bein Sports 4 (Alt)",
    logo: "https://imglink.cc/cdn/kIiut6WBq0.jpg",
    stream_url: "https://andro.226503.xyz/checklist/androstreamlivebs4.m3u8",
    category: "Sports"
  }
];

app.get("/api/channels", (req, res) => {
  res.json(channels);
});

app.listen(3000, () => {
  console.log("Bornil TV Server Running...");
});
