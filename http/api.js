let termitext = document.getElementById("termi");
// Termi API

let termi = {}
termi.shell = `<a style="color:#678e2c">user@termi</a>:<a style="color:#576690">/</a>$ <a></a>`,
	termi.motd = `Kuteshi's terminal emulator, TERM-I!`,
	termi.setText = (raw) => {
		termitext.innerHTML = raw
	},
	termi.send = (x) => {
		termitext.innerHTML = termitext.innerHTML + x
	}