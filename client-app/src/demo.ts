interface Duck {
  name: string;
  numlegs: number;
  makeSound: (sound: string) => void;
}

const duck1: Duck = {
  name: "Alex",
  numlegs: 2,
  makeSound: (sound: string) => console.log(sound),
};

const duck2: Duck = {
  name: "John",
  numlegs: 2,
  makeSound: (sound: string) => console.log(sound),
};

duck1.makeSound("hello");

export const ducks = [duck1, duck2];
