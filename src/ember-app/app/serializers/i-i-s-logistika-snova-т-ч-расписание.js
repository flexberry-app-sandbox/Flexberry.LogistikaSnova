import { Serializer as ТЧРасписаниеSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-т-ч-расписание';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧРасписаниеSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
