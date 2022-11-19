function changeProfile() {
	// call all functions to change profile
	NameToJob();
	educationToAchievements();
	oldToNewImage();
	changeBodyBackgroundColor();
}

function NameToJob() {
	document.getElementById("NumePrenume").innerHTML = "Dr. inginer sisteme de securitate- Vezan Andreea-Beatrice";
}

function educationToAchievements() {
	// schimbare primul rand tabel
	var r1 = document.getElementById("realizare_r1");
	var p1 = document.getElementById("perioada_r1");
	var l1 = document.getElementById("link_r1");
	r1.innerHTML = "Internship";
	p1.innerHTML = "01.01.2024-01.01.2025";
	l1.innerHTML = "https://pdfslide.net/documents/curs-inginer-sisteme-de-securitate.html?page=1";

	// schimbare al doilea rand tabel
	var r2 = document.getElementById("realizare_r2");
	var p2 = document.getElementById("perioada_r2");
	var l2 = document.getElementById("link_r2");
	r2.innerHTML = "Voluntariatul intr-un ONG";
	p2.innerHTML = "10.10.2023-24.06.2026";
	l2.innerHTML = "https://ongcluj.ro/ong/serviciul-de-ajutor-maltez-in-romania/";

	// schimbare al treilea rand tabel
	var r3 = document.getElementById("realizare_r3");
	var p3 = document.getElementById("perioada_r3");
	var l3 = document.getElementById("link_r3");
	r3.innerHTML = "Cea mai buna lucrare de licenta";
	p3.innerHTML = "26.06.2026";
	l3.innerHTML ="https://etti.utcluj.ro/finalizare-studii.html"; 
}

function oldToNewImage() {
	var img = document.getElementById("pozaprofil");
	img.src = "./imagine2.jpg";
	img.style.opacity = 0.95;
	img.style.borderWidth = '10px';
    img.style.borderStyle = 'solid';
    img.style.borderColor = '#4d082f';
	img.style.right='100px'
	
	
	
}

function changeBodyBackgroundColor() {
	var body = document.getElementById("body");
	body.style.backgroundColor  = "#ebb7d5";
	body.style.fontFamily="Verdana";
	
}