//Список идентификаторов храним в массиве
let identifyArray = [
    'n7','n8','n9','ncos','n4',
    'n5','n6','nsin','n1','n2',
    'n3','nst','nregistr','n0',
    'n,','ncor','n/','n*','n+','n-'
]

function GetVal(param) {

    for (let i = 0; i < identifyArray.length; i++) {

        let a = parseInt(document.getElementById(identifyArray[i]).innerText)
        if (param == identifyArray[i]) {
            console.log(a)
            let values = a
            console.log(document.getElementById('val').innerHTML = a)
        }

    }

}
