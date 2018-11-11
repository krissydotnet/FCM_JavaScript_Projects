function rot13(str) { // LBH QVQ VG!
    // A - 65
    // Z - 90
    // a - 97
    // z - 122

    return str.split('').map(function (value) {
        let regEx = /\w/g;
        if (regEx.test(value)) {
            let shiftedValue = value.charCodeAt(0) - 13;

            if (shiftedValue < 65) {
                shiftedValue = 122 - (64 - shiftedValue);
                return (String.fromCharCode(shiftedValue).toUpperCase());
            }
            return String.fromCharCode(shiftedValue);
        } else {
            return value;
        }

    }).join('');
  }
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));
  console.log(rot13("SERR CVMMN!"));
  console.log(rot13("SERR YBIR?"));