/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <mail@uli.io> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return. Uli Ehler
 * ----------------------------------------------------------------------------
 */

//{block name="backend/index/controller/main" append}
Ext.define('Shopware.apps.ShopwareShortcuts.controller.Main', {
    override: 'Shopware.apps.Index.controller.Main',

    // i don't know why, but the index module is loaded twice, so we need this variable
    shortcutsRegistered: false,

    addKeyboardEvents: function () {
        let me = this;
        me.callParent(arguments);

        if (me.shortcutsRegistered === true) {
            return;
        }
        me.shortcutsRegistered = true;

        let shortcuts = [
            me.createCustomShortcut(
                'Vote',
                '{s name=window_title namespace=backend/vote/main}Vote details{/s}',
                'v'
            ),
            me.createCustomShortcut(
                'ProductStream',
                '{s name=list_window_title namespace=backend/product_stream/main}Product Stream listing{/s}',
                's'
            ),
            me.createCustomShortcut(
                'Emotion',
                '{s name=window/title namespace=backend/emotion/view/main}Emotion{/s}',
                'e',
                false
            ),
            me.createCustomShortcut(
                'Blog',
                '{s name=window/main_title namespace=backend/blog/view/blog}Blog-Overview{/s}',
                'b',
                false
            ),
            me.createCustomShortcut(
                'Voucher',
                '{s name=window/main_title namespace=backend/voucher/view/main}Voucher administration{/s}',
                'v',
                false
            )
        ];

        new Ext.util.KeyMap(document, shortcuts);
    },

    createCustomShortcut: function (module, moduleName, key, ctrl, alt) {
        ctrl = ctrl !== false;
        alt = alt !== false;

        let shortcut = '';
        if (ctrl) {
            shortcut += 'ctrl + ';
        }

        if (alt) {
            shortcut += 'alt + ';
        }
        shortcut += key;

        console.log('new shortcut for ' + module + ': ' + shortcut);

        return {
            key: key,
            ctrl: ctrl,
            alt: alt,
            fn: function () {
                Shopware.Notification.createGrowlMessage(
                    '{s name=title/key_pressed namespace=backend/index/controller/main}{/s}',
                    moduleName + ' geöffnet'
                );
                openNewModule('Shopware.apps.' + module);
            }
        }
    }
});
//{/block}