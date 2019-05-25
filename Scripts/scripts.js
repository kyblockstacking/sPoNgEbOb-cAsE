document.addEventListener('DOMContentLoaded', function () {

    (console_greetings = () => {
        console.log("sPoNgEbOb cAse mAdE bY %c Kevin Yang ", 'background: #000; color: #fff; font-size: 1.5em;');
        console.log("eNjOy aNd hAvE fUn! :)")
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
        console.log("yOu cAn fInD tHe rEpO hErE: https://github.com/kyblockstacking/sPoNgEbOb_CaSe");
    })();

    // clears all characters from input box
    clear_user_input = () => {
        document.getElementsByClassName('user-input')[0].value = '';
    }

    convertToSpongeBobCase = () => {
        const user_input = document.getElementsByClassName('user-input')[0].value.toLowerCase();
        const display_result = document.getElementsByClassName('result')[0];
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

    show_result_box = () => {
        const result_box = document.getElementsByClassName('result-box')[0];

        result_box.classList.add('show-result-box');
        result_box.classList.remove('close-result-box');
    }

    close_result_box = () => {
        const result_box = document.getElementsByClassName('result-box')[0];

        result_box.classList.add('close-result-box');
        result_box.classList.remove('show-result-box');
    }

});