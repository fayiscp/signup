let errorE = document.getElementById('errEmail')
let errorP = document.getElementById('errPass')

let exEmail = /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/
let expassword = /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/


let getValue = (field) => {


    switch (field) {
        case 'email':
            let email = document.getElementById("email").value
            console.log(email)

            let a = exEmail.test(email)
            if (a == false) {
                errorE.style.visibility = 'visible'
            } else {
                errorE.style.visibility = 'hidden'
            }
            break;
        case 'password':
            let password = document.getElementById("password").value
            console.log(password)

            let b = expassword.test(password)
            if (b == false) {
                errorP.style.visibility = 'visible'
            } else {
                errorP.style.visibility = 'hidden'
            }
            break;
    }
}



let validate = (event) => {
    event.preventDefault()
    getValue('email')
    getValue('password')


}