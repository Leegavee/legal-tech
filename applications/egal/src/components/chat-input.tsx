import React, { useState, FormEvent, ChangeEvent } from 'react';

interface Props {
  onSubmit: (text: string) => void;
}

function ChatInput({ onSubmit }: Props) {
  const [text, setText] = useState('');

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit(text);
    setText('');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-center p-4">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type your message..."
        className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        type="submit"
        className="ml-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-500"
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
