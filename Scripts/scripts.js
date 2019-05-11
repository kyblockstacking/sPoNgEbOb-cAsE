document.addEventListener('DOMContentLoaded', function () {

    (console_greetings = () => {
        console.log("sPoNgEbOb CaSe GeNeRaToR mAdE bY %c Kevin Yang ", 'background: #000; color: #fff; font-size: 1.5em;');
        console.log("Enjoy and have fun! :)")
    })();

    (ascii_spongebob = () => {
        console.log("");
        console.log("          *                    ");
        console.log("           *                   ");
        console.log("      ----//-------            ");
        console.log("      \\..C/--..--/ \\   `A      ");
        console.log("       (@ )  ( @) \\  \\// |w    ");
        console.log("        \\          \\  \\---/    ");
        console.log("         HGGGGGGG    \\    /`   ");
        console.log("         V `---------`--'      ");
        console.log("             <<    <<          ");
        console.log("            ###   ###          ");
        console.log("");
    })();

    (find_repo_here = () => {
        console.log("You can find the repo here: https://github.com/kyblockstacking/sPoNgEbOb_CaSe");
    })();

    convertToSpongeBobCase = () => {
        const user_input = document.getElementsByClassName('user-input')[0].value.toLowerCase();
        const display_result = document.getElementsByClassName('display-result')[0];
        let result = '';

        for (let i = 0; i < user_input.length; i += 1) {
            // skip adding lowercase/uppercase to space characters
            if (user_input[i] === ' ') {
                result += ' ';
            }
            // apply lowercase to odd indexes
            if ((i + 1) % 2 === 0) {
                result += user_input[i].toUpperCase();
            }
            // apply uppercase to even indexes
            if (i % 2 === 0) {
                result += user_input[i].toLowerCase();
            }
        }
        // put result into empty div to display to user
        display_result.innerHTML = result;
    }

});