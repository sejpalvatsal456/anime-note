/**
 * Converts a human-readable string into a URL-friendly slug.
 *
 * Transformations:
 * - Trims leading/trailing whitespace.
 * - Converts text to lowercase.
 * - Removes diacritical marks (accents) from characters.
 * - Removes non-alphanumeric characters except spaces and hyphens.
 * - Replaces spaces with hyphens.
 * - Collapses consecutive hyphens into a single hyphen.
 *
 * @example
 * textToSlug("Hello World");
 * // "hello-world"
 *
 * @example
 * textToSlug("Café Menu");
 * // "cafe-menu"
 *
 * @param text - The text to convert into a slug.
 * @returns A URL-safe slug string.
 */
export function textToSlug(text: string): string {
  return text
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Converts a slug into a human-readable title.
 *
 * Transformations:
 * - Replaces hyphens with spaces.
 * - Capitalizes the first letter of each word.
 *
 * Note:
 * Since slug generation is a lossy process, the original
 * capitalization and special characters cannot be restored.
 *
 * @example
 * slugToText("hello-world");
 * // "Hello World"
 *
 * @example
 * slugToText("cafe-menu");
 * // "Cafe Menu"
 *
 * @param slug - The slug to convert.
 * @returns A human-readable string.
 */
export function slugToText(slug: string): string {
  return slug
    .trim()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}