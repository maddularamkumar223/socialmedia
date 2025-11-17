let form = document.querySelector("form");
let validation = async (username, password) => {
  let response = await fetch("http://localhost:3000/users");
  let usersData = await response.json();
  let singleUser = usersData.filter(
    (value) => value.email == username && value.password == password
  );
  if (singleUser.length === 1) {
    alert("Login Successful");
    location.href = "../homepage/index.html";
    localStorage.setItem("id", singleUser[0].id);
  } else {
    alert("Login Failed");
    location.href = "../register/index.html";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  validation(formData.get("username"), formData.get("password"));
});
