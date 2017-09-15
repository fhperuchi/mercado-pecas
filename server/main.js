import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
    import './dataLoad';
    import './methods';
});
