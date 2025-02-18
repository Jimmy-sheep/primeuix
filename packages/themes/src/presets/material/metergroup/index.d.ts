import type { MeterGroupTokenSections } from '@primeuix/themes/types/metergroup';

export * from '@primeuix/themes/types/metergroup';

declare const root: MeterGroupTokenSections.Root;
declare const meters: MeterGroupTokenSections.Meters;
declare const label: MeterGroupTokenSections.Label;
declare const labelMarker: MeterGroupTokenSections.LabelMarker;
declare const labelIcon: MeterGroupTokenSections.LabelIcon;
declare const labelList: MeterGroupTokenSections.LabelList;
declare const css: MeterGroupTokenSections.CSS;
declare const _default: {
    root: MeterGroupTokenSections.Root;
    meters: MeterGroupTokenSections.Meters;
    label: MeterGroupTokenSections.Label;
    labelMarker: MeterGroupTokenSections.LabelMarker;
    labelIcon: MeterGroupTokenSections.LabelIcon;
    labelList: MeterGroupTokenSections.LabelList;
    css: string;
};

export { css, _default as default, label, labelIcon, labelList, labelMarker, meters, root };
