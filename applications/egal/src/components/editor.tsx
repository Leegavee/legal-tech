import dynamic from 'next/dynamic';
import TurndownService from 'turndown';
import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css'; // Import styles

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    [{ align: [] }],
    ['clean'],
  ],
};

const Editor: React.FC<{ onChange: (content: string) => void }> = ({
  onChange,
}) => {
  const [editorContent, setEditorContent] = useState('');

  const turndownService = new TurndownService();

  const handleContentChange = (htmlContent: string) => {
    const markdown = turndownService.turndown(htmlContent);
    setEditorContent(htmlContent);
    onChange(markdown);
  };

  return (
    <>
      <ReactQuill
        style={{ height: '70vh' }}
        value={editorContent}
        onChange={handleContentChange}
        modules={modules}
      />
    </>
  );
};

export { Editor };
