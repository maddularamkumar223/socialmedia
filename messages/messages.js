let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let messageData = {
    id: crypto.randomUUID(),
    myId: localStorage.getItem("id"),
    userId: localStorage.getItem("userId"),
    text: formData.get("message"),
  };
  sendMessage(messageData);
});

let sendMessage = async (data) => {
  await fetch("http://localhost:3000/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

let displayMessage = async () => {
  let response = await fetch("http://localhost:3000/messages");
  let data = await response.json();
  console.log(data);
  let filterMessages = data.filter(
    (value) =>
      (value.userId == localStorage.getItem("userId") &&
        value.myId == localStorage.getItem("id")) ||
      (value.userId == localStorage.getItem("id") &&
        value.myId == localStorage.getItem("userId"))
  );
  filterMessages.map((value) => {
    let messageContainer = document.createElement("aside");
    let message = document.createElement("p");
    message.innerHTML = value.text;

    if (localStorage.getItem("id") == value.myId) {
      messageContainer.classList = "right";
    } else {
      messageContainer.classList = "left";
    }
    messageContainer.append(message);
    document.querySelector(".messageDisplay").append(messageContainer);
  });
};
displayMessage();

let userData = async () => {
  let response = await fetch(
    `http://localhost:3000/users/${localStorage.getItem("userId")}`
  );
  let singleUser = await response.json();
  console.log(singleUser);
  let data = document.getElementsByClassName("userData");
  data[0].children[0].src = singleUser.image || "../asserts/user.jpeg";
  data[0].children[1].innerHTML = singleUser.name;
};
userData();
console.log(data[0].children[0]);
