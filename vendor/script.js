const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

const Dashboard = document.getElementsByClassName("home");
const Notifications = document.getElementsByClassName("Notifications");
const Likes = document.getElementsByClassName("Likes");

//Let's fvcking go

const navLinks = document.querySelectorAll(".nav-link");
const navSections = document.querySelectorAll(".nav-section");

navLinks.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    const nav = e.currentTarget;

    navSections.forEach((navSection) => {
      if (navSection.id != nav.textContent.trim().toLowerCase()) {
        navSection.style.display = "none";
      } else {
        navSection.style.display = "block";
      }
    });
  });
});

// Table
document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('productModal');
  var btn = document.getElementById('newProductBtn');
  var span = document.getElementsByClassName('close')[0];
  var form = document.getElementById('productForm');
  var table = document.getElementById('productTable');

  // When the user clicks the button, open the modal
  btn.onclick = function () {
      modal.style.display = 'block';
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
      modal.style.display = 'none';
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }

  // Handle form submission
  form.addEventListener('submit', function (event) {
      event.preventDefault();

      var productName = document.getElementById('productName').value;
      var productPrice = document.getElementById('productPrice').value;
      var productQuantity = document.getElementById('productQuantity').value;
      var productDate = document.getElementById('productDate').value;
      var productImage = document.getElementById('productImage').value;
      var productRemark = document.getElementById('productRemark').value;

      var row = table.insertRow();
      var snCell = row.insertCell(0);
      snCell.innerHTML = table.rows.length;

      row.insertCell(1).innerHTML = productName;
      row.insertCell(2).innerHTML = `$${productPrice}`;
      row.insertCell(3).innerHTML = productQuantity;
      row.insertCell(4).innerHTML = productDate;

      var imgCell = row.insertCell(5);
      var img = document.createElement('img');
      img.src = productImage;
      img.alt = 'Product Image';
      imgCell.appendChild(img);

      row.insertCell(6).innerHTML = productRemark;
      var deleteCell = row.insertCell(7);
      deleteCell.innerHTML = '<button class="deleteBtn">Delete</button>';

      // Clear form
      form.reset();

      // Close modal
      modal.style.display = 'none';
  });

  // Handle delete row
  table.addEventListener('click', function (event) {
      if (event.target && event.target.classList.contains('deleteBtn')) {
          var row = event.target.closest('tr');
          row.parentNode.removeChild(row);

          // Update S/N for remaining rows
          for (var i = 0; i < table.rows.length; i++) {
              table.rows[i].cells[0].innerText = i + 1;
          }
      }
  });
});
