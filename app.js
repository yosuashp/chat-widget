const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<img src="telkom.png" />',
    isNotClicked: '<img src="telkom.png" />'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);


function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = 'Selamat datang di chat bot PT. Telekomunikasi Indonesia, silahkan masukan pertanyaan yang anda inginkan dan jangan lupa untuk menekan tombol pesan '
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    //$("#chat-timelaps").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    //let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + userText + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();
    if (userText == "") {
        userText = "Hallo! Saya ingin bertanya";
    }
    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

        $("#textInput").val("");
        $("#chatbox").append(userHtml);
        document.getElementById("chat-bar-bottom").scrollIntoView(true);

        setTimeout(() => {
            postData({ "input": userText }).then((data) => {

                getHardResponse(data.output);
                console.log(data); // JSON data parsed by `data.json()` call
              }).catch(err=>{console.log(err)})
        
    }, 1000)
    
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

// Example POST method implementation:
async function postData(data) {
    const url = 'http://20.232.164.138:8002/bizy/master/run?user_id=ilham';
  
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'x-api-key': 'demo2023',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
  
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        console.error(err);
        return err;
    }
}