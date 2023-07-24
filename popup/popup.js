console.log("Hello pop up works");

document.querySelector("#btn-start").addEventListener("click", () => {
    chrome.runtime.sendMessage({ text: "Button start works"});
});


document.querySelector("#btn-stop").addEventListener("click", () => {
    chrome.runtime.sendMessage({ text: "Button stop works"});
});

chrome.tabs.query({
    active: true,
    currentWindow: true
}, (tabs) => {
    chrome.tabs.sendMessage(
        tabs[0]?.id,
        { text : " This text is added from the pop up js "}
        );
    });

chrome.runtime.onMessage.addListener((msg) => {
  document.body.innerHTML += '<div>${msg.text}</div>';

}); 



