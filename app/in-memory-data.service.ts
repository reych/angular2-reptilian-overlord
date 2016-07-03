export class InMemoryDataService {
  createDb() {
    let characters = [
        {
             name: "Meister Cobra",
             description: "He is the best at his job, but what he doesn't save, he eats",
             age: 15,
             occupation: "Surgeon",
             affiliation: -1,
             id: 1
         },
         {
             name: "Weird Gecko",
             description: "Licks his eyes before doing his work",
             age: 2,
             occupation: "Custodian",
             affiliation: 1,
             id: 2
         },
         {
             name: "Drago the Skink",
             description: "Will drive you anywhere for a reasonable price",
             age: 3,
             occupation: "Taxi Driver",
             affiliation: 0,
             id: 3
         },
         {
             name: "Happy Crocodile",
             description: "In his free time, he likes to arrange the lilypads in his pond in artistically offensive ways",
             age: 3,
             occupation: "Fiction Writer",
             affiliation: -1,
             id: 4
         }
    ];
    return {characters};
  }
}
