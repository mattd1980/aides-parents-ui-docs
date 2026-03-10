/**
 * Button.js - Reusable Button Component
 * 
 * Usage:
 *   Button.render({ text: 'Se connecter', variant: 'primary', icon: 'login' })
 *   Button.render({ text: 'Annuler', variant: 'ghost', onClick: 'handleCancel()' })
 */

class Button {
    /**
     * Render a button
     * @param {Object} options
     * @param {string} options.text - Button text
     * @param {string} options.icon - Icon name (optional)
     * @param {string} options.variant - Button style: primary, secondary, accent, ghost, danger
     * @param {string} options.type - Button type: button, submit, reset
     * @param {string} options.onClick - Click handler
     * @param {boolean} options.disabled - Disabled state
     * @param {string} options.className - Additional classes
     * @returns {string} HTML markup
     */
    static render(options) {
        const {
            text,
            icon = null,
            variant = 'primary',
            type = 'button',
            onClick = null,
            disabled = false,
            className = ''
        } = options;

        // Variant styles
        const variants = {
            primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-xl hover:from-primary-600 hover:to-primary-700',
            secondary: 'bg-secondary-500 text-white shadow-lg hover:shadow-xl hover:bg-secondary-600',
            accent: 'bg-accent-400 text-gray-900 shadow-lg hover:shadow-xl hover:bg-accent-500',
            ghost: 'bg-gray-200 text-gray-700 hover:bg-gray-300',
            danger: 'bg-red-500 text-white shadow-lg hover:shadow-xl hover:bg-red-600',
        };

        const baseClasses = 'px-6 py-3 rounded-xl font-heading font-semibold transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300';
        const variantClass = variants[variant] || variants.primary;
        const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:-translate-y-0.5';

        return `
            <button 
                type="${type}"
                ${onClick ? `onclick="${onClick}"` : ''}
                ${disabled ? 'disabled' : ''}
                class="${baseClasses} ${variantClass} ${disabledClass} ${className}">
                ${icon ? Icon.inline(icon, 'w-5 h-5 mr-2') : ''}
                ${HTMLUtils.escape(text)}
            </button>
        `.trim();
    }

    /**
     * Render a full-width button
     */
    static renderFull(options) {
        return this.render({ ...options, className: 'w-full' });
    }
}

// Export
if (typeof window !== 'undefined') {
    window.Button = Button;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Button;
}
