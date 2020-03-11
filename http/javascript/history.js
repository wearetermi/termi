function historyHandle(s, termi, termitext) {
    
// Arguments for later in the code
const args = termitext.innerHTML.split(termi.shell);
// What you're currently writing
const lastArgs = termitext.innerHTML.split(termi.shell).pop();
// What was your command before the one you're writing now
const before = args[args.length - 2].split("<br>")[0];
// Get repeated text in a array
const getRepeatedText = lastArgs.split('').reduce((s, c) => {let l = s.length-1; (s[l] && s[l].length < before.length) ? s[l] += c : s.push(c); return s;}, []);

// If the arrowkey is up, then:
if(s === "up") {
    // Check if the last message includes the little happy face (You cannot write this, so we're checking if it's the motd)
    if(!before.includes("(っ◔◡◔)っ ❤")) {
        // See if the arguments current arguments have the before text in them
    if (args.join().includes(before)) {
        // Check if the repeated text amount length is bigger than zero, and if it's NOT then:
       if(!getRepeatedText.length > 0) {
        // Add the text before!
        termitext.innerHTML = termitext.innerHTML + before;
       }
    }
    }
}

}