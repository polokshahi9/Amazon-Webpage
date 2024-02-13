import androids from './android.js';
import cameras from './camera.js';
import laptops from './laptop.js';
import product from './products.json';

const fakeData = [...androids, ...cameras, ...laptops, ...product];

const shuffle = a => {
    for (let i = a.length; i; i--){
        let j = Math.floor(Math.random() * i);
        [a[i-1], a[j]] = [a[j], a[i-1]];

    }
};

shuffle(fakeData);

export default fakeData;