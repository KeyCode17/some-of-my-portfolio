/**
A new startup called smartJobs is exploring a smart-workload feature designed to streamline task assignment between coworkers. Newly created tasks will be automatically assigned to the team member with the lightest workload. For the (i)th person, the following information is known:

    names[i] - their name, a string containing only uppercase and lowercase letters;
    statuses[i] - their vacation indicator status, which is true if the person is on a vacation, or false otherwise;
    projects[i] - the number of projects they are currently involved in;
    tasks[i] - the number of tasks assigned to them.

If a person's vacation indicator value is set to true, this means they are on vacation and cannot be assigned new tasks. Conversely, a vacation indicator value of false means they are open to receive task assignments.

smartJobs sorts team members according to their availability. Person A has a higher availability than person B :
- if Person A has fewer tasks to do than Person B, or
- if tasks number are equal but Person A has fewer assigned projects than Person B.
Put another way, we can say that person A has a higher availability than person B if their (tasks[A], projects[B]) pair is less than the same pair for B.

Your task is to find the name of the person with the highest availability.

NOTE :
- It is guaranteed that there is will be at least one such person.
- If the only one such person's vacation indicator value is false, it will return "Nobody".
- If Person A & Person B has the same status, project, and task, it will return the earlier sequence person. See first example below.



##### Example #####
Given parameter(s):
names = ["Josh", "Groban", "Donald"],
statuses = [false, false, false],
projects = [2, 2, 2], and
tasks = [6, 6, 6],
the output should be ->
    taskAssigning(names, statuses, projects, tasks) = "Josh".


Given parameter(s):
names = ["John", "Terry"],
statuses = [false, false],
projects = [2, 1], and
tasks = [16, 5],
the output should be ->
    taskAssigning(names, statuses, projects, tasks) = "Terry".

The arguments represent information about two team members:
"John", with statuses[0] = false, projects[0] = 2 and tasks[0] = 16;
"Terry", with statuses[1] = false, projects[1] = 1 and tasks[1] = 5.
Here John and Terry's vacation indicators are both false, so both of them are open to new assignments. Terry is only assigned 5 tasks while John is assigned 16, so Terry has the highest availability.


Given parameter(s):
names = ["Chris", "Martin"],
statuses = [false, true],
projects = [2, 1], and
tasks = [6, 5],
the output should be ->
    taskAssigning(names, statuses, projects, tasks) = "Chris".

The arguments stand for the following team members:
"Chris", with statuses[0] = false, projects[0] = 2 and tasks[0] = 6;
"Martin", with statuses[1] = true, projects[1] = 1 and tasks[1] = 5.
In this example Martin cannot be assigned any new tasks because his vacation indicator is true. Therefore, "Chris" has the highest availability.


Given parameter(s):
names = ["Matt", "Bellamy"],
statuses = [false, false],
projects = [1, 2], and
tasks = [6, 6],
the output should be ->
    taskAssigning(names, statuses, projects, tasks) = "Matt".

In this case:
"Matt", with statuses[0] = false, projects[0] = 1 and tasks[0] = 6;
"Bellamy", with statuses[1] = false, projects[1] = 2 and tasks[1] = 6.
Both Matt and Bellamy's vacation indicators are false, and the number of tasks each of them is assigned is 6. However, Matt is only involved in 1 project, while Bellamy is involved in 2, meaning that Matt has the highest availability.



##### Input/Output #####
[input] array.string names
An array of team members' names.
Guaranteed constraints:
1 ≤ names.length ≤ 3.

[input] array.boolean statuses
An array of team members' vacation indicators, where statuses[i] corresponds to the ith team member: if statuses[i] = true, the ith member is on a vacation. Otherwise, they're free to take the task.
Guaranteed constraints:
statuses.length = names.length.

[input] array.integer projects
An array of the number of projects each team member is involved in, where projects[i] corresponds to the ith team member.
Guaranteed constraints:
projects.length = names.length,
0 ≤ projects[i] ≤ 25.

[input] array.integer tasks
An array of the number of tasks each team member is assigned to, where tasks[i] corresponds to the ith team member.
Guaranteed constraints:
tasks.length = names.length,
0 ≤ tasks[i] ≤ 100.

[output] string
The name of the person with the highest availability.
*/


