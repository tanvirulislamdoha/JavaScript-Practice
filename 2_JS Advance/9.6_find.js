// find
// find
// find

const arr = ["hello", "cat", "dog", "lion"];
const arr1 = ["hello", "rat", "dog", "lion"];

//normal way
const isLength3 = (string) => {
    return string.length === 3;
}
const ans = arr.find(isLength3);
console.log(ans);
//ans = cat
// it will only return cat because it finds it first. it won't return dog.

//shortcut way

const answer = arr1.find(str => str.length===3);
console.log(answer);


const users =[
    {userId: 1, userName: "naeem"},
    {userId: 2, userName: "mahmud"},
    {userId: 3, userName: "sourav"},
    {userId: 4, userName: "fahim"},
    {userId: 5, userName: "jamil"},
];

const result = users.find(user => user.userId===3);
console.log(result);