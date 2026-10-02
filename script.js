/* =========================================================
   ALL SEASONS SHOE DEALERS
   JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    const setMenuOpen = isOpen => {
        navbar.classList.toggle("active", isOpen);
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
        menuToggle.textContent = isOpen ? "✕" : "☰";
    };

    menuToggle.addEventListener("click", () => {
        setMenuOpen(!navbar.classList.contains("active"));
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => setMenuOpen(false));
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            setMenuOpen(false);
        }
    });
}


/* =========================
   CURRENT YEAR
   ========================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================
   PRODUCT SELECTION
   ========================= */

function selectProduct(productName) {

    const productSelect = document.getElementById("product");

    if (!productSelect) return;

    productSelect.value = productName;

}


/* =========================
   CONTACT FORM
   ========================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.reportValidity()) return;

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const product = document.getElementById("product").value;
        const message = document.getElementById("message").value.trim();
        const details = [
            `My name is ${name}.`,
            `Phone: ${phone}.`
        ];

        if (product) details.push(`I am interested in: ${product}.`);
        if (message) details.push(`Message: ${message}`);

        const whatsappMessage = [
            "Hello All Seasons Shoe Dealers.",
            "",
            ...details,
            "",
            "I found you through your website."
        ].join("\n");

        window.open(createWhatsAppUrl(whatsappMessage), "_blank", "noopener,noreferrer");
    });
}


/* =========================
   FLOATING WHATSAPP BUTTON
   ========================= */

function createWhatsAppUrl(message) {
    const configuredNumber = (document.body.dataset.whatsappNumber || "")
        .replace(/\D/g, "");
    const recipient = /^\d{10,15}$/.test(configuredNumber)
        ? `/${configuredNumber}`
        : "/";

    return `https://wa.me${recipient}?text=${encodeURIComponent(message)}`;
}

const whatsappButton = document.getElementById("whatsappButton");

if (whatsappButton) {
    whatsappButton.href = createWhatsAppUrl(
        "Hello All Seasons Shoe Dealers. I would like to enquire about your leather shoes."
    );
}


/* =========================
   SIMPLE IMAGE ERROR HANDLING
   ========================= */

document.querySelectorAll("img").forEach(image => {

    image.addEventListener("error", function() {

        this.style.display = "none";

        this.parentElement.classList.add("image-error");

    });

});
