import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'youtube',
  title: 'YouTube Video',
  type: 'object',
  fields: [
    defineField({
      name: 'url',
      title: 'YouTube URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Video Title',
      type: 'string',
    }),
    defineField({
      name: 'caption',
      title: 'Caption / Key Takeaway',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url',
    },
    prepare({ title, url }) {
      return {
        title: title || 'YouTube Video',
        subtitle: url,
      }
    },
  },
})
