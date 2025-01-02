// searchinput
// searchbtn

const dictionary = (word)=>{
    const url = 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=bright';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b77309dbedmsh58886caf0b7a9ebp1b959djsn55114b65b5ea',
		'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        wordheading.innerHTML ="The meaning of: " + response.word;
        definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.").replace("6.", "<br>6.").replace("7.", "<br>7.");

    })
    .catch(err => console.error(err));
}

searchbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    dictionary(searchinput.value)
})