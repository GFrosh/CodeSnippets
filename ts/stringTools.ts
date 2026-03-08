export default class StringTools {
    static slugify(text: string) {
        return text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    static capitalize(text: string) {
        return text ? text[0].toUpperCase() + text.slice(1): '';
    }

    static titleCase(text: string) {
        return text
        .toLowerCase()
        .split(' ')
        .map(word => this.capitalize(word))
        .join(' ');
    }

    static truncate(text: string, limit: number = 100) {
        return text.length > limit
        ? text.slice(0, limit).trim() + '…': text;
    }

    static stripHtml(text: string) {
        return text.replace(/<[^>]*>/g, '');
    }

    static wordCount(text: string) {
        return text.trim().split(/\s+/).filter(Boolean).length;
    }

    static minsRead(text: string) {
        const seconds = this.wordCount(text) * 0.3;
        const minutes = Math.round(seconds / 60);
        const minutesRead = minutes > 1 ? `${minutes} minutes read` : `One minute read`;
        return minutesRead;
    }

    static safe(text: string) {
        return text.replace(/\s+/g, ' ').trim();
    }

    static charCount(text: string) {
        return this.safe(text).length;
    }

    static isEmpty(text: string) {
        return !text || !text.trim();
    }

    static contains(text: string, search: string) {
        return text.toLowerCase().includes(search.toLowerCase());
    }

    static tagify(tags: string) {
        return tags
        .toLowerCase()
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean)
        .map(tag => `#${tag}`);
    }

    static detagify(tags: string) {
        if (Array.isArray(tags)) {
            return tags.map(t => t.replace(/#/g, '')).join(', ');
        }
        return tags.replace(/#/g, '').split(' ').join(', ');
    }

    static categorize(category = []) {
        return category.map((c: string) => c.toUpperCase())
        .join(" | ");
    }

    static decategorize(category: string) {
        return category.split(" | ")
        .map(c => c.toLowerCase());
    }

    static pluralize(count: number, singular: string, plural: string | null = null): string {
        if (count === 1) {
            return singular;
        }
        return plural || (singular + 's');
    }
}
