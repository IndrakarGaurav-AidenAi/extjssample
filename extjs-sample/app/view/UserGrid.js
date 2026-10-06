Ext.define('SampleApp.view.UserGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usergrid',

    title: 'Users',
    store: { type: 'users' },

    columns: [
        { text: 'ID',    dataIndex: 'id',    width: 60 },
        { text: 'Name',  dataIndex: 'name',  flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Role',  dataIndex: 'role',  width: 120 }
    ],

    tbar: [{
        text: 'Add User',
        handler: function (btn) {
            var grid = btn.up('grid');
            var n = grid.getStore().getCount() + 1;
            grid.getStore().add({ id: n, name: 'New User ' + n, email: 'user' + n + '@example.com', role: 'Guest' });
        }
    }, {
        text: 'Remove Selected',
        handler: function (btn) {
            var grid = btn.up('grid');
            grid.getStore().remove(grid.getSelection());
        }
    }],

    listeners: {
        itemdblclick: function (view, record) {
            Ext.Msg.alert('User', record.get('name') + ' (' + record.get('role') + ')');
        }
    }
});
