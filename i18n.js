// ============================================================
//  English / Español toggle
//  English lives in the HTML. Spanish lives in ES below, keyed by
//  each element's data-i18n name. To change Spanish wording, edit
//  the matching line here.
// ============================================================
const ES = {
  "nav.call": "Llama o manda texto ",
  "meta.title": "Weber Appliance Rentals | Renta de lavadoras y secadoras cerca de Ogden",

  "hero.title": "Lava en casa,<br><span>sin comprar las máquinas.</span>",
  "hero.lead": "Te llevamos e instalamos una lavadora y secadora. Pagas un precio mensual sencillo, y si una máquina deja de funcionar, la reparamos o la cambiamos.",
  "hero.cta": "Ver planes y registrarse",
  "hero.switch": "¿Ya rentas con nosotros? Activa el pago automático",
  "hero.b1": "<b>✓</b> Entrega e instalación gratis",
  "hero.b2": "<b>✓</b> Reparaciones incluidas",
  "hero.b3": "<b>✓</b> Sin contrato a largo plazo",

  "plans.title": "Precios mensuales sencillos",
  "plans.sub": "Regístrate en línea en unos 3 minutos. Tu tarjeta se cobra automáticamente, así que no tienes que acordarte de nada.",
  "plans.best": "Mejor precio",
  "plans.set": "Juego de lavadora + secadora",
  "plans.month": " / mes",
  "plans.set1": "Una lavadora y una secadora",
  "plans.free": "Entrega e instalación gratis",
  "plans.repairs": "Reparaciones y reemplazos incluidos",
  "plans.cancel": "Cancela con 4 semanas de aviso",
  "plans.setBtn": "Rentar un juego",
  "plans.single": "Una sola máquina",
  "plans.2months": " / 2 meses",
  "plans.single1": "Lavadora <em>o</em> secadora, tú escoges",
  "plans.singleBtn": "Rentar una máquina",
  "plans.terms": "Al registrarte, aceptas nuestros <a href=\"terms.html\">Términos de renta</a> (en inglés). Por favor léelos antes de pagar.",

  "switch.title": "¿Ya rentas con nosotros?",
  "switch.body": "Estamos pasando a todos a pagos automáticos con tarjeta para que nunca tengas que mandar un pago otra vez. Escoge el mismo plan que tienes ahora y paga. ¿Preguntas? Mándanos un texto.",
  "switch.set": "Rento un juego",
  "switch.single": "Rento una máquina",

  "how.title": "Cómo funciona",
  "how.sub": "Tres pasos, y lo más difícil es escoger el día de entrega.",
  "how.s1t": "Regístrate en línea",
  "how.s1": "Escoge un plan, escribe tus datos y dirección de entrega, acepta los términos de renta y agrega una tarjeta.",
  "how.s2t": "Entregamos e instalamos",
  "how.s2": "Justo después de pagar, escoge la hora de entrega que te funcione. Llevamos las máquinas y las conectamos.",
  "how.s3t": "Lava tu ropa",
  "how.s3": "Tu tarjeta se cobra automáticamente según tu plan. Si algo se descompone, mándanos un texto y nos encargamos.",

  "area.title": "Dónde entregamos",
  "area.body": "A cualquier lugar a más o menos una hora de Weber State University en Ogden. ¿No sabes si estás en el área? Mándanos un texto con tu ciudad.",

  "faq.title": "Preguntas",
  "faq.sub": "Las respuestas cortas. Los detalles completos están en los <a href=\"terms.html\">Términos de renta</a> (en inglés).",
  "faq.q1": "¿Qué necesito en mi casa?",
  "faq.a1": "La lavadora necesita conexiones de agua caliente y fría y un desagüe. La secadora necesita un enchufe de secadora (de 3 o 4 patas) o una línea de gas, además de una ventila. Nos dices cuál tienes al registrarte para llevar el cable correcto.",
  "faq.q2": "¿Cuándo me cobran?",
  "faq.a2": "Tu primer pago se cobra al registrarte, y después automáticamente el mismo día de cada periodo: cada mes por un juego, o cada 2 meses por una sola máquina.",
  "faq.q3": "¿Qué pasa si se descompone una máquina?",
  "faq.a3": "Mándanos un texto. Las reparaciones y reemplazos no tienen costo, a menos que el daño sea por mal uso o descuido.",
  "faq.q4": "¿Cómo cancelo?",
  "faq.a4": "Avísanos con 4 semanas de anticipación por texto o correo. Sigues pagando hasta que termine el aviso, y luego recogemos las máquinas. Si necesitas que las recojamos con menos de 4 semanas de aviso, hay un cargo de $50.",
  "faq.q5": "¿Qué pasa si falla el pago con mi tarjeta?",
  "faq.a5": "Volvemos a intentar el cobro automáticamente y te mandamos un correo. Si el pago sigue sin hacerse 2 semanas después de la fecha, se cobra un cargo por atraso de $20 y podemos recoger las máquinas.",
  "faq.q6": "¿Hay depósito o cargo por entrega?",
  "faq.a6": "No. La entrega y la instalación son gratis.",
  "faq.q7": "Me voy a mudar. ¿Puedo llevarme las máquinas?",
  "faq.a7": "Mándanos un texto antes de mudarte. Si tu nueva casa está en nuestra área, normalmente podemos moverlas por ti. Por favor no las muevas tú.",

  "contact.title": "Habla con una persona real",
  "contact.sub": "Mandar un texto es la forma más rápida de comunicarte con nosotros.",
  "contact.text": "Texto <span data-phone></span>",
  "contact.call": "Llamar",

  "footer.terms": "Términos de renta",

  "thanks.metaTitle": "Escoge tu hora de entrega | Weber Appliance Rentals",
  "thanks.title": "¡Ya estás registrado!<br><span>Ahora escoge tu hora de entrega.</span>",
  "thanks.lead": "Escoge una hora abajo y te llevamos e instalamos las máquinas. Te mandamos un texto un día antes para confirmar.",
  "thanks.fallbackTitle": "Te mandaremos un texto para programar",
  "thanks.fallback": "Espera un texto de nosotros en el próximo día para fijar tu hora de entrega. O mándanos un texto ahora con algunas horas que te funcionen.",
  "thanks.help": "¿Necesitas otra hora o tienes una pregunta? Mándanos un texto cuando quieras.",
};

const LANG_KEY = "war-lang";
const originals = {};

function setLang(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (!(key in originals)) originals[key] = el.innerHTML;
    el.innerHTML = lang === "es" && ES[key] !== undefined ? ES[key] : originals[key];
  });
  const titleKey = document.documentElement.getAttribute("data-title-i18n");
  if (titleKey) {
    if (!("__title" in originals)) originals.__title = document.title;
    document.title = lang === "es" && ES[titleKey] ? ES[titleKey] : originals.__title;
  }
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-lang-toggle]").forEach(btn => {
    btn.textContent = lang === "es" ? "English" : "Español";
    btn.setAttribute("lang", lang === "es" ? "en" : "es");
  });
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  if (typeof fillSite === "function") fillSite();
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = null;
  try { lang = localStorage.getItem(LANG_KEY); } catch (e) {}
  if (!lang) lang = (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
  setLang(lang);
  document.querySelectorAll("[data-lang-toggle]").forEach(btn =>
    btn.addEventListener("click", () => setLang(document.documentElement.lang === "es" ? "en" : "es"))
  );
});
