import { Serializer as СотрудникиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-сотрудники';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СотрудникиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
