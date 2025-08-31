import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { ReactNode } from 'react'

type ComponentMap = {
  [key: string]: React.ComponentType<any>
}

// Optional wrapper to add spacing around cards
const CardWrapper = ({ children }: { children: ReactNode }) => (
  <div className="my-6">
    <Card>
      <CardContent>{children}</CardContent>
    </Card>
  </div>
)

const MDXComponents: ComponentMap = {
  h1: (props) => <h1 className="text-3xl font-bold mt-8 mb-4 text-blue-900" {...props} />,
  h2: (props) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-blue-800" {...props} />,
  h3: (props) => <h3 className="text-xl font-medium mt-4 mb-2 text-blue-700" {...props} />,
  p: (props) => <p className="text-gray-800 leading-relaxed my-4" {...props} />,
  ul: (props) => <ul className="list-disc pl-5 my-4 text-gray-800" {...props} />,
  ol: (props) => <ol className="list-decimal pl-5 my-4 text-gray-800" {...props} />,
  li: (props) => <li className="mb-2" {...props} />,
  a: (props) => <a className="text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer" {...props} />,
  Button: (props) => <Button {...props} />,
  Card: (props) => <CardWrapper {...props} />,
}

export default MDXComponents
