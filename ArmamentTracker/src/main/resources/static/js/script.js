window.addEventListener('load', function() {
	console.log("script.js loaded");
	init();
	loadAllArmaments();
});

function init() {
	/*
	document.armamentForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let armamentId = document.armamentForm.armamentId.value;
		if (!isNaN(armamentId) && armamentId > 0) {
			console.log('Armament ID: ' + armamentId);
			getArmament(armamentId);
		}
	});
*/

	document.addArmamentForm.addArmament.addEventListener('click', function(e) {
		e.preventDefault();
		console.log('Adding armament');
		let armament = {
			name: addArmamentForm.name.value,
			description: addArmamentForm.description.value,
			weaponType: addArmamentForm.weaponType.value,
			damageType: addArmamentForm.damageType.value,
			skill: addArmamentForm.skill.value
		};
		console.log(armament);
		addNewArmament(armament);
	});

	/*
		document.armamentData.editButton.addEventListener('click', function(e) {
			e.preventDefault();
			let armamentId = document.armamentData.armamentId.value;
			if (!isNaN(armamentId) && armamentId > 0) {
				console.log('Armament ID: ' + armamentId);
				displayUpdateArmament(armamentId);
			}
			console.log('Updating armament');
			let armament = {
				name: addArmamentForm.name.value,
				description: addArmamentForm.description.value,
				weaponType: addArmamentForm.weaponType.value,
				damageType: addArmamentForm.damageType.value,
				skill: addArmamentForm.skill.value
			};
			updateArmament(armament);
		});
	
	*/

	//TODO:
	//- Event handlers for buttons and stuff
}

function loadAllArmaments() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', "api/armaments");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				displayArmaments(JSON.parse(xhr.responseText));
			} else {
				console.error("Error loading events: " + xhr.status);
			}
		}
	};

	xhr.send();
}

function displayArmaments(armamentList) {
	let dataDiv = document.getElementById("armamentList");
	dataDiv.textContent = '';
	/*	let ul = document.createElement('ul');
		dataDiv.appendChild(ul);
		for (let armament of armamentList) {
			let li = document.createElement('li');
			li.textContent = armament.name;
			ul.appendChild(li);
		} */



	createTable(armamentList);
}

let createTable = function(armamentList) {
	let table = document.createElement('table');
	let tbody = document.createElement('tbody');
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	let th = document.createElement('th');
	let td;

	th.textContent = "Armament Number";
	tr.appendChild(th);
	th = document.createElement('th');
	th.textContent = "Armament Name";
	tr.appendChild(th);
	thead.appendChild(tr);
	tbody.appendChild(thead);

	armamentList.forEach(function(value) {
		tr = document.createElement('tr');
		td = document.createElement('td');
		td.textContent = value.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = value.name;
		tr.appendChild(td);
		tr.addEventListener('click', function(e) {
			e.preventDefault();
			let armamentId = value.id;
			if (!isNaN(armamentId) && armamentId > 0) {
				console.log('Armament ID: ' + armamentId);
				getArmament(armamentId);
			}

		});
		tbody.appendChild(tr);
	});

	table.appendChild(thead);
	table.appendChild(tbody);
	document.body.appendChild(table);

}

function addNewArmament(armament) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', "api/armaments");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				console.log('Armament created');
				displayArmament(JSON.parse(xhr.responseText));
			}
			else if (xhr.status === 404) {
				displayError('Invalid data');
			} else {
				displayError('Error creating armament: ' + xhr.status);
			}
		}
	}
	let armamentJson = JSON.stringify(armament);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(armamentJson);

}



