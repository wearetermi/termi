let termitext = document.getElementById("termi");
// Termi API

let termi = {}
termi.color = (y, x) => {
	return `<a style="color:${y}">${x}</a>`;
},
termi.shell = `${termi.color("#678e2c", "user@termi")}:${termi.color("#576690", "/")}$ <a></a>`,
termi.oshell = `${termi.color("#678e2c", "user@termi")}:${termi.color("#576690", "/")}$ <a></a>`,
termi.shelldir = (dir) => {
	return `${termi.color("#678e2c", "user@termi")}:${termi.color("#576690", dir)}$ <a></a>`
};
	termi.motd = `Kuteshi's terminal emulator, TERM-I!`,
	termi.setText = (raw) => {
		termitext.innerHTML = raw
	},
	termi.send = (x) => {
		termitext.innerHTML = termitext.innerHTML + x
	}