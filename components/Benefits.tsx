interface Props {
  benefits: Array<string>
}

function Benefits({ benefits }: Props) {
  return (
    <ul className="mb-8 p-6 pr-12 space-y-3 rounded-lg border border-gray-200 bg-gray-50">
      {benefits.map((content, index) => (
        <li
          key={index}
          className="flex gap-2">
          <span className="text-green-500">
            ✔
          </span>
          <span className="text-gray-800">
            {content}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default Benefits
