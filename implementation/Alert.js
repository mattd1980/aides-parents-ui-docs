/**
 * Alert.js - Reusable Alert Component
 * 
 * Usage:
 *   Alert.render({ type: 'success', title: 'Success!', message: 'Operation completed.' })
 *   Alert.render({ type: 'error', message: 'Something went wrong.' })
 */

class Alert {
    /**
     * Render an alert
     * @param {Object} options
     * @param {string} options.type - Alert type: success, error, warning, info
     * @param {string} options.title - Alert title (optional)
     * @param {string} options.message - Alert message
     * @param {boolean} options.dismissible - Show close button (default: false)
     * @returns {string} HTML markup
     */
    static render(options) {
        const {
            type = 'info',
            title = null,
            message,
            dismissible = false
        } = options;

        // Type configurations
        const types = {
            success: {
                bg: 'bg-green-50',
                border: 'border-green-500',
                icon: 'check-circle',
                iconColor: 'text-green-500',
                titleColor: 'text-green-900',
                textColor: 'text-green-700',
            },
            error: {
                bg: 'bg-red-50',
                border: 'border-red-500',
                icon: 'x-circle',
                iconColor: 'text-red-500',
                titleColor: 'text-red-900',
                textColor: 'text-red-700',
            },
            warning: {
                bg: 'bg-accent-50',
                border: 'border-accent-500',
                icon: 'exclamation-triangle',
                iconColor: 'text-accent-600',
                titleColor: 'text-accent-900',
                textColor: 'text-accent-800',
            },
            info: {
                bg: 'bg-primary-50',
                border: 'border-primary-500',
                icon: 'information-circle',
                iconColor: 'text-primary-500',
                titleColor: 'text-primary-900',
                textColor: 'text-primary-700',
            },
        };

        const config = types[type] || types.info;

        return `
            <div class="p-4 ${config.bg} border-l-4 ${config.border} rounded-lg" role="alert">
                <div class="flex items-start gap-3">
                    ${Icon.render(config.icon, `w-5 h-5 ${config.iconColor} mt-0.5`)}
                    <div class="flex-1">
                        ${title ? `<h4 class="font-heading font-semibold ${config.titleColor} mb-1">${HTMLUtils.escape(title)}</h4>` : ''}
                        <p class="text-sm ${config.textColor}">${HTMLUtils.escape(message)}</p>
                    </div>
                    ${dismissible ? `
                        <button 
                            onclick="this.closest('[role=alert]').remove()" 
                            class="text-gray-400 hover:text-gray-600 transition-colors"
                            aria-label="Fermer">
                            ${Icon.render('x', 'w-5 h-5')}
                        </button>
                    ` : ''}
                </div>
            </div>
        `.trim();
    }
}

// Export
if (typeof window !== 'undefined') {
    window.Alert = Alert;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Alert;
}
