import { Mongo } from 'meteor/mongo';

class FabricantesCollection extends Mongo.Collection {
}
const Fabricantes = new FabricantesCollection('fabricantes');
export default Fabricantes;