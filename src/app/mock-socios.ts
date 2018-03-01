import {Socio} from "./models/socio";

export const SOCIOS: Socio[] = [
  new Socio().deserialize({ id: 1, first_name: 'Ricardo', last_name: 'Romaní', age: 33}),
  new Socio().deserialize({ id: 2, first_name: 'Ricardo2', last_name: 'Romaní', age: 33}),
  new Socio().deserialize({ id: 3, first_name: 'Ricardo3', last_name: 'Romaní', age: 33}),
  new Socio().deserialize({ id: 4, first_name: 'Ricardo4', last_name: 'Romaní', age: 33}),
];
