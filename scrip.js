const students = [
    {
        name: "Lucas",
        n1: 10,
        n2: 5,
        average: null,
        approved: null,
    },
       
    {
        name: "Joana",
        n1: 3,
        n2: 7,
        average: null,
        approved: null,
    },
       
    {
        name: "Jonas",
        n1: 2,
        n2: 9,
        average: null,
        approved: null,
    },
       
]

for (let id = 0; id < 3; id++) {
    students[id].average = (students[id].n1 + students[id].n2)/2

    if (students[id].average >= 7) {
        students[id].approved = `Parabéns, ${students[id].name}! Você foi aprovado!`
    } else {
        students[id].approved = `Eita, ${students[id].name}! Você foi reprovado, mas não desista!`
    }

    alert(`A média do aluno(a) ${students[id].name} é: ${students[id].average}. \n${students[id].approved}`)
}