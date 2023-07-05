const wrapusers = document.querySelector("#wrap-users");

window.addEventListener("load", () => {
    // use from firebase
  fetch("https://test-60cf9-default-rtdb.firebaseio.com/users.json")
    .then((res) => res.json())
    .then((data) => {
      let usersData = Object.entries(data);

      usersData.forEach((item) => {
        console.log(item);
        wrapusers.innerHTML += `<div class="user">
      <div class="user-profile-wrap">
          <img class="user-profile" src="content/img/noimg.png" alt="default-image">
          <div class="user-profile-description">
              <h1 class="user-profile-name">${item[1].firstname}-${item[1].lastname} <span class="user-age"></span> </h1>
              <h3 class="user-explanations">Pass=>  ${item[1].password}</h3>
          </div>
      </div>
      <div class="btn-groups-column">
          <button class="delete-user-btn">delete</button>
          <button class="edit-user-btn">edit</button>
      </div>
  </div>`;
      });
    });
});


