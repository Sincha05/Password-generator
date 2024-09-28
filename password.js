document.getElementById('generate').addEventListener('click', function() {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSpecial = document.getElementById('special').checked;

  const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
  
  let characterPool = '';
  if (includeUppercase) characterPool += uppercaseLetters;
  if (includeLowercase) characterPool += lowercaseLetters;
  if (includeNumbers) characterPool += numbers;
  if (includeSpecial) characterPool += specialCharacters;

  if (characterPool.length === 0) {
      alert('Please select at least one character type.');
      return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      password += characterPool[randomIndex];
  }

  document.getElementById('password').value = password;
});
