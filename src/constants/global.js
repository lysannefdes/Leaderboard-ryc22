let rycScores = []

if (localStorage.getItem("scores") === null) {

  rycScores = [
    {
      "user": "Saint Hanan",
      "score": 5
    },
    {
      "user": "Saint Basil",
      "score": 10
    },
    {
      "user": "Saint Noam",
      "score": 15
    },
    {
      "user": "Saint Kelvin",
      "score": 20
    },
    {
      "user": "Ingrid",
      "score": 2
    },
    {
      "user": "Saint Basil 2",
      "score": 10
    },
    {
      "user": "Saint Noam 2",
      "score": 15
    },
    {
      "user": "Saint Kelvin 2",
      "score": 20
    },
    {
      "user": "Ingrid * 2",
      "score": 2
    },
    {
      "user": "Saint Basil 3",
      "score": 10
    }
  ]
}
else {
  rycScores = JSON.parse(localStorage.getItem('scores')) || []
  console.log(rycScores)
}
export { rycScores }