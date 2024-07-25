document.getElementById('multiplyForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }
    const helloWorldText = 'Hello World ';
    const totalMessagesPerSecond = 100;
    const interval = 1000 / totalMessagesPerSecond;
    const resultElement = document.getElementById('result');

    let messageCount = 0;

    function appendMessage() {
        resultElement.innerHTML += helloWorldText;
        messageCount++;
    }
    const messageInterval = setInterval(appendMessage, interval);
});
