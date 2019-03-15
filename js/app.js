/** 
 * 
 * As camadas VIEW e MODEL não devem se comunicar diretamente!
 * Essa interação é uma tarefa exclusiva dso controlador OCTOPUS.
 * 
 */

(function(){

    // Model
    const data = [
        {
            id: 0,
            clicks: 0,
            name: 'Barney',
            image: 'https://placedog.net/900/650/?id=64'
        },
        {
            id: 1,
            clicks: 0,
            name: 'Pancake',
            image: 'https://placedog.net/900/650/?id=38'
        },
        {
            id: 2,
            clicks: 0,
            name: 'Pepper',
            image: 'https://placedog.net/900/650/?id=22'
        },
        {
            id: 3,
            clicks: 0,
            name: 'Blueberry',
            image: 'https://placedog.net/900/650/?id=17'
        },
        {
            id: 4,
            clicks: 0,
            name: 'Oliver',
            image: 'https://placedog.net/900/650/?id=73'
        }
    ]

    // Octopus
    let octopus = {
        createNav: function() {
            for (let i = 0; i < data.length; i++) {
                let item = data[i];
                
                let elem = document.createElement('a');
                elem.classList = 'link';
                elem.textContent = item.name;

                elem.addEventListener('click', function(e) {
                    this.showDog(item.id);
                });
            }
        },

        showDog: function(target) {
            console.log(`clicked on ${target}`);
        },

        init: function() {
            view.init();
        }
    }

    // View
    let view = {
        init: function() {
            let nav = document.querySelector('.menu');
            let view = document.querySelector('.view');
            this.dogTemplate = document.querySelector('[data-template="dogview"]').innerHTML;

            

            this.render();
        },

        render: function() {
            let figure = this.dogTemplate;

            let thisTemplate = '';

            thisTemplate += figure.replace(/{{id}}/g, pizza.id)
                            figure.replace()

            view.append(thisTemplate);

        }
    }

    // Start your engines!
    octopus.init();
})();