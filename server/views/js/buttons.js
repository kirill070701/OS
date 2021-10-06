/*console.log('<%= result.length%>')
let buttonDelete
let buttonChange
for (let i = 1; i < Number(numbers)+1; i++) {

    (document.getElementById("delete" + i)).onclick = ()=>{
        buttonsDelete(i)
    }
    (document.getElementById("change"+i)).onclick = ()=>{
        buttonsChange(i)
    }
} 

*/
function buttonsDelete(params) {
    console.log("OK" + params.id)
    window.location.href = '/delete?number=' + params.id
}

function buttonsChange(params) {
    console.log("ok" + params)
    window.location.href = '/change?number=' + params.id
}



