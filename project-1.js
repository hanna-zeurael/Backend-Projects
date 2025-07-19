const form = document.createElement("form");
const heading = document.createElement("h2");
heading.textContent = "Employee Details";
form.appendChild(heading);

function createInput(labelText, id, type = "text") {
    const label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", id);
    const input = document.createElement("input");
    input.type = type;
    input.id = id;
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    return input;
}
const nameInput = createInput("First Name:", "firstNameInput");
const name2Input = createInput("Last Name:", "lastNameInput");

const maleInput = document.createElement("input");
maleInput.type = "radio";
maleInput.id = "male";
maleInput.value = "Male";

const maleLabel = document.createElement("label");
maleLabel.textContent = "Male";
maleLabel.setAttribute("for", "male");

const femaleInput = document.createElement("input");
femaleInput.type = "radio";
femaleInput.id = "female";
femaleInput.value = "Female";

const femaleLabel = document.createElement("label");
femaleLabel.textContent = "Female";
femaleLabel.setAttribute("for", "female");

form.appendChild(maleInput);
form.appendChild(maleLabel);
form.appendChild(femaleInput);
form.appendChild(femaleLabel);
form.appendChild(document.createElement("br"));

const eID = createInput("Employee ID:", "employeeID");
const design = createInput("Designation:", "designation");
const phno = createInput("Phone Number:", "phoneno");

const submitbtn = document.createElement("button");
submitbtn.type = "submit";
submitbtn.textContent = "Submit"
form.addEventListener("Submit", function(e){
    e.preventDefault();
    alert("Form submitted");
});
form.appendChild(submitbtn);

document.body.appendChild(form);