import {Deserializable} from './deserializable';

export class Socio implements Deserializable<Socio> {
  id: number;
  first_name: string;
  last_name: string;
  alias: string;
  number: number;
  nif: string;
  sex: string;
  birth: Date;
  email: string;
  street: string;
  city: string;
  postal_code: string;
  province: string;
  primary_phone: string;
  secondary_phone: string;
  moto1: string;
  moto2: string;
  moto3: string;
  photo_person: string;
  photo_moto: string;
  avatar: string;
  created: Date;
  updated: Date;
  updated_by: string;

  deserialize(input: any): Socio {
    Object.assign(this, input);
    return this;
  }

  getFullname(): string {
    return (this.alias) ?
      this.first_name + ' ' + this.last_name + ' (' + this.alias + ')' :
      this.first_name + ' ' + this.last_name;
  }

  getFullAddress(): string {
    return this.street + ', ' + this.postal_code + ' ' + this.city + ' (' + this.province + ')';
  }

  getAge(): number {
    return new Date().getFullYear() - this.birth.getFullYear();
  }
}
