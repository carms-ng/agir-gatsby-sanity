import { AiOutlineHome as icon } from 'react-icons/ai'
import React from 'react' 

export default {
  name: 'homePages',
  title: 'Home Pages',
  type: 'document',
  icon,
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'locale',
    },
    {
      name: 'title',
      title: 'Title',
      type: "string",
      description: "The title of this page (this will show up in your browser heading and internal links)",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug for this page",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sections',
      title: 'Sections',
      type: 'homeSections',
    }
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
    },
    prepare: ({ title, language }) => {
      const EMOJIS = {
        'en': '🇬🇧',
        'es': '🇪🇸',
        'fr': '🇫🇷',
        'ar': '🇦🇪',
      }
      return {
        title: `${title} (${language.toUpperCase()})`,
        media: <span style={{fontSize: '1.5rem'}}>{language ? EMOJIS[language] : '🚫'}</span>
      }
    }
  }
}