import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import MDXComponents from '@/components/mdx-components'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: {
    title: string
    description: string
  }
}

export default function LessonPage({ source, frontMatter }: Props) {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2 text-blue-900">{frontMatter.title}</h1>
      <p className="text-lg text-gray-600 mb-6">{frontMatter.description}</p>
      <article className="prose prose-blue">
        <MDXRemote {...source} components={MDXComponents} />
      </article>
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const lessonsDir = path.join(process.cwd(), 'content', 'courses')
  const files = fs.readdirSync(lessonsDir)

  const paths = files.map((fileName) => {
    const slug = fileName.replace('.mdx', '')
    return {
      params: { slug },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const filePath = path.join(process.cwd(), 'content', 'courses', `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')

  const { content, data } = matter(source)
  const mdxSource = await serialize(content, { scope: data })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}
