import React from "react";
import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let pringName: (name: string) => never;

let personName: unknown;

name = "joey";

// type Person = {
//   name: string;
//   age?: number;
// };'

type X = {
  a: string;
  b: number;
};

interface Person extends X {
  name: string;
  age?: number;
}

interface Guy extends Person {
  profession: string;
}

type Y = X & {
  c: string;
  d: number;
};

// let person: Person = {
//   name: "joey",
// };

// let lotsOfPeople: Person[];

function App() {
  return <div className="App">Hello </div>;
}

export default App;
