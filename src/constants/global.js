
let rycScores = []


if (localStorage.getItem("scores") === null) {

  rycScores = [
    {
      "user": "Wolf Pack",
      "score": 0
    },
    {
      "user": "Raging Giants",
      "score": 0
    },
    {
      "user": "The Alphas",
      "score": 0
    },
    {
      "user": "Battle Hawks",
      "score": 0
    },
    {
      "user": "Guardians of the Faith",
      "score": 0
    },
    {
      "user": "Teen Titans",
      "score": 0
    },
    {
      "user": "Kingpins",
      "score": 0
    },
    {
      "user": "Agents of Hope",
      "score": 0
    },
    {
      "user": "Living Legends",
      "score": 0
    },
    {
      "user": "Crusaders",
      "score": 0
    },
    {
      "user": "Fishers of Men",
      "score": 0
    },
    {
      "user": "The Watchmen",
      "score": 0
    }
  ]
}
else {
  rycScores = JSON.parse(localStorage.getItem('scores')) || []
  console.log(rycScores)
}

export { rycScores }