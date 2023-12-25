import { Serializer as КлиентыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-клиенты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КлиентыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
