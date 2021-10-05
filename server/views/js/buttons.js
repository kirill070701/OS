console.log(Number(numbers))
let buttonDelete
let buttonChange
/*for (let i = 0; i < Number(numbers); i++) {
    buttonDelete[i] = document.getElementById("delete"+i)
    buttonChange[i] = document.getElementById("change"+i)

    buttonDelete[i].onclick = buttonsDelete
} */
var aa = document.getElementById("delete"+0)
aa.onclick = buttonsDelete
function buttonsDelete(params) {
    console.log("OK")
}