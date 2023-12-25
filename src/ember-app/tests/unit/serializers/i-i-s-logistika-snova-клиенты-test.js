import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-logistika-snova-клиенты', 'Unit | Serializer | i-i-s-logistika-snova-клиенты', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-logistika-snova-клиенты',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-logistika-snova-баржи',
    'model:i-i-s-logistika-snova-груз',
    'model:i-i-s-logistika-snova-докум-постав',
    'model:i-i-s-logistika-snova-докум-результ-п',
    'model:i-i-s-logistika-snova-загруз-контейн',
    'model:i-i-s-logistika-snova-загрузка-баржи',
    'model:i-i-s-logistika-snova-клиенты',
    'model:i-i-s-logistika-snova-контейнеры',
    'model:i-i-s-logistika-snova-организация',
    'model:i-i-s-logistika-snova-сотрудники',
    'model:i-i-s-logistika-snova-т-ч-дост-кон',
    'model:i-i-s-logistika-snova-т-ч-инф-о-грузе',
    'model:i-i-s-logistika-snova-т-ч-инф-о-зак',
    'model:i-i-s-logistika-snova-т-ч-инф-о-конт',
    'model:i-i-s-logistika-snova-т-ч-расписание',
    'model:i-i-s-logistika-snova-т-ч-своб-мест',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
