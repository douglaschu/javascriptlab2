const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

function addSubmission(array, newName, newScore, newDate) {
  let newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
}

//#7 find lowest score
//use forEach loop
//loop through the array
//take the first score in the array and make that the "lowest value"
//take the next score in the array, compare it to the first score
//if the second score is lower than the first score, it becomes the new" lowest value"
//move on to the third score
//repeat

function editSubmission(array, index, score) {
  const item = array[index];
  item.score = score;
  if (score >= 60) {
    item.passed = true;
  } else {
    item.passed = false;
  }
}


const findLowestScore = (array) => {
  //1. abbreviations with variables
  let worstStudent = array[0]; //sets lowest score to the first
  //2. forEach loop a.k.a. what goes through the array and how
  array.forEach((item) => {
    if (item.score < worstStudent.score) {
      worstStudent = item;
    }
  });
  //3. return the result
  return worstStudent;
};

console.log("Build Specification #7: findLowestScore");
console.log(findLowestScore(submissions));
