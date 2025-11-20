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
  let filterData = data.filter(
    (value) => value.id != localStorage.getItem("id")
  );

  let singleUser = data.filter(
    (value) => value.id == localStorage.getItem("id")
  );

  let followingUsers = data.filter((value) =>
    singleUser[0].following.includes(value.id)
  );
  // ! Following List display
  filterData.forEach((element) => {
    let userContainer = document.createElement("article");
    let image = document.createElement("img");
    let profileName = document.createElement("p");
    let followButton = document.createElement("button");
    followButton.innerHTML = "Follow";
    profileName.innerHTML = element.name;
    image.src = element.image || "../asserts/user.jpeg";
    userContainer.classList = "follow col-6 col-md-3";
    followButton.addEventListener("click", () => {
      addFollowings(element.id, localStorage.getItem("id"));
    });
    userContainer.append(image, profileName, followButton);
    document.querySelector(".following").appendChild(userContainer);
  });

  if (followingUsers.length > 0) {
    displayPost(followingUsers);
  } else {
    displayPost(data);
  }
};
fetchUsers();

let addFollowings = async (userId, id) => {
  let response = await fetch(`http://localhost:3000/users/${id}`);
  let singleData = await response.json();
  console.log(singleData.following);
  let updateFollowings = [...singleData.following, userId];
  console.log(updateFollowings);
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

let displayPost = (data) => {
  // ! Post Display
  let postContainer = document.createElement("aside");
  let postData = document.createElement("article");
  postData.classList = "row";
  data.map((user) => {
    user.post.map((value) => {
      let figure = document.createElement("figure");
      let figCaption = document.createElement("figcaption");
      let displayImage = document.createElement("img");
      let div = document.createElement("div");
      div.innerHTML = `
      <i class="fa-solid fa-heart"></i>
      <i class="fa-regular fa-message"></i>
      <i class="fa-solid fa-share"></i>
      `;

      div.children[0].addEventListener("click", () => {
        div.children[0].style.color = "red";
      });

      console.log(div.children[0]);
      displayImage.src = value.uploadImage;
      figCaption.innerHTML = value.caption;

      figure.classList = "col-12 col-sm-6  col-lg-4 col-xl-3";
      figure.append(displayImage, div, figCaption);
      postData.append(figure);
      postContainer.append(postData);
    });
  });
  document.querySelector(".container").append(postContainer);
};
