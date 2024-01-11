//Calculate the sum of all resistors connected in series.
let circuito1 = [1.5,7,14]
let total = circuito1.reduce((a, b) => a + b, 0)
console.log(total);

//A number divided into halves
function divideNumberIntoHalves(number) {
    return [number / 2, number / 2];
  }
  

  //sociedad secreta
let miArray = ["Harry", "Ron", "Hermione", "LE SSERAFIM"];
miArray.sort(); //primero las ordeno alfabéticamente
let secretName = miArray.map(word => word.charAt(0)).join(""); //creo un nuevo array con las iniciales de cada palabra y las uno con join pero no coloco nada para que así se unan en una sola palabra.
console.log(secretName);


//Online Status
 const onlineStatus = ["OzoneMotion", "P33k4B00", "ElbaLazo99", "Terreneitor"]
 /*onlineStatus.pop()
nuevaFrase= onlineStatus.join(", ");
console.log(`${nuevaFrase} and ${onlineStatus.length-1} more online`)*/
console.log(`${onlineStatus[0]}, ${onlineStatus[1]} and ${onlineStatus.length-2} more online`)


//Array of Multiples
function multiplos(num, long) {
    let miArray=[];
    for (let i = 1; i <= long; i++) {
        res= num*i;
        
        miArray.push(res);
    }
    console.log(miArray)
}


//Positive dominance in Array
let posArray = [5, 6, 7, -2, -10]

function counter(Array){
    let contador=0
    posArray.forEach((element) => {
        if (element>0) {
            contador++;
        }   
    })
    let media = Array.length/2
    return contador>media;
};
let resultado = counter(posArray)
console.log(resultado)

//Antipodal Average
const miiArray = [1, 2, 3, 4, 5, 6, 7];
function antipodalAverage(array) {
    const halfLength =array.length / 2; //obtener la mitad
    if (halfLength%2!=0) {
        indexEliminacion=Math.floor(halfLength) //me redondeé hacia abajo el número en caso de ser fraccionario
        array.splice(indexEliminacion, 1) //me elimine el número de en medio
    }
    const firstHalf = array.slice(0, halfLength);
    const secondHalf = array.slice(halfLength);
    return console.log(`La primera mitad del array es: ${firstHalf}`), console.log(`La segunda mitad del array es: ${secondHalf}`);
}
let resArray = antipodalAverage(miiArray)
