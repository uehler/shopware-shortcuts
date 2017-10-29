# Shopware Shortcuts

this is a plugin for shopware 5.2 or newer which adds new shortcuts for the backend

the following shortcuts are added:

- Vote: ctrl + alt + v 
- ProductStream: ctrl + alt + s 
- Emotion: alt + e 
- Blog: alt + b 
- Voucher: alt + v


### install

1) go to the shop root
2) clone the plugin
```
git clone git@github.com:uehler/shopware-shortcuts.git custom/plugins/ShopwareShortcuts
```
3) install plugin
```
php bin/console sw:plugin:refresh
php bin/console sw:plugin:install --activate ShopwareShortcuts
```
