import { Meteor } from 'meteor/meteor';
import Fabricantes from "../imports/core/models/Fabricantes";
import Estados from '../imports/core/models/Estados';


Meteor.methods({
    'fabricantes'() {
        return Fabricantes.find().fetch();
    },
    'estados'() {
        return Estados.find().fetch();
    },
    'cidadesByNomeEstado'({nome}) {
        return Estados.findOne({nome: nome}).cidades;
    }
});