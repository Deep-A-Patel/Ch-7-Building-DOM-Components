const createStudentComponent = (name, subject, info) => {
    return `
    
    <div class="student">
    <h1>${name}</h1>
    <section>${subject}</section>
    <aside>${info}</aside>
    </div>
    `
}
    
const createStudentContainer = document.querySelector("#container")


//const Deep = createStudentContainer.innerHTML += createStudentComponent("Deep Patel", "Maths", "Good Student")


for (const student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = `<div class="student">
        <h1 class="xx-large passing">${student.name}</h1>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>`
    createStudentContainer.innerHTML += studentComponent
    } else {
        studentComponent = `<div class="student">
        <h1 class="xx-large failing">${student.name}</h1>
        <section class="bordered dashed section--padded">${student.subject}</section>
        <aside class="pushRight">${student.info}</aside>
    </div>`
    createStudentContainer.innerHTML += studentComponent
    }
}



