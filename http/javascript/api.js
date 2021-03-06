/*
*  termi
*  Copyright © wearetermi 2020
*  All rights reserved.
*  Licensed under GPL-3 license.
*/

let termitext = document.getElementById("termi");
// Termi API

let termi = {};
termi.color = (y, x) => {
	return `<a style="color:${y}">${x}</a>`;
};
termi.shell = `${termi.color("lightgreen", "user@termi")}:${termi.color("#576690", "/")}$ <a></a>`;
termi.oshell = `${termi.color("lightgreen", "user@termi")}:${termi.color("#576690", "/")}$ <a></a>`;
termi.shelldir = (dir) => {
	return `${termi.color("lightgreen", "user@termi")}:${termi.color("#576690", dir)}$ <a></a>`
};
termi.setText = (raw) => {
		termitext.innerHTML = raw
};
termi.send = (x) => {
		termitext.innerHTML = termitext.innerHTML + x
};
