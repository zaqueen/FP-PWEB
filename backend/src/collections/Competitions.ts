// Competitions.ts
import { CollectionConfig } from 'payload/types';

const Competitions: CollectionConfig = {
  slug: 'competitions',
  auth: true,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'text',
      required: true,
      unique: true, // Email should be unique for each participant
    },
    {
      name: 'school',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: ['Waiting', 'Rejected', 'Accepted'], // Minimal Status options
      defaultValue: 'Waiting', // Default value is set to 'Waiting'
      required: true,
    },
    {
      name: 'registrationDate',
      type: 'date',
      required: true,
    },
  ],
};

export default Competitions;
