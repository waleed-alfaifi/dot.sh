import { FC } from 'react'

interface Props {
  content: string
}

let WordsCounter: FC<Props> = function WordsCounter() {
  return null
}

const getRawText = (content: string) => {
  // extract html tags from content
  content = content.replace(/(<([^>]+)>)/gi, '')
  // extract dots, commas, and other punctuation marks from content
  content = content.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()"']/g, '')
  // remove trailing spaces from content
  content = content.trim()

  return content
}

if (process.env.NODE_ENV === 'development') {
  WordsCounter = function WordsCounter({ content }: Props) {
    const raw = getRawText(content)
    const words = raw.length > 0 ? raw.split(/\s+/) : []

    return (
      <div className="fixed flex items-center justify-center bottom-4 right-4 bg-gray-200 text-gray-600 border-gray-800 border rounded-full p-3 w-12 h-12">
        {words.length}
      </div>
    )
  }
}

export default WordsCounter
