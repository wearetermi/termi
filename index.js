let termitext = document.getElementById("termi");
let termi = {}
termi.shell = "$ ",
termi.motd = `Kuteshi's terminal emulator, TERM-I!`,
termi.setText = (raw) => {
    termitext.innerHTML = raw
},
termi.send = (x) => {
    termitext.innerHTML = termitext.innerHTML + x
}

termi.setText(`${termi.motd}<br>${termi.shell}`);

document.addEventListener("keydown", function onEvent(event) {

    const args = termitext.innerHTML.split("$ ").slice(-1).join().split(" ");
    const key = event.key.toLowerCase();

    if (event.code === "Space") {
        termi.send(" ")
        return true;
    }

    if (event.code === "Enter") {
        
        if (args[0] === "help") {
        termi.send(`<br>Help hasn't been programmed yet!<br>${termi.shell}`)
        return true;
        }

        termi.send(`<br>[DEBUG] Arguments: ${args.join(" ")}!<br>${termi.shell}`)
        return true;
    }

    if (event.code === "Backspace") {
        termi.setText(termitext.innerHTML.substr(0, termitext.innerHTML.length - 1));
        return true;
    }

    termitext.innerHTML = termitext.innerHTML + event.key
});