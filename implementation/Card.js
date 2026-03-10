/**
 * Card.js - Reusable Card Component
 * 
 * Usage:
 *   Card.render({
 *     icon: 'book-open',
 *     title: 'Mes histoires',
 *     description: 'Consultez vos histoires',
 *     onClick: "router.navigate('/stories')",
 *     color: 'secondary', // primary, secondary, accent, or gray
 *     primary: false
 *   })
 */

class Card {
    /**
     * Render a dashboard card
     * @param {Object} options
     * @param {string} options.icon - Icon name (Heroicons)
     * @param {string} options.title - Card title
     * @param {string} options.description - Card description
     * @param {string} options.onClick - Click handler
     * @param {string} options.color - Color theme: primary, secondary, accent, gray
     * @param {boolean} options.primary - Use gradient background (default: false)
     * @returns {string} HTML markup
     */
    static render(options) {
        const {
            icon,
            title,
            description,
            onClick,
            color = 'primary',
            primary = false
        } = options;

        // Color mappings
        const colorClasses = {
            primary: {
                iconBg: 'from-primary-100 to-primary-200',
                iconColor: 'text-primary-600',
                border: 'border-primary-100 hover:border-primary-300',
            },
            secondary: {
                iconBg: 'from-secondary-100 to-secondary-200',
                iconColor: 'text-secondary-600',
                border: 'border-secondary-100 hover:border-secondary-300',
            },
            accent: {
                iconBg: 'from-accent-100 to-accent-200',
                iconColor: 'text-accent-700',
                border: 'border-accent-100 hover:border-accent-300',
            },
            gray: {
                iconBg: 'from-gray-100 to-gray-200',
                iconColor: 'text-gray-600',
                border: 'border-gray-100 hover:border-gray-300',
            },
        };

        const theme = colorClasses[color] || colorClasses.primary;

        if (primary) {
            // Primary CTA card (gradient background)
            return `
                <div 
                    onclick="${onClick}" 
                    onkeydown="if(event.key==='Enter'){${onClick}}" 
                    tabindex="0" 
                    role="button"
                    class="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl shadow-lg hover:shadow-2xl p-8 cursor-pointer transform hover:-translate-y-1 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-primary-300">
                    <div class="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        ${Icon.render(icon, 'w-8 h-8 text-white')}
                    </div>
                    <h3 class="text-xl font-heading font-semibold mb-3">${HTMLUtils.escape(title)}</h3>
                    <p class="text-primary-100 leading-relaxed mb-4">${HTMLUtils.escape(description)}</p>
                    <div class="flex items-center text-sm font-heading font-medium">
                        <span>Commencer</span>
                        ${Icon.render('chevron-right', 'w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform')}
                    </div>
                </div>
            `.trim();
        }

        // Regular card (white background)
        return `
            <div 
                onclick="${onClick}" 
                onkeydown="if(event.key==='Enter'){${onClick}}" 
                tabindex="0" 
                role="button"
                class="bg-white rounded-2xl shadow-lg hover:shadow-xl p-8 cursor-pointer transform hover:-translate-y-1 transition-all duration-200 border ${theme.border} group focus:outline-none focus:ring-4 focus:ring-primary-300">
                <div class="w-16 h-16 bg-gradient-to-br ${theme.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    ${Icon.render(icon, `w-8 h-8 ${theme.iconColor}`)}
                </div>
                <h3 class="text-xl font-heading font-semibold text-gray-900 mb-3">${HTMLUtils.escape(title)}</h3>
                <p class="text-gray-600 leading-relaxed">${HTMLUtils.escape(description)}</p>
            </div>
        `.trim();
    }
}

// Export
if (typeof window !== 'undefined') {
    window.Card = Card;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Card;
}
