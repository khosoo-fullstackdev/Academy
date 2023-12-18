let sentence= `As he crossed toward the pharmacy at the corner he involuntarily turned his head because of a 
    burst of light that had ricocheted from his temple, and saw, with that quick smile with which we greet a rainbow or a rose, 
    a blindingly white parallelogram of sky being unloaded from the van—a dresser with mirrors across which, as across a cinema screen, 
    passed a flawlessly clear reflection of boughs sliding and swaying not arboreally, but with a human vacillation, produced by the nature 
    of those who were carrying this sky, these boughs, this gliding façade.`
let count = 0
let alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPPQRSTUVWXYZ'
let words = 0;
let letters = 0;
let array = []
for (let i=0; i<sentence.length; i++){
    for ( let j= 0; j<alphabets.length; j++){
        if (sentence.charAt(i)==` `|| sentence.charAt(i)==`.` || sentence.charAt(i)==`,`){
            words++
            array[count]= [words]+[letters]
        }
        if (sentence.charAt(i)== alphabets.charAt(j)){
            letters++
        }
    }
}
console.log(array)