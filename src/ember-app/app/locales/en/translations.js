import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISLogistika_snovaБаржиLForm from './forms/i-i-s-logistika-snova-баржи-l';
import IISLogistika_snovaГрузLForm from './forms/i-i-s-logistika-snova-груз-l';
import IISLogistika_snovaДокумПоставLForm from './forms/i-i-s-logistika-snova-докум-постав-l';
import IISLogistika_snovaДокумРезультПLForm from './forms/i-i-s-logistika-snova-докум-результ-п-l';
import IISLogistika_snovaЗагрузКонтейнLForm from './forms/i-i-s-logistika-snova-загруз-контейн-l';
import IISLogistika_snovaЗагрузкаБаржиLForm from './forms/i-i-s-logistika-snova-загрузка-баржи-l';
import IISLogistika_snovaКлиентыLForm from './forms/i-i-s-logistika-snova-клиенты-l';
import IISLogistika_snovaКонтейнерыLForm from './forms/i-i-s-logistika-snova-контейнеры-l';
import IISLogistika_snovaОрганизацияLForm from './forms/i-i-s-logistika-snova-организация-l';
import IISLogistika_snovaСотрудникиLForm from './forms/i-i-s-logistika-snova-сотрудники-l';
import IISLogistika_snovaБаржиEForm from './forms/i-i-s-logistika-snova-баржи-e';
import IISLogistika_snovaГрузEForm from './forms/i-i-s-logistika-snova-груз-e';
import IISLogistika_snovaДокумПоставEForm from './forms/i-i-s-logistika-snova-докум-постав-e';
import IISLogistika_snovaДокумРезультПEForm from './forms/i-i-s-logistika-snova-докум-результ-п-e';
import IISLogistika_snovaЗагрузКонтейнEForm from './forms/i-i-s-logistika-snova-загруз-контейн-e';
import IISLogistika_snovaЗагрузкаБаржиEForm from './forms/i-i-s-logistika-snova-загрузка-баржи-e';
import IISLogistika_snovaКлиентыEForm from './forms/i-i-s-logistika-snova-клиенты-e';
import IISLogistika_snovaКонтейнерыEForm from './forms/i-i-s-logistika-snova-контейнеры-e';
import IISLogistika_snovaОрганизацияEForm from './forms/i-i-s-logistika-snova-организация-e';
import IISLogistika_snovaСотрудникиEForm from './forms/i-i-s-logistika-snova-сотрудники-e';
import IISLogistika_snovaБаржиModel from './models/i-i-s-logistika-snova-баржи';
import IISLogistika_snovaГрузModel from './models/i-i-s-logistika-snova-груз';
import IISLogistika_snovaДокумПоставModel from './models/i-i-s-logistika-snova-докум-постав';
import IISLogistika_snovaДокумРезультПModel from './models/i-i-s-logistika-snova-докум-результ-п';
import IISLogistika_snovaЗагрузКонтейнModel from './models/i-i-s-logistika-snova-загруз-контейн';
import IISLogistika_snovaЗагрузкаБаржиModel from './models/i-i-s-logistika-snova-загрузка-баржи';
import IISLogistika_snovaКлиентыModel from './models/i-i-s-logistika-snova-клиенты';
import IISLogistika_snovaКонтейнерыModel from './models/i-i-s-logistika-snova-контейнеры';
import IISLogistika_snovaОрганизацияModel from './models/i-i-s-logistika-snova-организация';
import IISLogistika_snovaСотрудникиModel from './models/i-i-s-logistika-snova-сотрудники';
import IISLogistika_snovaТЧДостКонModel from './models/i-i-s-logistika-snova-т-ч-дост-кон';
import IISLogistika_snovaТЧИнфОГрузеModel from './models/i-i-s-logistika-snova-т-ч-инф-о-грузе';
import IISLogistika_snovaТЧИнфОЗакModel from './models/i-i-s-logistika-snova-т-ч-инф-о-зак';
import IISLogistika_snovaТЧИнфОКонтModel from './models/i-i-s-logistika-snova-т-ч-инф-о-конт';
import IISLogistika_snovaТЧРасписаниеModel from './models/i-i-s-logistika-snova-т-ч-расписание';
import IISLogistika_snovaТЧСвобМестModel from './models/i-i-s-logistika-snova-т-ч-своб-мест';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-logistika-snova-баржи': IISLogistika_snovaБаржиModel,
    'i-i-s-logistika-snova-груз': IISLogistika_snovaГрузModel,
    'i-i-s-logistika-snova-докум-постав': IISLogistika_snovaДокумПоставModel,
    'i-i-s-logistika-snova-докум-результ-п': IISLogistika_snovaДокумРезультПModel,
    'i-i-s-logistika-snova-загруз-контейн': IISLogistika_snovaЗагрузКонтейнModel,
    'i-i-s-logistika-snova-загрузка-баржи': IISLogistika_snovaЗагрузкаБаржиModel,
    'i-i-s-logistika-snova-клиенты': IISLogistika_snovaКлиентыModel,
    'i-i-s-logistika-snova-контейнеры': IISLogistika_snovaКонтейнерыModel,
    'i-i-s-logistika-snova-организация': IISLogistika_snovaОрганизацияModel,
    'i-i-s-logistika-snova-сотрудники': IISLogistika_snovaСотрудникиModel,
    'i-i-s-logistika-snova-т-ч-дост-кон': IISLogistika_snovaТЧДостКонModel,
    'i-i-s-logistika-snova-т-ч-инф-о-грузе': IISLogistika_snovaТЧИнфОГрузеModel,
    'i-i-s-logistika-snova-т-ч-инф-о-зак': IISLogistika_snovaТЧИнфОЗакModel,
    'i-i-s-logistika-snova-т-ч-инф-о-конт': IISLogistika_snovaТЧИнфОКонтModel,
    'i-i-s-logistika-snova-т-ч-расписание': IISLogistika_snovaТЧРасписаниеModel,
    'i-i-s-logistika-snova-т-ч-своб-мест': IISLogistika_snovaТЧСвобМестModel
  },

  'application-name': 'Логистика',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Логистика',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Логистика',
          title: 'Логистика'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'данные-об-организации-и-ее-компонентах': {
          caption: 'Данные об организации и ее компонентах',
          title: 'Данные об организации и ее компонентах',
          'i-i-s-logistika-snova-баржи-l': {
            caption: 'Баржи',
            title: 'Баржи'
          },
          'i-i-s-logistika-snova-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          },
          'i-i-s-logistika-snova-организация-l': {
            caption: 'Организация',
            title: 'Организация'
          },
          'i-i-s-logistika-snova-контейнеры-l': {
            caption: 'Контейнеры',
            title: 'Контейнеры'
          },
          'i-i-s-logistika-snova-клиенты-l': {
            caption: 'Клиенты',
            title: 'Клиенты'
          }
        },
        документация: {
          caption: 'Документация',
          title: 'Документация',
          'i-i-s-logistika-snova-докум-постав-l': {
            caption: 'Документ поставки',
            title: 'Документ поставки'
          },
          'i-i-s-logistika-snova-загруз-контейн-l': {
            caption: 'Загрузка контейнера',
            title: 'Загрузка контейнера'
          },
          'i-i-s-logistika-snova-загрузка-баржи-l': {
            caption: 'Загрузка баржи',
            title: 'Загрузка баржи'
          },
          'i-i-s-logistika-snova-докум-результ-п-l': {
            caption: 'Документ результатов поставки',
            title: 'Документ результатов поставки'
          }
        },
        номенклатура: {
          caption: 'Номенклатура',
          title: 'Номенклатура',
          'i-i-s-logistika-snova-груз-l': {
            caption: 'Груз',
            title: 'Груз'
          }
        },
        logistika: {
          caption: 'Logistika',
          title: 'Logistika',
          'i-i-s-logistika-snova-загруз-контейн-l': {
            caption: 'Загруз контейн',
            title: ''
          },
          'i-i-s-logistika-snova-докум-постав-l': {
            caption: 'Докум постав',
            title: ''
          },
          'i-i-s-logistika-snova-докум-результ-п-l': {
            caption: 'Докум результ П',
            title: ''
          },
          'i-i-s-logistika-snova-организация-l': {
            caption: 'Организация',
            title: ''
          },
          'i-i-s-logistika-snova-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'i-i-s-logistika-snova-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-logistika-snova-баржи-l': {
            caption: 'Баржи',
            title: ''
          },
          'i-i-s-logistika-snova-загрузка-баржи-l': {
            caption: 'Загрузка баржи',
            title: ''
          },
          'i-i-s-logistika-snova-контейнеры-l': {
            caption: 'Контейнеры',
            title: ''
          },
          'i-i-s-logistika-snova-груз-l': {
            caption: 'Груз',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-logistika-snova-баржи-l': IISLogistika_snovaБаржиLForm,
    'i-i-s-logistika-snova-груз-l': IISLogistika_snovaГрузLForm,
    'i-i-s-logistika-snova-докум-постав-l': IISLogistika_snovaДокумПоставLForm,
    'i-i-s-logistika-snova-докум-результ-п-l': IISLogistika_snovaДокумРезультПLForm,
    'i-i-s-logistika-snova-загруз-контейн-l': IISLogistika_snovaЗагрузКонтейнLForm,
    'i-i-s-logistika-snova-загрузка-баржи-l': IISLogistika_snovaЗагрузкаБаржиLForm,
    'i-i-s-logistika-snova-клиенты-l': IISLogistika_snovaКлиентыLForm,
    'i-i-s-logistika-snova-контейнеры-l': IISLogistika_snovaКонтейнерыLForm,
    'i-i-s-logistika-snova-организация-l': IISLogistika_snovaОрганизацияLForm,
    'i-i-s-logistika-snova-сотрудники-l': IISLogistika_snovaСотрудникиLForm,
    'i-i-s-logistika-snova-баржи-e': IISLogistika_snovaБаржиEForm,
    'i-i-s-logistika-snova-груз-e': IISLogistika_snovaГрузEForm,
    'i-i-s-logistika-snova-докум-постав-e': IISLogistika_snovaДокумПоставEForm,
    'i-i-s-logistika-snova-докум-результ-п-e': IISLogistika_snovaДокумРезультПEForm,
    'i-i-s-logistika-snova-загруз-контейн-e': IISLogistika_snovaЗагрузКонтейнEForm,
    'i-i-s-logistika-snova-загрузка-баржи-e': IISLogistika_snovaЗагрузкаБаржиEForm,
    'i-i-s-logistika-snova-клиенты-e': IISLogistika_snovaКлиентыEForm,
    'i-i-s-logistika-snova-контейнеры-e': IISLogistika_snovaКонтейнерыEForm,
    'i-i-s-logistika-snova-организация-e': IISLogistika_snovaОрганизацияEForm,
    'i-i-s-logistika-snova-сотрудники-e': IISLogistika_snovaСотрудникиEForm
  },

});

export default translations;
