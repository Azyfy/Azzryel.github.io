
let i = 0
const txt = `
            import Coffee;*
            import Code;*
            *
            while(Coffee) {* 
            _Coffee.drink();*
            _Code.write();*
            *
            _if ( Code.check(bug) ) {*
            _ _Coffee.drink();*
            _ _Code.exterminate(bug);*
            _};*
            *
            _Coffee.drink();*
            };*
            *
            //Learn through coding*
            //Learn through bugs*
            //Learn through coffee*
            *
            Coffee.refill();*
            Coffee.drink();*
            *
            //No coffee No code*
            *
            ^^
        `

function typeWriter() {
    document.getElementById("about").removeEventListener("mouseenter", typeWriter)
    if (i < txt.length) {
        if ( txt.charAt(i) === "*" ) {
            document.getElementById("type-writer").innerHTML += "<br>"
            i++
        }
    else if( txt.charAt(i) === "_"  ) {
        document.getElementById("type-writer").innerHTML += "&nbsp &nbsp &nbsp &nbsp"
        i++
    }

    document.getElementById("type-writer").innerHTML += txt.charAt(i)
    i++
    setTimeout(typeWriter, 50)
  }
}

document.getElementById("about").addEventListener("mouseenter", typeWriter)

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault()

    emailjs.sendForm("service_contact_azy", "contact_form", this)
        .then(function(promise) {
            console.log('SUCCESS!')
            animateFormSubmit()
        }, function(error) {
            console.log('FAILED...', error)
            errorMessage()
        })
})

function errorMessage() {
    document.getElementById("error-notification").textContent = "Error; Message Not Sent"

    setTimeout(() => {
        document.getElementById("error-notification").textContent = ""
    }, 3000)
}

function animateFormSubmit() {
    document.getElementById("contact-form").style.transform = "scale(0) rotate(360deg)"
    setTimeout(() => {
        document.getElementById("contact-form").style.display = "none"
        document.getElementById("form-sent").style.display = "flex"
        
        setTimeout(() => {
            document.getElementById("form-sent").style.transform = "scale(1) rotate(-360deg)"
        
        }, 1000)

    }, 1000)
}