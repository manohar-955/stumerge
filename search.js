
function searchStudent() {

    let roll = document.getElementById("search").value;

    let students = JSON.parse(localStorage.getItem("students")) || [];

    let found = students.find(s => s.roll == roll);

    if (found) {
        document.getElementById("result").innerHTML =
            "Student Name: " + found.name +
            "<br>Roll Number: " + found.roll;
    }
    else {
        document.getElementById("result").innerHTML =
            "Student Not Found";
    }
}
