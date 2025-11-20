let profileImage = document.getElementById("image");
let posts = document.getElementById("post");
let followers = document.getElementById("followers");
let followings = document.getElementById("following");
let postdata = document.querySelector(".postData");
let profileData = async () => {
  let response = await fetch(
    `http://localhost:3000/users/${localStorage.getItem("id")}`
  );
  let data = await response.json();
  console.log(data);
  profileImage.src = data.image || "../asserts/user.jpeg";
  posts.innerHTML = data.post.length || 0;
  followers.innerHTML = data.followers.length || 0;
  followings.innerHTML = data.following.length || 0;

  data.post.map((value) => {
    let postContainer = document.createElement("aside");
    postContainer.classList = "col-6 col-md-3";
    postContainer.innerHTML = `<img src = "${value.uploadImage}"/>`;
    postdata.append(postContainer);
  });
};
profileData();
