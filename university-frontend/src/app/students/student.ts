export class Student {
  constructor(
    public _id: string = '',
    public gender: string = '',
    public name: Name = new Name(),
    public location: Location = new Location(),
    public email: string = '',
    public login: Login = new Login(),
    public dob: Dob = new Dob(),
    public registered: Registered = new Registered(),
    public phone: string = '',
    public cell: string = '',
    public id: Id = new Id(),
    public picture: Picture = new Picture(),
    public nat: string = ''
  ) { }
}

export class Name {
  constructor(
    public title: string = '',
    public first: string = '',
    public last: string = ''
  ) { }
}

export class Street {
  constructor(
    public number: number = 0,
    public name: string = ''
  ) { }
}

export class Coordinates {
  constructor(
    public latitude: string = '',
    public longitude: string = ''
  ) { }
}

export class Timezone {
  constructor(
    public offset: string = '',
    public description: string = ''
  ) { }
}

export class Location {
  constructor(
    public street: Street = new Street(),
    public city: string = '',
    public state: string = '',
    public country: string = '',
    public postcode: number = 0,
    public coordinates: Coordinates = new Coordinates(),
    public timezone: Timezone = new Timezone()
  ) { }
}

export class Login {
  constructor(
    public uuid: string = '',
    public username: string = '',
    public password: string = '',
    public salt: string = '',
    public md5: string = '',
    public sha1: string = '',
    public sha256: string = ''
  ) { }
}

export class Dob {
  constructor(
    public date: string = '',
    public age: number = 0
  ) { }
}

export class Registered {
  constructor(
    public date: string = '',
    public age: number = 0
  ) { }
}

export class Id {
  constructor(
    public name: string = '',
    public value: string = ''
  ) { }
}

export class Picture {
  constructor(
    public large: string = '',
    public medium: string = '',
    public thumbnail: string = ''
  ) { }
}


