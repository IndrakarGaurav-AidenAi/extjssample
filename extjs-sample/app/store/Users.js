Ext.define('SampleApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'SampleApp.model.User',

    // Static sample data - swap for a proxy (ajax/rest) later
    data: [
        { id: 1, name: 'Asha Rao',    email: 'asha@example.com',  role: 'Admin' },
        { id: 2, name: 'Rahul Mehta', email: 'rahul@example.com', role: 'Developer' },
        { id: 3, name: 'Priya Nair',  email: 'priya@example.com', role: 'Tester' },
        { id: 4, name: 'Karan Shah',  email: 'karan@example.com', role: 'Developer' }
    ]
});
