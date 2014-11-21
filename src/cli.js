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
    console.log(arguments);
};

exports.cli = cli;