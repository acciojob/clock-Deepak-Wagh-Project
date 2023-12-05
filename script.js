//your JS code here. If required.
const conatiner=document.getElementById("timer");
const date =new Date();
let cdate=getDate();
conatiner.innerText="cdate";

function getDate(date) {
	let Y= date.getFullYear;
	let M=date.getMonth;
	let D=date.getDate

	return D+'/'+M+'/'+Y
}