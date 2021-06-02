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
    //Хватаем строку  --->  обрезаем крайний правый символ
    document.form.calculator.value = all_string.substring(0, all_string.length - 1)
}

function GetResultMath() {
    let text = document.form.calculator.value

        document.getElementById('res').innerText = eval(text)

}





