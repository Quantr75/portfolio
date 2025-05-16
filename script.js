document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! (This is a placeholder, not real functionality.)");
    this.reset();
  });
