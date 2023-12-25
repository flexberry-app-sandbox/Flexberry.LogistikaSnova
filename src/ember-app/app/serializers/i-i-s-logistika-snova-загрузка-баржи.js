import { Serializer as ЗагрузкаБаржиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-загрузка-баржи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗагрузкаБаржиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
