// ============================================================
//  EDIT THESE THREE LINES — everything else updates itself.
// ============================================================
const SITE = {
  phone: "(801) 784-8384",                                     // business phone, as shown on the site
  linkSet: "https://buy.stripe.com/bJe00ifzfeCs9mrdbD2wU05",    // Stripe Payment Link: washer + dryer set ($50/month)
  linkSingle: "https://buy.stripe.com/6oUfZgfzffGw7ejb3v2wU09", // Stripe Payment Link: single machine ($60 every 2 months)
  calendly: "https://calendly.com/ethan-thorley-ashby/30min",                                                 // Calendly booking link for deliveries (shown on thanks.html)
};
// ============================================================

// Fills in the phone number, links and year. Runs on page load,
// and again after the language toggle swaps the page's text.
function fillSite() {
  const telHref = "tel:" + SITE.phone.replace(/[^0-9+]/g, "");
  const smsHref = "sms:" + SITE.phone.replace(/[^0-9+]/g, "");
  document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = SITE.phone));
  document.querySelectorAll("[data-tel]").forEach(el => (el.href = telHref));
  document.querySelectorAll("[data-sms]").forEach(el => (el.href = smsHref));
  document.querySelectorAll("[data-link-set]").forEach(el => (el.href = SITE.linkSet));
  document.querySelectorAll("[data-link-single]").forEach(el => (el.href = SITE.linkSingle));
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
}

document.addEventListener("DOMContentLoaded", fillSite);
