import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Member } from './Member';
import { MembersCollection } from '/imports/api/MembersCollection';
import { MemberForm } from './MemberForm';

export const App = () => {
  const members = useTracker(() => MembersCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  return (

    <div>
      {/* Header section */}
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>
      {/* Main section */}
      <main>
        {/* Member list */}
        <h2>Ajouter un(e) Argonaute</h2>
        <MemberForm />
        {/* Member list */}
        <h2>Membres de l'équipage</h2>
        <ul className="ul-member">
          {members.map(member => <Member key={member._id} member={member} />)}
        </ul>
      </main>
      {/* Footer section */}
      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>

  );
};
