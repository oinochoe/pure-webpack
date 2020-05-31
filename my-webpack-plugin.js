class MyPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('My plugin', (stats) => {
            console.log('MyPlugin: done');
        });

        // compiler.plugin() 함수로 후처리 한다.
        compiler.plugin('emit', (compilation, callback) => {
            const source = compilation.assets['main.js'].source();

            compilation.assets['main.js'].source = function () {
                const banner = ['/**', `* Build date : ${new Date().toLocaleString()}`, '*/', ''].join('\n');
                console.log(banner);
                return banner + source;
            };
            callback();
        });
    }
}

module.exports = MyPlugin;
