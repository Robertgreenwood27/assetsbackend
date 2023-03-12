export default {
  name: 'imageurl',
  type: 'document',
  title: 'Image',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      })
    }
  ]
}