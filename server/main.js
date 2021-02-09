import { Meteor } from 'meteor/meteor';
import { MembersCollection } from '/imports/api/MembersCollection';

const insertMember = memberText => MembersCollection.insert({ text: memberText });

Meteor.startup(() => {
  // If the Members collection is empty, add some initial data.
  if (MembersCollection.find().count() === 0) {
    [
      'Eleftheria',
      'Gennadios',
      'Lysimachos',
    ].forEach(insertMember)
  }
});
