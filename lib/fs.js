'use strict';

const fs = require('fs');
const path = require('path');

// 读取指定路径下的所有文件
function readDir(localPath, suffix = ['*']) {
    /**
     * 遍历指定文件夹，返回文件数组
     *
     * @param {*} dir 文件路径
     * @param {*} relativePath 相对文件路径的文件夹路径
     * @return {Array} 文件数组
     */
    function handle(dir, relativePath) {
        let files = [];
        if (fs.existsSync(dir)) {
            // 遍历文件
            fs.readdirSync(dir).forEach(filename => {
                const filepath = path.join(dir, filename);
                const stat = fs.statSync(filepath);

                if (stat && stat.isDirectory()) {
                    const folder = relativePath ? `${relativePath}/${filename}` : filename;
                    files = files.concat(handle(filepath, folder));
                } else {
                    try {
                        const [, fileSuffix] = filename.split('.');

                        // 校验后缀
                        const valid = suffix.includes('*') || suffix.includes(fileSuffix);

                        if (valid) {
                            const fullPath = path.normalize(path.join(dir, filename));
                            const info = getInfo(fullPath);
                            info.relativePath = relativePath;
                            files.push(info);
                        }
                    } catch (e) { throw e; }
                }
            });
        }
        return files;
    }

    return handle(localPath, '');
}

/**
 * 获取文件的信息
 *
 * @param {*} fullPath 文件的全路径
 * @return {JSON} 文件信息json
 */
function getInfo(fullPath) {
    const stat = fs.statSync(fullPath);

    if (!stat) { return {}; }

    const [fullname, folder] = fullPath.replace(/\\/g, '/').split('/').reverse();
    const [name, suffix] = fullname.split('.');

    const info = {
        fullname,
        folder,
        name,
        suffix,
        bytes: stat.size,
        fullPath,
    };

    return info;
}

module.exports = { readDir };