function taskAssigning(names, statuses, projects, tasks) {
  // write your code below
  if (names.length == 3){
    if (statuses[2] == true){
      if (tasks[0] == tasks [1]) {
        var projectsmin = Math.min(projects[0],projects[1])
        var projectpos = projects.indexOf(projectsmin)
        if (statuses[projectpos] == false){
          return names[projectpos]
        }
        else if (statuses[projectpos] == true) {
          if (projectpos == 0) {
            return names[1]
          }
          else if (projectpos == 1) {
            return names[0]
          }
        }
      }
      else if (statuses[0] == true || statuses[1] == true) {
        if (statuses[0] == true) {
          return names[1]
        }
        else if (statuses[1] == true) {
          return names[0]
        }
      }
      else {
        var tasksmin = Math.min(tasks[0],tasks[1])
      	var taskpos = tasks.indexOf(tasksmin)
        return names[taskpos]
      }
    }
    else if (statuses[1] == true){
      if (tasks[0] == tasks [2]) {
        var projectsmin = Math.min(projects[0],projects[2])
        var projectpos = projects.indexOf(projectsmin)
        if (statuses[projectpos] == false){
          return names[projectpos]
        }
        else if (statuses[projectpos] == true) {
          if (projectpos == 0) {
            return names[2]
          }
          else if (projectpos == 2) {
            return names[0]
          }
        }
      }
      else if (statuses[0] == true || statuses[2] == true) {
        if (statuses[0] == true) {
          return names[2]
        }
        else if (statuses[2] == true) {
          return names[0]
        }
      }
      else {
        var tasksmin = Math.min(tasks[0],tasks[2])
      	var taskpos = tasks.indexOf(tasksmin)
        return names[taskpos]
      }
    }
    else {
      if (tasks[1] == tasks [2]) {
        var projectsmin = Math.min(projects[1],projects[2])
        var projectpos = projects.indexOf(projectsmin)
        if (statuses[projectpos] == false){
          return names[projectpos]
        }
        else if (statuses[projectpos] == true) {
          if (projectpos == 1) {
            return names[2]
          }
          else if (projectpos == 2) {
            return names[1]
          }
        }
      }
      else if (statuses[1] == true || statuses[2] == true) {
        if (statuses[1] == true) {
          return names[2]
        }
        else if (statuses[2] == true) {
          return names[1]
        }
      }
      else {
        var tasksmin = Math.min(tasks[1],tasks[2])
      	var taskpos = tasks.indexOf(tasksmin)
        return names[taskpos]
    }
  }
  }
  else if (names.length == 2){
    if (tasks[0] == tasks [1]) {
      var projectsmin = Math.min(projects[0],projects[1])
      var projectpos = projects.indexOf(projectsmin)
      if (statuses[projectpos] == false){
        return names[projectpos]
      }
      else if (statuses[projectpos] == true) {
        if (projectpos == 0) {
          return names[1]
        }
        else if (projectpos == 1) {
          return names[0]
        }
      }
    }
    else if (statuses[0] == true || statuses[1] == true) {
      if (statuses[0] == true) {
        return names[1]
      }
      else if (statuses[1] == true) {
        return names[0]
      }
    }
    else {
      var tasksmin = Math.min(tasks[0],tasks[1])
      var taskpos = tasks.indexOf(tasksmin)
      return names[taskpos]
    }
  }
  else{
	  if (statuses[0] == false) {
    return names[0]
    }
    else {
    return "Nobody"
    }
  }
}


