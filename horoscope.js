function isODD(num){
    num = num/2
    if(String(num).includes('.')){
        return 'A Odd';
    }
    else{
        return 'An Even';
    }
}
function lettersTOALPHABET(alphabet){
    
    var quantum_alphabet = {
        num1: ['A', 'J', 'S'],
            num2: ['B', 'K', 'T'],
            num3: ['C', 'L', 'U'],
            num4: ['D', 'M', 'V'],
            num5: ['E', 'N', 'W'],
            num6: ['F', 'O', 'X'],
            num7: ['G', 'P', 'Y'],
            num8: ['H', 'Q', 'Z'],
            num9: ['I', 'R']
        };
        
        
    var replacedFullname = '';
    for (var i = 0; i < alphabet.length; i++) {
        var char = alphabet[i];
        for (var key in quantum_alphabet) {
            if (quantum_alphabet.num1.includes(char)) {
                replacedFullname += 1;
                break;
            }
            if (quantum_alphabet.num2.includes(char)) {
                replacedFullname += 2;
                break;
            }
            if (quantum_alphabet.num3.includes(char)) {
                replacedFullname += 3;
                break;
            }
            if (quantum_alphabet.num4.includes(char)) {
                replacedFullname += 4;
                break;
            }
            if (quantum_alphabet.num5.includes(char)) {
                replacedFullname += 5;
                break;
            }
            if (quantum_alphabet.num6.includes(char)) {
                replacedFullname += 6;
                break;
            }
            if (quantum_alphabet.num7.includes(char)) {
                replacedFullname += 7;
                break;
            }
            if (quantum_alphabet.num8.includes(char)) {
                replacedFullname += 8;
                break;
            }
            if (quantum_alphabet.num9.includes(char)) {
                replacedFullname += 9;
                break;
            }

        }
        // If the character is not found in any of the quantum_alphabet values, keep it as is
        if (!/[A-Z]/.test(char)) {
            replacedFullname += char;
        }
        
    }
    return replacedFullname
    
}


var lists = {
    input1: '',
    input2: '',
    input3: ''
}
var gender1 = '';
var gender2 = '';
var pronoun1 = '';
var pronoun2 = '';

function love(gender){
if(gender ==='male'){
    document.getElementById('check_one').disabled = true;
    document.getElementById('check_two').disabled = true;
    gender1 = 'Man';
    pronoun1 = 'He';
    console.log('male')
    return 'male'
}
else{
    document.getElementById('check_one').disabled = true;
    document.getElementById('check_two').disabled = true;
    gender1 = 'Woman';
    pronoun1 = 'She';
    console.log('female')
    return 'female'
    
}
}
function getLove(gender){
    if(gender ==='male'){
        gender2 = 'Man';
        pronoun2 = 'He';
    
        document.getElementById('check_one1').disabled = true;
        document.getElementById('check_two1').disabled = true;
        console.log('male')
        return 'male'
    }
    else{
        gender2 = 'Woman';
        pronoun2 = 'She';
        document.getElementById('check_one1').disabled = true;
        document.getElementById('check_two1').disabled = true;
        
        console.log('female')
        return 'female'
        
    }
        
}



document.getElementById('button').addEventListener('click', function () {
    var fullname = document.getElementById('fullname').value.toUpperCase();
    var fullname1 = document.getElementById('fullname1').value.toUpperCase();
    var replacedFullname = '';
    var replacedFullname1 = '';

    var birth_date = document.getElementById('birth_date').value;
    birth_date = birth_date.replace(/-/g, ''); // Remove dashes from the date

    // Calculate the sum of the digits in the date
    var date_sum = 0;
    for (var j = 0; j < birth_date.length; j++) {
        date_sum += parseInt(birth_date[j]);
    }

    // Handle the case where the sum is greater than 9
    while (date_sum > 9) {
        var date_sum_str = date_sum.toString();
        date_sum = 0;
        for (var k = 0; k < date_sum_str.length; k++) {
            date_sum += parseInt(date_sum_str[k]);
        }
    }
    var replacedFullnameDigits = lettersTOALPHABET(fullname).split('').map(Number);
    var fullname_sum = replacedFullnameDigits.reduce(function (a, b) {
        return a + b ;
    }, 0);


var number = fullname_sum +date_sum;
var numberString = number.toString(); // Convert the number to a string
var digits = numberString.split('');  // Split the string into individual characters

var sum = 0;
for (var i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i]); // Convert each character to a number and add to the sum
}

var birth_date1 = document.getElementById('birth_date1').value;
    birth_date1 = birth_date1.replace(/-/g, ''); // Remove dashes from the date

    // Calculate the sum of the digits in the date
    var date_sum1 = 0;
    for (var j1 = 0; j1 < birth_date1.length; j1++) {
        date_sum1 += parseInt(birth_date1[j1]);
    }

    // Handle the case where the sum is greater than 9
    while (date_sum1 > 9) {
        var date_sum_str1 = date_sum1.toString();
        date_sum1 = 0;
        for (var k1 = 0; k1 < date_sum_str1.length; k1++) {
            date_sum1 += parseInt(date_sum_str1[k1]);
        }
    }
    var replacedFullnameDigits1 = lettersTOALPHABET(fullname1).split('').map(Number);
    var fullname_sum1 = replacedFullnameDigits1.reduce(function (a, b) {
        return a + b ;
    }, 0);



var number1 = fullname_sum1 +date_sum1;
var numberString1 = number1.toString(); // Convert the number to a string
var digits1 = numberString1.split('');  // Split the string into individual characters

var sum1 = 0;
for (var i = 0; i < digits1.length; i++) {
    sum1 += parseInt(digits1[i]); // Convert each character to a number and add to the sum
}

 // Output will be 6
// Output the results
var total2 = sum +sum1;    
console.log(total2);
console.log(isODD(sum), sum);
console.log(isODD(sum1), sum1);
var result3 = ''
if(isODD(total2) === 'An Even'){
    result3 = 'Good';
}
if(isODD(total2) === 'A Odd'){
    result3 = 'Bad';
}
document.getElementById('div').innerHTML = `The Chemistry Between You And Your Partner is ${isODD(total2)} , with you carrying ${isODD(sum)} Energy in the relationship while ${pronoun2} carrying ${isODD(sum1)}` +'<h3>The Result From Your Relatioship is </h3>' + `${result3}`;   
document.getElementById('div').style.fontSize = '20px'
document.getElementById('result').innerHTML = "The Chemistry Number Between You And Your Partner, It is " +isODD(total2) + '<a class="a" style = "margin-left:30px;"href="#div" id="a"> Click Here To Learn More About This</a>';
document.getElementById("a").addEventListener('click', function(){
    document.getElementById('div').style.visibility = 'visible'
    document.getElementById('result').style.visibility = 'hidden';

    })
});