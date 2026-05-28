// SIGNUP

const signupForm = document.getElementById("signupForm");

if(signupForm){

    signupForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const inputs = signupForm.querySelectorAll("input");

        const data = {
            name: inputs[0].value,
            email: inputs[1].value,
            password: inputs[2].value
        };

        const response = await fetch("/signup", {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const result = await response.json();

        alert(result.message);

        if(result.success){
            window.location.href = "login.html";
        }

    });

}




// LOGIN

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const inputs = loginForm.querySelectorAll("input");

        const data = {
            email: inputs[0].value,
            password: inputs[1].value
        };

        const response = await fetch("/login", {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const result = await response.json();

        alert(result.message);

        if(result.success){
            window.location.href = "form.html";
        }

    });

}





// STUDENT FORM

const studentForm = document.getElementById("studentForm");

if(studentForm){

    studentForm.addEventListener("submit", async (e) => {

        e.preventDefault();

        const inputs = studentForm.querySelectorAll("input");
        const textarea = studentForm.querySelector("textarea");

        const data = {

            fullname: inputs[0].value,
            mobile: inputs[1].value,
            branch: inputs[2].value,
            age: inputs[3].value,
            address: textarea.value

        };

        const response = await fetch("/student", {

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(data)

        });

        const result = await response.json();

        alert(result.message);

        if(result.success){
            studentForm.reset();
        }

    });

}