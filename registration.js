
function addStudent() {

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    if (name == "" || roll == "") {
        alert("Enter student details");
        return;
    }

    let students=JSON.parse(localStorage.getItem("students"))||[];
    students.push({name:name,roll:roll});
    localStorage.setItem("students",JSON.stringify(students));

    alert("Student Registered Successfully");
}
