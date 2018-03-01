import {Socio} from "./models/socio";

export const SOCIOS: Socio[] = [
  new Socio().deserialize({ id: 1, number: 1, first_name: 'Ricardo', last_name: 'Romaní', address: 'Curruncho da pepa, Nº11, 19234, Arretiguru (Bilbao)', phone: '636111222', moto: 'Honda CBR 600 F', photoUrl: '', age: 33}),
  new Socio().deserialize({ id: 2, number: 2, first_name: 'Alberto', last_name: 'Canosa', address: 'Curruncho da pepa, Nº11, 19234, Arretiguru (Bilbao)', phone: '636111222', moto: 'Honda CBR 600 F', photoUrl: null, age: 33}),
  new Socio().deserialize({ id: 3, number: 3, first_name: 'Lucía', last_name: 'Romero', address: 'Curruncho da pepa, Nº11, 19234, Arretiguru (Bilbao)', phone: '636111222', moto: 'Honda CBR 600 F', age: 33}),
  new Socio().deserialize({ id: 4, number: 4, first_name: 'Benedicto', last_name: 'Gomez', address: 'Curruncho da pepa, Nº11, 19234, Arretiguru (Bilbao)', phone: '636111222', moto: 'Honda CBR 600 F', photoUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', age: 33}),
  new Socio().deserialize({ id: 5, number: 5, first_name: 'Filomeno', last_name: 'Aster', address: 'Curruncho da pepa, Nº11, 19234, Arretiguru (Bilbao)', phone: '636111222', moto: 'Honda CBR 600 F', photoUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', age: 33}),
  new Socio().deserialize({ id: 6, number: 6, first_name: 'Andres', last_name: 'Racuta', address: 'Curruncho da pepa, Nº11, 19234, Arretiguru (Bilbao)', phone: '636111222', moto: 'Honda CBR 600 F', photoUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', age: 33}),
  new Socio().deserialize({ id: 7, number: 7, first_name: 'Nuria', last_name: 'Remedy', address: 'Curruncho da pepa, Nº11, 19234, Arretiguru (Bilbao)', phone: '636111222', moto: 'Honda CBR 600 F', photoUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg', age: 33}),
];
