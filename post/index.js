let fetchSingleUser = async (id, postData) => {
  let response = await fetch(`http://localhost:3000/users/${id}`);
  let singleUser = await response.json();
  let updatePost = [...singleUser.post, postData];
  await fetch(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ post: updatePost }),
  });
};
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  let postImage = formData.get("uploadImage");
  let audio = formData.get("song");
  let reader = new FileReader();
  reader.onload = (event) => {
    let image = event.target.result;
    let song = event.target.result;
    let postData = {
      caption: formData.get("caption"),
      mention: formData.get("mention"),
      uploadImage: image,
      closeFriends: formData.get("closeFriends"),
      song: song,
    };
    fetchSingleUser(localStorage.getItem("id"), postData);
  };
  reader.readAsDataURL(postImage, audio);
});
