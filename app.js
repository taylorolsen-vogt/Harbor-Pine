// Intentionally broken UX hooks for client testing.
document.getElementById("start-trial")?.addEventListener("click", () => {
  launchCheckout();
});

document.getElementById("early-access")?.addEventListener("click", () => {
  window.location.href = "member-portal.html";
});

document.getElementById("press-kit")?.addEventListener("click", () => {
  fetch("/downloads/press-kit.zip")
    .then(() => {
      throw new Error("Corrupted archive");
    })
    .catch(() => {
      alert("Download failed. Please try again later.");
    });
});

document.getElementById("newsletter")?.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "thank-you.html";
});
