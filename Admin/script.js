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

// dropdown

document.addEventListener('DOMContentLoaded', function () {
  var dropdownButtons = document.querySelectorAll('.dropdown-btn');
  var exportPdfButtons = document.querySelectorAll('.exportPdfBtn');

  dropdownButtons.forEach(button => {
      button.addEventListener('click', function () {
          this.classList.toggle('active');
          var dropdownContainer = this.nextElementSibling;
          if (dropdownContainer.style.display === 'block') {
              dropdownContainer.style.display = 'none';
              this.textContent = this.textContent.replace('−', '+');
          } else {
              dropdownContainer.style.display = 'block';
              this.textContent = this.textContent.replace('+', '−');
          }
      });
  });

  exportPdfButtons.forEach(button => {
      button.addEventListener('click', function () {
          var vendorId = this.getAttribute('data-vendor');
          var table = document.getElementById(vendorId);

          var { jsPDF } = window.jspdf;
          var doc = new jsPDF();

          var rows = table.querySelectorAll('tr');

          var content = [];
          rows.forEach((row, index) => {
              var cells = row.querySelectorAll('th, td');
              var rowData = [];
              cells.forEach(cell => {
                  if (index === 0 || cell.nodeName === "TH") {
                      rowData.push(cell.innerText);
                  } else if (cell.querySelector('img')) {
                      var imgData = cell.querySelector('img').src;
                      rowData.push({ image: imgData, fit: [50, 50] });
                  } else {
                      rowData.push(cell.innerText);
                  }
              });
              content.push(rowData);
          });

          doc.autoTable({
              head: [content[0]],
              body: content.slice(1),
              styles: { overflow: 'linebreak', cellWidth: 'wrap' },
              columnStyles: {
                  4: { cellWidth: 50 },
              },
          });

          doc.save(vendorId + '-products.pdf');
      });
  });
});

