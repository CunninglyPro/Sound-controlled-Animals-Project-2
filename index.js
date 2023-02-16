function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier =  ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/uldhgo0ou/model.json', modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResult);
}

function gotResult() {
    console.log("Got result!");
}