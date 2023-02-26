const student ={
    name: 'neela',
    age: 15,
    class: 'ten',
    marks: {
        math: 85,
        physics: 76,
        chemistry: 90
    },
}

const marks = student.marks.math;

const chemistry = student['marks']['chemistry'];

const subject = 'math';
const subjectMarks = student.marks[subject]
console.log(subjectMarks)