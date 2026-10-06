Ext.Loader.setConfig({ enabled: true });

Ext.application({
    name: 'SampleApp',
    appFolder: 'app',

    requires: [
        'SampleApp.model.User',
        'SampleApp.store.Users',
        'SampleApp.view.UserGrid'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [{ xtype: 'usergrid' }]
        });
    }
});
