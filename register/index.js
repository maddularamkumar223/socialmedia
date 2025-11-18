let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  passwordConformation();
  location.href = "../login/index.html";
});
let passwordConformation = () => {
  let formData = new FormData(form);
  if (formData.get("password") === formData.get("confirmpassword")) {
    let dataImage = formData.get("image");

    let reader = new FileReader();
    reader.onload = (e) => {
      let imageData = e.currentTarget.result;
      let details = {
        name: formData.get("name"),
        email: formData.get("email"),
        gender: formData.get("gender"),
        dob: formData.get("dob"),
        contact: formData.get("contact"),
        password: formData.get("password"),
        image: imageData,
        post: [],
        followers: [],
        following: [],
      };
      addUser(details);
    };
    reader.readAsDataURL(dataImage);
  } else {
    alert("Password Mismatch");
  }
};
let addUser = async (data) => {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

let login = document.getElementById("login");
login.addEventListener("click", () => {
  location.href = "../login/index.html";
});
