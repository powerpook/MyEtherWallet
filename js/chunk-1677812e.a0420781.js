(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1677812e"],{"0a2c":function(t,e,a){},"102f":function(t,e,a){},1768:function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"expanding-option",class:t.hidebottomborder?"hide-bottom-border":""},[a("div",{staticClass:"title-bar-container"},[a("div",{staticClass:"input-title"},[t._v(t._s(t.title))]),t.popover?a("popover",{attrs:{popcontent:t.popover}}):t._e(),""===t.buttonText||t.showEnable?t._e():a("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]),t.showEnable&&!t.expanded?a("div",{staticClass:"button-text"},[t._v(" "+t._s(t.buttonText)+" ")]):t._e(),t.showEnable&&t.expanded?a("div",{staticClass:"button-text"},[t._v(" "+t._s(t.$t("common.yes"))+" ")]):t._e(),a("div",{staticClass:"switch sliding-switch-white"},[a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},on:{click:t.optionExpanded}}),a("span",{staticClass:"slider round"})])])],1),a("div",{staticClass:"contnet-container",class:t.expanded?"expanded":""},[a("div",{staticClass:"content-block"},[t._t("default")],2)])])},s=[],i={props:{title:{type:String,default:""},buttonText:{type:String,default:""},hidebottomborder:{type:Boolean,default:!1},popover:{type:String,default:""},showEnable:{type:Boolean,default:!1}},data:function(){return{expanded:!1}},methods:{optionExpanded:function(){this.expanded=!this.expanded,this.$emit("expanded",this.expanded)}}},o=i,r=(a("a158"),a("2877")),c=Object(r["a"])(o,n,s,!1,null,"0fe729f8",null),l=c.exports},"1b0c":function(t,e,a){"use strict";a.d(e,"a",(function(){return l}));var n=function(t,e){var a=e._c;return a("div",{staticClass:"title-text-contents"},[e.props.options.title?a("div",{staticClass:"title-block"},[a("div",{staticClass:"title"},[e.props.options.titleIcon?a("img",{attrs:{src:e.props.options.titleIcon,alt:""}}):e._e(),a("span",[e._v(e._s(e.props.options.title))])])]):e._e(),e.props.options.boldSubTitle?a("div",{staticClass:"bold-sub-title"},[e._v(" "+e._s(e.props.options.boldSubTitle)+" ")]):e._e(),e.props.options.textContent?a("div",{staticClass:"text-content"},e._l(e.props.options.textContent,(function(t){return a("p",{key:t.key},[e._v(" "+e._s(t)+" ")])})),0):e._e()])},s=[],i={props:{options:{type:Object,default:function(){return{}}}}},o=i,r=(a("9a5c"),a("2877")),c=Object(r["a"])(o,n,s,!0,null,"7c937913",null),l=c.exports},"3c72":function(t,e,a){"use strict";var n=a("7c8b"),s=a.n(n);s.a},"7c8b":function(t,e,a){},8859:function(t,e,a){"use strict";var n=a("0a2c"),s=a.n(n);s.a},"9a5c":function(t,e,a){"use strict";var n=a("da89"),s=a.n(n);s.a},"9f16":function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return P}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-offline-helper"},[a("div",{staticClass:"page-container"},[a("div",{staticClass:"wrap"},[a("div",{staticClass:"page-title"},[a("page-title",{attrs:{options:{title:t.$t("withoutWallet.offline-helper"),boldSubTitle:"",textContent:[]}}})],1),a("div",{staticClass:"page-content-container"},[a("div",{staticClass:"collapse-container"},[a("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage1,title:t.$t("withoutWallet.select-network"),"right-text":t.networkTitle,number:"1"},on:{titleClicked:function(e){t.stage1=!t.stage1}}},[a("ul",{staticClass:"networks"},t._l(Object.keys(t.reorderNetworkList),(function(e,n){return a("li",{key:t.$router.path+e+n},[a("div",{staticClass:"network-title"},[a("div",{staticClass:"network-icon"},["Custom Networks"!==e&&t.Networks[e][0].type.icon?a("img",{attrs:{src:t.Networks[e][0].type.icon,alt:""}}):t._e(),"Custom Networks"===e||t.Networks[e][0].type.icon?t._e():a("div",{staticClass:"no-icon"},[a("p",[t._v(t._s(t.$t("common.no-icon")))])])]),a("p",[t._v(t._s(e))])]),a("div",{staticClass:"network-content"},t._l(t.reorderNetworkList[e],(function(e){return a("p",{key:e.service,class:e.service===t.selectedNetwork.service&&e.type&&e.type.name===t.selectedNetwork.type.name?"current-network":"",on:{click:function(a){return t.callSwitchNetwork(e)}}},[t._v(" "+t._s(e.service)+" ")])})),0)])})),0)])],1),a("accordion-menu",{staticClass:"address-selector",attrs:{greytitle:!1,editbutton:!0,isopen:t.stage2,title:t.$t("withoutWallet.generate-info"),number:"2"},on:{titleClicked:function(e){t.stage2=!t.stage2}}},[a("dropdown-address-selector",{attrs:{title:t.$t("sendTx.from-addr")},on:{toAddress:function(e){return t.generateInformation(e)}}}),t.informationGenerated?a("div",[a("ul",[a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.sender"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.address))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.nonce"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.nonce))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.chain-id"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.chainID)+" ("+t._s(t.genInfo.networkName)+")")])]),a("li",{staticClass:"detail-container with-divider"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.current-gas"))+":")]),a("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.toGwei(t.genInfo.gasPrice))+" "+t._s(t.$t("common.gas.gwei"))+" ")])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.retrieved"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.dateTimeDisplay(t.genInfo.timestamp)))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.at-block"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.genInfo.blockNumber))])])])]):t._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:t.informationGenerated,expression:"informationGenerated"}],staticClass:"button-container"},[a("a",{ref:"generatedDownloadLink",attrs:{href:t.generatedJson,download:t.exportFileName,rel:"noopener noreferrer"}},[a("standard-button",{attrs:{options:{title:t.$t("withoutWallet.export-json"),buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0}}})],1),a("standard-button",{attrs:{options:{title:t.$t("common.continue"),buttonStyle:"green",noWalletTerms:!0,rightArrow:!0},"click-function":t.stage2Btn}})],1)],1),a("accordion-menu",{attrs:{greytitle:!1,isopen:t.stage3,title:t.$t("withoutWallet.signed-tx"),number:"3"},on:{titleClicked:function(e){t.stage3=!t.stage3}}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.rawSigned,expression:"rawSigned"}],staticClass:"no-margin raw-tx-input",domProps:{value:t.rawSigned},on:{input:function(e){e.target.composing||(t.rawSigned=e.target.value)}}}),t._v(" "),t.invalidSignature?a("p",[t._v(t._s(t.$t("sendTx.invalid-signature")))]):t._e(),t.wrongNetwork&&""===t.correctNetwork?a("i18n",{attrs:{tag:"p",path:"sendTx.signed-chain-id"}}):t._e(),t.wrongNetwork&&""!==t.correctNetwork?a("i18n",{attrs:{tag:"p",path:"sendTx.signed-chain-id"}},[a("span",{attrs:{slot:"network"},slot:"network"},[t._v("("+t._s(t.correctNetwork)+")")])]):t._e(),a("expanding-option",{attrs:{title:t.$t("sendTx.raw-tx")}},[a("textarea",{staticClass:"no-margin raw-tx-input",attrs:{disabled:""},domProps:{value:JSON.stringify(t.rawTx)}})]),a("div",{staticClass:"button-container"},[a("input",{ref:"jsonInput",staticStyle:{display:"none"},attrs:{type:"file",name:"file"},on:{change:t.uploadFile}}),a("standard-button",{attrs:{options:{title:t.$t("withoutWallet.upload-json"),buttonStyle:"green-border",noWalletTerms:!0,noMinWidth:!0},"click-function":t.uploadClick}}),a("standard-button",{attrs:{options:{title:t.$t("common.continue"),buttonStyle:"green",noWalletTerms:!0},"click-function":t.stage3Btn}})],1)],1),a("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage4,title:t.$t("withoutWallet.tx-details"),number:"4"},on:{titleClicked:function(e){t.stage4=!t.stage4}}},[a("ul",[a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.sender"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.from))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.receiver"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.to))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.nonce"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.nonce))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.value"))+":")]),a("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.toEth(t.value))+" "+t._s(t.selectedNetwork.type.currencyName)+" ")])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("sendTx.data"))+":")]),"0x"!==t.data?a("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.truncateData(t.data))+" "),a("span",{staticClass:"show-all-btn",on:{click:function(e){t.showAllData=!t.showAllData}}},[t._v(t._s(t.$t("common.show-all")))])]):a("span",{staticClass:"data-all"},[t._v(t._s(t.data))]),t.showAllData?a("span",{staticClass:"data-all"},[t._v(t._s(t.data))]):t._e()]),a("li",{staticClass:"detail-container with-divider"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.chain-id"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.chainID)+" ("+t._s(t.selectedNetwork.type.name_long)+")")])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.limit"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.gasLimit))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.price"))+":")]),a("span",{staticClass:"detail-text"},[t._v(t._s(t.toGwei(t.gasPrice))+" "+t._s(t.$t("common.gas.gwei")))])]),a("li",{staticClass:"detail-container"},[a("span",{staticClass:"detail-name"},[t._v(t._s(t.$t("common.gas.fee"))+":")]),a("span",{staticClass:"detail-text"},[t._v(" "+t._s(t.toEth(t.toWei(t.fee)))+" "+t._s(t.selectedNetwork.type.currencyName)+" ($ "+t._s(t.calculateCost(t.fee))+") ")])])]),a("div",{staticClass:"button-container"},[a("standard-button",{attrs:{options:{title:t.$t("common.send"),buttonStyle:"green",noWalletTerms:!0,rightArrow:!0},"click-function":t.stage4Btn}})],1)]),a("accordion-menu",{attrs:{greytitle:!1,editbutton:!1,isopen:t.stage5,title:t.$t("withoutWallet.tx-status"),number:"5"},on:{titleClicked:function(e){t.stage5=!t.stage5}}},[""===t.error?a("ul",[a("li",{staticClass:"tx-hash-container"},[a("p",[t._v(t._s(t.$t("sendTx.tx-hash"))+":")]),a("a",{staticClass:"detail-text",attrs:{href:t.replaceUrl("",t.txHash),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.txHash))])]),a("li",{staticClass:"tx-receipt-container"},[a("p",[t._v(t._s(t.$t("sendTx.transaction-receipt"))+":")]),Object.keys(t.txReceipt).length>0?a("div",{staticClass:"tx-receipt-items"},t._l(Object.keys(t.txReceipt),(function(e,n){return a("div",{key:e+n},[a("span",[t._v(t._s(t.getTranslatedItem(e)))]),"transactionHash"===e?a("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("",t.txReceipt[e]),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.txReceipt[e]))]):"contractAddress"===e?a("a",{staticClass:"right-side",attrs:{href:t.replaceUrl("address",t.txReceipt[e]),target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.txReceipt[e]))]):a("span",{staticClass:"right-side"},[t._v(t._s(t.txReceipt[e]))])])})),0):a("div",{staticClass:"loading"},[t._v(t._s(t.$t("common.loading"))+"....")])])]):a("div",[t._v(t._s(t.error))])])],1)])]),a("confirmation-modal",{ref:"offlineConfirm",attrs:{"raw-tx":t.rawTx,"signed-tx":t.rawSigned,"env-details":t.envDetails}})],1)},s=[],i=(a("99af"),a("4de4"),a("fb6a"),a("b0c0"),a("b680"),a("d3b7"),a("07ac"),a("ac1f"),a("25f0"),a("3ca3"),a("5319"),a("ddb0"),a("2b3d"),a("bf19"),a("0122")),o=(a("96cf"),a("c964")),r=a("f3f3"),c=a("8d23"),l=a("2f62"),d=a("a731"),u=a("901e"),p=a.n(u),h=a("1131"),f=a.n(h),g=a("8761"),m=a("8ded"),w=a.n(m),v=a("1b0c"),_=a("4234"),x=a("94b2"),b=a("a8f0"),C=a("1768"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"send-offline-confirmation-modal"},[a("b-modal",{ref:"sendOfflineConfirmation",staticClass:"bootstrap-modal-wide nopadding",attrs:{title:t.$t("sendTx.confirmation.title"),"hide-footer":"",centered:"",static:"",lazy:""}},[a("div",{staticClass:"modal-contents"},[a("div",{staticClass:"tx-info-container"},[a("ul",[a("li",[t._v(t._s(t.$t("sendTx.from-addr")))]),a("li",[t._v(t._s(t.rawTx.from))])]),a("ul",[a("li",[t._v(t._s(t.$t("sendTx.to-addr")))]),a("li",[t._v(t._s(t.rawTx.to))])]),a("ul",[a("li",[t._v(t._s(t.$t("sendTx.nonce")))]),a("li",[t._v(t._s(t.rawTx.nonce))])]),a("ul",[a("li",[t._v(t._s(t.$t("common.value"))+"/li>")]),a("li",[t._v(t._s(t.rawTx.value))])]),a("ul",[a("li",[t._v(t._s(t.$t("sendTx.data")))]),a("li",{staticClass:"data"},[t._v(t._s(t.rawTx.data))])]),a("ul",[a("li",[t._v(t._s(t.$t("common.chain-id")))]),a("li",[t._v(t._s(t.rawTx.chainID))])]),a("ul",[a("li",[t._v(t._s(t.$t("common.gas.limit"))+"t")]),a("li",[t._v(t._s(t.rawTx.gasLimit))])]),a("ul",[a("li",[t._v(t._s(t.$t("common.gas.price")))]),a("li",[t._v(t._s(t.rawTx.gasPrice))])])]),a("expanding-option",{attrs:{hidebottomborder:!0,title:t.$t("sendTx.signed.tx")}},[a("div",{staticClass:"raw-signed"},[t._v(t._s(t.signedTx))])]),a("expanding-option",{attrs:{title:t.$t("sendTx.raw-tx")}},[t._v(t._s(t.rawTx))]),a("div",{staticClass:"button-block-container"},[a("standard-button",{attrs:{options:t.buttonConfirmAndSend}})],1)],1)])],1)},T=[],y={name:"SendOfflineConfirmation",components:{"standard-button":b["a"],"expanding-option":C["a"]},props:{envDetails:{type:Object,default:function(){return{}}},rawTx:{type:Object,default:function(){return{}}},signedTx:{type:String,default:""}},data:function(){return{modalDetailInformation:!1,inputRawTx:{isTextarea:!0,buttonClear:!0,buttonCopy:!0},buttonConfirmAndSend:{title:"Confirm & Send",buttonStyle:"green",helpCenter:!0}}},beforeDestroy:function(){},methods:{}},N=y,$=(a("8859"),a("2877")),S=Object($["a"])(N,k,T,!1,null,"3c183fc0",null),I=S.exports,D=a("3297"),j=a.n(D),O={components:{"page-title":v["a"],"accordion-menu":_["a"],"dropdown-address-selector":x["a"],"standard-button":b["a"],"expanding-option":C["a"],"confirmation-modal":I},data:function(){return{networkTypes:Object.values(g),selectedNetwork:this.$store.state.main.network,stage1:!1,stage2:!0,stage3:!1,stage4:!1,stage5:!1,showAllData:!1,informationGenerated:!1,downloadable:!1,from:"0x",rawSigned:"",minAccountBalance:0,fee:0,nonce:0,gasPrice:0,gasLimit:0,to:"0x",value:0,data:"0x",chainID:0,ethPrice:0,genInfo:{address:"0x",gasPrice:0,nonce:0,chainID:this.$store.state.main.network.type.chainID,networkName:this.$store.state.main.network.type.name_long},generatedJson:{},file:"",exportFileName:"Generated Information",invalidSignature:!1,wrongNetwork:!1,correctNetwork:"",txHash:"",txReceipt:{},error:""}},computed:Object(r["a"])({},Object(l["c"])("main",["network","Networks","customPaths","path","web3","wallet","online"]),{reorderNetworkList:function(){var t=void 0!==w.a.get("customNetworks")?w.a.get("customNetworks"):[],e=d["a"].reorderNetworks(),a=Object.assign({},e,{"Custom Networks":t});return 0===t.length&&delete a["Custom Networks"],a},networkTitle:function(){return"".concat(this.selectedNetwork.type.name," - ").concat(this.selectedNetwork.service," ")},rawTx:function(){return{from:this.from,nonce:this.nonce,gasPrice:this.toGwei(this.gasPrice),gasLimit:this.gasLimit,to:this.to,value:this.toEth(this.value),data:this.data,chainID:this.chainID}},envDetails:function(){return{network:this.selectedNetwork,ethPrice:this.ethPrice}}}),watch:{rawSigned:function(t){this.getTransactionDetails(t)}},mounted:function(){this.callSwitchNetwork(this.$store.state.main.network),this.online&&this.fetchBalanceData()},methods:Object(r["a"])({},Object(l["b"])("main",["switchNetwork","setWeb3Instance","setENS"]),{callSetENS:function(){this.network.type.ens?this.setENS(new j.a(this.web3.currentProvider,this.network.type.ens.registry)):this.setENS(null)},getTranslatedItem:function(t){var e=t.replace(/([A-Z])/g,"-$1").toLowerCase();return this.$t("withoutWallet."+e)},replaceUrl:function(t,e){return"address"===t?this.network.type.blockExplorerAddr.replace("[[address]]",e):this.network.type.blockExplorerTX.replace("[[txHash]]",e)},stage1Btn:function(){this.stage1=!1,this.stage2=!0},stage2Btn:function(){this.stage2=!1,this.stage3=!0},stage3Btn:function(){this.stage3=!1,this.stage4=!0},stage4Btn:function(){var t=this;this.stage4=!1,this.stage5=!0,""!==this.rawSigned&&(this.error=this.txHash="",this.txReceipt={},this.web3.eth.sendSignedTransaction(this.rawSigned).once("transactionHash",(function(e){t.txHash=e})).then((function(e){t.txReceipt=e})).catch((function(e){t.error=e})))},callSwitchNetwork:function(t){var e=this;this.switchNetwork(t).then((function(){e.selectedNetwork=t,e.setWeb3Instance(),e.stage1Btn(),e.getTransactionDetails(),e.callSetENS()}))},truncateData:function(t){return t?"".concat(t.slice(0,20),"...").concat(t.slice(-10)):""},getTransactionDetails:function(t){var e=this,a={nonce:0,gasPrice:1,gasLimit:2,to:3,value:4,data:5,v:6,r:7,s:8};if(t&&(this.rawSigned=t),""!==this.rawSigned){var n=d["a"].sanitizeHex(this.rawSigned),s=new c["Transaction"](n,{chain:this.genInfo["chainID"]});if(this.invalidSignature=!s.verifySignature(),this.chainID=s.getChainId(),this.wrongNetwork=!new p.a(this.selectedNetwork.type.chainID).eq(new p.a(this.chainID)),this.chainID=s.getChainId(),this.wrongNetwork){var i=this.networkTypes.filter((function(t){return t.chainID===e.chainID}));i&&(this.correctNetwork=i[0].name_long)}this.from=d["a"].sanitizeHex(s.getSenderAddress().toString("hex"));var o=s.toJSON();this.to=o[a.to],this.gasLimit=new p.a(o[a.gasLimit]).toFixed(),this.nonce=new p.a(o[a.nonce]).toFixed(),this.value=new p.a(o[a.value]).toFixed(),this.data=o[a.data],this.minAccountBalance=s.getUpfrontCost().toString(),this.gasPrice=new p.a(d["a"].sanitizeHex(s.gasPrice.toString("hex"))).toFixed(),this.fee=new p.a(this.toGwei(this.gasPrice)).times(this.gasLimit).toString()}},fetchBalanceData:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var a,n,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="https://cryptorates.mewapi.io/ticker",e.next=3,fetch(a);case 3:return n=e.sent,e.next=6,n.json();case 6:if(s=e.sent,i=s.data,i["ETH"]){e.next=10;break}return e.abrupt("return",0);case 10:t.ethPrice=new p.a(i["ETH"].quotes.USD.price);case 11:case"end":return e.stop()}}),e)})))()},toEth:function(t){return!t||isNaN(t)?0:f.a.fromWei(new p.a(t).toString(),"ether")},toWei:function(t){return t?f.a.toWei(new p.a(t).toFixed(),"gwei"):0},toGwei:function(t){return t?f.a.fromWei(new p.a(t).toFixed(),"gwei"):0},dateTimeDisplay:function(t){return new Date(t).toString()},calculateCost:function(t){var e=this.toWei(t),a=new p.a(this.ethPrice).times(this.toEth(e)).precision(2,p.a.ROUND_UP).toNumber();return a<.01?.01:a},generateInformation:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(""!==t.address){a.next=2;break}return a.abrupt("return");case 2:return e.genInfo["address"]=t.address,a.next=5,e.web3.eth.getGasPrice();case 5:return e.genInfo["gasPrice"]=a.sent,a.next=8,e.web3.eth.getTransactionCount(t.address);case 8:return e.genInfo["nonce"]=a.sent,a.next=11,e.web3.eth.getBlockNumber();case 11:e.genInfo["blockNumber"]=a.sent,e.genInfo["chainID"]=e.selectedNetwork.type.chainID,e.genInfo["timestamp"]=Date.now(),e.exportGeneratedInfo(),e.informationGenerated=!0;case 16:case"end":return a.stop()}}),a)})))()},exportGeneratedInfo:function(){var t=this,e=function(e,a){var n="object"===Object(i["a"])(e)?JSON.stringify(e):e;if(null===n)return"";var s=new Blob([n],{type:a});return t.downloadable=!0,window.URL.createObjectURL(s)};this.generatedJson=e(this.genInfo,"mime"),this.exportFileName="generated-offline-tx-".concat(Date.now(),".json")},uploadClick:function(){var t=this.$refs.jsonInput;t.value="",t.click()},uploadFile:function(t){var e=this,a=new FileReader;a.onloadend=function(t){e.file=JSON.parse(t.target.result),e.getTransactionDetails(e.file.rawTransaction)},a.readAsBinaryString(t.target.files[0])}})},W=O,E=(a("3c72"),Object($["a"])(W,n,s,!1,null,"fcceb70a",null)),P=E.exports},a158:function(t,e,a){"use strict";var n=a("102f"),s=a.n(n);s.a},da89:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1677812e.a0420781.js.map