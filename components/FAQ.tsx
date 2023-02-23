import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { P } from './Elements'

export const FAQ = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="mb-6 pb-6 border-b-gray-200 border-b-2">
      <button className="flex w-full justify-between items-center" onClick={() => setExpanded(!expanded)}>
        <h4 className="text-lg font-bold text-black">{question}</h4>
        <span className="inline-block ml-auto">{expanded ? <FaMinus /> : <FaPlus />}</span>
      </button>

      {expanded && (
        <div className="text-gray-500 mt-3">
          <P>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </P>
        </div>
      )}
    </div>
  )
}
