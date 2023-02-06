//disregard this file I was testing an Ai api
const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('quickstart-QUdJIGlzIGNvbWluZy4uLi4K');

(async function() {
    var resp = await deepai.callStandardApi("text2img", {
            text: "YOUR_TEXT_HERE",
    });
    console.log(resp);
})()
