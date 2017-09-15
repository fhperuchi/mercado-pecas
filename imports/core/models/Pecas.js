import { Mongo } from 'meteor/mongo';

class PecasCollection extends Mongo.Collection {
}
const Pecas = new PecasCollection('pecas');
export default Pecas;