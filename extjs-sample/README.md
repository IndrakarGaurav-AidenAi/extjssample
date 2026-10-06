# Sample ExtJS App

Simple Ext JS 6.2 (Classic) app: Model + Store + Grid view.

## Run
Needs internet (loads Ext JS from Sencha CDN) and a local web server:

    python3 -m http.server 8000

Open http://localhost:8000

## Structure
    index.html            - loads Ext JS + app.js
    app.js                - Ext.application entry point
    app/model/User.js     - data model
    app/store/Users.js    - store with sample data
    app/view/UserGrid.js  - grid with Add/Remove buttons
