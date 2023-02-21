import { readFileSync } from 'fs';
import { fileURLToPath } from 'url'; 
import { resolve, dirname } from 'path';
import { createRandomPicker } from './lib/random.js';
import { generate } from './lib/generator.js';


// 文件内容的格式

// 文件读取时的转码，默认读取的文件是二进制内容

// 可以通过toString('utf-8')进行转码


// 文件的路径问题
// 不同的模块规范，脚本的文件路径获取方式不同

// readFile文件中传入的相对路径，是相对于脚本的执行目录，而不是脚本文件的目录。要让命令的执行不受目录的限制，就需要修改文件的路径

const url = import.meta.url; // 获取当前脚本文件的url:file:///Users/guopeipei/Project/study/nodeJS/main.js


const lspath = fileURLToPath(url)// 文件URL转化成路径: /Users/guopeipei/Project/study/nodeJS/main.js

const __dirname = resolve(dirname(lspath));

function loadCorpus(src) {
    const path = resolve(__dirname, src);
    const data = readFileSync(path, {encoding: 'utf-8'});
    return JSON.parse(data);
}

const corpus = loadCorpus('corpus/data.json');

const pickTitle = createRandomPicker(corpus.title);

const title = pickTitle();

const article = generate(title, {corpus});

console.log(`${title}\n\n ${article.join('\n ')}`);