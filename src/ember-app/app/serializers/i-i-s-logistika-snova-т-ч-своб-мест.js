import { Serializer as ТЧСвобМестSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-т-ч-своб-мест';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ТЧСвобМестSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
