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
    city: { type: 'string', required: true },
    topic: { type: 'string', required: true },
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
      resolve: (doc) =>
        doc._raw.sourceFileName
          .replace(/\.md$/, '')
          .toLowerCase()
          .replace(/\s+/g, '-'),
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
})
