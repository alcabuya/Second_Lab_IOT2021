var subm = document.getElementById("submit");
var container = document.getElementById("datafetched");

//whenever the button with the id submit is clicked it will execute the function fetch 
subm.addEventListener('click', dofetch,true);

function dofetch(){
    var quantity = document.getElementById("register_quant");
    //console.log(quantity.value);
    deleteTableContent();
    displayheader();
    
    document.getElementById("datafetched");
       
            
            fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(json =>  displayjson(json, quantity.value));        
      
     

}
function displayheader(){
    var table = document.getElementById("datadisp");
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
function displayjson(jsondata,quantity){
    
    for(i = 0;i<quantity;i++){
        var table = document.getElementById("datadisp");
        var newRow = table.insertRow();
        var IdCell = newRow.insertCell();
        IdCell.innerHTML = `<td><p>${jsondata[i].id}</p></td>`;
        var ImgCell = newRow.insertCell();
        ImgCell.innerHTML = ` <td><img src = ${jsondata[i].url} width="200" height = "200"></td>`;
        var TittleCell = newRow.insertCell();
        TittleCell.innerHTML = `<td><p><b>${jsondata[i].title}</b></p></td>`;
    }
}
function deleteTableContent(){
    var table = document.getElementById("datadisp");
    //don't know if it is the optimal solution 
    table.innerHTML = "";
}
