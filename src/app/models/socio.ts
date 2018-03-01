import {Deserializable} from "./deserializable";

export class Socio implements Deserializable<Socio> {
  id: number;
  first_name: string;
  last_name: string;
  number: number;
  address: string;
  phone: string;
  photoUrl: string;
  moto: string;
  age: number;

  deserialize(input: any): Socio {
    Object.assign(this, input);
    return this;
  }

  getFullname(): string {
    return this.first_name+' '+this.last_name;
  }
}
