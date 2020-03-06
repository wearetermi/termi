let termitext = document.getElementById("termi");
let termi = {}
    termi.shell =  "$ ",
    termi.motd =  `Kuteshi's terminal emulator, TERM-I!`,
    termi.setText =  (raw) => {termitext.innerHTML = raw},
    termi.send =   (x) => {termitext.innerHTML = termitext.innerHTML + x},
    termi.setMotd =  () => {termi.setText(`${termi.motd}<br>${termi.shell}`)}

termi.setMotd()

document.addEventListener("keydown", function onEvent(event) {
const args = termitext.innerHTML.split("$ ").slice(-1).join().split(" ");
    //console.re.log(event.code);
    const key = event.key.toLowerCase();


    if (event.code === "Space") {
        termi.send(" ")
        return true;
    }
    if (event.code === "Enter") {
      if(args[0] === "help") {
      termi.send(`<br>no help shut up<br>${termi.shell}`)
return true;
      }
      termi.send(`<br>bro u said: ${args.join(" ")}! how dare u!<br>${termi.shell}`)
        return true;
    }
    if (event.code === "Backspace") {
       termi.setText(termitext.innerHTML.substr(0, termitext.innerHTML.length - 1));
        return true;
    }
    termitext.innerHTML = termitext.innerHTML + event.key
});
