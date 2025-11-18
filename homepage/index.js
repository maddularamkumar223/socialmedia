let postButton = document.querySelector("button");
postButton.addEventListener("click", () => {
  location.href = "../post/index.html";
});

let logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("id");
  location.href = "../login/index.html";
});

let fetchUsers = async () => {
  let response = await fetch(`http://localhost:3000/users`);
  let data = await response.json();
  console.log(data);
  let filterData = data.filter(
    (value) => value.id != localStorage.getItem("id")
  );
  filterData.forEach((element) => {
    let userContainer = document.createElement("article");
    let image = document.createElement("img");
    let profileName = document.createElement("p");
    let followButton = document.createElement("button");
    followButton.innerHTML = "Follow";
    profileName.innerHTML = element.name;
    image.src = element.image || "../asserts/user.jpeg";
    followButton.addEventListener("click", () => {
      addFollowings(element.id, localStorage.getItem("id"));
    });

    userContainer.append(image, profileName, followButton);
    document.querySelector(".following").appendChild(userContainer);
  });
};
fetchUsers();

let addFollowings = async (userId, id) => {
  let response = await fetch(`http://localhost:3000/users/${id}`);
  let singleData = await response.json();
  console.log(singleData.following);
  let updateFollowings = [...singleData.following, userId];
  console.log(updateFollowings)
  addDataFollowing(updateFollowings, id);
};

let addDataFollowing = async (data, id) => {
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ following: data }),
  });
};
