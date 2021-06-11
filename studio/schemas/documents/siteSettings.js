import { MdSettings as icon } from 'react-icons/md'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon,
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'], 
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Website Title. i.e. name of the organization',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'imageBlock',
      validation: (Rule) => Rule.required(),
    }
  ],
  preview: {
    select: {
      title: 'title',
      image: 'logo.asset',
    },
    prepare: ({ title, image }) => {
      return {
        title: title,
        media: image
      }
    }
  }
}