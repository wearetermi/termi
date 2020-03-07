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
		if (commandHandle(args)) {
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


function commandHandle(args) {
	// Help commmand. Very simple
	if (args[0] === "help") {
		termi.send(`<br>ls, cd<br>${termi.shell}`)
		return true;
	}
	// CD command (current directory)
	if (args[0] == "cd") {

		// If we're trying to go info, then set the shell to show info
		if (args[1] == "info") {
			termi.shell = "<a>$ ~/info: </a>"
			termi.send(`<br>${termi.shell}`)
			return true;
		}

		// If we're trying to go out one directory from our current directory
		if (args[1] == "..") {
			// If we're at the info dir, then change directorys to home!
			if (termi.shell === "<a>$ ~/info: </a>") {

				termi.shell = `<a>$ ~: </a>`;
				termi.send(`<br>${termi.shell}`)
				return true;
			}
		}
		// If we're not in any directory, just print a newline.
		termi.send(`<br>${termi.shell}`)
		return true;
	}
	// LS (locate files)
	if (args[0] == "ls") {
		// If we're in the info directory, then print a newline.
		if (termi.shell === "<a>$ ~/info: </a>") {
			termi.send(`<br>${termi.shell}`);
			return true;
		}
		// Show a bunch of files you can cd + run.
		termi.send(`<br><a style="color:green">welcometotermi.sh</a>  info  notes.txt<br>${termi.shell}`)
		return true;
	}
	// Welcome to termi shell script.
	if (args[0] == "./welcometotermi.sh") {
		termi.send(`<br>Hello, this is a simple terminal app made by Kuteshi! Feel welcome.<br>${termi.shell}`)
		return true;
	}
}