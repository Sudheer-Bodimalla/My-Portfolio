document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll(".content-section");

  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      const target = item.getAttribute("data-section");

      sections.forEach(sec => {
        sec.classList.remove("active");
      });

      const activeSection = document.getElementById(target);
      if (activeSection) {
        activeSection.classList.add("active");
      }
    });
  });
});
 function sendMessage(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const message = event.target.message.value;
    const whatsappURL = `https://wa.me/9701216708?text=Email:%20${encodeURIComponent(email)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  }