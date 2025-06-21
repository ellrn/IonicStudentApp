export class Reminders{
    constructor(
        public id: String,
        public title: String,
        public date:String
    ){}
}

export class Schedules{
    constructor(
        public id: String,
        public title: String,
        public date:String,
    ){}
}

export class Students{
    constructor(
        public id:String,
        public name:String,
        public grade:String
    ){}
}
