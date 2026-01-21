interface Props {
  benefits: Array<string>
}

function Benefits({ benefits }: Props) {
  return (
    <ul className="mb-8 space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-6">
      {benefits.map((content, index) => (
        <li
          key={index}
          className="flex items-center gap-2 text-gray-800">
          <span className="text-green-500">✔</span>
          {content}
        </li>
      ))}
    </ul>
  )
}

export default Benefits
