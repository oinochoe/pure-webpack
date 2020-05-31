module.exports = function myWebpackLoader(content) {
    console.log('>>> my-wpebpack-loader 동작함');
    console.log(content);
    return content;
};
