const Data = []


const AddData = () =>{
    let nameInput = document.querySelector("#nameInput").value;
    let emailInput = document.querySelector("#emailInput").value;
    let websiteInput = document.querySelector("#websiteInput").value;
    let imageInput = document.querySelector("#imageInput").value;
    let datatemp = {skills : []};
    datatemp.name = nameInput;
    datatemp.email = emailInput;
    datatemp.website = websiteInput;
    datatemp.image = imageInput;
    if(document.querySelector("#male").checked){
        datatemp.gender = "Male";
    }
    else if(document.querySelector("#female").checked){
        datatemp.gender = "Female";
    }
    if(document.querySelector("#JavaCheck").checked){
        datatemp.skills.push("Java")
    }
    if(document.querySelector("#HTMLcheck").checked){
        datatemp.skills.push("Html")
    }
    if(document.querySelector("#cssCheck").checked){
        datatemp.skills.push("CSS")
    }
    // console.log(nameInput + emailInput + websiteInput + imageInput + datatemp.gender + datatemp.skills);
    // console.log(checkFeilds())
    if(checkFeilds())
        Data.push(datatemp);
        loadData()
//         document.querySelector("#resetbtn").click();
    console.log(Data);
}
let i = 0;
const loadData = () =>{
    let datalen = Data.length;
    let records = document.querySelector("#ShowRecords");
    for(i;i<datalen;i++){
        var row = records.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        let temp = "<h3>"+ Data[i].name +"</h3>"+ Data[i].gender + "<br>" + Data[i].email + "<br><a href='" + Data[i].website +"'>" + Data[i].website + "</a><br>";
        for(let j=0;j<Data[i].skills.length;j++){
            temp+=Data[i].skills[j];
            temp+=" "
        }
        cell1.innerHTML =  temp;
        cell2.innerHTML = "<img class='img-responsive' src='"+ Data[i].image + "'>"
    }
}

const checkFeilds = () =>{
    // let nameInput = document.querySelector("#nameInput").value;
    // let emailInput = document.querySelector("#emailInput").value;
    // let websiteInput = document.querySelector("#websiteInput").value;
    // let imageInput = document.querySelector("#imageInput").value;
    let flag = 1;
    if(nameInput == "" || emailInput == "" || websiteInput == "" || imageInput == "")
        flag = 0;
    if(!(document.querySelector("#male").checked || document.querySelector("#female").checked))
        flag = 0;

    return!(flag == 0);
}
