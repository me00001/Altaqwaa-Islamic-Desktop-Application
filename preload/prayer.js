const copy = require('../module/Copy.js');

module.exports = function prayer() {

    if (document.getElementById('prayer')) {

        let adhkar = document.querySelectorAll('.adhkar');
        let alrt = document.getElementById('alrt');

        adhkar.forEach(e => {

            let id = e.id
            let click = document.getElementById(`copy_${id}`);
            click.addEventListener('click', event => {
                copy(id);
                alrt.style.display = 'inline-flex';
                setTimeout(() => {

                    alrt.style.display = 'none';

                }, 1000);
            })

        });

    }

}