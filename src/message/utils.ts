export const bold = (text: string) => `<b>${text}</b>`;

export const italic = (text: string) => `<i>${text}</i>`;

export const code = (text: string) => `<code>${text}</code>`;

export const pre = (text: string) => `<pre>${text}</pre>`;

export const strike = (text: string) => `<s>${text}</s>`;

export const underline = (text: string) => `<u>${text}</u>`;

export const link = (text: string, url: string) =>
  `<a href="${url}">${text}</a>`;
