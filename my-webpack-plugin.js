class MyPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('My plugin', (stats) => {
            console.log('MyPlugin: done');
        });
    }
}

module.exports = MyPlugin;
