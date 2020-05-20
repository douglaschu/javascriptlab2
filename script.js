//#1 
//Data set of students and test info
const submissions = [
    {
        name: 'Jane',
        score: 95,
        date: '2020-01-24',
        passed: true,
    },
    {
        name: 'Joe',
        score: 77,
        date: '2018-05-14',
        passed: true,
    },
    {
        name: 'Jack',
        score: 59,
        date: '2019-07-05',
        passed: false,
    },
    {
        name: 'Jill',
        score: 88,
        date: '2020-04-22',
        passed: true,
    }
];
//Display default data set
console.log('Build Specification #1: Declare submissions variable');
console.log(submissions);

//#2
//Adding a new student test score entry to the data set (constructing an object and pushing it into the array)
const addSubmission = (array, newName, newScore, newDate) => {
    const object = {
        name: `${newName}`, 
        score: newScore, 
        date: `${newDate}`, 
        passed: (newScore >= 60)? true : false,
    };
    array.push(object);
}
addSubmission(submissions, 'Asami', 98, '2020-05-15');
console.log('Build Specification #2: addSubmission');
console.log(submissions);

//#3
//Deleting an entry based on its index number in the array
const deleteSubmissionByIndex = (array, index) => {
    array.splice(index);
}
deleteSubmissionByIndex(submissions, 4);
console.log('Build Specification #3: deleteSubmissionByIndex');
console.log(submissions);

//adding back the deleted entry from previous deleteSubmissionByIndex call 
addSubmission(submissions, 'Asami', 98, '2020-05-15');
console.log(submissions);

//#4 
//Deleting an entry based on name property 
const deleteSubmissionByName = (array, name) => {
   const index = array.findIndex(element => element.name === name); //anonymous function: does not need to be declared as variable, or even named:
   if (index >= 0) { 
        array.splice(index);
   } //conditional is helpful to avoid running with undefined index
}
deleteSubmissionByName(submissions, 'Asami');
console.log('Build Specification #4: deleteSubmissionByName');
console.log(submissions);

//alternate way of writing callback function in #4, using curly braces 
// const deleteSubmissionByName = (array, name) => {
//     const index = array.findIndex(      
//         (element) => {return element.name === name} 
//     ); 
//     if (index >= 0) { 
//          array.splice(index);
//     } 
//  }
//  deleteSubmissionByName(submissions, 'Asami');
//  console.log(submissions);

addSubmission(submissions, 'Asami', 98, '2020-05-15');
console.log(submissions);

//#5 
//Changing the test score in an entry and checking to see if the updated score passes, using index number to call up entry
const editSubmission = (array, index, score) => {
    const edit = array[index];
    edit.score = score;
    if (score >= 60) {
        edit.passed = true;
    } else {
        edit.passed = false;
    }
}
editSubmission(submissions, 2, 72); //What if Jack... PASSED?
//just going to log Jack's entry to the console, not the whole array.
console.log('Build Specification #5: editSubmission');
console.log(submissions[2]);
editSubmission(submissions, 2, 59); //Sorry Jack, clerical error.
console.log(submissions[2]);

//#6 
//Looks up entry by name property 
const findSubmissionByName = (array, name) => {
    const query = array.find(element => {return element.name == name});
    return query;
}
console.log(submissions);
console.log('Build Specification #6: findSubmissionByName');
console.log(findSubmissionByName(submissions, 'Jane'));
//test to see if we can also find a newly added entry by name
addSubmission(submissions, 'Sokka', 89, '2020-05-15');
console.log(findSubmissionByName(submissions, 'Sokka'));
//if you've seen Avatar: The Last Airbender, you'll understand it's very Sokka to get an 89.

//#7 
//finds entry with lowest test score in the data set (returns object in array based on property)
const findLowestScore = (array) => {
    let min = array[0]; //sets first student as default "lowest" value
    array.forEach(student => {
        if (student.score < min.score) { //compares each successive student in array's 'score' property with the one before it
            min = student; //if conditional is true, then the student replaces the previous student as "min" a.k.a. the student with the lowest score
        }
    });
    return min;
}
console.log('Build Specification #7: findLowestScore');
console.log(findLowestScore(submissions));   

//#8
//Finds average test score based on all entries in data set
const findAverageScore = (array) => {
    let sum = 0;
    for (const i of array) {
        sum += i.score;
    }
    return (sum / array.length);
}
console.log('Build Specification #8: findAverageScore');
console.log(findAverageScore(submissions));

//#9
//Creates a new data set with only entries with passing scores (returns new array)
const filterPassing = (array) => {

    const passingScores = array.filter(element => element.passed === true);
    return passingScores;    
}
console.log('Build Specification #9: filterPassing');
console.log(filterPassing(submissions));

//test with variation of arrow function (using curly braces, returning on one line) Returns as undefined and I'm not sure why.
// const filterPassing = (array) => { 
//     const passingScores = array.filter(element => {return element.passed === true;})    
// }
// console.log(filterPassing(submissions));

//#10
//Creates new data set with only entries with test scores that are 90 and above 
const filter90AndAbove = (array) => {
    const topMarks = array.filter(element => element.score >= 90);
    return topMarks;
}
console.log('Build Specification #10: filter90AndAbove');
console.log(filter90AndAbove(submissions));

console.log(submissions); //review submissions variable