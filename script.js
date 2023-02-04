iframe.src="./iframe.html";
ADRESSE= "https://duckduckgo.com/?q=";
TERMINAISON="&t=h_&ia=web&iaxm=maps";
function search(){
RESEARCH= searchbar.value;
RESULT = ADRESSE + RESEARCH + TERMINAISON;
iframe.src=RESULT;
}