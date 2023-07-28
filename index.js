var inputText = document.getElementById("budgetInputText");
let budgetVal = 0;
let expVal = 0;
let balVal = 0;
let expenseInput = document.getElementById("expenseInput");
let listBody = document.querySelector(".listBody");
let finalResult = document.getElementById('finalResult');

function budgetAction() {
  if (Number(budgetVal) > 0) {
    document.getElementById("budgetDetail").innerHTML = budgetVal + Number(inputText.value);
    budgetVal += Number(inputText.value);
    document.getElementById("balanceDetail").innerHTML = Number(document.getElementById("balanceDetail").innerHTML) + Number(inputText.value);
    balVal += Number(inputText.value);
    document.getElementById("budgetInputText").value = "";
  } else {
    document.getElementById("budgetDetail").innerHTML = Number(inputText.value);
    budgetVal = Number(inputText.value);
    document.getElementById("balanceDetail").innerHTML = Number(inputText.value);
    balVal = Number(inputText.value);
    document.getElementById("budgetInputText").value = "";
  }
}

function expenseAction(){
    if(Number(expVal) > 0){
        if(Number(document.getElementById("expenseInput").value) > balVal){
            alert("INSUFFICIENT BALANCE!");
        }else{
            document.getElementById("expenseDetail").innerHTML = expVal + Number(expenseInput.value);
            expVal += Number(expenseInput.value);
            document.getElementById("balanceDetail").innerHTML = Number(document.getElementById("balanceDetail").innerHTML) - Number(expenseInput.value);
            balVal -= Number(expenseInput.value);

            const expenseNameInput = document.getElementById("expenseNameInput").value;
            document.getElementById("expenseNameInput").value = "";
            listCreator(expenseNameInput,expenseInput.value);
        }
        
    }
    else{
        if(Number(document.getElementById("expenseInput").value) > balVal){
            alert("INSUFFICIENT BALANCE!");
        }else{
        document.getElementById("expenseDetail").innerHTML = Number(expenseInput.value);
        expVal = Number(expenseInput.value);
        document.getElementById("balanceDetail").innerHTML = Number(document.getElementById("balanceDetail").innerHTML) - Number(expenseInput.value);
        balVal -= Number(expenseInput.value);

        const expenseNameInput = document.getElementById("expenseNameInput").value;
        document.getElementById("expenseNameInput").value = "";
        listCreator(expenseNameInput,expenseInput.value);
    }
}}


function listCreator(expenseName,expenseValue){
    finalResult.style.display = "block"
    const row = document.createElement("tr");

    const expName = document.createElement("td");
    expName.textContent = expenseName;
    row.appendChild(expName);
    
    console.log(expName.textContent = expenseName);

    const expVal = document.createElement("td");
    expVal.textContent = expenseValue;
    row.appendChild(expVal);
    

    const action = document.createElement("td");
    const btn = document.createElement("button");
    row.appendChild(btn);
    btn.classList.add("delete");
    btn.textContent = "delete"
    btn.style.backgroundColor = "red";

    btn.addEventListener("click",()=>{
        delRow(row)
    });
    listBody.appendChild(row);
    document.getElementById("expenseInput").value = "";
}

function delRow(ele){
    console.log("deleted");
    ele.remove();
}