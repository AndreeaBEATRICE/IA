function AddNewItem() {
	addBirthDate();
	createEmailTextBox();
}//Se apeleaza functiile.

function addBirthDate() {
	var tag = document.createElement("h3");//Scrie textul cu formatul h3.
	tag.id = "date-years";
	var text = document.createTextNode("05-02-2004");//Atribuie variabilei 'text' un nou nod text: 05-02-2004
	var element = document.getElementById("birthdate");//Atribuie variabilei 'element' un nou nod text: birthdate
	element.appendChild(tag);
	document.getElementById("birthdate").addEventListener("mouseover", birthToYears);//Aici se returneaza anii la fiecare trecere a mouseului peste caseta.
	document.getElementById("birthdate").addEventListener("mouseout", handleMouseOut);//Aici se revine la data nasterii atunci cand este luat mouseul de pe caseta.
}

function birthToYears() {
	var currentTime = new Date(); //Atribuim variabilei currentTime data curenta.
	var vv = document.getElementById("date-years"); //Atribuim variabilei vv elementul a cărui proprietate id se potrivește cu șirul specificat. 
	var year = currentTime.getFullYear()//Atribuim variabilei year anul din data curenta.
	var numYears = Number(year) - Number(vv.innerHTML.slice(-4));//Scadem din anul curent, anul nasterii.
	vv.innerHTML = "Varsta: " + numYears;//Introducem in program varsta rezultata din scaderea anterioara.
}

function handleMouseOut() {
		document.getElementById("date-years").innerHTML = '05-02-2004';//Atribuie data nasterii.
	}

function createEmailTextBox() {
	var input = document.createElement("input");
	input.type = "email";//Aici se specifica tipul casetei text.
	input.id = "email-box";//Se atribuie un id.
	input.value = "abc@xyz.com";//Aici este dat emailul afisat in caseta.
	input.style.width = "300px";//Stilul casetei text.
	input.addEventListener("mouseover", validateEmail);
	document.getElementById("birthdate").appendChild(input);
}

function validateEmail() {
	var input = document.getElementById("email-box");
  	var validRegex = /^\S+@\S+\.\S+$/;//Aici este definit tipul Regexului.
  	if (input.value.match(validRegex)) {
  		console.log("Valid email address!");//Daca valoarea respectiva este de timpul Regex definit mai sus, in consola email ul va aparea valid.

  	} else {
    	alert("Invalid email address!");//Altfel, va aparea pe ecran o alerta cu mesajul: "Invalid email address".
  	}
}