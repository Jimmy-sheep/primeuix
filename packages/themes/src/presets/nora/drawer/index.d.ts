import type { DrawerTokenSections } from '@primeuix/themes/types/drawer';

export * from '@primeuix/themes/types/drawer';

declare const root: DrawerTokenSections.Root;
declare const header: DrawerTokenSections.Header;
declare const title: DrawerTokenSections.Title;
declare const content: DrawerTokenSections.Content;
declare const footer: DrawerTokenSections.Footer;
declare const _default: {
    root: DrawerTokenSections.Root;
    header: DrawerTokenSections.Header;
    title: DrawerTokenSections.Title;
    content: DrawerTokenSections.Content;
    footer: DrawerTokenSections.Footer;
};

export { content, _default as default, footer, header, root, title };
