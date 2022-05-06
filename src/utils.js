export const appendUnicodeFavicon = (unicode) =>
  document.head.appendChild(
    Object.assign(document.createElement('link'), {
      rel: 'icon',
      href: `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${unicode}</text></svg>`,
    })
  );
