document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("mindReaderForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    const selectedNumber = document.getElementById("selectedNumber").value;
    // Do something with the selectedNumber
    console.log("User selected number:", selectedNumber);
  });
});