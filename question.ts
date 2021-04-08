export const yourParagraph = "He is a good boy! He is naughty sometimes.";
const sentenceArray = yourParagraph.split(/[\\.!?]/);
function splitFunction(para: string): string[] {
  const seperators = [".", "!", "?", ","];
  const array: string[] = [];
  let i: number = 0;
  para.split("").forEach((letter) => {
    seperators.forEach((w) => {
      array[i] += letter;
      if (letter === w) {
        i += 1;
      }
    });
  });
  return array;
}

const map = {};

function countOccurences(str: string, word: string) {
  return str.split(word).length - 1;
}
sentenceArray.forEach((sentence:string) => {
  sentence.split(" ").forEach((word:string) => {
      if ( word in map){
          map[word]= {"frequency": map[word]["frequency"]+1}
      }
      else {
          map[word]= {"frequency":1}
      }
  });
});
