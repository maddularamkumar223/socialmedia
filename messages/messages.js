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
      localStorage.getItem("userId") == value.userId &&
      localStorage.getItem("id") == value.userId
  );
  console.log(filterMessages);
  filterMessages.map((value) => {
    let message = document.createElement("p");
    message.innerHTML = value.text;
    document.querySelector(".messageDisplay").append(message);
  });
};
displayMessage();
