/**
 * Capitalize the first letter of the given string.
 *
 * @param {string} value
 *
 * @returns {string}
 */
export const capitalize = (value: string): string => {
  // eslint-disable-next-line no-magic-numbers
  return value.charAt(0).toUpperCase() + value.slice(1);
};

/**
 * Decodes HTML Text to HTML entity.
 *
 */
export const convertHTMLToCharacter = (htmlEntity: string) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = htmlEntity;
  return textarea.value;
};