/*
##### TEST CASE 1 #####
Input:
    names: ["Josh", "Marta"]
    statuses: [false, false]
    projects: [2, 1]
    tasks: [16, 5]
Expected Output: "Marta"
*/
const names1 = ["Josh", "Marta"]
const statuses1 = [false, false]
const projects1 = [2, 1]
const tasks1 = [16, 5]
const testCase1 = taskAssigning(names1, statuses1, projects1, tasks1)
console.log("Expected Output is Marta --> ", testCase1)

/*
##### TEST CASE 2 #####
Input:
    names: ["Ferry", "Margareth"]
    statuses: [false, true]
    projects: [2, 1]
    tasks: [6, 5]
Expected Output: "Ferry"
*/
const names2 = ["Ferry", "Margareth"]
const statuses2 = [false, true]
const projects2 = [2, 1]
const tasks2 = [6, 5]
const testCase2 = taskAssigning(names2, statuses2, projects2, tasks2)
console.log("Expected Output is Ferry --> ", testCase2)

/*
##### TEST CASE 3 #####
Input:
    names: ["Kemin", "Hartono"]
    statuses: [false, false]
    projects: [1, 2]
    tasks: [6, 6]
Expected Output: "Kemin"
*/
const names3 = ["Kemin", "Hartono"]
const statuses3 = [false, false]
const projects3 = [1, 2]
const tasks3 = [6, 6]
const testCase3 = taskAssigning(names3, statuses3, projects3, tasks3)
console.log("Expected Output is Kemin --> ", testCase3)

/*
##### TEST CASE 4 #####
Input:
    names: ["Josh"]
    statuses: [false]
    projects: [10]
    tasks: [10]
Expected Output: "Josh"
*/
const names4 = ["Josh"]
const statuses4 = [false]
const projects4 = [10]
const tasks4 = [10]
const testCase4 = taskAssigning(names4, statuses4, projects4, tasks4)
console.log("Expected Output is Josh --> ", testCase4)

/*
##### TEST CASE 5 #####
Input:
    names: ["Josh", "Margareth", "Leon"]
    statuses: [false, true, false]
    projects: [1, 0, 2]
    tasks: [2, 0, 1]
Expected Output: "Leon"
*/
const names5 = ["Josh", "Margareth", "Leon"]
const statuses5 = [false, true, false]
const projects5 = [1, 0, 2]
const tasks5 = [2, 0, 1]
const testCase5 = taskAssigning(names5, statuses5, projects5, tasks5)
console.log("Expected Output is Leon --> ", testCase5)

/*
##### TEST CASE 6 #####
Input:
    names: ["Josh", "Margareth"]
    statuses: [false, false]
    projects: [10, 9]
    tasks: [10, 9]
Expected Output: "Margareth"
*/
const names6 = ["Josh", "Margareth"]
const statuses6 = [false, false]
const projects6 = [10, 9]
const tasks6 = [10, 9]
const testCase6 = taskAssigning(names6, statuses6, projects6, tasks6)
console.log("Expected Output is Margareth --> ", testCase6)

/*
##### TEST CASE 7 #####
Input:
    names: ["Bane"]
    statuses: [true]
    projects: [5]
    tasks: [6]
Expected Output: "Nobody"
*/
const names7 = ["Bane"]
const statuses7 = [true]
const projects7 = [5]
const tasks7 = [6]
const testCase7 = taskAssigning(names7, statuses7, projects7, tasks7)
console.log("Expected Output is Nobody --> ", testCase7)

/*
##### TEST CASE 8 #####
Input:
    names: ["Edgy", "Daine"]
    statuses: [false, false]
    projects: [10, 10]
    tasks: [9, 9]
Expected Output: "Edgy"
*/
const names8 = ["Edgy", "Daine"]
const statuses8 = [false, false]
const projects8 = [10, 10]
const tasks8 = [9, 9]
const testCase8 = taskAssigning(names8, statuses8, projects8, tasks8)
console.log("Expected Output is Edgy --> ", testCase8)
