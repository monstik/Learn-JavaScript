let buttons = getElements('operations-button');
let result = getElement('result');
let exeptionMessage;

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', OnOperationButtonClick);
}

function OnOperationButtonClick(e) {
    doOperation(getElement('num1').value, getElement('num2').value, e.currentTarget.innerHTML);
}

function doOperation(num1, num2, operation) {
    let tempResult;

    if (isExeption(num1, num2)) {
        num1 = Number(num1);
        num2 = Number(num2);
        switch (operation) {
            case '+':
                tempResult = num1 + num2;
                break;
            case '-':
                tempResult = num1 - num2;
                break;
            case '*':
                tempResult = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    tempResult = num1 / num2;
                } else {
                    tempResult = 'На ноль делить нельзя!';
                }
                break;
        }
    } else {
        tempResult = exeptionMessage;
    }

    result.textContent = tempResult;

}

function isExeption(num1, num2) {
    if (!isEmpty(num1) && !isEmpty(num2)) {
        if (!isNaN(num1) && !isNaN(num2)) {
            return true;
        } else {
            exeptionMessage = 'Вы ввели недопустимые значение!';
            return false;
        }
    } else {
        exeptionMessage = 'Все поля должны быть заполнены!';
        return false;
    }

}

function isEmpty(str) {
    if (str.trim() === '') {
        return true;
    } else {
        return false;
    }
}

function getElement(id) {
    return document.getElementById(id);
}

function getElements(className) {
    return document.getElementsByClassName(className);
}