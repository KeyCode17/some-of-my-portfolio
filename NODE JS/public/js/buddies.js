// Simple Friend Matching Script
// Objective: Sort the array of people according to who has the most interests in common with Sharon. The person with the most interests matching should be on top.
// Step 1: Write the getSortedList() function that sorts the lists of people - whoever has the most similar interests with the 'sharon' object (3 matching interests) should be on top
// Step 2: Note that order of interests does NOT matter. As long as Ahmad has 'cooking' somewhere in his interests array and Sharon does too, it is counted as a match
// Step 3: Open index.html and refresh the browser, checking the console to see your code's output
// Note 1: You are allowed to use Google, but you are NOT allowed to import libraries
// Note 2: const and let are ES6 variable declarations (they are identical to var for the purposes of this exercise)

const interestList = [
  "gaming",
  "driving",
  "football",
  "fishing",
  "painting",
  "cooking",
  "singing",
  "shopping",
  "running",
  "clubbing"
];

const people = [
  { name: "Andy", interests: ["shopping", "painting", "cooking"] },
  { name: "Barry", interests: ["running", "painting", "football"] },
  { name: "Choki", interests: ["gaming", "football", "painting"] },
  { name: "Daine", interests: ["fishing", "singing", "driving"] },
  { name: "Endang", interests: ["gaming", "clubbing", "cooking"] },
  { name: "Farhan", interests: ["cooking", "driving", "fishing"] },
  { name: "Guz", interests: ["singing", "fishing", "gaming"] },
  { name: "Heli", interests: ["football", "clubbing", "shopping"] },
  { name: "Indra", interests: ["painting", "running", "football"] },
  { name: "Josh", interests: ["shopping", "running", "cooking"] },
  { name: "Ken", interests: ["fishing", "running", "clubbing"] },
  { name: "Lauren", interests: ["gaming", "singing", "driving"] }
];

const sharon = {
  name: "Sawn",
  interests: ["football", "painting", "gaming"]
};

function getSortedList() {
  let output = people.slice();
  // Write your code below
  sharon.interests.sort()
  function checkfootball(fav) {
    return fav == "football";
  }
  function checkgaming(fav) {
    return fav == "gaming";
  }
  function checkpainting(fav) {
    return fav == "painting";
  }

  for (var i = 0; i < people.length; i++) {
    people[0].interests.sort()
    people[i].interests.sort()
    for (var j = 0; j < people[i].interests.length; j++) {

      var checkfootballfull = (people[i].interests.findIndex(checkfootball) == j && people[i].interests.findIndex(checkgaming) != j+1  && people[i].interests.findIndex(checkgaming) != j-1  && people[i].interests.findIndex(checkpainting) != j+1  && people[i].interests.findIndex(checkpainting) != j-1)

      var checkpaintingfull = (people[i].interests.findIndex(checkpainting) == j && people[i].interests.findIndex(checkfootball) != j+1  && people[i].interests.findIndex(checkfootball) != j-1  && people[i].interests.findIndex(checkgaming) != j+1  && people[i].interests.findIndex(checkgaming) != j-1)

      var checkgamingfull = (people[i].interests.findIndex(checkgaming) == j && people[i].interests.findIndex(checkfootball) != j+1  && people[i].interests.findIndex(checkfootball) != j-1  && people[i].interests.findIndex(checkpainting) != j+1  && people[i].interests.findIndex(checkpainting) != j-1)

      var checkFPfull = (people[i].interests.findIndex(checkfootball) == j  && people[i].interests.findIndex(checkpainting) == j+1  || people[i].interests.findIndex(checkpainting) == j-1  && people[i].interests.findIndex(checkgaming) != j+1  && people[i].interests.findIndex(checkgaming) != j-1)

      var checkFPGfull = (people[i].interests.findIndex(checkfootball) == j  && people[i].interests.findIndex(checkpainting) == j+2 && people[i].interests.findIndex(checkgaming) == j+1)

      if (checkFPGfull) {
        people.splice(0,0,people[i])
        people.splice((i+1),1)
      }
      else if (checkFPfull){
        people.splice(1,0,people[i])
        people.splice((i+1),1)
        i = 4
      }
      else if (checkpaintingfull) {
        if (i == 0){
          var temp = people[i]
          people[i] = people[2]
          people[2] = temp
          i = 0
        }
        else {
          people.splice(3,0,people[i])
          people.splice((i+1),1)
        }
      }
      else if (checkfootballfull || checkgamingfull) {
        people.splice(3,0,people[i])
        people.splice((i+1),1)
      }
      else if (true) {

      }
    }
  }

  let changer1 = people.slice()
  let changer = changer1;
  changer1 = output;
  output = changer
  return output;
}

function printPeople() {
  let list = getSortedList();
  list.unshift(sharon);
  list.forEach(person => {
    person.interest1 = person.interests[0];
    person.interest2 = person.interests[1];
    person.interest3 = person.interests[2];
    delete person.interests;
  });
  console.log("Friend Matching Script Output:");
  console.table(list);
}

printPeople();
