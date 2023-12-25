import { Serializer as БаржиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-logistika-snova-баржи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БаржиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
