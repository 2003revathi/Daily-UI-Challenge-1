document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const gender = document.querySelector(
      'input[name="gender"]:checked'
    )?.value;

    if (firstName.length > 20 || lastName.length > 20) {
      alert("should be leass than 20 char");
      return;
    }
    const message = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Gender: ${gender}
        Mobile: ${mobile}
        Email: ${email}
        `;

    document.getElementById("message").innerText = message;
  });
});
