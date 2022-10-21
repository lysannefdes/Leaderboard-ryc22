
let rycScores = []

if (localStorage.getItem("scores") === null) {

  rycScores = [
    {
      "user": "WOLF PACK",
      "score": 0,
      "image": "/assets/Wolfpack.png"
    },
    {
      "user": "RAGING GIANTS",
      "score": 0,
      "image": "/assets/RagingGiants.png"
    },
    {
      "user": "THE ALPHAS",
      "score": 0,
      "image": "/assets/alphas.png"
    },
    {
      "user": "BATTLE HAWKS",
      "score": 0,
      "image": "/assets/HAWKS.png"
    },
    {
      "user": "GUARDIANS OF THE FAITH",
      "score": 0,
      "image": "/assets/GTF.png"
    },
    {
      "user": "TEEN TITANS",
      "score": 0,
      "image": "/assets/teenTitans.png"
    },
    {
      "user": "KINGPINS",
      "score": 0,
      "image": "/assets/KingPins.png"
    },
    {
      "user": "AGENTS OF HOPE",
      "score": 0,
      "image": "/assets/agentsOfHope.png"
    },
    {
      "user": "LIVING LEGENDS",
      "score": 0,
      "image": "/assets/LivingLegends.png"
    },
    {
      "user": "CRUSADERS",
      "score": 0,
      "image": "/assets/crusaders.png"
    },
    {
      "user": "FISHERS OF MEN",
      "score": 0,
      "image": "/assets/fishersOfMen.png"
    },
    {
      "user": "THE WATCHMEN",
      "score": 0,
      "image": "/assets/TheWatchMen.png"
    }
  ]
}
else {
  rycScores = JSON.parse(localStorage.getItem('scores')) || []
  console.log(rycScores)
}

export { rycScores }