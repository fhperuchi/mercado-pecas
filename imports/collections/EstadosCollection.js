import { Mongo } from 'meteor/mongo';

const EstadosCollection = new Mongo.Collection('estados');

export default EstadosCollection;