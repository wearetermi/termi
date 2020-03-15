/*
 *  termi
 *  Copyright © wearetermi 2020
 *  All rights reserved.
 *  Licensed under GPL-3 license.
 */

function commandHandle(args, termi) {

	// HELP command (Lists all the commands)
	if (args[0] === "help") {
		termi.send(`<br>ls, cd, cat, echo, pwd, corona, contact, date, exit, color, man<br>${termi.shell}`)
		return true;
	}

	// CD command (current directory)
	if (args[0] == "cd") {

		// If we're trying to go info, then set the shell to show info
		if (args[1] == "info") {
			termi.shell = termi.shelldir("/info")
			termi.send(`<br>${termi.shell}`)
			return true;
		}

		// If we're trying to go out one directory from our current directory
		if (args[1] == "..") {
			// If we're at the info dir, then change directorys to home!
			if (termi.shell === termi.shelldir("/info")) {

				termi.shell = termi.oshell;
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

		// Checks if the directory is Info, and if it is
		// then print a newline due to no files being in
		// the info directory

		if (termi.shell === termi.shelldir("/info")) {
			termi.send(`<br>${termi.shell}`);
			return true;
		}

		// Show a bunch of files you can cd + run.
		termi.send(`<br>${termi.color("green", "welcometotermi.sh")}</a>  info  notes.txt<br>${termi.shell}`)
		return true;
	}

	// Welcome to termi shell script.
	if (args[0] == "./welcometotermi.sh") {

		// Checks if the directory is Info, and if it is
		// then print a newline due to no files being in
		// the info directory

		if (termi.shell === termi.shelldir("/info")) {
			termi.send(`<br>${termi.shell}`);
			return true;
		}

		termi.send(`<br>Hello, this is a simple terminal app made by Kuteshi! Feel welcome.<br>${termi.shell}`)
		return true;
	}

	// CAT command! It sends file contents to the terminal!
	if (args[0] == "cat") {

		// Checks if the directory is Info, and if it is
		// then print a newline due to no files being in
		// the info directory

		if (termi.shell === termi.shelldir("/info")) {
			termi.send(`<br>${termi.shell}`);
			return true;
		}

		if (args[1] == "notes.txt") {
			termi.send(`<br>Wow, you're reading the notes file!<br>${termi.shell}`)
			return true;
		}
		termi.send(`<br>${termi.shell}`);
		return true;
	}

	// ECHO command, echoes whatever you say!
	if (args[0] == "echo") {
		termi.send(`<br>${args.slice(1).join(" ")}<br>${termi.shell}`);
		return true;
	}

	// PWD command, shows current location!
	if (args[0] == "pwd") {
		termi.send(`<br>${termi.shell.split(`">`)[2].split("</a>$")[0]}<br>${termi.shell}`);
		return true;
	}

	// CORONA command using my own coronavirus API!
	if (args[0] == "corona") {
		fetch('https://novelcovid.glitch.me/')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				termi.send(`<br>Cases: ${data.cases}, Deaths: ${data.deaths}!<br>${termi.shell}`);
				return true;
			});
		return true;
	}

	// CONTACT command!
	if (args[0] == "contact") {
		termi.send(`<br>${termi.color("lightblue", "Discord")}: https://discord.gg/sAwgmYC<br>Website: https://wearetermi.github.io/termi/<br>${termi.shell}`);
		return true;
	}

	// DATE command!
	if (args[0] == "date") {
		termi.send(`<br>${Date()}<br>${termi.shell}`);
		return true;
	}

	// EXIT command!
	if (args[0] == "exit") {
		window.location.href = "about:blank";
		return true;
	}

	// COLOR commnad!
	if (args[0] == "color") {
		termi.send(`<br>${termi.color(args.slice(1)[0], args.slice(2).join(" "))}<br>${termi.shell}`);
		return true;
	}
	if (args[0] == "man") {
		function printPlain() {
			termi.send(`<br><center>${args[1]}</center>`)
			termi.send(`<br>Usage: <b>${args[1]}</b>`)
			termi.send(`<br>${termi.shell}`)
			return true;
		}

		function printUsage(y) {
			if(args[1] == undefined) {
				termi.send(`<br><center>man</center>`)
				termi.send(`<br>Usage: <b>(command)</b>`)
				termi.send(`<br>${termi.shell}`)
				return true;
			}
			termi.send(`<br><center>${args[1]}</center>`)
			termi.send(`<br>Usage: <b>${args[1]} ${y}</b>`)
			termi.send(`<br>${termi.shell}`)
			return true;

		}
		function printPlain() {
			termi.send(`<br><center>${args[1]}</center>`)
			termi.send(`<br>Usage: <b>${args[1]}</b>`)
			termi.send(`<br>${termi.shell}`)
			return true;
		}
		
		function printUsage(y) {
			if (args[1] == undefined) {
				termi.send(`<br><center>man</center>`)
				termi.send(`<br>Usage: <b>(command)</b>`)
				termi.send(`<br>${termi.shell}`)
				return true;
			}
			termi.send(`<br><center>${args[1]}</center>`)
			termi.send(`<br>Usage: <b>${args[1]} ${y}</b>`)
			termi.send(`<br>${termi.shell}`)
			return true;
		
		}
		
		if (args[1] == undefined) {
			printUsage();
		};
		
		if (args[1] == "man") {
			printUsage("(command)");
		};
		
		if (args[1] == "color") {
			printUsage("(color) (text)");
		};
		
		if (args[1] == "exit") {
			printPlain();
		};
		
		if (args[1] == "date") {
			printPlain();
		};
		if (args[1] == "contact") {
			printPlain();
		};
		if (args[1] == "corona") {
			printPlain();
		};
		if (args[1] == "pwd") {
			printPlain();
		};
		if (args[1] == "ls") {
			printPlain();
		};
		if (args[1] == "corona") {
			printPlain();
		};
		
		if (args[1] == "cd") {
			printUsage("(directory)")
		}
		if (args[1] == "cat") {
			printUsage("(file)")
		}
		if (args[1] == "echo") {
			printUsage("(text)")
		}
		return true;
}
}