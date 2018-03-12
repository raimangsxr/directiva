import {Deserializable} from './deserializable';

export class Fee implements Deserializable<Fee> {
  id: number;
  name: string;
  value: number;
  paid: boolean;
  member_id: number;
  created: Date;
  updated: Date;
  updated_by: string;

  deserialize(input: any): Fee {
    Object.assign(this, input);
    return this;
  }

}
