//Список идентификаторов храним в массиве
let identifyArray = [
    'n7','n8','n9','ncos','n4',
    'n5','n6','nsin','n1','n2',
    'n3','nst','nregistr','n0',
    'n,','ncor','n/','n*','n+','n-'
]
let identifyArrayNoParse = ['nsin','nst','nregistr','n,','ncor','n/','n*','n+','n-'
]

function GetVal(param) {
    //Берём текущий текст из строки "Вводимые данные" и добавляем к нему текст из объекта по событию onclick
    document.form.calculator.value = document.form.calculator.value + param
}

function ClearWindow() {
    //Берём текущий текст из строки "Вводимые данные" и перезаписываем в него пустой текст
    document.form.calculator.value = ''
}

function DeleteSymbol() {
    let all_string = document.getElementById('calculator').value;
    document.form.calculator.value = ''
    document.form.calculator.value = all_string.substring(0, all_string.length - 1)
}

function GetResultMath() {
    document.form.calculator.value
}
/*function GetVal(param) {
    let b = document.getElementById('val').innerText
    console.log(b)
    for (let i = 0; i < identifyArray.length; i++) {

            let a = parseInt(document.getElementById(identifyArray[i]).innerText)

        if (param == identifyArray[i]) {
            if (param == 'ncos') {
                a = 'cos';
            }
            if (param == 'nsin') {
                a = 'sin';
            }
            if (param == 'nst') {
                a = '^';
            }
            /!*if (param == 'nregistr') {
                a = '';
            }*!/
            if (param == 'n,') {
                a = ',';
            }
            if (param == 'ncor') {
                a = '#';
            }
            if (param == 'n/') {
                a = '/';
            }
            if (param == 'n*') {
                a = '*';
            }
            if (param == 'n+') {
                a = '+';
            }
            if (param == 'n-') {
                a = ' - '
            }
            (document.getElementById('val').innerHTML = b.concat(a))
        }
    }
}*/

function GetResult() {
    result = document.getElementById('val').innerText
    if (result.indexOf('-')) {
        array = result.split('-')
        res = array[0] = array[2]
    }
    console.log(parseInt(array[1]))
    // console.log('Результат: ' + res)

}