function displayArmament(armament) {
	let dataDiv = document.getElementById('armamentData');
	dataDiv.textContent = '';

	let form = document.createElement('form');
	let label = document.createElement('label');
	let input = document.createElement('input');
	let textarea = document.createElement('textarea');
	let br = document.createElement('br');

	label.textContent = "Name: ";
	label.name = "name";
	input.type = "text";
	input.name = "name";
	input.value = armament.name;
	form.appendChild(label);
	form.appendChild(input);
	form.appendChild(br);

	br = document.createElement('br');
	label = document.createElement('label');
	label.textContent = "Description: ";
	label.name = "description";
	textarea.rows = 2;
	textarea.cols = 60;
	textarea.name = "description";
	textarea.value = armament.description;
	form.appendChild(label);
	form.appendChild(textarea);
	form.appendChild(br);

	br = document.createElement('br');
	label = document.createElement('label');
	input = document.createElement('input');
	label.textContent = "Weapon Type: ";
	label.name = "weaponType";
	input.type = "text";
	input.name = "weaponType";
	input.value = armament.weaponType;
	form.appendChild(label);
	form.appendChild(input);
	form.appendChild(br);

	br = document.createElement('br');
	label = document.createElement('label');
	input = document.createElement('input');
	label.textContent = "Damage Type: ";
	label.name = "damageType";
	input.type = "text";
	input.name = "damageType";
	input.value = armament.damageType;
	form.appendChild(label);
	form.appendChild(input);
	form.appendChild(br);

	br = document.createElement('br');
	label = document.createElement('label');
	input = document.createElement('input');
	label.textContent = "Skill: ";
	label.name = "skill";
	input.type = "text";
	input.name = "skill";
	input.value = armament.skill;
	form.appendChild(label);
	form.appendChild(input);
	form.appendChild(br);

	let editButton = document.createElement('button');
	let deleteButton = document.createElement('button');
	editButton.name = "editArmament";
	deleteButton.name = "deleteArmament";
	editButton.textContent = "Edit Armament";
	deleteButton.textContent = "Delete Armament";





	form.appendChild(editButton);
	form.appendChild(deleteButton);
	dataDiv.appendChild(form);

	/*
		let name = document.createElement('h1');
		name.textContent = armament.name;
		dataDiv.appendChild(name);
	
		let description = document.createElement('blockquote');
		description.textContent = armament.description;
		dataDiv.appendChild(description);
	
		let ul = document.createElement('ul');
		let li = document.createElement('li');
		li.textContent = "Weapon type: " + armament.weaponType;
		ul.appendChild(li);
		li = document.createElement('li');
		li.textContent = "Damage type: " + armament.damageType;
		ul.appendChild(li);
		li = document.createElement('li');
		li.textContent = "Skill: " + armament.skill;
		ul.appendChild(li);
		dataDiv.appendChild(ul);
		
		*/


	editButton.addEventListener('click', function(e) {
		e.preventDefault();
	//	if (!isNaN(armament) && armament.id > 0) {
			console.log('Updated Armament ID: ' + armament.id);
			console.log(form.name.value);
			armament = {
			id: armament.id,
			name: form.name.value,
			description: form.description.value,
			weaponType: form.weaponType.value,
			damageType: form.damageType.value,
			skill: form.skill.value
		};
			console.log(armament);
			console.log(armament.id);
			updateArmament(armament);
	//	} else {
	//		console.log(armament);
	//		console.log(armament.id);
	//	}

	});

	deleteButton.addEventListener('click', function(e) {
		e.preventDefault();
	//	if (!isNaN(armament) && armament.id > 0) {
			console.log('Updated Armament ID: ' + armament.id);
			deleteArmament(armament.id);
	//	}

	});




}

function updateArmament(armament) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/armaments/' + armament.id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log("Armament updated");
				console.log(xhr.responseText);
				let updatedArmament = JSON.parse(xhr.responseText);
				displayArmament(updatedArmament);
			} else if (xhr.status === 404) {
				displayError("Invalid data")
			} else {
				displayError("Error updating armament " + xhr.status);
			}
		}
	}

	let armamentJson = JSON.stringify(armament);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.send(armamentJson);




}

function deleteArmament(armamentId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/armaments/' + armamentId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log("Armament deleted");
				console.log(xhr.responseText);
			} else if (xhr.status === 404) {
				displayError("Invalid data")
			} else {
				displayError("Error deleting armament " + xhr.status);
			}
		}
	}

	xhr.send();




}

function getArmament(armamentId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/armaments/' + armamentId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log("Armament found");
				console.log(xhr.responseText);
				let armament = JSON.parse(xhr.responseText);
				displayArmament(armament);
			} else {
				console.log("Armament not found");
				displayError("Armament " + armamentId + " not found.");
			}
		}
	}

	xhr.send();
}

function displayError(msg) {
	let dataDiv = document.getElementById('armamentData');
	dataDiv.textContent = "";
	dataDiv.textContent = msg;
}

