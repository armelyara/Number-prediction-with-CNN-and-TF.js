//import * as tf from "@tensorflow/tfjs";


async function load() {
    const model = await tf.loadLayersModel('model_js/model.json');
    return model;
};

function predict(model) {
    //code pour se connecter à la valeur du imput
    const userInput = document.getElementById('userInput').value
    const inputTensor = tf.tensor([parseInt(userInput)]); //convertir cela en un tensor

    //Faisons la prediction
    model.then(model => {
        let result = model.predict(inputTensor); //faire la prédiction
        result = result.round().dataSync()[0]; //Arrondir et obtenir une value
        alert(result ? "odd" : "even"); //création d'un pop-up

    });

};

const model = load();