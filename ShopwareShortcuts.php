<?php

/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <hi@uli.io> wrote this file. As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return. Uli Ehler
 * ----------------------------------------------------------------------------
 */

namespace ShopwareShortcuts;

use Shopware\Components\Plugin;

class ShopwareShortcuts extends Plugin
{
    public static function getSubscribedEvents(): array
    {
        return [
            'Enlight_Controller_Action_PostDispatchSecure_Backend' => 'onBackendIndex',
        ];
    }


    public function onBackendIndex(\Enlight_Controller_ActionEventArgs $args): void
    {
        $view = $args->getSubject()->View();
        $view->addTemplateDir($this->getPath() . '/Resources/views/extjs');
        $view->extendsTemplate('backend/shopware_shortcuts/controller/main.js');
    }


    public function install(Plugin\Context\InstallContext $context): void
    {
    }


    public function update(Plugin\Context\UpdateContext $context): void
    {
        $this->clearBackendCache($context);
    }


    public function activate(Plugin\Context\ActivateContext $context): void
    {
        $this->clearBackendCache($context);
    }


    public function deactivate(Plugin\Context\DeactivateContext $context): void
    {
        $this->clearBackendCache($context);
    }


    public function uninstall(Plugin\Context\UninstallContext $context): void
    {
        $this->clearBackendCache($context);
    }


    private function clearBackendCache(Plugin\Context\InstallContext $context): void
    {
        $context->scheduleClearCache([
            'backend',
        ]);
    }
}