import {Fee} from "./models/fee";

export const FEES: Fee[] = [
  new Fee().deserialize({
    id: 1,
    name: 'Camiseta 2016',
    value: '10',
    paid: false,
    member_id: 2,
    created: new Date(),
    updated: new Date(),
    updated_by: 'rromani',
  }),
  new Fee().deserialize({
    id: 2,
    name: 'Camiseta 2017',
    value: '10',
    paid: true,
    member_id: 2,
    created: new Date(),
    updated: new Date(),
    updated_by: 'rromani',
  }),
  new Fee().deserialize({
    id: 3,
    name: 'Cena navidad',
    value: '15',
    paid: false,
    member_id: 2,
    created: new Date(),
    updated: new Date(),
    updated_by: 'rromani',
  }),
];
