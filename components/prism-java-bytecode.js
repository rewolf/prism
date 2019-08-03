Prism.languages['java-bytecode'] = {
	'comment': /\/\/.*/,
	// 'directive': {
	// 	pattern: /\binvokespecial\b/,
	// 	alias: 'keyword'
	// },
	// 'string': /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
	'method-mnemonic': {
    //pattern: /\b(?:aaload|aload_0|aload_1)\b/,
    pattern: /(\d+:)\s+(invoke\w+)\b/i,
		alias: 'keyword',
    lookbehind: true
	},
	'mnemonic': {
    //pattern: /\b(?:aaload|aload_0|aload_1)\b/,
    pattern: /(\d+:)\s+(\w+)\b/i,
		alias: 'property',
    lookbehind: true
	},
	// 'hexnumber': {
	// 	pattern: /#?\$[\da-f]{2,4}/i,
	// 	alias: 'string'
	// },
	// 'binarynumber': {
	// 	pattern: /#?%[01]+/,
	// 	alias: 'string'
	// },
	// 'decimalnumber': {
	// 	pattern: /#?\d+/,
	// 	alias: 'string'
	// },
	'constant': {
		pattern: /#\d+\b/i,
    alias: 'variable'
	}
};
