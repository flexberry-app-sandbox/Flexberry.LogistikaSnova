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
          caption: i18n.t('forms.application.sitemap.logistika.caption'),
          title: i18n.t('forms.application.sitemap.logistika.title'),
          children: [{
            link: 'i-i-s-logistika-snova-загруз-контейн-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-загруз-контейн-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-загруз-контейн-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-докум-постав-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-докум-постав-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-докум-постав-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-докум-результ-п-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-докум-результ-п-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-докум-результ-п-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-организация-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-организация-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-организация-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-клиенты-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-клиенты-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-сотрудники-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-баржи-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-баржи-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-загрузка-баржи-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-загрузка-баржи-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-загрузка-баржи-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-контейнеры-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-контейнеры-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-контейнеры-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-logistika-snova-груз-l',
            caption: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-груз-l.caption'),
            title: i18n.t('forms.application.sitemap.logistika.i-i-s-logistika-snova-груз-l.title'),
            icon: 'chart line',
            children: null
          }]
        }
      ]
    };
  }),
})