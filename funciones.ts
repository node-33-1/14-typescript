const getRandomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
}

const result: number = getRandomNumber(15);


const saludar = (): void => {
    console.log("Hola");
}




const isEven = (n: number): 'PAR' | 'IMPAR' => {
    if (n % 2 === 0) return 'PAR';
    else return 'IMPAR';
}

const result1: string = isEven(4);
