import { marked } from 'marked';

// Define the custom renderer
const renderer = new marked.Renderer();
renderer.heading = (text, level) => {
  const classes = `text-${level} font-bold mb-4`;
  return `<h${level} class="${classes}">${text}</h${level}>`;
};
renderer.paragraph = (text) => {
  return `<p class="mb-4">${text}</p>`;
};
renderer.blockquote = (text) => {
  return `<blockquote class="border-l-4 pl-4 mb-4">${text}</blockquote>`;
};
renderer.hr = () => {
  return `<hr class="my-8 border-gray-400 border-1">`;
};
renderer.list = (text, ordered) => {
  const tag = ordered ? 'ol' : 'ul';
  return `<${tag} class="list-disc list-inside mb-4">${text}</${tag}>`;
};
renderer.listitem = (text) => {
  return `<li class="mb-2">${text}</li>`;
};
renderer.table = (header, body) => {
  return `<table class="w-full border-collapse mb-4">${header}${body}</table>`;
};
renderer.tablerow = (content) => {
  return `<tr class="border-b-2 border-gray-300">${content}</tr>`;
};
renderer.tablecell = (content, flags) => {
  const tag = flags.header ? 'th' : 'td';
  const classes = `p-2${flags.align ? ` text-${flags.align}` : ''}`;
  return `<${tag} class="${classes}">${content}</${tag}>`;
};
renderer.codespan = (code) => {
  return `<code class="bg-gray-200 rounded p-1">${code}</code>`;
};
renderer.code = (code, language) => {
  return `<pre><code class="language-${language}">${code}</code></pre>`;
};

export default renderer;
