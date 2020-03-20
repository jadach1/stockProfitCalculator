module.exports = function(capp) {
    const CurrentAssets = require('../controller/asset.controller.js');
 
    // Create a new CurrentAsset
    capp.post('/api/currentassets', CurrentAssets.create);

     // Retrieve all Assets
    capp.get('/api/currentassets', CurrentAssets.findAll);

    // Find a single asset
     capp.get('/api/currentassets/:symbol', CurrentAssets.findAsset);

     // Find a single asset that is not existing
     capp.get('/api/currentExistingAssets/:symbol', CurrentAssets.checkIfExists);

    // Update a CurrentAsset with Id
    capp.put('/api/currentassets', CurrentAssets.update);
 
    // Delete a CurrentAsset with Symbol
    capp.delete('/api/currentassets/:symbol', CurrentAssets.delete);

    // Retrieve all Assets by type
    capp.get('/api/allassets/:type', CurrentAssets.findAllByType);

     // Retrieve all Assets by type and owner
     capp.get('/api/allassets/:type/:owner', CurrentAssets.findAllByOwner);

    /*********************** ARCHVIED ASSETS  ***************************/
    capp.put('/api/transferAsset/:id/:status', CurrentAssets.transferAsset);
}
