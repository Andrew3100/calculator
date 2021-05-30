//Список идентификаторов храним в массиве
let identifyArray = [
    'n7','n8','n9','ncos','n4',
    'n5','n6','nsin','n1','n2',
    'n3','nst','nregistr','n0',
    'n,','ncor','n/','n*','n+','n-'
]

function GetVal(param) {
    let b = document.getElementById('val').innerText
    console.log(b)
    for (let i = 0; i < identifyArray.length; i++) {

        let a = parseInt(document.getElementById(identifyArray[i]).innerText)
        if (param == identifyArray[i]) {

            (document.getElementById('val').innerHTML = b.concat(a))

        }

    }

}
