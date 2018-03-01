import {Deserializable} from "./deserializable";

export class Socio implements Deserializable<Socio> {
  id: number;
  first_name: string;
  last_name: string;
  age: number;

  deserialize(input: any): Socio {
    Object.assign(this, input);
    return this;
  }
}
