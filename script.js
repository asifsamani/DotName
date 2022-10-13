// header bg reveal
const headerBg = () => {
  const header = document.querySelector(".js-header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("bg-reveal");
    } else {
      header.classList.remove("bg-reveal");
    }
  });
};
headerBg();



const nav = document.querySelector(".nav");
const hamburger = document.querySelector(".nav-toggler");

hamburger.addEventListener("click", () => {
  console.log(nav);
  nav.classList.toggle("hidden-nav");
});




window.addEventListener("load", () => {
  AOS.init();
});









document.addEventListener('DOMContentLoaded', () => {

  (function() {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init("8nPPWKQrCPQtoqyK6");
  })();

    document.getElementById('contact-form').addEventListener('submit', (e) => {
      e.preventDefault()
        console.log('submit is running')
        const name=e.target.name.value.trim()
        const email=e.target.email.value.trim()
        const contact=e.target.contact.value.trim()
        const service=e.target.service.value.trim()
        const msg=e.target.msg.value.trim()

        var templateParams = { 
            
            name: name,
            email: email,
            contact: contact,
            service: service,
            msg:msg
        };



        
        emailjs.send("service_6lreuy9", "template_o3pzt7d", templateParams).then(
                function (response) {
                  if (response.text == "OK") {
                    alert("form submitted successfully");
                  }
                },
                function (error) {
                  console.log("FAILED...", error);
                });
            })

      });
            