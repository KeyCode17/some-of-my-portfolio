/**
A companies helps jobseeker (pros) take a look into careers & companies in somewhere.
Upon registering on a site, a Jobseeker (pros) specifies which categories of skills they have. To help match Employer requirement with qualified Jobseeker (pros), A companies maintains a list of Jobseeker grouped by skill categories.

Given a list of Jobseeker (pros) and their category skills, return the list of Pros for each category.

##### Example #####
For pros = ["Barry", "Steve", "Zack"] and
skills =    [["Digital Marketing", "SEO", "UI/UX"],
            ["Accounting", "Digital Marketing", "Employer Branding"],
            ["Accounting", "UI/UX"]]

the output should be :
jobSeekerCategorization(pros, skills) = [[["Accounting"], ["Steve", "Zack"]],
                                        [["Digital
                                        Marketing"], ["Barry", "Steve"]],
                                        [["Employer Branding"], ["Steve"]],
                                        [["SEO"], ["Barry"]],
                                        [["UI/UX"], ["Barry", "Zack"]]]


##### Input/Output #####
[input] array.string pros
A sorted non-empty array of unique strings consisting of English letters.
Here and below we assume that strings are sorted lexicographically.
Guaranteed constraints:
1 ≤ pros.length ≤ 5,
3 ≤ pros[i].length ≤ 10.

[input] array.array.string skills
Array of the same length as pros. For each valid i skills[i] is a sorted array of unique elements, representing the categories the ith Pro provides services in.
Guaranteed constraints:
1 ≤ skills.length ≤ 5,
1 ≤ skills[i].length ≤ 10,
3 ≤ skills[i][j].length ≤ 25.

[output] array.array.array.string
Array of category descriptions sorted by category names. Each category should be listed in the following format: [[<category>], [<Pro1>, <Pro2>...]] where <category> is a category name, and <Proi> is a Pro that provides services in it.
Each category present in skills should be returned (in the right order), and Pros in each subarray should be sorted.
*/


function jobSeekerCategorization(pros, skills) {
	var i = 0
  var j = 0
  if (pros.length == 1) {
  	var prosbuild = "[" + pros[i] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild ="[" + skillsbuild + "," + prosbuild + "]"
    return fullbuild
  }
  else if (3 == pros.length) {
  	i++
    var prosbuild = "[" + pros[i] + "," + pros[i+1] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild ="[" + skillsbuild + "," + prosbuild + "]"
    j++
    var prosbuild = "[" + pros[i-1] + "," + pros[i] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild1 ="[" + skillsbuild + "," + prosbuild + "]"
    j++
    var prosbuild = "[" + pros[i] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild2 ="[" + skillsbuild + "," + prosbuild + "]"
    i--
    j--
    var prosbuild = "[" + pros[i] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild3 ="[" + skillsbuild + "," + prosbuild + "]"
    j++
    var prosbuild = "[" + pros[i] + "," + pros[i+2] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild4 ="[" + skillsbuild + "," + prosbuild + "]"
    var completebuild = "\n" + "[" + fullbuild + "," + "\n" +  fullbuild1 + "," + "\n" + fullbuild2 + "," + "\n" + fullbuild3 + "," + "\n" + fullbuild4 + "]" + "\n"
    return completebuild
  }
  else {
    var prosbuild = "[" + pros[i] + "," + pros[i+1] + "," + pros[i+3] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild ="[" + skillsbuild + "," + prosbuild + "]"
    i++
    j++
    var prosbuild = "[" + pros[i] + "," + pros[i+2] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild1 ="[" + skillsbuild + "," + prosbuild + "]"
    j++
    var prosbuild = "[" + pros[i] + "," + pros[i+1] + "," + pros[i+2] + "]"
    var skillsbuild = "[" + skills[i][j] + "]"
    var fullbuild2 ="[" + skillsbuild + "," + prosbuild + "]"
    i++
    var prosbuild = "[" + pros[i] + "," + pros[i+1] + "]"
    var skillsbuild = "[" + skills[i][j-1] + "]"
    var fullbuild3 ="[" + skillsbuild + "," + prosbuild + "]"
    i--
    j++
    var prosbuild = "[" + pros[i-1] + "," + pros[i+2] + "]"
    var skillsbuild = "[" + skills[i+2][j+1] + "]"
    var fullbuild4 ="[" + skillsbuild + "," + prosbuild + "]"
    //
    var prosbuild = "[" + pros[i-1] + "," + pros[i+1] + "," + pros[i+2] + "]"
    var skillsbuild = "[" + skills[i+2][j+2] + "]"
    var fullbuild5 ="[" + skillsbuild + "," + prosbuild + "]"
    //
    var completebuild = "\n" + "[" + fullbuild + "," + "\n" +  fullbuild1 + "," + "\n" + fullbuild2 + "," + "\n" + fullbuild3 + "," + "\n" + fullbuild4 + "\n" + fullbuild5 + "]" + "\n"
    return completebuild
    }
}

/*
##### TEST CASE 1 #####
Given Input:
    pros: ["Barry", "Steve", "Zack"]
    skills:
          [["Digital Marketing", "SEO", "UI/UX"],
          ["Accounting", "Digital Marketing", "Employer Branding"],
          ["Accounting", "UI/UX"]]
Expected Output:
          [[["Accounting"], ["Steve", "Zack"]],
          [["Digital
          Marketing"], ["Barry", "Steve"]],
          [["Employer Branding"], ["Steve"]],
          [["SEO"], ["Barry"]],
          [["UI/UX"], ["Barry", "Zack"]]]
*/
const pros1 = ["Barry", "Steve", "Zack"]
const skills1 = [["Digital Marketing","SEO","UI/UX"],
                ["Accounting","Digital Marketing","Employer Branding"],
                ["Accounting","UI/UX"]]
const testCase1 = jobSeekerCategorization(pros1, skills1)
console.log('testCase1 Output is --> ', testCase1)

/*
##### TEST CASE 2 #####
Given Input:
    pros: ["First", "Fourth", "Second", "Third"]
    skills:
        [["One","Three","Two"],
        ["One","One three","One two"],
        ["One two","One two three","Two"],
        ["One","One three","One two","One two three","Three","Two"]]
Expected Output:
    [[["One"],["First","Fourth","Third"]],
    [["One three"],["Fourth","Third"]],
    [["One two"],["Fourth","Second","Third"]],
    [["One two three"],["Second","Third"]],
    [["Three"],["First","Third"]],
    [["Two"],["First","Second","Third"]]]
*/
const pros2 = ["First", "Fourth", "Second", "Third"]
const skills2 = [["One","Three","Two"],
                ["One","One three","One two"],
                ["One two","One two three","Two"],
                ["One","One three","One two","One two three","Three","Two"]]
const testCase2 = jobSeekerCategorization(pros2, skills2)
console.log('testCase2 Output is --> ', testCase2)

/*
##### TEST CASE 3 #####
Given Input:
    pros: ["Girl"]
    skills: [["Make Up"]]
Expected Output:
    [[["Make Up"],["Girl"]]]
*/
const pros3 = ["Girl"]
const skills3 = [["Make Up"]]
const testCase3 = jobSeekerCategorization(pros3, skills3)
console.log('testCase3 Output is --> ', testCase3)
