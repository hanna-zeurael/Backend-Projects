const Feedback = document.createElement("form");
const heading = document.createElement("h2");
heading.textContent = "Form for feedback giving";
Feedback.appendChild(heading);

function createInput(labelText, id, type = "text"){
    const label = document.createElement("label");
    label.textContent = labelText;
    label.setAttribute("for", id);
    const input = document.createElement("input");
    input.id = id;
    input.type = type;
    Feedback.appendChild(label);
    Feedback.appendChild(input);
    Feedback.appendChild(document.createElement("br"));
    Feedback.appendChild(document.createElement("br"));

    return input;

}

const uname = createInput("Name:", "fname");
const email = createInput("Email:", "femail");

const fbacklabel = document.createElement("label");
fbacklabel.textContent = "Feedback:";
fbacklabel.setAttribute("for", "fback");
Feedback.appendChild(fbacklabel);

const fback = document.createElement("textarea");
fback.id = "fback";
fback.rows = 5;
fback.cols = 40;
Feedback.appendChild(fback);
Feedback.appendChild(document.createElement("br"));
Feedback.appendChild(document.createElement("br"));

const submitBtn = document.createElement("button");
submitBtn.textContent = "Submit";
submitBtn.type = "submit";
Feedback.appendChild(submitBtn);

Feedback.addEventListener ("submit", function(e){
    e.preventDefault();
    alert("Thankyou, "+ uname.value + "! Your feedback has been recieved.")

});

document.body.appendChild(Feedback);
