(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{302:function(e,t,r){"use strict";r.r(t);var a=r(24),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"registering-your-contract-s-method-names"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#registering-your-contract-s-method-names","aria-hidden":"true"}},[e._v("#")]),e._v(" Registering Your Contract's Method Names")]),e._v(" "),r("p",[e._v("MetaMask uses the parity on-chain registry of function signatures to display method names on the confirm screen. For many common method names, like token methods, this allows MetaMask to successfully look up the method names by their "),r("a",{attrs:{href:"https://solidity.readthedocs.io/en/v0.4.21/abi-spec.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("method signature"),r("OutboundLink")],1),e._v(". However, sometimes you're using a method that is not in that on-chain registry, and MetaMask will simply display "),r("code",[e._v("Unknown Function")]),e._v(" to the user.")]),e._v(" "),r("p",[e._v("To add your contract's function names to this registry so it shows in the MetaMask interface, follow the below steps.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Go to the "),r("a",{attrs:{href:"https://etherscan.io/address/0x44691b39d1a75dc4e0a0346cbb15e310e6ed1e86#writeContract",target:"_blank",rel:"noopener noreferrer"}},[e._v("mainnet parity signature registration contract on etherscan"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[e._v("Connect MetaMask")])]),e._v(" "),r("li",[r("p",[e._v("Use etherscan's write contract feature to input the string value (without quotes or spaces) to the register function")]),e._v(" "),r("p",[e._v("for example:")]),e._v(" "),r("p",[r("code",[e._v("getOwners()")])]),e._v(" "),r("p",[r("code",[e._v("execTransaction(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,bytes)")])])]),e._v(" "),r("li",[r("p",[e._v("Press write")])]),e._v(" "),r("li",[r("p",[e._v("Approve the transaction through MetaMask (you only pay gas)")])])]),e._v(" "),r("h5",{attrs:{id:"verify"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#verify","aria-hidden":"true"}},[e._v("#")]),e._v(" Verify")]),e._v(" "),r("p",[r("code",[e._v("web3.sha3('getOwners()') => 0xa0e67e2bdc0a6d8a09ccd6c353c9df590807ad66ff5e6630c4f31a86dfa84821")])]),e._v(" "),r("p",[e._v("take the first 10 characters "),r("code",[e._v("0xa0e67e2b")]),e._v("\nand input into "),r("strong",[r("a",{attrs:{href:"https://jennypollack.github.io/function_signature_registry/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this demo app"),r("OutboundLink")],1),e._v(" that checks the on-chain registry")]),e._v(" (mainnet or rinkeby)")]),e._v(" "),r("h5",{attrs:{id:"alternate-steps-using-remix-ethereum-org"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#alternate-steps-using-remix-ethereum-org","aria-hidden":"true"}},[e._v("#")]),e._v(" Alternate steps using remix.ethereum.org:")]),e._v(" "),r("p",[e._v("Paste the contract code from "),r("a",{attrs:{href:"https://www.bokconsulting.com.au/blog/a-quick-look-at-paritys-signature-registry-contract/",target:"_blank",rel:"noopener noreferrer"}},[e._v("bokky's blog post"),r("OutboundLink")],1),e._v(" into "),r("a",{attrs:{href:"remix.ethereum.org"}},[e._v("remix")])]),e._v(" "),r("p",[e._v("Set the correct compiler version based on the contract.")]),e._v(" "),r("p",[e._v("Use remix's write functionality to add to the registry.")]),e._v(" "),r("p",[e._v("You can look at the FUNCTIONHASHES section on remix.ethereum.org by loading the signature registry contract, press the Details button on the compile tab.")]),e._v(" "),r("h5",{attrs:{id:"additional-info"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#additional-info","aria-hidden":"true"}},[e._v("#")]),e._v(" Additional Info")]),e._v(" "),r("p",[e._v("You can also use the "),r("a",{attrs:{href:"https://rinkeby.etherscan.io/address/0x0c0831fb1ec7442485fb41a033ba188389a990b4",target:"_blank",rel:"noopener noreferrer"}},[e._v("signature registry"),r("OutboundLink")],1),e._v(" deployed on rinkeby but should note that "),r("strong",[e._v("MetaMask reads from the mainnet eth-method-registry endpoint, regardless of user's network")])]),e._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/danfinlay/eth-method-registry",target:"_blank",rel:"noopener noreferrer"}},[e._v("eth-method-registry"),r("OutboundLink")],1),e._v(" is used to lookup methods in MetaMask.")]),e._v(" "),r("p",[e._v("This "),r("a",{attrs:{href:"https://ethereum.stackexchange.com/questions/59678/metamask-shows-unknown-function-when-calling-method-send-function",target:"_blank",rel:"noopener noreferrer"}},[e._v("stack exchange"),r("OutboundLink")],1),e._v(" answer is a good "),r("strong",[e._v("tldr")]),e._v(".")])])},[],!1,null,null,null);t.default=n.exports}}]);