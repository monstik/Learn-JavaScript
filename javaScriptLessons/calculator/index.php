<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="stylesheet" href="/calculator/css/page.css">
    <title>Document</title>

</head>
<body>


<div class="main-calculator">
    <div class="input-block">
        <label for="num1">number_1</label><input type="text" id="num1"> <br>
        <label for="num2">number_2</label><input type="text" id="num2">
    </div>
    <div class="operations-block">
        <button class="operations-button" id="add-operation">+</button>
        <button class="operations-button" id="subtraction-operation">-</button>
        <button class="operations-button" id="division-operation">/</button>
        <button class="operations-button" id="multiplication-operation">*</button>
    </div>
    <div class="output-block">
        <h2 id="result"></h2>
    </div>

    <div class="exeptions">
        <h2 id="exeption"></h2>
    </div>

</div>




</body>
<script src="/calculator/js/calculator.js"></script>

</html>
