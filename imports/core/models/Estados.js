import { Mongo } from 'meteor/mongo';

class EstadosCollection extends Mongo.Collection {
}
const Estados = new EstadosCollection('estados');
export default Estados;