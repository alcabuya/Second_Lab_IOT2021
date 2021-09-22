var subm = document.getElementById("submit");
var container = document.getElementById("datafetched");
var table = document.getElementById("datadisp");
//whenever the button with the id submit is clicked it will execute the function fetch 
subm.addEventListener('click', dofetch,true);

function dofetch(){
    var quantity = document.getElementById("register_quant");
    //console.log(quantity.value);
    deleteTable();
    displayheader();
    
    document.getElementById("datafetched");
        for(i=0;i<quantity.value;i++){
            console.log(i);
            fetch('https://jsonplaceholder.typicode.com/photos/'+(i+1))
        .then(response => response.json())
        .then(json => /*console.log(json)*/ displayjson(json))
        .catch(function(err){
            console.log(err);
        });
    }    
}
function displayheader(){
    //console.log(table);
    var newRow = table.insertRow();
    
    // Insert a cell at the end of the row
    let newCells = []; 
    let texts = ["Id", "Picture", "Tittle"];
    for(var i = 0;i<3;i++){
        newCells.push(newRow.insertCell());
        //edits the new table cellto be table header type
        newCells[i].innerHTML = `<th><h1>${texts[i]}</h1></th>`;
    
    }
}
function displayjson(jsondata){
    var newRow = table.insertRow();
    var IdCell = newRow.insertCell();
    IdCell.innerHTML = `<td>${jsondata.id}</td>`;
    var ImgCell = newRow.insertCell();
    ImgCell.innerHTML = ` <td><img src = ${jsondata.url} width="200" height = "200"></td>`;
    var TittleCell = newRow.insertCell();
    TittleCell.innerHTML = `<td><b>${jsondata.title}</b></td>`;
    
}
function deleteTable(){
    //don't know if it is the optimal solution 
    table.innerHTML = "";
}