let fetchUsers = async () => {
  let response = await fetch(`http://localhost:3000/users`);
  let users = await response.json();

  let singleUser = users.filter(
    (value) => localStorage.getItem("id") == value.id
  );

  let followingUsers = users.filter((value) =>
    singleUser[0].following.includes(value.id)
  );
  followingUsers.map((value) => {
    let userContainer = document.createElement("article");
    let image = document.createElement("img");
    let userName = document.createElement("p");

    image.src = value.image || "../asserts/user.jpeg";
    userName.innerHTML = value.name;

    userContainer.addEventListener("click", () => {
      location.href = "../messages/messages.html";
      localStorage.setItem("userId", value.id);
    });
    userContainer.append(image, userName);
    document.querySelector(".container").append(userContainer);
  });
};
fetchUsers();
