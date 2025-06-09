import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    city: {
      type: 'string',
      description: 'It is where the news come from',
      required: true,
    },
    topic: { type: 'string', description: 'Topic of the news', required: true },
    description: {
      type: 'string',
      description: 'small descriptions about the news',
      required: true,
    },
    image: {
      type: 'string',
      description: 'Image of the news',
      required: false,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/posts/${doc._raw.flattenedPath}`,
    },
    excerpt: {
      type: 'string',
      resolve: (doc) => doc.body.raw.slice(0, 200) + '...',
    },
    slug: {
      type: 'string',
      resolve: (post) => post._raw.sourceFileName.replace(/\.mdx?$/, ''),
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
})
