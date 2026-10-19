// ============================================================
//  EDIT THESE THREE LINES — everything else updates itself.
// ============================================================
const SITE = {
  phone: "(801) 555-0123",                                  // your business phone, as you want it shown
  linkSet: "https://buy.stripe.com/REPLACE_WITH_SET_LINK",       // Stripe Payment Link for the $50 set
  linkSingle: "https://buy.stripe.com/REPLACE_WITH_SINGLE_LINK", // Stripe Payment Link for the $30 single
};
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  const telHref = "tel:" + SITE.phone.replace(/[^0-9+]/g, "");
  const smsHref = "sms:" + SITE.phone.replace(/[^0-9+]/g, "");
  document.querySelectorAll("[data-phone]").forEach(el => (el.textContent = SITE.phone));
  document.querySelectorAll("[data-tel]").forEach(el => (el.href = telHref));
  document.querySelectorAll("[data-sms]").forEach(el => (el.href = smsHref));
  document.querySelectorAll("[data-link-set]").forEach(el => (el.href = SITE.linkSet));
  document.querySelectorAll("[data-link-single]").forEach(el => (el.href = SITE.linkSingle));
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
});
