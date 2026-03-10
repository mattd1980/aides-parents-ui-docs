/**
 * Modal.js - Modal/Dialog Component
 * 
 * Usage:
 *   Modal.render({
 *     id: 'deleteConfirm',
 *     title: 'Supprimer l\'histoire?',
 *     message: 'Cette action est irréversible.',
 *     actions: [
 *       { text: 'Annuler', variant: 'ghost', onClick: 'Modal.close("deleteConfirm")' },
 *       { text: 'Supprimer', variant: 'danger', onClick: 'handleDelete()' }
 *     ]
 *   })
 * 
 *   // Show/hide
 *   Modal.open('deleteConfirm')
 *   Modal.close('deleteConfirm')
 */

class Modal {
    /**
     * Render a modal dialog
     * @param {Object} options
     * @param {string} options.id - Unique modal ID
     * @param {string} options.title - Modal title
     * @param {string} options.message - Modal content/message
     * @param {Array} options.actions - Array of button configs
     * @returns {string} HTML markup
     */
    static render(options) {
        const {
            id,
            title,
            message,
            actions = []
        } = options;

        const actionButtons = actions.map(action => Button.render(action)).join('');

        return `
            <div 
                id="${id}" 
                class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden transition-opacity duration-200" 
                role="dialog" 
                aria-labelledby="${id}-title" 
                aria-modal="true"
                onclick="if(event.target === this) Modal.close('${id}')">
                <div class="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-scale-in">
                    <div class="flex justify-between items-start mb-6">
                        <h2 id="${id}-title" class="text-2xl font-heading font-semibold text-gray-900">${HTMLUtils.escape(title)}</h2>
                        <button 
                            onclick="Modal.close('${id}')" 
                            class="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg p-1"
                            aria-label="Fermer">
                            ${Icon.render('x', 'w-6 h-6')}
                        </button>
                    </div>
                    <div class="mb-8">
                        <p class="text-gray-600 leading-relaxed">${HTMLUtils.escape(message)}</p>
                    </div>
                    <div class="flex gap-3 justify-end">
                        ${actionButtons}
                    </div>
                </div>
            </div>
        `.trim();
    }

    /**
     * Open a modal
     * @param {string} id - Modal ID
     */
    static open(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.remove('hidden');
            // Trap focus in modal
            const firstButton = modal.querySelector('button');
            if (firstButton) firstButton.focus();
        }
    }

    /**
     * Close a modal
     * @param {string} id - Modal ID
     */
    static close(id) {
        const modal = document.getElementById(id);
        if (modal) {
            modal.classList.add('hidden');
        }
    }
}

// Export
if (typeof window !== 'undefined') {
    window.Modal = Modal;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Modal;
}
