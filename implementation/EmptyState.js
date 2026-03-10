/**
 * EmptyState.js - Empty State Component
 * 
 * Usage:
 *   EmptyState.render({
 *     icon: 'book-open',
 *     title: 'Aucune histoire',
 *     message: 'Vous n\'avez pas encore créé d\'histoire.',
 *     action: { text: 'Créer une histoire', onClick: "router.navigate('/create')" }
 *   })
 */

class EmptyState {
    /**
     * Render an empty state
     * @param {Object} options
     * @param {string} options.icon - Icon name
     * @param {string} options.title - Title
     * @param {string} options.message - Description
     * @param {Object} options.action - Action button config (optional)
     * @returns {string} HTML markup
     */
    static render(options) {
        const {
            icon,
            title,
            message,
            action = null
        } = options;

        return `
            <div class="text-center py-16">
                <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                    ${Icon.render(icon, 'w-12 h-12 text-gray-400')}
                </div>
                <h3 class="text-2xl font-heading font-semibold text-gray-700 mb-3">${HTMLUtils.escape(title)}</h3>
                <p class="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">${HTMLUtils.escape(message)}</p>
                ${action ? Button.render({
                    text: action.text,
                    icon: action.icon || 'plus',
                    variant: 'primary',
                    onClick: action.onClick
                }) : ''}
            </div>
        `.trim();
    }
}

// Export
if (typeof window !== 'undefined') {
    window.EmptyState = EmptyState;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EmptyState;
}
