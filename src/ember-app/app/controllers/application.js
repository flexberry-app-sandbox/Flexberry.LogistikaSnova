import Controller from '@ember/controller';
import $ from 'jquery';
import { computed, observer } from '@ember/object';
import { isNone } from '@ember/utils';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';



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

  /**
    Locales supported by application.

    @property locales
    @type String[]
    @default ['ru', 'en']
  */
  locales: undefined,

  /**
    Handles changes in userSettingsService.isUserSettingsServiceEnabled.

    @method _userSettingsServiceChanged
    @private
  */
  _userSettingsServiceChanged: observer('userSettingsService.isUserSettingsServiceEnabled', function() {
    this.get('target.router').refresh();
  }),

  /**
    Initializes controller.
  */
  init() {
    this._super(...arguments);

    let i18n = this.get('i18n');
    if (isNone(i18n)) {
      return;
    }

    this.set('locales', ['ru', 'en']);

    // If i18n.locale is long value like 'ru-RU', 'en-GB', ... this code will return short variant 'ru', 'en', etc.
    let shortCurrentLocale = this.get('i18n.locale').split('-')[0];
    let availableLocales = A(this.get('locales'));

    // Force current locale to be one of available,
    // if browser's current language is not supported by dummy application,
    // or if browser's current locale is long value like 'ru-RU', 'en-GB', etc.
    if (!availableLocales.includes(shortCurrentLocale)) {
      i18n.set('locale', 'en');
    } else {
      i18n.set('locale', shortCurrentLocale);
    }
  },

  /**
    Service that triggers objectlistview events.

    @property objectlistviewEventsService
    @type Service
  */
  objectlistviewEventsService: service('objectlistview-events'),

  /**
    Service for managing the state of the application.

    @property appState
    @type AppStateService
  */
  appState: service(),

  actions: {
    /**
      Call `updateWidthTrigger` for `objectlistviewEventsService`.

      @method actions.updateWidth
    */
    updateWidth() {
      this.get('objectlistviewEventsService').updateWidthTrigger();
    },

    /**
      Toggles application sitemap's side bar.

      @method actions.toggleSidebar
    */
    toggleSidebar() {
      let sidebar = $('.ui.sidebar.main.menu');
      sidebar.sidebar('toggle');
      sidebar.toggleClass('sidebar-mini');

      $('.full.height').toggleClass('content-opened');

      $('.sidebar.icon .text_menu').toggleClass('hidden');
      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.bgw-opacity').toggleClass('hidden');

      // For reinit overflowed tabs.
      $(window).trigger('resize');
    },

    /**
      Toggles application sitemap's side bar in mobile view.

      @method actions.toggleSidebarMobile
    */
    toggleSidebarMobile() {
      $('.ui.sidebar.main.menu').sidebar('toggle');

      $('.sidebar.icon').toggleClass('text-menu-show');
      $('.sidebar.icon').toggleClass('text-menu-hide');
      $('.sidebar.icon').toggleClass('hidden-text');
      $('.bgw-opacity').toggleClass('hidden');

      if (!this.get('_hideEventIsAttached')) {
        $('.ui.sidebar.main.menu').sidebar('attach events', '.ui.sidebar.main.menu .item a', 'hide');
        this.set('_hideEventIsAttached', true);
      }
    }
  }
});
