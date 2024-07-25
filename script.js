document.getElementById('multiplyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const helloWorldText = 'Hello World ';
    const totalWords = 10000000;
    const wpm = 10000;
    const msPerWord = 10000 / wpm; // milliseconds per word
    const msPerChar = msPerWord / helloWorldText.length; // milliseconds per character
    const resultElement = document.getElementById('result');


    let currentCharIndex = 0;
    let currentWordCount = 0;

    function typeHelloWorld() {
        if (currentWordCount < totalWords) {
            if (currentCharIndex < helloWorldText.length) {
                resultElement.innerHTML += helloWorldText.charAt(currentCharIndex);
                currentCharIndex++;
                setTimeout(typeHelloWorld, msPerChar);
            } else {
                currentCharIndex = 0;
                currentWordCount++;
                typeHelloWorld(); // Immediately start the next word
            }
        }
    }

    typeHelloWorld();
});
