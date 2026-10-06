Ext.define('SampleApp.model.User', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id',    type: 'int' },
        { name: 'name',  type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'role',  type: 'string' }
    ]
});
