
let rycScores = []

if (localStorage.getItem("scores") === null) {

  rycScores = [
    {
      "user": "Wolf Pack",
      "score": 0,
      "image": "/assets/wolfpack.jpg"
    },
    {
      "user": "Raging Giants",
      "score": 0,
      "image": "/assets/giants.png"
    },
    {
      "user": "The Alphas",
      "score": 0,
      "image": "/assets/alpha.jpg"
    },
    {
      "user": "Battle Hawks",
      "score": 0,
      "image": "/assets/battlehawks.png"
    },
    {
      "user": "Guardians of the Faith",
      "score": 0,
      "image": "/assets/guardiansoffaith.png"
    },
    {
      "user": "Teen Titans",
      "score": 0,
      "image": "/assets/teentitans.png"
    },
    {
      "user": "Kingpins",
      "score": 0,
      "image": "/assets/kingpins.jpg"
    },
    {
      "user": "Agents of Hope",
      "score": 0,
      "image": "/assets/hope.jpg"
    },
    {
      "user": "Living Legends",
      "score": 0,
      "image": "/assets/livinglegends.jpg"
    },
    {
      "user": "Crusaders",
      "score": 0,
      "image": "/assets/crusaders.jpg"
    },
    {
      "user": "Fishers of Men",
      "score": 0,
      "image": "/assets/fishermen.jpg"
    },
    {
      "user": "The Watchmen",
      "score": 0,
      "image": "/assets/watchmen.jpg"
    }
  ]
}
else {
  rycScores = JSON.parse(localStorage.getItem('scores')) || []
  console.log(rycScores)
}

export { rycScores }