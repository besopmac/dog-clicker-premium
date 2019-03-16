/** 
 * 
 * As camadas VIEW e MODEL não devem se comunicar diretamente!
 * Essa interação é uma tarefa exclusiva dso controlador OCTOPUS.
 * 
 */

// Model
let data = {
    currentDog: null,
    dogs: [
        {
            id: 0,
            clicks: 0,
            name: 'Marshal',
            image: './images/marshal.jpg'
        },
        {
            id: 1,
            clicks: 0,
            name: 'Pancake',
            image: './images/pancake.jpg'
        },
        {
            id: 2,
            clicks: 0,
            name: 'Pepper',
            image: './images/pepper.jpg'
        },
        {
            id: 3,
            clicks: 0,
            name: 'Blueberry',
            image: './images/blueberry.jpg'
        },
        {
            id: 4,
            clicks: 0,
            name: 'Oliver',
            image: './images/oliver.jpg'
        }
    ]    
}

// Octopus
let octopus = {

    init: function() {
        // The first dog...
        data.currentDog = data.dogs[0];

        // Start the views...
        dogListView.init();
        dogView.init();
    },

    getCurrentDog: function() {
        return data.currentDog;
    },

    getAllDogs: function() {
        return data.dogs;
    },

    setCurrentDog: function(dog) {
        data.currentDog = dog;
    },

    incrementCounter: function() {
        data.currentDog.clicks++;
        dogView.render();
    }

}

// Views    
let dogView = {

    init: function() {
        // Get the DOM elements
        this.dogName = document.querySelector('.name');
        this.dogImage = document.querySelector('.dog-image');
        this.dogCounter = document.querySelector('.counter');
        
        // When click, then increment this dog counter
        this.dogImage.addEventListener('click', function() {
            octopus.incrementCounter();
        });

        // So... render it.
        this.render();
    },
    
    render: function() {
        let currentDog = octopus.getCurrentDog();
        this.dogImage.src = currentDog.image;
        this.dogName.textContent = currentDog.name;
        this.dogCounter.textContent = currentDog.clicks;
    }

}

let dogListView = {

    init: function() {
        // Get the DOM elements
        this.wrapper = document.querySelector('.menu');

        // So... render it.
        this.render();
    },

    render: function() {
        let dog, elem, i;
        
        // Getting all dogs via octopus
        let dogs = octopus.getAllDogs();

        // Cleaning the menu wrapper
        this.wrapper.innerHTML = '';

        // Looping for filter all those dogs...
        for (i = 0; i < dogs.length; i++) {

            dog = dogs[i];

            // Create the <a> element and to fill it
            elem = document.createElement('a');
            elem.textContent = dog.name;
            elem.className = 'link';

            // On click setCurrentDog and render dogView...
            elem.addEventListener('click', (function(dogCopy) {
                return function() {
                    octopus.setCurrentDog(dogCopy);
                    dogView.render();
                }
            })(dog))

            this.wrapper.appendChild(elem);
        }
    }

}



// Start your engines!
octopus.init();