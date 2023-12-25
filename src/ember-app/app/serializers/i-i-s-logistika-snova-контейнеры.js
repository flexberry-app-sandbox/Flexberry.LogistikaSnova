import { Serializer as КонтейнерыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-контейнеры';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КонтейнерыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
