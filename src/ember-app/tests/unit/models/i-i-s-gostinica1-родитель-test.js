import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gostinica1-родитель', 'Unit | Model | i-i-s-gostinica1-родитель', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-gostinica1-родитель',
    'model:i-i-s-gostinica1-ученик',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
