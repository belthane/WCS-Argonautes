import React, { useState } from 'react';
import { MembersCollection } from '/imports/api/MembersCollection';

export const MemberForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    MembersCollection.insert({
      text: text.trim(),
      createdAt: new Date()
    });

    setText("");
  };

  return (
    <form className="new-member-form"
          onSubmit={handleSubmit}>
      <label>Nom de l&apos;Argonaute</label>
      <input
        id="name"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Charalampos"
      />

      <button type="submit">Envoyer</button>
    </form>
  );
};