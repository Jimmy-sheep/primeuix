import { DialogDesignTokens } from '@primeuix/themes/types/dialog';

export default {
    root: {
        background: '{overlay.modal.background}',
        borderColor: '{overlay.modal.border.color}',
        color: '{overlay.modal.color}',
        shadow: '{overlay.modal.shadow}'
    },
    header: {
        padding: '{overlay.modal.padding}'
    },
    title: {
        fontSize: '1.5rem',
        fontWeight: '600'
    },
    content: {
        padding: '0 {overlay.modal.padding} {overlay.modal.padding} {overlay.modal.padding}'
    },
    footer: {
        padding: '{overlay.modal.padding}'
    }
} satisfies DialogDesignTokens;
