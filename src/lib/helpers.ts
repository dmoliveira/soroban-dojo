export const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const audienceLabel = (audience: string[]) => {
  if (audience.includes('both')) return 'Children and adults';
  if (audience.includes('child') && audience.includes('adult')) return 'Children and adults';
  if (audience.includes('child')) return 'Children';
  return 'Adults';
};
