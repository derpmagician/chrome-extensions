let myLeads =[];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.querySelector("#ul-el");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

function render(leads) {
    let listItems ="";
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'> ${leads[i]} </a>
        </li>
        `;
    }
    
    ulEl.innerHTML = listItems;

}


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads);
    
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
    
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    
})



deleteBtn.addEventListener("dblclick", function(){
    console.log(localStorage.getItem("myLeads"));
    localStorage.clear();
    myLeads =[]
    render(myLeads);
})




