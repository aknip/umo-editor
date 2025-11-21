import { UmoEditorOptions } from '../../../types';
import { default as UmoEditor } from './index.vue';
import { default as UmoMenuButton } from './menus/button.vue';
import { default as UmoDialog } from './modal.vue';
import { default as UmoTooltip } from './tooltip.vue';
declare const useUmoEditor: {
    install: (app: any, options?: Partial<UmoEditorOptions>) => void;
};
export { UmoEditor as default, UmoDialog, UmoEditor, UmoMenuButton, UmoTooltip, useUmoEditor, };
