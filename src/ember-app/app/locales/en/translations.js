import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
        'application-name': 'Gostinica1',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gostinica1',
          title: 'Gostinica1'
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gostinica1-родитель-l': IISGostinica1РодительLForm,
    'i-i-s-gostinica1-ученик-l': IISGostinica1УченикLForm,
    'i-i-s-gostinica1-родитель-e': IISGostinica1РодительEForm,
    'i-i-s-gostinica1-ученик-e': IISGostinica1УченикEForm
  },

});

export default translations;
