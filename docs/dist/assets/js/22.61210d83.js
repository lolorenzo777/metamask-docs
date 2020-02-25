(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{298:function(t,e,a){"use strict";a.r(e);var s=a(24),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"experimental-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#experimental-apis","aria-hidden":"true"}},[t._v("#")]),t._v(" Experimental APIs")]),t._v(" "),a("h2",{attrs:{id:"wallet-watchasset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wallet-watchasset","aria-hidden":"true"}},[t._v("#")]),t._v(" wallet_watchAsset")]),t._v(" "),a("p",[t._v("Most all Ethereum wallets display some set of tokens, usually from a centrally curated registry of tokens.")]),t._v(" "),a("p",[t._v("At MetaMask, we believe the future of tokens has the potential to be much bigger than any one party can curate, and we want to enable this explosion of creativity.")]),t._v(" "),a("p",[t._v("In support of this goal, we have implemented support for "),a("a",{attrs:{href:"https://github.com/estebanmino/EIPs/blob/master/EIPS/eip-747.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP 747"),a("OutboundLink")],1),t._v(", which provides a way for your site to suggest a token that a user might want to track in their wallet.")]),t._v(" "),a("p",[t._v("The code is simple:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("ethereum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tmethod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'metamask_watchAsset'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tparams"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ERC20"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Initially only supports ERC20, but eventually more!")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"options"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenAddress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The address that the token is at.")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"symbol"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenSymbol"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A ticker symbol or shorthand, up to 5 chars.")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"decimals"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenDecimals"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The number of decimals in the token")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"image"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" tokenImage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// A string url of the token logo")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addedBoolean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("We even created a sample Dapp so developers could suggest their tokens to users with a simple hyperlink, without a line of code. "),a("a",{attrs:{href:"https://github.com/MetaMask/Add-Token",target:"_blank",rel:"noopener noreferrer"}},[t._v("Visit it here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"ethereum-metamask"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-metamask","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("ethereum._metamask")])]),t._v(" "),a("p",[t._v("MetaMask supports the standard Ethereum Provider API as defined in both "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1193"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1102.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("EIP-1102"),a("OutboundLink")],1),t._v(". In addition to "),a("code",[t._v("ethereum.enable()")]),t._v(" and its RPC equivalent "),a("code",[t._v("ethereum.send('eth_requestAccounts')")]),t._v(", MetaMask also exposes a collection of nonstandard convenience methods on the provider object at "),a("code",[t._v("ethereum._metamask")]),t._v(". "),a("strong",[t._v("Using these methods is dangerous")]),t._v(" since other dapp browsers may or may not implement them; for this reason, these methods are intentionally kept at a MetaMask-specific namespace to avoid confusion with standard provider functionality.")]),t._v(" "),a("p",[t._v("Each method and its intended use is described below.")]),t._v(" "),a("h3",{attrs:{id:"ethereum-metamask-isenabled-boolean-to-be-removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-metamask-isenabled-boolean-to-be-removed","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("ethereum._metamask.isEnabled: () => boolean")]),t._v(" (To Be Removed)")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" This will be removed in "),a("strong",[t._v("Q1 2020")]),t._v(".")]),t._v(" "),a("p",[t._v("This method returns a "),a("code",[t._v("boolean")]),t._v(" indicating if the current domain has access to user accounts. This is useful for determining if a user has approved account access for the current session.")]),t._v(" "),a("h3",{attrs:{id:"ethereum-metamask-isapproved-promise-boolean-to-be-removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-metamask-isapproved-promise-boolean-to-be-removed","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("ethereum._metamask.isApproved: () => Promise<boolean>")]),t._v(" (To Be Removed)")]),t._v(" "),a("p",[a("strong",[t._v("Note:")]),t._v(" This will be removed in "),a("strong",[t._v("Q1 2020")]),t._v(".")]),t._v(" "),a("p",[t._v("This method returns a "),a("code",[t._v("Promise")]),t._v(" that resolves to a "),a("code",[t._v("Boolean")]),t._v(" indicating if the current domain has a cached approval. This is useful for determining if an approval popup will show when "),a("code",[t._v("ethereum.enable()")]),t._v(" is called, since it indicates if a past approval exists.")]),t._v(" "),a("h3",{attrs:{id:"ethereum-metamask-isunlocked-promise-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ethereum-metamask-isunlocked-promise-boolean","aria-hidden":"true"}},[t._v("#")]),t._v(" "),a("code",[t._v("ethereum._metamask.isUnlocked: () => Promise<boolean>")])]),t._v(" "),a("p",[t._v("This method returns a "),a("code",[t._v("Promise")]),t._v(" that resolves to a "),a("code",[t._v("Boolean")]),t._v(" indicating if MetaMask is unlocked by the user. This is useful for knowing if MetaMask is unlocked in order to provide meaningful instructions to the user during onboarding. Note that this does not indicate if a user has approved account exposure.")])])},[],!1,null,null,null);e.default=n.exports}}]);