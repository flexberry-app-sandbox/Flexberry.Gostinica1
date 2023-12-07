import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISGostinica1РодительLForm from './forms/i-i-s-gostinica1-родитель-l';
import IISGostinica1УченикLForm from './forms/i-i-s-gostinica1-ученик-l';
import IISGostinica1РодительEForm from './forms/i-i-s-gostinica1-родитель-e';
import IISGostinica1УченикEForm from './forms/i-i-s-gostinica1-ученик-e';
import IISGostinica1РодительModel from './models/i-i-s-gostinica1-родитель';
import IISGostinica1УченикModel from './models/i-i-s-gostinica1-ученик';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gostinica1-родитель': IISGostinica1РодительModel,
    'i-i-s-gostinica1-ученик': IISGostinica1УченикModel
  },

  'application-name': 'Gostinica1',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gostinica1',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gostinica1',
          title: 'Gostinica1'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        gostinica1: {
          caption: 'Gostinica1',
          title: 'Gostinica1',
          'i-i-s-gostinica1-родитель-l': {
            caption: 'Родитель',
            title: ''
          },
          'i-i-s-gostinica1-ученик-l': {
            caption: 'Ученик',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-gostinica1-родитель-l': IISGostinica1РодительLForm,
    'i-i-s-gostinica1-ученик-l': IISGostinica1УченикLForm,
    'i-i-s-gostinica1-родитель-e': IISGostinica1РодительEForm,
    'i-i-s-gostinica1-ученик-e': IISGostinica1УченикEForm
  },

});

export default translations;
