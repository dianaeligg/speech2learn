const letters = "abcdefghijklmnopqrstuvwxyz";

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const shuffleString = (text: string) => {
  let array = text.split("");
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array.join("");
};

export const addLettersAndShuffle = (text: string, length: number = 12) => {
  while (text.length < length) {
    text += letters[Math.floor(Math.random() * letters.length)];
  }
  return shuffleString(text);
};
