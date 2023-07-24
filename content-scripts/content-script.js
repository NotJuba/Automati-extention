console.log("hello from content script!");

const containerDiv = document.createElement('div');
containerDiv.id = 'container';
containerDiv.innerHTML = `
  <h1>I am the best brother</h1>
  <button id="btn">click a zbi</button>
    
`;

document.body.prepend(containerDiv); // Use 'prepend' to place it at the top of <body>

document.querySelector("#btn").addEventListener('click', () => {
    chrome.runtime.sendMessage({ text: "It is working brother" });
});

chrome.runtime.onMessage.addListener((msg) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = msg.text;
    document.querySelector('#container').appendChild(messageDiv);
});

