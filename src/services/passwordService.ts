export default function generationPass(size: number) {
  let password: string = "";

  let characters: string = "Aa@#%*123456789!$bcdefBCDEFjtrJTR";
  let passwordLength = size;

  for (let index = 0; index < passwordLength; index++) {
    password+= characters.charAt(Math.floor( Math.random() * characters.length));
  }

  return password;
}
