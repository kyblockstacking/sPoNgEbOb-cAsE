document.addEventListener('DOMContentLoaded', function () {

    convertToSpongeBobCase = () => {
        let user_input = document.getElementsByClassName('user-input')[0].value.toLowerCase();
        let results = '';

        for (let i = 0; i < user_input.length; i += 1) {
            // skip adding lowercase/uppercase to space characters
            if (user_input[i] === ' ') {
                results += ' ';
                continue;
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