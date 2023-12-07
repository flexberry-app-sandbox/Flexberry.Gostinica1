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
          caption: i18n.t('forms.application.sitemap.gostinica1.caption'),
          title: i18n.t('forms.application.sitemap.gostinica1.title'),
          children: [{
            link: 'i-i-s-gostinica1-родитель-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-родитель-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-родитель-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-gostinica1-ученик-l',
            caption: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-ученик-l.caption'),
            title: i18n.t('forms.application.sitemap.gostinica1.i-i-s-gostinica1-ученик-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})