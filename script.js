var result = document.getElementById("output-group");

function generate() {
    var no_subject = document.getElementById("nosubject").value;
    var inputs = document.getElementById("input-group");
    if (no_subject === "") {
        result.innerHTML = "Please Enter valid value  for number of subjects.";
        inputs.innerHTML = "";
    }
    else {
        result.innerHTML = "";
        inputs.innerHTML = "";
        inputs.style.display="flex";
        inputs.style.flexDirection="column";
        inputs.style.alignItems="center";
        inputs.style.display="flex";

        for (var i = 1; i <= no_subject; i++) {
            var creditinput = document.createElement("input");
            creditinput.type = "number";
            creditinput.placeholder = "Credits for course " + i + " ?";
            creditinput.id = "credits" + i;
            creditinput.min = "1";
            inputs.appendChild(creditinput);

            var gradeinput = document.createElement("input");
            gradeinput.type = "number";
            gradeinput.placeholder = "Grade for course " + i + " ?";
            gradeinput.id = "grade" + i;
            gradeinput.min = "0";
            gradeinput.max = "10";
            gradeinput.step = "1";
            inputs.appendChild(gradeinput);

        }
        inputs.appendChild(document.createElement("br"));
        var button = document.createElement("button");
        button.onclick = calculate;
        button.innerText = "Calculate GPA";
        inputs.appendChild(button);
    }
}
function calculate() {
    var sumCredits = 0;
    var sumGrade = 0;
    var no_subject = document.getElementById("nosubject").value;
    for (var j = 1; j <= no_subject; j++) {
        var credit = parseFloat(document.getElementById("credits" + j).value);
        var grade = parseFloat(document.getElementById("grade" + j).value);

        sumCredits += credit;
        sumGrade += credit * grade;

    }
    result.innerHTML = sumCredits;
    if (sumCredits > 0) {
        var cgpa = sumGrade / sumCredits;
        result.innerHTML = "Your CGPA is  " + cgpa;
    } else {
        result.innerHTML = "Please enter valid values for all fields.";
    }

}
