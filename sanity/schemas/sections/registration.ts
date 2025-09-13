import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'registration',
  title: 'Registration Settings',
  type: 'document',
  fields: [
    defineField({ name: 'fee', title: 'Registration Fee (USD)', type: 'number' }),
    defineField({ name: 'whatsIncluded', title: "What's Included", type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'paymentMethods', title: 'Payment Methods', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'successNote', title: 'Success Note', type: 'text' }),
  ],
});