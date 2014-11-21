var packer = require('./packer');

/**
 * 命令行配置项
 *
 * @inner
 * @type {Object}
 */
var cli = {};

/**
 * 命令描述信息
 *
 * @type {string}
 */
cli.description = 'css packer';

/**
 * 模块命令行运行入口
 *
 * @param {Array.<string>} args
 * @param {Object.<string, *>} opts
 */
cli.main = function( args, opts ) {
    var inputFile = args[2];
    if (!inputFile) {
        console.log('please input a file');
        return;
    }
    console.log(packer.packFile(inputFile));
};

module.exports = cli;
