const apiKey = "8b156e6b1c9e5dd46227a9577d08f87a";

fetch("https://v3.football.api-sports.io/fixtures?live=all", {
  method: "GET",
  headers: {
    "x-apisports-key": apiKey
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
});
