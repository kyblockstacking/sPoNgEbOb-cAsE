document.addEventListener('DOMContentLoaded', function () {

    convertToSpongeBobCase = () => {
        let user_input = document.getElementsByClassName('user-input')[0].value.toLowerCase();

        for (let i = 0; i < user_input.length; i += 2) {
            console.log(user_input[i])
        }
    }

});