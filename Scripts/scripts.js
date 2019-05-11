document.addEventListener('DOMContentLoaded', function () {

    convertToSpongeBobCase = () => {
        let user_input = document.getElementsByClassName('user-input')[0].value.toLowerCase();
        let results = '';

        for (let i = 1; i < user_input.length; i += 2) {
            // skip space characters for spongebob case
            if (user_input[i] === ' ') {
                continue;
            }
            // console.log(user_input[i - 1].toLowerCase())
            // console.log(user_input[i].toUpperCase())

            results += user_input[i - 1].toLowerCase();
            results += user_input[i].toUpperCase();
        }

        console.log(results);
    }

});