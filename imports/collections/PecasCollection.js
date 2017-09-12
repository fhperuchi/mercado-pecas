import { Mongo } from 'meteor/mongo';

const PecasCollection = new Mongo.Collection('pecas');

export default PecasCollection;