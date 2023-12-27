import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.caption'),
          title: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.title'),
          children: [{
            link: 'i-i-s-logistika-snova-баржи-l',
            caption: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-баржи-l.title'),
            icon: 'list',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-сотрудники-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-организация-l',
            caption: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-организация-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-контейнеры-l',
            caption: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-контейнеры-l.caption'),
            title: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-контейнеры-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-клиенты-l',
            caption: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.данные-об-организации-и-ее-компонентах.i-i-s-logistika-snova-клиенты-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.документация.caption'),
          title: i18n.t('forms.application.sitemap.документация.title'),
          children: [{
            link: 'i-i-s-logistika-snova-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-докум-постав-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-загруз-контейн-l',
            caption: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-загруз-контейн-l.caption'),
            title: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-загруз-контейн-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-загрузка-баржи-l',
            caption: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-загрузка-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-загрузка-баржи-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-докум-результ-п-l',
            caption: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-докум-результ-п-l.caption'),
            title: i18n.t('forms.application.sitemap.документация.i-i-s-logistika-snova-докум-результ-п-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.номенклатура.caption'),
          title: i18n.t('forms.application.sitemap.номенклатура.title'),
          children: [{
            link: 'i-i-s-logistika-snova-груз-l',
            caption: i18n.t('forms.application.sitemap.номенклатура.i-i-s-logistika-snova-груз-l.caption'),
            title: i18n.t('forms.application.sitemap.номенклатура.i-i-s-logistika-snova-груз-l.title'),
            icon: 'address card',
            children: null
          }]
        }
      ]
    };
  }),
})