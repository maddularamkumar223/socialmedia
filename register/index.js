let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  passwordConformation();
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

let main = document.querySelector("main");

let fetchUser = async () => {
  let response = await fetch("http://localhost:3000/users");
  let data = await response.json();

  data.map((value) => {
    let img = document.createElement("img");
    img.src = value.image;
    main.append(img);
  });
};
fetchUser()
