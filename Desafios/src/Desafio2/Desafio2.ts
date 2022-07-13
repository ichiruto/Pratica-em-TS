enum Jobs {
    police,
    doctor,
    engineer,
    actress,
    actor,
    admnistrator
}

interface Ipeople {
    name:string,
    age:number,
    jobs: Jobs,
}

const Manuel: Ipeople = {
    name:"Manuel",
    age:75,
    jobs:Jobs.engineer
}