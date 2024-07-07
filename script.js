document.getElementById("grade-analyzer").addEventListener("click", (e) => {
    const testGradeAnalyzer = () => {
        const assignments = [75, 88, 37, 100, 100, 89, 92, 93, 68, 76, 85, 90, 40, 99];
        console.log(gradeAnalyzer(assignments));
    };
    testGradeAnalyzer();
});

const gradeAnalyzer = (assignmentGrades) => {
    //Total points earned
    const totalPoints = assignmentGrades.reduce((total, grade) => total + grade, 0);

    //Average score (assume each assignment is worth 100 points)
    const average = (totalPoints / assignmentGrades.length).toFixed(1);

    //Highest score
    const highest = Math.max(...assignmentGrades);

    //Lowest score
    const lowest = Math.min(...assignmentGrades);

    //Based on the average score, determine if they have an overall passing grade (assume 60% is passing)
    const passing = average >= 60;

    return {
        total: totalPoints,
        average: average,
        highest: highest,
        lowest: lowest,
        passing: passing
    };
};
