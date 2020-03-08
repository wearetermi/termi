function commandHandle(args, termi) {
	// Help commmand. Very simple
	if (args[0] === "help") {
		termi.send(`<br>ls, cd, cat, echo, pwd<br>${termi.shell}`)
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
		// If we're in the info directory, just print a newline.
		if (termi.shell === termi.shelldir("/info")) {
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
	// CAT command! It sends file contents to the terminal!
	if (args[0] == "cat") {
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
	// Shows current location!
	if (args[0] == "pwd") {
		termi.send(`<br>${termi.shell.split(`">`)[2].split("</a>$")[0]}<br>${termi.shell}`);
		return true;
	}
}