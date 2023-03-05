//method to get all data
function allData() {
  table.innerHTML = ``;
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];
  contactList.forEach(function (value, i) {
    var table = document.getElementById("table");

    table.innerHTML += `
            <tr>
                <td>${i + 1}</td>
                <td>${value.name}</td>
                <td>${value.email}</td>
                <td>${value.gender}</td>
                <td>${value.password}</td>
                <td>
                    <button class="btn btn-sm btn-dark" onclick="find(${
                      value.id
                    })">
                        <i class="fa fa-edit"></i>
                    </button>
                </td>
                <td>
                    <button class="btn btn-sm btn-danger" onclick="removeData(${
                      value.id
                    })">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>`;
  });
}

//Login Validation
function loginValidation() {
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var email = document.getElementsByName("loginEmail")[0].value;
    var password = document.getElementsByName("loginPassword")[0].value;
    var users = JSON.parse(localStorage.getItem("listItem"));
    if (!users) {
      alert("User tidak ditemukan!");
      return;
    }
    var user = users.find(function (u) {
      return u.email === email && u.password === password;
    });
    if (!user) {
      alert("Email atau password salah!");
      return;
    } else {
      alert("Login berhasil!");
      window.location.href = "index.html";
    }
  });
}
function signup() {
  window.location.href = "thankyou.html";
}
//Save Data To Local Storage
function save() {
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];
  var id;
  contactList.length != 0
    ? contactList.findLast((item) => (id = item.id))
    : (id = 0);
  if (document.getElementById("id").value) {
    contactList.forEach((value) => {
      if (document.getElementById("id").value == value.id) {
        (value.name = document.getElementById("name").value),
          (value.email = document.getElementById("email").value),
          (value.gender = document.getElementById("gender").value),
          (value.password = document.getElementById("password").value);
      }
    });

    document.getElementById("id").value = "";
  } else {
    var item = {
      id: id + 1,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      gender: document.getElementById("gender").value,
      password: document.getElementById("password").value,
    };
    contactList.push(item);
  }
  localStorage.setItem("listItem", JSON.stringify(contactList));
  allData();
  document.getElementById("form").reset();
}
//Get Detail of Personal Data
function find(id) {
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];
  contactList.forEach(function (value) {
    if (value.id == id) {
      document.getElementById("id").value = value.id;
      document.getElementById("name").value = value.name;
      document.getElementById("email").value = value.email;
      document.getElementById("gender").value = value.gender;
      document.getElementById("password").value = value.password;
    }
  });
}
function removeData(id) {
  contactList = JSON.parse(localStorage.getItem("listItem")) ?? [];
  contactList = contactList.filter(function (value) {
    return value.id != id;
  });
  localStorage.setItem("listItem", JSON.stringify(contactList));
  allData();
}
