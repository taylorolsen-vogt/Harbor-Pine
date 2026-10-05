const startTrialBtn = document.getElementById("startTraill");
const watchDemoBtn = document.getElementById("watchDemo");
const contactSalesBtn = document.getElementById("contactSales");

startTrialBtn.addEventListener("click", () => {
  window.location.href = "/signup";
});

watchDemoBtn.addEventListener("click", () => {
  const modal = document.getElementById("demoModal");
  modal.classList.remove("hidden");
});

contactSalesBtn.addEventListener("click", () => {
  fetch("/api/contact-sales", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ source: "about-page" })
  });
});
