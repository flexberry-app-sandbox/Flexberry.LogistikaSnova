import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-logistika-snova-баржи-l');
  this.route('i-i-s-logistika-snova-баржи-e',
  { path: 'i-i-s-logistika-snova-баржи-e/:id' });
  this.route('i-i-s-logistika-snova-баржи-e.new',
  { path: 'i-i-s-logistika-snova-баржи-e/new' });
  this.route('i-i-s-logistika-snova-груз-l');
  this.route('i-i-s-logistika-snova-груз-e',
  { path: 'i-i-s-logistika-snova-груз-e/:id' });
  this.route('i-i-s-logistika-snova-груз-e.new',
  { path: 'i-i-s-logistika-snova-груз-e/new' });
  this.route('i-i-s-logistika-snova-докум-постав-l');
  this.route('i-i-s-logistika-snova-докум-постав-e',
  { path: 'i-i-s-logistika-snova-докум-постав-e/:id' });
  this.route('i-i-s-logistika-snova-докум-постав-e.new',
  { path: 'i-i-s-logistika-snova-докум-постав-e/new' });
  this.route('i-i-s-logistika-snova-докум-результ-п-l');
  this.route('i-i-s-logistika-snova-докум-результ-п-e',
  { path: 'i-i-s-logistika-snova-докум-результ-п-e/:id' });
  this.route('i-i-s-logistika-snova-докум-результ-п-e.new',
  { path: 'i-i-s-logistika-snova-докум-результ-п-e/new' });
  this.route('i-i-s-logistika-snova-загруз-контейн-l');
  this.route('i-i-s-logistika-snova-загруз-контейн-e',
  { path: 'i-i-s-logistika-snova-загруз-контейн-e/:id' });
  this.route('i-i-s-logistika-snova-загруз-контейн-e.new',
  { path: 'i-i-s-logistika-snova-загруз-контейн-e/new' });
  this.route('i-i-s-logistika-snova-загрузка-баржи-l');
  this.route('i-i-s-logistika-snova-загрузка-баржи-e',
  { path: 'i-i-s-logistika-snova-загрузка-баржи-e/:id' });
  this.route('i-i-s-logistika-snova-загрузка-баржи-e.new',
  { path: 'i-i-s-logistika-snova-загрузка-баржи-e/new' });
  this.route('i-i-s-logistika-snova-клиенты-l');
  this.route('i-i-s-logistika-snova-клиенты-e',
  { path: 'i-i-s-logistika-snova-клиенты-e/:id' });
  this.route('i-i-s-logistika-snova-клиенты-e.new',
  { path: 'i-i-s-logistika-snova-клиенты-e/new' });
  this.route('i-i-s-logistika-snova-контейнеры-l');
  this.route('i-i-s-logistika-snova-контейнеры-e',
  { path: 'i-i-s-logistika-snova-контейнеры-e/:id' });
  this.route('i-i-s-logistika-snova-контейнеры-e.new',
  { path: 'i-i-s-logistika-snova-контейнеры-e/new' });
  this.route('i-i-s-logistika-snova-организация-l');
  this.route('i-i-s-logistika-snova-организация-e',
  { path: 'i-i-s-logistika-snova-организация-e/:id' });
  this.route('i-i-s-logistika-snova-организация-e.new',
  { path: 'i-i-s-logistika-snova-организация-e/new' });
  this.route('i-i-s-logistika-snova-сотрудники-l');
  this.route('i-i-s-logistika-snova-сотрудники-e',
  { path: 'i-i-s-logistika-snova-сотрудники-e/:id' });
  this.route('i-i-s-logistika-snova-сотрудники-e.new',
  { path: 'i-i-s-logistika-snova-сотрудники-e/new' });
});

export default Router;
