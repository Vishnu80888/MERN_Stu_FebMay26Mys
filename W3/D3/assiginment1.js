function tagPassword(password) {
  
  if (typeof password !== 'string') {
    return "INVALID";
  }

  const len = password.length;

  
  if (len < 8) {
    return "WEAK";
  }

  
  let hasLetters = false;
  let hasNumbers = false;

  for (let i = 0; i < len; i++) {
    const char = password[i];

    if (char >= '0' && char <= '9') {
      hasNumbers = true;
    }
    else if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
      hasLetters = true;
    }
    if (hasLetters && hasNumbers) break;
  }
  if (len >= 12 && hasLetters && hasNumbers) {
    return "STRONG";
  } 
  
  if (len >= 8 && hasLetters && hasNumbers) {
    return "MEDIUM";
  }
  return "WEAK";
}
console.log(tagPassword("Vishnu@081234567890"));