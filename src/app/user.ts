import { Status } from "./status";

export class User {
    constructor(
        public name: string,
        //public email: string,
        public status: Status,
        public gender: string,
        //public password: string,
        public promotions: boolean
    ) { }
}
