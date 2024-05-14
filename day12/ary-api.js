// json(): array -> string
const fruits = ['apple','banana','orange'];
const result = fruits.join(',');
console.log(result);
// split()
const fruits1 = 'a,b,c,d'
const result1 = fruits1.split(',');
console.log(result1);

class student{
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new student('A',29,true,45),
    new student('B',29,false,45),
    new student('C',29,true,45),
    new student('D',29,false,45),
    new student('E',29,true,90),
];

{
    const result2 = students.find(function(students,index){
        console.log(students,index);
        return students.score === 90;
    });
    console.log(result2)
}
{
    console.clear();
    const result3 = students.filter((students) => students.enrolled);
    console.log(result3);
}
{   
    console.clear();
    const result4 = students.map((student)=> student.score);
    console.log(result4)
}