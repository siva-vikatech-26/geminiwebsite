/* Gemini Digital Solution – contact form
 *
 * By default the form just shows a thank-you message (nothing is sent).
 * To receive enquiries, choose ONE option below:
 *
 * 1) Email via Formspree (free): create a form at https://formspree.io,
 *    then paste its URL here, e.g. "https://formspree.io/f/abcdwxyz".
 * 2) WhatsApp: put your number with country code (no +), e.g. "919876543210".
 *    The enquiry opens in WhatsApp, ready to send.
 */
var FORM_ENDPOINT = "";   // option 1
var WHATSAPP_NUMBER = ""; // option 2

(function () {
  var form = document.getElementById("contact-form");
  var thanks = document.getElementById("form-thanks");
  var nameOut = document.getElementById("thanks-name");
  var reset = document.getElementById("form-reset");
  if (!form) return;

  function showThanks(name) {
    nameOut.textContent = (name || "there").split(" ")[0];
    form.hidden = true;
    thanks.hidden = false;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = (data.get("name") || "").toString().trim();

    if (WHATSAPP_NUMBER) {
      var text = "New enquiry – Gemini Digital Solution\n" +
        "Name: " + name + "\nCompany: " + data.get("company") +
        "\nEmail: " + data.get("email") + "\nPhone: " + data.get("phone") +
        "\nNeed: " + data.get("type") + "\nMessage: " + data.get("message");
      window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text), "_blank");
      showThanks(name);
      return;
    }

    if (FORM_ENDPOINT) {
      var btn = form.querySelector('button[type="submit"]');
      btn.disabled = true; btn.textContent = "Sending…";
      fetch(FORM_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } })
        .then(function (r) { if (!r.ok) throw new Error(); showThanks(name); form.reset(); })
        .catch(function () { alert("Sorry, your message could not be sent. Please call or email us."); })
        .finally(function () { btn.disabled = false; btn.textContent = "Send enquiry"; });
      return;
    }

    showThanks(name);
  });

  reset.addEventListener("click", function () {
    form.reset();
    thanks.hidden = true;
    form.hidden = false;
  });
})();
