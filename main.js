document.getElementById("add").addEventListener("click", function () {

    var name = document.getElementById("attraction-name").value.trim();
    var region = document.getElementById("region").value;
    var typeInput = document.querySelector('input[name="type"]:checked');
    var type = typeInput ? typeInput.value : "Nieznany";
    var description = document.getElementById("attraction-description").value.trim();


    var li = document.createElement("li");
    li.textContent = `Nazwa atrakcji: ${name}\nWojewództwo: ${region}\nRodzaj atrakcji: ${type}\nOpis: ${description}`;


    const removeButton = document.createElement("button");
    removeButton.textContent = "usuń";
    removeButton.style.marginLeft = "10px";


    removeButton.addEventListener("click", function () {
        li.remove();
    });

    
    li.appendChild(removeButton);
    document.getElementById("attraction-list").appendChild(li);
});
