const { join } = require('path');

export const PATH = join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], "/Documents/noam");
