const romanNumerals =
    [{ value: 1000, string: "M" },
    { value: 900, string: "CM" },
    { value: 500, string: "D" },
    { value: 400, string: "CD" },
    { value: 100, string: "C" },
    { value: 90, string: "XC" },
    { value: 50, string: "L" },
    { value: 40, string: "XL" },
    { value: 10, string: "X" },
    { value: 9, string: "IX" },
    { value: 5, string: "V" },
    { value: 4, string: "IV" },
    { value: 1, string: "I" }
    ];
    
function convertToRoman(num) {
    let remainder = num;
    let romanValue = '';

    for (let i = 0; i < romanNumerals.length; i++) {
        if (romanNumerals[i].value <= remainder) {
            while (romanNumerals[i].value <= remainder) {
                remainder = remainder - romanNumerals[i].value;
                romanValue += romanNumerals[i].string;
            }
        }
    }
    return romanValue;
}

convertToRoman(36);
