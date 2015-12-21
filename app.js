requireDir = require('require-dir');

directories = ['init', 'views', 'routes'];

directories.forEach(function(dir){
    requireDir(dir, {recurse: true});
});
