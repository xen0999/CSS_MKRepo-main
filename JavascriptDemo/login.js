/* Function to generate combination of password */
function generatePass() {
    let length = document.querySelector('input#mail')
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        'abcdefghijklmnopqrstuvwxyz0123456789@#$';

    for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random()
            * str.length + 1);

        pass += str.charAt(char)
    }

    const outputElement = document.getElementById("output");
    outputElement.innerText = pass;
}

console.log(generatePass());
