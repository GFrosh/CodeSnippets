export default class StringTools {
    static slugify(text = '') {
        return text
        .toLowerCase()
        .replace(/[^\w]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    static capitalize(text = '') {
        return text ? text[0].toUpperCase() + text.slice(1): '';
    }

    static titleCase(text = '') {
        return text
        .toLowerCase()
        .split(' ')
        .map(word => this.capitalize(word))
        .join(' ');
    }

    static truncate(text = '', limit = 100) {
        return text.length > limit
        ? text.slice(0, limit).trim() + '…': text;
    }

    static stripHtml(text = '') {
        return text.replace(/<[^>]*>/g, '');
    }

    static wordCount(text = '') {
        return text.trim().split(/\s+/).filter(Boolean).length;
    }

    static minsRead(text) {
        const seconds = this.wordCount(text) * 0.3;
        const minutes = Math.round(seconds / 60);
        const minutesRead = minutes > 1 ? `${minutes} minutes read` : `${minutes} minute read`;
        return minutesRead;
    }

    static safe(text = '') {
        return text.replace(/\s+/g, ' ').trim();
    }

    static isEmpty(text) {
        return !text || !text.trim();
    }

    static contains(text = '', search = '') {
        return text.toLowerCase().includes(search.toLowerCase());
    }

    static tagify(tags = '') {
        return tags
        .toLowerCase()
        .split(',')
        .map(tag => tag.trim())
        .filter(Boolean)
        .map(tag => `#${tag}`)
        .join(' ');
    }

    static categorize(category = []) {
        return category.map(c => c.toUpperCase())
        .join(" | ");
    }
}
