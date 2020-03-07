/*
*  TERM-I
*  kuteshi 2020
*  All rights reserved.
*  Licensed under MIT license.
*/

// Element for raw api calls

let termitext = document.getElementById("termi");
// Termi API

let termi = {}
termi.shell = "<a>$ ~: </a>",
	termi.motd = `Kuteshi's terminal emulator, TERM-I!`,
	termi.setText = (raw) => {
		termitext.innerHTML = raw
	},
	termi.send = (x) => {
		termitext.innerHTML = termitext.innerHTML + x
	}

// Set the motd
termi.setText(`${termi.motd}<br>${termi.shell}`);

// Scroll down when you can
setInterval(() => window.scrollTo(0, document.body.scrollHeight))

// Listen for keypresses
document.addEventListener("keydown", function onEvent(event) {
	// Arguments used in the code
	const args = termitext.innerHTML.split(termi.shell).slice(-1).join().split(" ");

	// Add a space if space is pressed
	if (event.code === "Space") {
		termi.send(" ")
		return;
	}
	// If enter is pressed then
	if (event.code === "Enter") {
		// Run command
		if (commandHandle(args, termi)) {
			// If exists, it'll go to here.
			return;
		} else {
			// But if it does not exist, it'll go to here.
			// Check if arguments are empty, and if they are just print a new line
			if (args.join("") === "") {
				termi.send(`<br>${termi.shell}`)
				return;
			}
			// Show a red [ERR] showing that the command does not exist.
			termi.send(`<br><a style="color:red">[ERR]</a> This command does not exist!<br>${termi.shell}`)
			return;
		}
	}
	// Delete a charecter from the whole text if backspace is pressed
	if (event.code === "Backspace") {
		termi.setText(termitext.innerHTML.substr(0, termitext.innerHTML.length - 1));
		return;
	}
	// If nothing matches, just print the key.
	termitext.innerHTML = termitext.innerHTML + event.key
});

