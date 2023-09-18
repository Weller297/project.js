var age = +prompt('Введите свой возраст')


if (18 >= age) {
    alert('Вы еще молоды, Вам нужно учиться')
}else if (50 >= age && age > 18){
    alert('Вам нужно работать')

} else if (59 >= age && age > 50){
    alert('Вам скоро на пенсию')

}else if (100 >= age && age > 59){
    alert('Вы пенсионер')
    
}else {
    alert('Что-то пошло не так')
    
}

alert('Часть вторая')

var time = +prompt('Введите время в цифрах')
if (time <= 6 && time >= 0) {
    alert(time + ' часа ночи')

}else if (time <= 10 && time >= 7) {
    alert(time + ' часов утра')

}else if (time <= 12 && time >= 11 ) {
    alert(time + ' часов дня')

}
else if (time <= 17 && time >= 11 ) {
    alert((time-12) + ' часа дня')

}
else if (time <= 23 && time >= 18 ) {
    alert((time-12) + ' часов вечера')

}
else if (time = 24) {
    alert(' часов ночи')

}else {
    alert('Етого вримени ни сущиствуит TwT')
}

alert('Часть третья')


var number_1 = +prompt('Введите первое число') 
var number_2 = +prompt('Введите второе число') 
var number_3 = +prompt('Введите третье число') 
    
if (number_1 > number_2 && number_1 < number_3 || number_1 < number_2 && number_1 > number_3) {
    alert(number_1 + ', Это число находится между другими числами')
}else if (number_2 > number_1 && number_2 < number_3 || number_2 < number_1 && number_2 > number_3 ) {
    alert(number_2 + ', Это число находится между другими числами')
}else if (number_3 > number_2 && number_3 < number_1 || number_3 < number_2 && number_3 > number_1) {
    alert(number_3 + ', Это число находится между другими числами')
}

