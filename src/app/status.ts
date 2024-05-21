export class Status {
    constructor(
        public id: number,
        public name: string
    ) { }
}

export const statuses: Status[] = [
    new Status(1, "Student"),
    new Status(2, "Employed"),
    new Status(3, "Entrepreneur")
];

let status1 : Status = new Status(2, 'Employed');
let status2 : Status = new Status(2, 'Employed');
console.log(status1 == status2);
let status3: Status = status2;
console.log(status2 == status3);