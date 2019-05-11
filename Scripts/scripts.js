document.addEventListener('DOMContentLoaded', function () {

    (console_greetings = () => {
        console.log("sPoNgEbOb CaSe GeNeRaToR mAdE bY %c Kevin Yang ", 'background: #000; color: #fff; font-size: 1.5em;');
    })();

    (ascii_spongebob = () => {
        console.log("          *                    ")
        console.log("           *                   ")
        console.log("      ----//-------            ")
        console.log("      \\..C/--..--/ \\   `A      ")
        console.log("       (@ )  ( @) \\  \\// |w    ")
        console.log("        \\          \\  \\---/    ")
        console.log("         HGGGGGGG    \\    /`   ")
        console.log("         V `---------`--'      ")
        console.log("             <<    <<          ")
        console.log("            ###   ###          ")
    })();

    // ascii_spongebob();

    convertToSpongeBobCase = () => {
        let user_input = document.getElementsByClassName('user-input')[0].value.toLowerCase();
        let results = '';

        for (let i = 0; i < user_input.length; i += 1) {
            // skip adding lowercase/uppercase to space characters
            if (user_input[i] === ' ') {
                results += ' ';
            }
            // apply lowercase to odd indexes
            if ((i + 1) % 2 === 0) {
                results += user_input[i].toUpperCase();
            }
            // apply uppercase to even indexes
            if (i % 2 === 0) {
                results += user_input[i].toLowerCase();
            }
        }

        console.log(results);

    }

});