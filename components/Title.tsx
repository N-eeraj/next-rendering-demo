interface Props {
  heading: string
  tagline: string
}

function Title({ heading, tagline }: Props) {
  return (
    <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
      {heading}
      <span className="block text-lg font-medium text-gray-500">
        {tagline}
      </span>
    </h1>
  )
}

export default Title
