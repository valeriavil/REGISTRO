document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroForm");
  const passwordInput = document.getElementById("password");
  const passwordMsg = document.getElementById("passwordMsg");

  form.addEventListener("submit", (event) => {
    if (passwordInput.value.length < 8) {
      event.preventDefault();
      passwordMsg.textContent = "⚠️ La contraseña debe tener al menos 8 caracteres.";
    } else {
      passwordMsg.textContent = "";
      alert("🌸 Registro exitoso, bienvenida/o!");
    }
  });
});
