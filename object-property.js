const students = [
    {id:21, name:"omar sunny"},
    {id:22, name:"manna"},
    {id:23, name:"moyuri"},
    {id:24, name:"deepjol"}
]
const names = students.map(s=>s.name);
const ids = students.map(s=>s.id);
const bigger = students.find(s=>s.id>22);
console.log(names);
console.log(ids);
console.log(bigger);