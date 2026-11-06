import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'faq',
  title: 'FAQ Accordion',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Frequently Asked Questions (FAQ)',
    }),
    defineField({
      name: 'items',
      title: 'Questions & Answers',
      type: 'array',
      of: [
        {
          name: 'faqItem',
          title: 'Question & Answer',
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
            prepare({ title, subtitle }) {
              return {
                title: `❓ ${title || 'Untitled Question'}`,
                subtitle: subtitle || 'No answer provided yet.',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      items: 'items',
    },
    prepare({ title, items }) {
      const count = items ? items.length : 0
      return {
        title: title || 'FAQ Accordion',
        subtitle: `📋 ${count} question${count === 1 ? '' : 's'} included`,
      }
    },
  },
})
