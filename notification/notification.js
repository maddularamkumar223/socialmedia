let notificationData = async () => {
  let response = await fetch("http://localhost:3000/notifications");
  let data = await response.json();
  let filterNotifications = data.filter(
    (value) =>
      value.receiverId == localStorage.getItem("id") && value.seen == false
  );
  if (filterNotifications.length > 0) {
    filterNotifications.map((value) => {
      seenTrue(value.id);
    });
  }
};
notificationData();

let seenTrue = async (id) => {
  await fetch(`http://localhost:3000/notifications/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ seen: true }),
  });
};
