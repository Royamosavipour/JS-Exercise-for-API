const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const password = document.querySelector(".password");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newUser = {
    firstname: firstname.value,
    lastname: lastname.value,
    password: password.value,
  };

  // Post Request => i use from firebase as Database
  fetch("https://test-60cf9-default-rtdb.firebaseio.com/users.json", {
    method: "POST",
    headers: { "Content-type": "application.json" },
    body: JSON.stringify(newUser),
  })
    .then((res) => {
      console.log(res);
      clearData();
    })
    .catch((err) => console.log(err));
});

function clearData() {
  firstname.value = "";
  lastname.value = "";
  password.value = "";
}


