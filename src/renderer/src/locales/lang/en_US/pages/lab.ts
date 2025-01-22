export default {
  name: 'Lab',
  nav: {
    staticFilter: 'StaticFilter',
    fileDiff: 'FileDiff',
    jsEdit: 'JsEdit',
    aiBrain: 'AiBrain',
    dataCrypto: 'DataCrypto',
    snifferPlay: 'SnifferPlay',
    pluginCenter: 'PluginCenter',
  },
  jsEdit: {
    import: 'Import',
    export: 'Export',
    bug: 'Debug',
    cache: 'Cache',
    encode: 'Encode',
    decode: 'Decode',
    delete: 'DeleteCase',
    file: 'Catalog',
    help: 'Help',
    other: 'Other',
    doc: 'Doc',
    ai: 'Ai',
    title: 'Source Tool',
    template: 'Template',
    templateTip: 'Select one default template to edit',
    encodeTip: 'Select a method to be encode code',
    run: 'Run',
    fileManage: 'File',
    sift: 'Sift',
    editSource: 'Edit',
    placeholder: {
      reqHeader: '{ "User-Agent": "Mozilla/5.0 zyfun" }',
      reqBody: '{ "key": "01b9b7" }',
      proxyUpload: 'Please enter a triple, [response, response header, response body]',
    },
    rule: {
      pdfa: 'Pdfa',
      pdfh: 'Pdfh',
      try: 'Try',
      url: 'Url',
      wd: 'Wd',
      pg: 'Pg',
      t: 'T',
      f: 'F',
      ids: 'Ids',
      flag: 'Flag',
      play: 'Play',
    },
    bar: {
      title: 'Edit Params',
      theme: 'theme',
      language: 'language',
      eol: 'eol',
      wordWrap: 'wordWrap',
      disable: 'disable',
      enable: 'enable',
      autoInit: 'autoInit',
    },
    action: {
      init: 'Init',
      mode: 'Mode',
      currentStatus: 'Status',
      manual: 'Manual',
      auto: 'Auto',
      t3: 'T3',
      t4: 'T4',
      source: 'Source',
      obtain: 'Obtain',
      classify: 'Class',
      home: 'Home',
      list: 'List',
      detail: 'Detail',
      search: 'Search',
      play: 'Play',
      proxy: 'Proxy',
      proxyUpload: 'ProxyUpload',
      player: 'Player',
      sniffer: 'Sniffer',
    },
    select: {
      control: 'Control',
      log: 'Log',
      debug: 'Debug',
      source: 'Source',
      rule: 'Rule',
      f12: 'F12',
      clear: 'Clean',
      reset: 'Reset',
      format: 'Format',
      play: 'Play',
      copy: 'Copy',
      upload: 'Upload',
    },
    console: {
      title: 'Console',
      clear: 'Clear',
    },
    editor: {
      js: 'JS',
      html: 'HTML',
    },
    debug: {
      preview: 'Preview',
      dom: 'Dom',
      data: 'Data',
    },
    message: {
      openDevTools: 'Currently logs can only be viewed via Developer Tools -> Console',
      modeT4: 'T4 mode requires the use of plug-ins, please make sure you have installed the plug-in, and the plug-in directory is drpy-node, and start the running state',
      htmlNoUrl: 'Parms url is empty',
      ruleNoHtml: 'You must get the source code first',
      ruleNoRule: 'Parms rule is empty',
      initNoData: 'The editor content is empty',
      initNoDebugId: 'Please init to get the debug id first',
      listNoT: 'Parms t is empty',
      detailNoIds: 'Parms ids is empty',
      searchNoWd: 'Parms wd is empty',
      playNoFlag: 'Parms flag is empty',
      playNoPlay: 'Parms play is empty',
      proxyNoUrl: 'Parms url is empty',
      proxyUploadNoData: 'Parms upload is empty',
      proxyUploadNoJson: 'Parms are not triples',
      playerNoUrl: 'Parms url is empty',
    },
    dialog: {
      player: {
        title: 'PlayTest',
      },
      request: {
        title: 'Request Parameters',
        reqEncode: 'Response Encode',
        reqHeader: 'Request Header',
        reqBody: 'Request Body',
        cancel: 'Reset',
      },
      sniffer: {
        title: 'SnifferParameters',
        ua: 'User-Agent',
        auxiliaryRegex: 'auxiliaryRegex',
        initScript: 'InitScript',
        runScript: 'RunScript',
        cancel: 'Reset',
      },
    },
  },
  staticFilter: {
    title: 'Static Filter',
    source: 'editSource',
    demo: 'Demo',
    action: {
      source: 'Source',
    },
    rule: {
      class: 'Class',
      className: 'ClassName',
      classUrl: 'ClassUrl',
      cateExclude: 'CateExclude',
      link: 'Link',
      filter: 'Filter',
      filterInfo: 'FilterInfo',
      excludeKeys: 'ExcludeKeys',
      try: 'Try',
      ctry: 'ClassTry',
      br: 'batchResults「ClassTry」',
      tf: 'currentFilter',
      ms: 'createMatchsList',
      reg: 'Reg',
      plot: 'Plot',
      area: 'Area',
      lang: 'Lang',
      year: 'Year',
      letter: 'Letter',
      sort: 'Sort',
    },
    select: {
      debug: 'Debug',
      source: 'Source',
      reset: 'Reset',
      format: 'Format',
      copy: 'Copy',
      encode: 'Encode',
      reg: 'Reg',
    },
    placeholder: {
      classNameTip: 'Supplement Name(e.g movie&plot)',
      classUrlTip: 'Supplement Id(e.g movie&plot)',
      classParseTip: 'Selector(e.g. list;title;url;match)',
      cateExcludeTip: 'Excluded(e.g. HOME｜APP)',
      linkTip: 'Splicing fyclass(e.g. /id/fyclass.html)',
      filterTip: 'Selector(e.g. body&&.scroll-content)',
      filterInfoTip: 'Selector(e.g. key;name;type;title;url)',
    },
    dialog: {
      request: {
        title: 'Request Parameters',
        reqEncode: 'Response Encode',
        reqHeader: 'Request Header',
        reqBody: 'Request Body',
        cancel: 'Reset',
      },
    },
    message: {
      htmlNoUrl: 'The parameter url is empty',
      inputNoClassParse: 'Parms classParse is empty',
      sourceFirst: 'Get source first',
      inputNoFilterAndFilterInfo: 'Parms filter or filterInfo is empty',
      classResultisEmpty: 'Please process the major categories first',
    },
  },
  aiBrain: {
    title: 'Ai - Creativity is limitless',
    declare: 'Content generated by AI macromodel, please screen carefully',
    params: 'OpenAI Parameters',
    server: 'Api Server',
    key: 'Api Key',
    model: 'Model',
    tip1: "OpenAI's official APIKey",
    tip2: 'Free APIKey',
    filter: 'Filter',
    cssSelector: 'cssSelector',
    qa: 'Q&A',
    save: 'Save',
    copy: 'Copy',
    codeSnippet: 'Code Snippet',
    demand: 'Demand',
    result: 'Result',
    instructionLibrary: 'instruction Library',
    fetch: 'Send',
    fetchTip: 'Enter someing...',
    codeSnippetTip: 'Enter html code snippet',
    setting: 'Setting',
    message: {
      contentEmpty: 'Content is empty',
      aiParmsEmpty: 'AI parms is empty',
    },
    placeholder: {
      send: 'Send message to AI',
    },
    platform: {
      title: 'Platform',
      openai: 'OpenAI',
      deepseek: 'DeepSeek',
      kimi: 'Kimi',
      free: 'Free',
    },
    chat: {
      modelChange: 'served by {model} model'
    }
  },
  dataCrypto: {
    nav: {
      hashCalculation: 'Hash Calculation',
      encodeDecode: 'Encode Decode',
      codeConversion: 'Code Conversion',
    },
    input: 'Input',
    output: 'Output',
    action: 'Action',
    generate: 'generate',
    encode: 'encode',
    decode: 'decode',
    message: {
      copySuccess: 'Copy success',
      copyFail: 'Copy fail',
      copyEmpty: 'Copy content is empty',
      inputEmpty: 'Input content is empty',
    },
    codeConversion: {
      unicode: 'UniCode',
      base64: 'Base64',
      html: 'Html',
      url: 'URL',
      hex: 'Hex',
      gzip: 'Gzip',
    },
    hashCalculation: {
      nav: {
        hash: 'Hash',
        hmac: 'Hmac',
      },
      content: 'Content',
      key: 'Key',
      hash: {
        md516: 'MD5-16',
        md532: 'MD5-32',
        sha1: 'SHA1',
        sha224: 'SHA224',
        sha256: 'SHA256',
        sha3: 'SHA3',
        sha384: 'SHA384',
        sha512: 'SHA512',
        sha512_224: 'SHA512/224',
        sha512_256: 'SHA512/256',
      },
    },
    encodeDecode: {
      content: 'Content',
      rsa: {
        name: 'RSA',
        padding: 'Padding',
        encode: 'Encode',
        base64: 'Base64',
        hex: 'Hex',
        oaep: 'RSA-OAEP',
        pkcs1: 'RSAES-PKCS1-V1_5',
        raw: 'RAW',
        key: 'Key',
        certType: 'CertType',
        publickKey: 'PublickKey',
        privateKey: 'PrivateKey',
        long: 'Long',
        normal: 'Normal',
        section: 'Section',
        block: 'Block',
        default: 'Default',
        auto: 'Auto',
      },
      rc4: {
        name: 'RC4',
        key: 'Key',
      },
      aes: {
        name: 'AES',
      },
      des: {
        name: 'DES',
      },
      tripleDES: {
        name: '3DES',
      },
      rabbit: {
        name: 'Rabbit',
      },
      rabbitLegacy: {
        name: 'RabbitLegacy',
      },
      crypto: {
        iv: 'IV',
        padding: 'Padding',
        encode: 'Encode',
        inputEncode: 'InputEncode',
        outputEncode: 'OutputEncode',
        mode: 'Mode',
        key: 'Key',
        base64: 'Base64',
        hex: 'Hex',
        utf8: 'Utf8',
        latin1: 'Latin1',
        cbc: 'CBC',
        ctr: 'CTR',
        cfb: 'CFB',
        ofb: 'OFB',
        ecb: 'ECB',
        pkcs7: 'PKCS7',
        zeroPadding: 'ZeroPadding',
        ansiX923: 'AnsiX923',
        iso10126: 'Iso10126',
        iso97971: 'iso97971',
        noPadding: 'NoPadding',
        message: {
          encodeNotUtf8: 'Encryption does not support utf8 as an output format',
          decodeNotUtf8: 'Decryption does not support utf8 as input format',
        },
      },
      sm4: {
        name: 'SM4',
      },
    },
  },
  snifferPlay: {
    sniffer: 'Sniffer',
    player: 'Player',
    play: 'Play',
    clear: 'Clear',
    result: 'Result',
    preview: 'Preview',
    snifferUrl: 'SnifferUrl',
    playUrl: 'PlayUrl',
    mediaType: 'MediaType',
    initScript: 'InitScript',
    runScript: 'RunScript',
    customRegex: 'CustomRegex',
    snifferExclude: 'SnifferExclude',
    headers: 'Headers',
    message: {
      playerNoUrl: 'The play url is empty',
      snifferNoUrl: 'The sniffer url is empty',
      headersNoJson: 'The headers is not in dictionary format',
      mediaNoType: 'Media type acquisition failed, please select manually',
    },
    tooltip: {
      playHeaders: 'Only hls support request headers',
    },
  },
  pluginCenter: {
    title: 'PluginCenter',
    server: 'Server',
    file: 'File',
    empty: 'Empty',
    info: {
      title: 'Info',
      author: 'Author',
      desc: 'Desc',
      status: 'Status',
      stop: 'Stop',
      start: 'Start',
      error: 'Error',
    },
    control: {
      title: 'Control',
      start: 'StartServer',
      stop: 'StopServer',
      devtool: 'Devtool',
      upgrade: 'Upgrade',
      update: 'Update',
      install: 'Install',
      uninstall: 'UnInstall',
      cancelTip: 'The current plug-in has an incomplete command, please wait moment',
      devtoolDomAttchErrTip: 'The DOM is not mounted on the page, and the developer Tool failed to open',
      loadUiEntryError: 'Failed to load entry',
    },
    content: {
      title: 'README',
    },
    webview: {
      title: 'ContentView',
    },
    installDialog: {
      tip: {
        tip1: 'Put the project into the specified directory, the file name must not have any special characters (if it is already in the directory, it will be ignored).',
        tip2: 'Enter the project name to install (project file name)',
      },
      step: 'Step',
      goDir: 'Go to Specified Directory',
      confirm: 'Install',
    },
  },
  fileDiff: {
    file: 'File',
    origin: 'Origin',
    target: 'Target',
    diff: 'Diff',
  },
};
