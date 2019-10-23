var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  },  
  module : {
    loaders: [
      { test: /\.jsx?/, include : SRC_DIR, exclude: /node_modules/, loaders: 'babel-loader', query: { presets: ['react', 'env'] } },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};