import { createRandomPicker } from './lib/random.js';
import { generate } from './lib/generator.js';
import { loadCorpus, saveCorpus } from './lib/corpus.js';


// 文件内容的格式

// 文件读取时的转码，默认读取的文件是二进制内容

// 可以通过toString('utf-8')进行转码


// 文件的路径问题
// 不同的模块规范，脚本的文件路径获取方式不同

// readFile文件中传入的相对路径，是相对于脚本的执行目录，而不是脚本文件的目录。要让命令的执行不受目录的限制，就需要修改文件的路径

const corpus = loadCorpus('corpus/data.json');

const pickTitle = createRandomPicker(corpus.title);

const title = pickTitle();

const article = generate(title, {corpus});

saveCorpus(title,article);