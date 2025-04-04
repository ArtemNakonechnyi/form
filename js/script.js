const curDate = document.getElementById("currentDate");
const mainForm = document.getElementById("mainForm");

function displayDate() {
  const today = new Date();

  const formatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedDate = formatter.format(today);
  curDate.textContent = formattedDate;
}

displayDate();

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(mainForm);
  formData.forEach((val, key) => {
    console.log(`${key}: ${val}`);
  });
  mainForm.reset();
});
