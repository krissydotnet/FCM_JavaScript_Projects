function telephoneCheck(str) {
    let passed = true;
        let regEx = /^[1\s\(]{0,3}\d{3}[\s\)-]*\d{3}[\s-]?\d{4}$/g;
    // Good luck!
    passed = regEx.test(str);
    if (passed && str.includes('(') ) {
      if (!str.includes(')')) {
        passed = false;
      }
    } else if (passed && str.includes(')')) {
      if (!str.includes('(')) {
        passed = false;
      }
    }
    return passed;
  }
  
  console.log(telephoneCheck("2 (757) 622-7382"));