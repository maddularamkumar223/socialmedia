export let addNotification = async (userId) => {
  try {
    await fetch("http://localhost:3000/notifications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        // id: crypto.randomUUID(),
        receiverId: userId,
        sendId: localStorage.getItem("id"),
        seen: false,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};
