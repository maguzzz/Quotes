//Api key etc
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e182d12ebemsh85f8f05c8d8eb03p14cc5djsn44b0baed8501',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

//Getting data from api
fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	.then(data =>{
		document.getElementById("quote").innerHTML = `❝${data.content}❞`;
		document.getElementById("quoteAuthor").innerHTML = `-${data.originator.name}`;
	})
	.catch(err => console.error(err));

//Theme switch button
let darkModeButton = document.getElementById("theme")

darkModeButton.addEventListener("click", () =>{
	if(darkModeButton = "darkMode"){
		localStorage.removeItem('theme');
		document.body.classList.toggle("darkMode")
		localStorage.setItem("theme","darkMode");
		console.log("darkButton")
	}else{
		localStorage.removeItem('theme');
		document.body.classList.toggle("lightMode")
		localStorage.setItem("theme","lightMode");
		console.log("lightButton")
	}
})
