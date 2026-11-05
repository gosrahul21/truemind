import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'callout',
  title: 'Editorial Callout',
  type: 'object',
  fields: [
    defineField({
      name: 'tone',
      title: 'Tone / Type',
      type: 'string',
      options: {
        list: [
          { title: '💡 Key Takeaway / Insight', value: 'takeaway' },
          { title: '✅ Pro Tip / Action Item', value: 'tip' },
          { title: '⚠️ Warning / Red Flag', value: 'warning' },
          { title: '📊 Data / Key Stat', value: 'stat' },
          { title: '💬 Case Study / Quote', value: 'quote' },
        ],
        layout: 'radio',
      },
      initialValue: 'takeaway',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      placeholder: 'e.g., Key Finding, Pro Tip, Warning',
    }),
    defineField({
      name: 'content',
      title: 'Message',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tone: 'tone',
      content: 'content',
    },
    prepare({ title, tone, content }) {
      const icons: Record<string, string> = {
        takeaway: '💡',
        tip: '✅',
        warning: '⚠️',
        stat: '📊',
        quote: '💬',
      }
      const icon = (tone && icons[tone]) || '📌'
      return {
        title: title || `${icon} ${tone ? tone.toUpperCase() : 'CALLOUT'}`,
        subtitle: content ? content.slice(0, 80) : '',
      }
    },
  },
})
