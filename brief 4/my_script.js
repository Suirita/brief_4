
function myChange() {
    let Filiers = document.getElementById("filiers").value;
    let groupe = document.getElementById("group");
    let opt1 = document.createElement("option");
    let opt2 = document.createElement("option");
    let opt3 = document.createElement("option");
    let opt4 = document.createElement("option");

    groupe.innerHTML = '';

    if (Filiers == "Web") {
        opt1.value = "DW_101";
        opt1.text = "DW_101";
        opt2.value = "DW_102";
        opt2.text = "DW_102";
        opt3.value = "DW_103";
        opt3.text = "DW_103";
        opt4.value = "DW_104";
        opt4.text = "DW_104";
        groupe.add(opt1, null);
        groupe.add(opt2, null);
        groupe.add(opt3, null);
        groupe.add(opt4, null);
    }
    else if (Filiers == "Mobile") {
        opt1.value = "DM_101";
        opt1.text = "DM_101";
        opt2.value = "DM_102";
        opt2.text = "DM_102";
        groupe.add(opt1, null);
        groupe.add(opt2, null);
    }

}


function myFunction() {
    let Nom = document.getElementById("nom").value;
    let Prenom = document.getElementById("prenom").value;
    let Email = document.getElementById("email").value;
    let Genre = document.querySelector('input[name="genre"]:checked').value;
    let Filier = document.getElementById("filiers").value;
    let Groupe = document.getElementById("group").value;
    let Clubs = Array.from(document.querySelectorAll('input[name="clubs"]:checked')).map(club => club.value);
    let table = document.getElementById("myTable");

    let output = document.getElementById("output");
    output.innerHTML = '';

    if (!isNaN(Nom))
        output.innerHTML = "vous devez d'abord entrer votre nom!!";
        
    else if (!isNaN(Prenom))
        output.innerHTML = "vous devez d'abord entrer votre Prenom!!";
        
    else if (!Email.endsWith("@ofppt.ma"))
        output.innerHTML = "votre E-mail doit se terminer par  @ofppt.ma!!";   
    
    else if (Filier == "choisir")
        output.innerHTML = "vous devez choisir votre Filier!!";
        
    else if (Clubs.length === 0)
        output.innerHTML = "tu dois choisir un club!!";
        
    else if (Clubs.length > 2)
        output.innerHTML = "vous pouvez vous inscrire à 1 ou 2 clubs!!";    
        
    else {
        let newRow = table.insertRow();
        let cell1 = newRow.insertCell(0);
        let cell2 = newRow.insertCell(1);
        let cell3 = newRow.insertCell(2);
        let cell4 = newRow.insertCell(3);
        let cell5 = newRow.insertCell(4);
        cell1.innerHTML = Nom;
        cell2.innerHTML = Prenom;
        cell3.innerHTML = Filier;
        cell4.innerHTML = Groupe;
        cell5.innerHTML = Clubs.join(', ');
            
        document.getElementById("box_1_text").innerText = parseInt(document.getElementById("box_1_text").innerHTML) + 1

        if (Genre == "male") {
            document.getElementById("box_2_1_text").innerText = parseInt(document.getElementById("box_2_1_text").innerHTML) + 1+"M"
        }
        else {
            document.getElementById("box_2_2_text").innerText = parseInt(document.getElementById("box_2_2_text").innerHTML) + 1+"F"
        }

        for (let i = 0; i < Clubs.length; i++)
            if (Clubs[i] == "ia") {
                document.getElementById("box_3_text").innerText = parseInt(document.getElementById("box_3_text").innerHTML) + 1;
            }
            else if (Clubs[i] == "hackathon") {
                document.getElementById("box_4_text").innerText = parseInt(document.getElementById("box_4_text").innerHTML) + 1 ;
            }
            else if (Clubs[i] == "musique") {
                document.getElementById("box_5_text").innerText = parseInt(document.getElementById("box_5_text").innerHTML) + 1;
            }
            else if (Clubs[i] == "sport") {
                document.getElementById("box_6_text").innerText = parseInt(document.getElementById("box_6_text").innerHTML) + 1;
            }

    }

}