import { Meteor } from 'meteor/meteor';
import PecasCollection from '../imports/collections/PecasCollection';
import EstadosCollection from '../imports/collections/EstadosCollection';

Meteor.startup(() => {
    /*PecasCollection.remove({});
    PecasCollection.insert({
        codigos: ['RCCR00384','RCCS00584'],
        nome: 'Cilindro de roda',
        aplicacoes:['Gol', 'Parati'],
        valor: 101.98,
        dataExpiracao: new Date()
    });
    PecasCollection.insert({
        codigos: ['RPDI00480'],
        nome:'Disco de freio',
        aplicacoes:['Fiesta', 'Focus'],
        valor: 1500.10,
        dataExpiracao: new Date()
    });
    EstadosCollection.remove({});
    JSON.parse(Assets.getText("data/estados.json")).estados.map(estado => {
        EstadosCollection.insert(estado);
    });*/
});
