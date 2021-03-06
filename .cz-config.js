'use strict';

module.exports = {

  types: [
    {value: 'feat',     name: '特性(feat):    一个新的特性'},
    {value: 'fix',      name: '修复(fix):    修复一个Bug'},
    {value: 'docs',     name: '文档(docs):    变更的只有文档'},
    {value: 'style',    name: '格式(style):    空格, 分号等格式修复'},
    {value: 'refactor', name: '重构(refactor):    代码重构，注意和特性、修复区分开'},
    {value: 'perf',     name: '性能(perf):    提升性能'},
    {value: 'test',     name: '测试(test):    添加一个测试'},
    {value: 'build',    name: '构建(build):    变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）'},
    {value: 'ci',       name: '持续集成(ci):    更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等'},
    {value: 'chore',    name: '工具(chore):    开发工具变动(构建、脚手架工具等)'},
    {value: 'revert',   name: '回滚(revert):    代码回退'},
    {value: 'WIP',      name: '进度(WIP):    工作进度'}
  ],

  scopes: [],

  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: '简略说明:\n',
    body: '详细说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: ['body'],

  // limit subject length
  subjectLimit: 100
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
