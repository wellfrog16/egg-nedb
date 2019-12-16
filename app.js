'use strict';

const Datastore = require('nedb-promises');
const { readDir } = require('./lib/fs');

module.exports = app => {
    app.addSingleton('nedb', createNedb);
};


/**
 * @param  {Object} config   框架处理之后的配置项，
 * @return {Object}          返回创建的 Nedb 实例
 */
function createNedb(config) {
    // 创建实例
    const dbs = {};

    // 读取数据库
    const suffix = ['db'];
    const files = readDir(config.path, suffix);

    files.forEach(item => {
        const path = item.relativePath ? `${item.relativePath}/${item.name}` : item.name;
        dbs[path] = new Datastore({ filename: item.fullPath, autoload: true });
    });

    return dbs;
}
