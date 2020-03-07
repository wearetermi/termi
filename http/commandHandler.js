
function commandHandle(args, termi) {
	// Help commmand. Very simple
	if (args[0] === "help") {
		termi.send(`<br>ls, cd<br>${termi.shell}`)
		return true;
	}
	// CD command (current directory)
	if (args[0] == "cd") {

		// If we're trying to go info, then set the shell to show info
		if (args[1] == "info") {
			termi.shell = `<a style="color:#678e2c">user@termi</a>:<a style="color:#576690">/info</a>$ <a></a>`
			termi.send(`<br>${termi.shell}`)
			return true;
		}

		// If we're trying to go out one directory from our current directory
		if (args[1] == "..") {
			// If we're at the info dir, then change directorys to home!
			if (termi.shell === `<a style="color:#678e2c">user@termi</a>:<a style="color:#576690">/info</a>$ <a></a>`) {

				termi.shell = `<a style="color:#678e2c">user@termi</a>:<a style="color:#576690">/</a>$ <a></a>`;
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
		if (termi.shell === `<a style="color:#678e2c">user@termi</a>:<a style="color:#576690">/info</a>$ <a></a>`) {
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
			termi.send(`<br><span style="color:#ffffff;">W</span><span style="color:#fff6f9;">o</span><span style="color:#ffeef3;">w</span><span style="color:#ffe5ed;">,</span><span style="color:#ffdce7;"> </span><span style="color:#ffd4e1;">y</span><span style="color:#ffcbdb;">o</span><span style="color:#eecae0;">u</span><span style="color:#ddc9e5;">'</span><span style="color:#ccc8ea;">r</span><span style="color:#bcc7f0;">e</span><span style="color:#abc6f5;"> </span><span style="color:#9ac5fa;">r</span><span style="color:#89c4ff;">e</span><span style="color:#90cee0;">a</span><span style="color:#96d8c0;">d</span><span style="color:#9de2a1;">i</span><span style="color:#a4eb81;">n</span><span style="color:#aaf562;">g</span><span style="color:#b1ff42;"> </span><span style="color:#b9ea62;">t</span><span style="color:#c1d481;">h</span><span style="color:#c9bfa1;">e</span><span style="color:#d1a9c0;"> </span><span style="color:#d994e0;">n</span><span style="color:#e17eff;">o</span><span style="color:#c190fb;">t</span><span style="color:#a1a3f7;">e</span><span style="color:#81b5f3;">s</span><span style="color:#60c8ef;">.</span><span style="color:#40daeb;">t</span><span style="color:#20ede7;">x</span><span style="color:#00ffe3;">t</span><span style="color:#2bffe8;"> </span><span style="color:#55ffec;">f</span><span style="color:#80fff1;">i</span><span style="color:#aafff6;">l</span><span style="color:#d5fffa;">e</span><span style="color:#ffffff;">!</span><br>${termi.shell}`)
			return true;
		}
		termi.send(`<br>${termi.shell}`);
		return true;
	}
}