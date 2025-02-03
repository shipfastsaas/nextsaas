'use client'

import MDEditor from '@uiw/react-md-editor'

export function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <MDEditor.Markdown source={content} />
    </div>
  )
}
