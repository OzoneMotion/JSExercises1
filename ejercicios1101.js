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


//oline status
//Display online status for a list of users.
 const onlineStatus = ["OzoneMotion", "P33k4B00", "ElbaLazo99"]
nuevaFrase= onlineStatus.join(", ");
console.log(`${nuevaFrase} are online`)
// should return `'mockIng99, J0eyPunch and 1 more online'`.

//Array of Multiples
function multiplos(num, long) {
    let miArray=[];
    for (let i = 1; i <= long; i++) {
        res= num*i;
        
        miArray.push(res);
    }
    console.log(miArray)
    
}

