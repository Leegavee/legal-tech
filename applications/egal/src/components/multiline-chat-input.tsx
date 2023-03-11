import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface Props {
  onSubmit: (text: string) => void;
}

function ChatInput({ onSubmit }: Props) {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    }
  }, [text]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      if (text.trim() !== '') {
        onSubmit(text.trim());
        setText('');
      }
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setText(event.target.value);
  }

  return (
    <div className="relative">
      <div className="relative flex">
        <textarea
          ref={inputRef}
          className="w-full px-3 py-2 m-5 rounded-md border-gray-300 border focus:outline-none focus:ring focus:border-blue-500 resize-none pr-12 shadow-md"
          value={text}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here..."
          rows={1}
        />
        <button
          className="absolute right-10 bottom-7 text-gray-700 hover:text-gray-900"
          onClick={() => {
            if (text.trim() !== '') {
              onSubmit(text.trim());
              setText('');
            }
          }}
          disabled={text.trim() === ''}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
