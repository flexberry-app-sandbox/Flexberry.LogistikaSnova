import { Serializer as ТЧИнфОКонтSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-т-ч-инф-о-конт';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧИнфОКонтSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
