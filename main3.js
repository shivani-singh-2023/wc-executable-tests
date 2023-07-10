const https = require('https');
const fs = require('fs');
const { spawnSync } = require('child_process');

function updateMainFile() {
  const printCommand = 'a'; // Replace with your logic to get the value of printCommand

  if (printCommand === 'a') {
    // URL of the new main.js file
    const downloadUrl = 'https://example.com/path/to/new-main.js';

    // Path to the existing main.js file
    const existingMainJsPath = __filename;

    // Path to store the downloaded main.js file
    const downloadedMainJsPath = 'C:/Users/shivani.singh2/Downloads/downloaded-main.js';

    return new Promise((resolve, reject) => {
        const request = https.get(downloadUrl, response => {
            response.pipe(file);
            file.on('finish', () => {
              file.close();
    
              // Replace the existing main.js with the downloaded main.js
              fs.copyFileSync(downloadedMainJsPath, existingMainJsPath);
    
              // Additional logic after the update
              console.log('Main.js file updated successfully.');
    
              // Start the updated main.js file
              spawnSync('node', [existingMainJsPath]);
    
              resolve();
            });
        }).on('error', error => {
          console.error('Error downloading main.js:', error.message);
          reject(error);
        });
        
        request.on('timeout', () => {
          request.destroy();
          reject(new Error('Download timed out.'));
        });
        
        request.setTimeout(30000);
      });
      
  } else {
    // Print command is not "a", no update is performed
    console.log('No update required.');
    return Promise.resolve();
  }
}

// Call the function to update the main.js file
updateMainFile()
  .then(() => {
    // Update completed successfully
    console.log('Update completed.');
  })
  .catch(error => {
    // Update failed or encountered an error
    console.error('Update failed:', error.message);
  });
