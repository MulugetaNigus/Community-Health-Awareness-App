<!-- here is typescript exercise -->
<!-- mvp = minimum viable product -->

<!-- type annotations -->
const counter: number = 10;

<!-- type inference -->
const counter = 10  // by default typescript give the type = number

<!-- null and undefined represent the absense of value -->
<!-- null represent any object nullness -->
<!-- undefined represent absence of value assinations -->

<!-- complex datatype like array, object, function -->

<!-- same array values -->
const sameArray: number[] = [1,2,3,4,5];

<!-- mixed aeay values -->
const mixedArray: (number, sting, boolean)[] = [1, 2 ,"a", "b", true, false]

<!-- objects -->
const me : {
    name: string,
    age: number,
    getName(): {
        return "name: " , this.name;
    }
} = {
    name: "mullerking",
    age: 24
}

<!-- functions -->
const add = (a: number, b:number): number => {
    return a + b;
}

<!-- function parameters allow optional parametres-->
const greeting = (name: string, localtion?: string) => {
    if(location) {
        console.log(`Hello ${name}, you're from ${location} right ?`)
    }
    return console.log(`Hello ${name}, unknown location detected !`)
}

<!-- Union type hepls us to define a multiple type-->
let multiVal = number | string | boolean = "hello" or 34 or true

<!-- type datatype -->
type theme = "dark" | "light";
type status = "active" | "inactive";

let Theme: theme = "dark" or "light";
let Log: status = "active" or "inactive";

<!-- type interface -->
interface Mine {
    readonly des: "this is not overidable"
    name: string,
    age: number,
    address?: {
        street: string,
        code: number
    }
}

const Person: Mine = {
    name: "king",
    age: 23,
    <!-- you may or may not pass the address section here -->
    address: {
        street: "code12",
        code: 12
    }
}

<!-- interface with generics -->
interface Dynamic<T> {
    name: string,
    age: number,
    salary: T
}
const Info: Dynamic<(number | string)> = {
    name: "muller",
    age: 23,
    salary: "45000"
    OR
    salary: 45000
}

<!-- we can not assign the same name for both type, i think we can do this in interface -->
type color: string = "green" | "blue" | "red";

<!-- type assertion, type const, type alieses -->
let myvarible: string = "100"
let convar: number = (var as number) * 5;
console.log(convar)

let varContainer = [1,2,3] as const;
const person = {
    name: string,
    age: number,
    location: string
} as const;

- run time = after successfully compile still the program in run time state
- complile time = still its under the process of the program compilation phase

type gender = string | char
const user1: gender = "male"
const user2: gender = 'm'

type roomName = string;
type roomID = number;
type joinRoom = roomName & roomID

const userRoom: joinRoom = {
    roomName: "Developers"
    roomID: 123
}

type NumberInWord = "one" | "two" | "three";
type NumberInNumber = 1 | 2 | 3;
type DisplayNum: Dispaly<NumberInWord, NumberInNumber>;

<!-- generics in function -->
const Dispaly<T> = (parameters: T): T => {
    return parameters;
}

const Invok1 = Dispaly<string>("this is generics examples");
const Invok2 = Dispaly<number>(42);

<!-- generics in funtion -->
interface ISecure<T, U> {
    password: string,
    length: number,
}

<!-- acccessing the generics -->
const user1: ISecure<string, number> = {
    password: "123",
    length: password.length
}

<!-- array oprations -->
<!-- 1, push() = which is adding values to the array last index -->
<!-- 2, pop() = which is removing values to the array last index -->
<!-- 3, shift() = which is removing values to the array first index -->
<!-- 1, unshift = which is adding values to the array first index -->