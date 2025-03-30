let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let confirmPasswordEl = document.getElementById("confirm-password");
let formEl = document.getElementById("myForm");
let workingStatusEl = document.getElementById("workingStatus");
let activeEl = document.getElementById("active");
let inactiveEl = document.getElementById("inactive");
let maleEl = document.getElementById("genderMale");
let femaleEl = document.getElementById("genderFemale");
let nameErrorMsg = document.getElementById("nameError");
let emailErrorMsg = document.getElementById("emailError");
let passwordErrorMsg = document.getElementById("passwordError");
let confirmPasswordErrorMsg = document.getElementById("confirmPasswordError");

let myFormData = {
    name: "",
    email: "",
    status: "Active",
    gender: "Male"
};

function adduserFuntion(myFormData){
    let options = {
        method : "POST",
        headers : {
            "Content-Type":"application/json",
            Accept: "application/json",
            Authorization: "Bearer 1e9172de59f65fa7c12391f8722fca4185ffc9ca4de5f25996c4a4b22119f130"},
        body: JSON.stringify(myFormData)
    };


    let url = "https://gorest.co.in/public/v2/users";
    fetch(url,options)
    .then(function(response){
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Network response was not ok");
        }
    })
    .then(function(data){
        console.log("User added successfully:", data);
    })

};

function formVAlidation(myFormData){
    let isValid = true;

    if (nameEl.value.trim() === "") {
        nameErrorMsg.innerText = "Name is required";
        isValid = false;
    } else {
        myFormData.name = nameEl.value;
        nameErrorMsg.innerText = "";
    }

    if (emailEl.value.trim() === "") {
        emailErrorMsg.innerText = "Email is required";
        isValid = false;
    } else {
        myFormData.email = emailEl.value;
        emailErrorMsg.innerText = "";
    }

    if (passwordEl.value.trim() === "") {
        passwordErrorMsg.innerText = "Password is required";
        isValid = false;
    } else {
        passwordErrorMsg.innerText = "";
    }

    if (confirmPasswordEl.value.trim() === "") {
        confirmPasswordErrorMsg.innerText = "Confirm Password is required";
        isValid = false;
    } else {
        confirmPasswordErrorMsg.innerText = "";
    }
    if (passwordEl.value !== confirmPasswordEl.value) {
        confirmPasswordErrorMsg.innerText = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        console.log(myFormData);
    }
}



maleEl.addEventListener("change", function (event) {
    myFormData.gender = event.target.value;
});
femaleEl.addEventListener("change", function (event) {
    myFormData.gender = event.target.value;
});
formEl.addEventListener("submit", function (event) {
    event.preventDefault();
    formVAlidation(myFormData);
    adduserFuntion(myFormData)
});




workingStatusEl.addEventListener("change", function (event) {
    myFormData.status = event.target.value;
});