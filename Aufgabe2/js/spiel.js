


 
var pos = 0, test, test_status, question, choice, choices, chA, chB, correct = 0;
var questions = [
    [ "Was ist der größere Planet, Saturn oder Mars", "Mars", "Saturn", "B" ],
	[ "Ist die Erde eine Scheibe", "Ja", "Nein", "B" ],
	[ "Ist die Sonne ein Stern", "Ja", "Nein", "A" ],
	
];
function _(x){
	return document.getElementById(x);
}
function renderQuestion(){
    
    $("#hier").prop("disabled", true);
    
	test = _("test");
	if(pos >= questions.length){
        if(correct==3){
            test.innerHTML = "<h2>Sie haben gewonnen</h2>";
            ("test_status").innerHTML = "Gewinnspiel beendet";
        }
        else{
		test.innerHTML = "<h2>Sie haben "+correct+" von "+questions.length+" Fragen korrekt</h2>";
		_("test_status").innerHTML = "Gewinnspiel beendet";
        }
		return false;
	}
	_("test_status").innerHTML = "Frage "+(pos+1)+" von "+questions.length;
	question = questions[pos][0];
	chA = questions[pos][1];
	chB = questions[pos][2];
	
	test.innerHTML = "<h3>"+question+"</h3>";
	test.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	test.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	test.innerHTML += "<button onclick='checkAnswer()'>Antworten</button>";
}
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
	if(choice == questions[pos][3]){
		correct++;
	}
    else{
        pos=2;
        
    }
	pos++;
	renderQuestion();

}

function neuesFenster(){
    window.open("docs/test.html","popup","width=480, height=480"); 
    $("#dort").prop("disabled", true);
  
}

function closeFenster(){
    window.close();
}



