function t(t,e,i,r){var s,a=arguments.length,n=a<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(s=t[o])&&(n=(a<3?s(n):a>3?s(e,i,n):s(e,i))||n);return a>3&&n&&Object.defineProperty(e,i,n),n}!function(){const t={DEBUG:!1};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},r=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${r}--\x3e`,a=new RegExp(`${r}|${s}`);class n{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let l=0,p=-1,h=0;const{strings:y,values:{length:f}}=t;for(;h<f;){const t=n.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let r=0;for(let t=0;t<i;t++)o(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=y[h],i=d.exec(e)[2],r=i.toLowerCase()+"$lit$",s=t.getAttribute(r);t.removeAttribute(r);const n=s.split(a);this.parts.push({type:"attribute",index:p,name:i,strings:n}),h+=n.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,s=e.split(a),n=s.length-1;for(let e=0;e<n;e++){let i,a=s[e];if(""===a)i=c();else{const t=d.exec(a);null!==t&&o(t[2],"$lit$")&&(a=a.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),i=document.createTextNode(a)}r.insertBefore(i,t),this.parts.push({type:"node",index:++p})}""===s[n]?(r.insertBefore(c(),t),i.push(t)):t.data=s[n],h+=n}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&p!==l||(p++,e.insertBefore(c(),t)),l=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(i.push(t),p--),h++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),h++}}else n.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const o=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function p(t,e){const{element:{content:i},parts:r}=t,s=document.createTreeWalker(i,133,null,!1);let a=y(r),n=r[a],o=-1,l=0;const c=[];let d=null;for(;s.nextNode();){o++;const t=s.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==n&&n.index===o;)n.index=null!==d?-1:n.index-l,a=y(r,a),n=r[a]}c.forEach(t=>t.parentNode.removeChild(t))}const h=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},y=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(l(e))return i}return-1};const f=new WeakMap,u=t=>"function"==typeof t&&f.has(t),m={},k={};class g{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],r=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let a,n=0,o=0,c=s.nextNode();for(;n<r.length;)if(a=r[n],l(a)){for(;o<a.index;)o++,"TEMPLATE"===c.nodeName&&(i.push(c),s.currentNode=c.content),null===(c=s.nextNode())&&(s.currentNode=i.pop(),c=s.nextNode());if("node"===a.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,a.name,a.strings,this.options));n++}else this.__parts.push(void 0),n++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}const x=` ${r} `;class v{constructor(t,e,i,r){this.strings=t,this.values=e,this.type=i,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let a=0;a<t;a++){const t=this.strings[a],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const o=d.exec(t);e+=null===o?t+(i?x:s):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}const w=t=>null===t||!("object"==typeof t||"function"==typeof t),G=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class _{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,e=t.length-1;let i="";for(let r=0;r<e;r++){i+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(w(t)||!G(t))i+="string"==typeof t?t:String(t);else for(const e of t)i+="string"==typeof e?e:String(e)}}return i+=t[e],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===m||w(t)&&t===this.value||(this.value=t,u(t)||(this.committer.dirty=!0))}commit(){for(;u(this.value);){const t=this.value;this.value=m,t(this)}this.value!==m&&this.committer.commit()}}class b{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;u(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}const t=this.__pendingValue;t!==m&&(w(t)?t!==this.value&&this.__commitText(t):t instanceof v?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):G(t)?this.__commitIterable(t):t===k?(this.value=k,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof g&&this.value.template===e)this.value.update(t.values);else{const i=new g(e,t.processor,this.options),r=i._clone();i.update(t.values),this.__commitNode(r),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,r=0;for(const s of t)i=e[r],void 0===i&&(i=new b(this.options),e.push(i),0===r?i.appendIntoPart(this):i.insertAfterPart(e[r-1])),i.setValue(s),i.commit(),r++;r<e.length&&(e.length=r,this.clear(i&&i.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class U{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;u(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=m}}class T extends _{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let O=!1;(()=>{try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class N{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;u(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=m,t(this)}if(this.__pendingValue===m)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=C(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=m}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const C=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);function A(t){let e=E.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},E.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(r);return i=e.keyString.get(s),void 0===i&&(i=new n(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const E=new Map,V=new WeakMap;const j=new class{handleAttributeExpressions(t,e,i,r){const s=e[0];if("."===s){return new T(t,e.slice(1),i).parts}return"@"===s?[new N(t,e.slice(1),r.eventContext)]:"?"===s?[new U(t,e.slice(1),i)]:new _(t,e,i).parts}handleTextExpression(t){return new b(t)}};"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const z=(t,...e)=>new v(t,e,"html",j),R=(t,e)=>`${t}--${e}`;let I=!0;void 0===window.ShadyCSS?I=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),I=!1);const q=t=>e=>{const i=R(e.type,t);let s=E.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},E.set(i,s));let a=s.stringsArray.get(e.strings);if(void 0!==a)return a;const o=e.strings.join(r);if(a=s.keyString.get(o),void 0===a){const i=e.getTemplateElement();I&&window.ShadyCSS.prepareTemplateDom(i,t),a=new n(e,i),s.keyString.set(o,a)}return s.stringsArray.set(e.strings,a),a},$=["html","svg"],M=new Set,L=(t,e,i)=>{M.add(t);const r=i?i.element:document.createElement("template"),s=e.querySelectorAll("style"),{length:a}=s;if(0===a)return void window.ShadyCSS.prepareTemplateStyles(r,t);const n=document.createElement("style");for(let t=0;t<a;t++){const e=s[t];e.parentNode.removeChild(e),n.textContent+=e.textContent}(t=>{$.forEach(e=>{const i=E.get(R(e,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{i.add(t)}),p(t,i)})})})(t);const o=r.content;i?function(t,e,i=null){const{element:{content:r},parts:s}=t;if(null==i)return void r.appendChild(e);const a=document.createTreeWalker(r,133,null,!1);let n=y(s),o=0,l=-1;for(;a.nextNode();){for(l++,a.currentNode===i&&(o=h(e),i.parentNode.insertBefore(e,i));-1!==n&&s[n].index===l;){if(o>0){for(;-1!==n;)s[n].index+=o,n=y(s,n);return}n=y(s,n)}}}(i,n,o.firstChild):o.insertBefore(n,o.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=o.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){o.insertBefore(n,o.firstChild);const t=new Set;t.add(n),p(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const F={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,e)=>e!==t&&(e==e||t==t),D={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:B};class W extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,i)=>{const r=this._attributeNameForProperty(i,e);void 0!==r&&(this._attributeToPropertyMap.set(r,i),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=D){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||D}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=B){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,r=e.converter||F,s="function"==typeof r?r:r.fromAttribute;return s?s(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,r=e.converter;return(r&&r.toAttribute||F.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=D){const r=this.constructor,s=r._attributeNameForProperty(t,i);if(void 0!==s){const t=r._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(s):this.setAttribute(s,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,r=i._attributeToPropertyMap.get(t);if(void 0!==r){const t=i.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let i=!0;if(void 0!==t){const r=this.constructor,s=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,s.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,s))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}W.finalized=!0;const H=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function J(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):H(t,e)}const Y="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol();class Q{constructor(t,e){if(e!==K)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Y?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const X={};class Z extends W{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t),i),i=e(t,new Set),r=[];i.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Y?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==X&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return X}}Z.finalized=!0,Z.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const s=r.scopeName,a=V.has(e),n=I&&11===e.nodeType&&!!e.host,o=n&&!M.has(s),l=o?document.createDocumentFragment():e;if(((t,e,r)=>{let s=V.get(e);void 0===s&&(i(e,e.firstChild),V.set(e,s=new b(Object.assign({templateFactory:A},r))),s.appendInto(e)),s.setValue(t),s.commit()})(t,l,Object.assign({templateFactory:q(s)},r)),o){const t=V.get(l);V.delete(l);const r=t.value instanceof g?t.value.template:void 0;L(s,l,r),i(e,e.firstChild),e.appendChild(l),V.set(e,t)}!a&&n&&window.ShadyCSS.styleElement(e.host)};let tt=class extends Z{constructor(){super(),this.refreshInterval=2e3,this.citiesUnderAttack=[]}setConfig(t){this.city=t.city||"",this.sensor=t.sensor,this.refreshInterval=t.refreshInterval?1e3*t.refreshInterval:2e3,this.validateConfig(t)}validateConfig(t){if(!(null==t?void 0:t.sensor))throw new Error("You need to pass a sensor, example: sensor: sensor.red_alert");if(t.refreshInterval&&t.refreshInterval<1||t.refreshInterval>10)throw new Error("refreshInterval should be from 1 to 10 seconds")}connectedCallback(){super.connectedCallback(),this.refresh(),clearInterval(this.timer),this.timer=setInterval(()=>{this.refresh()},this.refreshInterval)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.timer)}refresh(){var t,e,i;if(this.lastUpdated=new Date,"off"===(null===(t=this.hass.states[this.sensor])||void 0===t?void 0:t.state))return;const r=null===(i=null===(e=this.hass.states[this.sensor])||void 0===e?void 0:e.state)||void 0===i?void 0:i.split("|"),s=null==r?void 0:r.filter(t=>null==t?void 0:t.includes(this.city)),a=[];null==s||s.forEach(t=>{var e,i,r,s;const n=null===(r=null===(i=null===(e=null==t?void 0:t.split("("))||void 0===e?void 0:e[1])||void 0===i?void 0:i.replace(")",""))||void 0===r?void 0:r.replace("(",""),o=null===(s=null==t?void 0:t.split("("))||void 0===s?void 0:s[0];(null==o?void 0:o.includes("..."))||a.push({city:o,time:n})}),this.citiesUnderAttack=a,this.requestUpdate()}getLastUpdated(){var t;return null===(t=this.lastUpdated)||void 0===t?void 0:t.toLocaleTimeString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!1})}render(){return this.renderView()}renderView(){var t;return z`
            <div class="main">
                <div>${this.getOrefSvg()}</div>

                <div>${(null===(t=this.citiesUnderAttack)||void 0===t?void 0:t.length)?z`
                    <div>
                        ${this.citiesUnderAttack.map(t=>z`
                                    <div class="city">
                                        ${null==t?void 0:t.city} - ${null==t?void 0:t.time}
                                    </div>
                                `)}
                    </div>`:z`
                    <div class="no-alerts">No alerts</div>`}
                </div>


                <div class="updated">
                    Last updated:
                    ${this.getLastUpdated()}
                </div>
            </div>

        `}getOrefSvg(){return z`
            <svg class="orefIcon" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#"
                 xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                 xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="347.07886mm" height="347.07886mm"
                 viewBox="0 0 347.07886 347.07886" version="1.1" id="svg8"
                 inkscape:version="0.92.3 (2405546, 2018-03-11)" sodipodi:docname="Pakar (1).svg">
                <defs id="defs2">
                    <linearGradient inkscape:collect="always" id="linearGradient5310">
                        <stop style="stop-color:#818181;stop-opacity:1" offset="0" id="stop5306"/>
                        <stop style="stop-color:#7b7c7c;stop-opacity:1" offset="1" id="stop5308"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" id="linearGradient5267">
                        <stop style="stop-color:#ececec;stop-opacity:1" offset="0" id="stop5261"/>
                        <stop id="stop5263" offset="0.37858826" style="stop-color:#c7c7c7;stop-opacity:1"/>
                        <stop style="stop-color:#68696a;stop-opacity:1" offset="1" id="stop5265"/>
                    </linearGradient>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1558" id="radialGradient1560"
                                    cx="1119.7955" cy="-754.33136" fx="1119.7955" fy="-754.33136" r="221.61134"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(-1.9068665,0.66733701,-0.55106615,-1.5746421,1643.4948,-1879.0963)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1558">
                        <stop style="stop-color:#75a0d1;stop-opacity:1" offset="0" id="stop1554"/>
                        <stop id="stop1562" offset="0.66358453" style="stop-color:#5397cc;stop-opacity:1;"/>
                        <stop style="stop-color:#1261ac;stop-opacity:1" offset="1" id="stop1556"/>
                    </linearGradient>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1211" id="radialGradient1235"
                                    cx="659.7312" cy="371.25543" fx="659.7312" fy="371.25543" r="332.71353"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.97757808,0.01473189,-0.01305696,0.86635515,-885.69299,11.302836)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1211">
                        <stop style="stop-color:#e26510;stop-opacity:1" offset="0" id="stop1207"/>
                        <stop style="stop-color:#f6a423;stop-opacity:1" offset="1" id="stop1209"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1195" id="linearGradient1197"
                                    x1="818.05597" y1="-703.68329" x2="826.21167" y2="-419.59381"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.78308008,0,0,0.78308008,-953.00882,646.68851)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1195">
                        <stop style="stop-color:#183f54;stop-opacity:1" offset="0" id="stop1191"/>
                        <stop style="stop-color:#071319;stop-opacity:1" offset="1" id="stop1193"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1241" id="linearGradient1243"
                                    x1="334.81796" y1="193.2869" x2="314.28088" y2="314.03326"
                                    gradientUnits="userSpaceOnUse"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1241">
                        <stop style="stop-color:#0383c2;stop-opacity:1" offset="0" id="stop1237"/>
                        <stop style="stop-color:#0163a6;stop-opacity:1" offset="1" id="stop1239"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1363" id="linearGradient1357"
                                    x1="1035.3143" y1="-666.67035" x2="1074.631" y2="-546.45508"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient id="linearGradient1363" inkscape:collect="always">
                        <stop id="stop1359" offset="0" style="stop-color:#c4c6c9;stop-opacity:1"/>
                        <stop id="stop1361" offset="1" style="stop-color:#9c9ea1;stop-opacity:1"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1515" id="linearGradient1539"
                                    x1="1003.6055" y1="-459.71652" x2="1034.2986" y2="-391.19241"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient id="linearGradient1515" inkscape:collect="always">
                        <stop id="stop1511" offset="0" style="stop-color:#e9e9e9;stop-opacity:1"/>
                        <stop id="stop1513" offset="1" style="stop-color:#b8b9b6;stop-opacity:1"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1313" id="linearGradient1315"
                                    x1="-1599.2162" y1="489.59335" x2="-1560.5908" y2="512.50671"
                                    gradientUnits="userSpaceOnUse"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1313">
                        <stop style="stop-color:#ccd0d4;stop-opacity:1" offset="0" id="stop1309"/>
                        <stop style="stop-color:#bdbdbd;stop-opacity:1" offset="1" id="stop1311"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1321" id="linearGradient1323"
                                    x1="-1600.5255" y1="490.24802" x2="-1571.7202" y2="534.11072"
                                    gradientUnits="userSpaceOnUse"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1321">
                        <stop style="stop-color:#c1bdc0;stop-opacity:1" offset="0" id="stop1317"/>
                        <stop style="stop-color:#989898;stop-opacity:1" offset="1" id="stop1319"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1305" id="linearGradient1307"
                                    x1="997.93121" y1="-740.40277" x2="1015.6645" y2="-560.33588"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1305">
                        <stop style="stop-color:#f5f5f5;stop-opacity:1" offset="0" id="stop1301"/>
                        <stop style="stop-color:#d4d4d4;stop-opacity:1" offset="1" id="stop1303"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1297" id="linearGradient1299"
                                    x1="1022.1124" y1="-700.01428" x2="1028.4301" y2="-485.13843"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1297">
                        <stop style="stop-color:#d2d0d1;stop-opacity:1" offset="0" id="stop1293"/>
                        <stop style="stop-color:#b0b0b0;stop-opacity:1" offset="1" id="stop1295"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1455" id="linearGradient1457"
                                    x1="1102.1089" y1="-590.34058" x2="1068.5607" y2="-545.37164"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1455">
                        <stop style="stop-color:#ededed;stop-opacity:1" offset="0" id="stop1451"/>
                        <stop style="stop-color:#d0dbd3;stop-opacity:1" offset="1" id="stop1453"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient5310" id="linearGradient1469"
                                    x1="1105.0369" y1="-574.1012" x2="1073.7706" y2="-514.87091"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1437" id="linearGradient1439"
                                    x1="1072.5852" y1="-663.67389" x2="1055.9119" y2="-601.13458"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1437">
                        <stop style="stop-color:#9fa3a3;stop-opacity:1" offset="0" id="stop1433"/>
                        <stop style="stop-color:#6c6c6c;stop-opacity:1" offset="1" id="stop1435"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1429" id="linearGradient1431"
                                    x1="1059.4623" y1="-666.19751" x2="1045.8346" y2="-619.76257"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1429">
                        <stop style="stop-color:#e0e0e0;stop-opacity:1" offset="0" id="stop1425"/>
                        <stop style="stop-color:#babfc2;stop-opacity:1" offset="1" id="stop1427"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1491" id="linearGradient1485"
                                    x1="1058.1534" y1="-453.91287" x2="1105.0369" y2="-495.64194"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient id="linearGradient1491" inkscape:collect="always">
                        <stop id="stop1487" offset="0" style="stop-color:#61615d;stop-opacity:1"/>
                        <stop id="stop1489" offset="1" style="stop-color:#7f7f7f;stop-opacity:1"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1345" id="linearGradient1347"
                                    x1="-1574.3389" y1="598.26807" x2="-1519.3468" y2="620.52673"
                                    gradientUnits="userSpaceOnUse"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1345">
                        <stop style="stop-color:#dbdbd9;stop-opacity:1" offset="0" id="stop1341"/>
                        <stop style="stop-color:#a9aeaa;stop-opacity:1" offset="1" id="stop1343"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1353" id="linearGradient1355"
                                    x1="-1584.8135" y1="614.6347" x2="-1528.5122" y2="648.67737"
                                    gradientUnits="userSpaceOnUse"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1353">
                        <stop style="stop-color:#a7aca9;stop-opacity:1" offset="0" id="stop1349"/>
                        <stop style="stop-color:#6c6c6c;stop-opacity:1" offset="1" id="stop1351"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1465" id="linearGradient1467"
                                    x1="1106.3916" y1="-573.92334" x2="1090.6882" y2="-535.37854"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1465">
                        <stop style="stop-color:#848383;stop-opacity:1" offset="0" id="stop1461"/>
                        <stop style="stop-color:#626363;stop-opacity:1" offset="1" id="stop1463"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1337" id="linearGradient1339"
                                    x1="-1585.6686" y1="600.28839" x2="-1515.7148" y2="653.54065"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.67711788,0,0,0.69959226,897.52546,-278.00643)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1337">
                        <stop style="stop-color:#ababab;stop-opacity:1" offset="0" id="stop1333"/>
                        <stop style="stop-color:#828282;stop-opacity:1" offset="1" id="stop1335"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1329" id="linearGradient1331"
                                    x1="-1574.6647" y1="599.52765" x2="-1496.0649" y2="638.32568"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.67711788,0,0,0.69959226,897.52546,-278.00643)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1329">
                        <stop style="stop-color:#dce0e5;stop-opacity:1" offset="0" id="stop1325"/>
                        <stop style="stop-color:#afafaf;stop-opacity:1" offset="1" id="stop1327"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1515" id="linearGradient1509"
                                    x1="1002.4346" y1="-476.0441" x2="999.90436" y2="-445.6315"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1515" id="linearGradient1517"
                                    x1="1035.3143" y1="-475.18521" x2="1026.4469" y2="-446.15445"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1505" id="linearGradient1507"
                                    x1="1038.5813" y1="-486.12683" x2="1029.7094" y2="-465.24542"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81699,618.83763)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1505">
                        <stop style="stop-color:#dbdbdb;stop-opacity:1" offset="0" id="stop1501"/>
                        <stop style="stop-color:#9f9f9f;stop-opacity:1" offset="1" id="stop1503"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1497" id="linearGradient1499"
                                    x1="997.89514" y1="-485.41306" x2="998.04956" y2="-466.22836"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1497">
                        <stop style="stop-color:#e0e0e0;stop-opacity:1" offset="0" id="stop1493"/>
                        <stop style="stop-color:#aaaaaa;stop-opacity:1" offset="1" id="stop1495"/>
                    </linearGradient>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1455" id="linearGradient1483"
                                    x1="1100.6813" y1="-513.25098" x2="1054.87" y2="-475.88879"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient1371" id="linearGradient1365"
                                    x1="1129.3367" y1="-597.80811" x2="980.94989" y2="-396.73615"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="matrix(0.74561201,0,0,0.74561201,-913.81515,618.83833)"/>
                    <linearGradient id="linearGradient1371" inkscape:collect="always">
                        <stop id="stop1367" offset="0" style="stop-color:#bdd6df;stop-opacity:1"/>
                        <stop id="stop1369" offset="1" style="stop-color:#5f5f5f;stop-opacity:1"/>
                    </linearGradient>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1296" id="radialGradient1298"
                                    cx="1056.8872" cy="-600.75238" fx="1056.8872" fy="-600.75238" r="7.14185"
                                    gradientTransform="matrix(0.15739864,1.8624598,-2.0063474,0.16955871,-1500.8482,-1690.8133)"
                                    gradientUnits="userSpaceOnUse"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1296">
                        <stop style="stop-color:#dbdbdb;stop-opacity:1" offset="0" id="stop1292"/>
                        <stop style="stop-color:#4a4a4a;stop-opacity:1" offset="1" id="stop1294"/>
                    </linearGradient>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1296" id="radialGradient1314"
                                    cx="1063.4814" cy="-532.64349" fx="1063.4814" fy="-532.64349" r="7.5952501"
                                    gradientTransform="matrix(0.11025793,1.6460519,-2.3945925,0.16039756,-1513.8207,-1438.2451)"
                                    gradientUnits="userSpaceOnUse"/>
                    <linearGradient inkscape:collect="always" id="linearGradient1405">
                        <stop style="stop-color:#fbfbfb;stop-opacity:1" offset="0" id="stop1401"/>
                        <stop style="stop-color:#b3b3b3;stop-opacity:1" offset="1" id="stop1403"/>
                    </linearGradient>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1405" id="radialGradient1532"
                                    cx="833.75757" cy="-661.17273" fx="833.75757" fy="-661.17273" r="43.58794"
                                    gradientTransform="matrix(-0.19077673,2.3945657,-1.9579841,-0.15599398,-301.7466,-2762.5367)"
                                    gradientUnits="userSpaceOnUse"/>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1405" id="radialGradient1540"
                                    cx="833.75757" cy="-661.17273" fx="833.75757" fy="-661.17273" r="43.58794"
                                    gradientTransform="matrix(-0.19077673,2.3945657,-1.9579841,-0.15599398,-301.7466,-2762.5367)"
                                    gradientUnits="userSpaceOnUse"/>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1405" id="radialGradient1548"
                                    cx="833.75757" cy="-661.17273" fx="833.75757" fy="-661.17273" r="43.58794"
                                    gradientTransform="matrix(-0.19077673,2.3945657,-1.9579841,-0.15599398,-301.7466,-2762.5367)"
                                    gradientUnits="userSpaceOnUse"/>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1405" id="radialGradient1556"
                                    cx="833.75757" cy="-661.17273" fx="833.75757" fy="-661.17273" r="43.58794"
                                    gradientTransform="matrix(-0.19077673,2.3945657,-1.9579841,-0.15599398,-301.7466,-2762.5367)"
                                    gradientUnits="userSpaceOnUse"/>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1405" id="radialGradient1564"
                                    cx="833.75757" cy="-661.17273" fx="833.75757" fy="-661.17273" r="43.58794"
                                    gradientTransform="matrix(-0.19077673,2.3945657,-1.9579841,-0.15599398,-301.7466,-2762.5367)"
                                    gradientUnits="userSpaceOnUse"/>
                    <radialGradient inkscape:collect="always" xlink:href="#linearGradient1405" id="radialGradient1572"
                                    cx="833.75757" cy="-661.17273" fx="833.75757" fy="-661.17273" r="43.58794"
                                    gradientTransform="matrix(-0.19077673,2.3945657,-1.9579841,-0.15599398,-301.7466,-2762.5367)"
                                    gradientUnits="userSpaceOnUse"/>
                    <radialGradient r="43.58794" fy="-661.17273" fx="833.75757" cy="-661.17273" cx="833.75757"
                                    gradientTransform="matrix(-0.13939268,1.7496103,-1.4306182,-0.11397836,-1127.4296,-1404.3705)"
                                    gradientUnits="userSpaceOnUse" id="radialGradient1638"
                                    xlink:href="#linearGradient1405" inkscape:collect="always"/>
                    <radialGradient r="43.58794" fy="-661.17273" fx="833.75757" cy="-661.17273" cx="833.75757"
                                    gradientTransform="matrix(-0.13939268,1.7496103,-1.4306182,-0.11397836,-1127.4296,-1406.5568)"
                                    gradientUnits="userSpaceOnUse" id="radialGradient1640"
                                    xlink:href="#linearGradient1405" inkscape:collect="always"/>
                    <radialGradient r="43.58794" fy="-661.17273" fx="833.75757" cy="-661.17273" cx="833.75757"
                                    gradientTransform="matrix(-0.13939268,1.7496103,-1.4306182,-0.11397836,-1127.4296,-1408.7428)"
                                    gradientUnits="userSpaceOnUse" id="radialGradient1642"
                                    xlink:href="#linearGradient1405" inkscape:collect="always"/>
                    <radialGradient r="43.58794" fy="-661.17273" fx="833.75757" cy="-661.17273" cx="833.75757"
                                    gradientTransform="matrix(-0.13939268,1.7496103,-1.4306182,-0.11397836,-1126.8842,-1404.3705)"
                                    gradientUnits="userSpaceOnUse" id="radialGradient1644"
                                    xlink:href="#linearGradient1405" inkscape:collect="always"/>
                    <radialGradient r="43.58794" fy="-661.17273" fx="833.75757" cy="-661.17273" cx="833.75757"
                                    gradientTransform="matrix(-0.13939268,1.7496103,-1.4306182,-0.11397836,-1126.8842,-1406.5568)"
                                    gradientUnits="userSpaceOnUse" id="radialGradient1646"
                                    xlink:href="#linearGradient1405" inkscape:collect="always"/>
                    <radialGradient r="43.58794" fy="-661.17273" fx="833.75757" cy="-661.17273" cx="833.75757"
                                    gradientTransform="matrix(-0.13939268,1.7496103,-1.4306182,-0.11397836,-1126.8842,-1408.7428)"
                                    gradientUnits="userSpaceOnUse" id="radialGradient1648"
                                    xlink:href="#linearGradient1405" inkscape:collect="always"/>
                    <linearGradient inkscape:collect="always" xlink:href="#linearGradient5267" id="linearGradient5259"
                                    x1="-180.16455" y1="319.14951" x2="-133.46115" y2="347.36853"
                                    gradientUnits="userSpaceOnUse"/>
                </defs>
                <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0"
                                    inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.21684607"
                                    inkscape:cx="430.29893" inkscape:cy="-152.7725" inkscape:document-units="mm"
                                    inkscape:current-layer="layer1" showgrid="false" fit-margin-top="0"
                                    fit-margin-left="0" fit-margin-right="0" fit-margin-bottom="0"
                                    inkscape:window-width="1920" inkscape:window-height="1005" inkscape:window-x="-9"
                                    inkscape:window-y="-9" inkscape:window-maximized="1" inkscape:snap-bbox="true"
                                    inkscape:bbox-paths="true" inkscape:bbox-nodes="true"
                                    inkscape:snap-bbox-edge-midpoints="true" inkscape:snap-bbox-midpoints="true"
                                    inkscape:object-paths="true" inkscape:snap-intersection-paths="true"
                                    inkscape:snap-smooth-nodes="true" inkscape:snap-object-midpoints="true"
                                    inkscape:snap-center="true" inkscape:lockguides="false"/>
                <metadata id="metadata5">
                    <rdf:RDF>
                        <cc:Work rdf:about="">
                            <dc:format>image/svg+xml</dc:format>
                            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                            <dc:title/>
                        </cc:Work>
                    </rdf:RDF>
                </metadata>
                <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1"
                   transform="translate(381.42633,-37.281996)">
                    <circle r="173.53943" cy="210.82143" cx="-207.8869"
                            style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:url(#radialGradient1560);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.96830583;enable-background:accumulate"
                            id="path4228-7"/>
                    <circle r="165.50479" cy="210.82143" cx="-207.88686" id="path4232-6"
                            style="color:#000000;display:inline;overflow:visible;visibility:visible;fill:url(#radialGradient1235);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.92347473;enable-background:accumulate"/>
                    <rect style="opacity:1;fill:url(#linearGradient1197);fill-opacity:1;stroke:none;stroke-width:1.5661602;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                          id="rect1699" width="98.960541" height="200.6441" x="-330.19916" y="109.51092"/>
                    <path sodipodi:type="star"
                          style="opacity:1;fill:url(#linearGradient1243);fill-opacity:1;stroke:none;stroke-width:2;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                          id="path1697" sodipodi:sides="3" sodipodi:cx="334.134" sodipodi:cy="253.72244"
                          sodipodi:r1="120.62162" sodipodi:r2="33.884903" sodipodi:arg1="-1.5707963"
                          sodipodi:arg2="-0.52359875" inkscape:flatsided="true" inkscape:rounded="0"
                          inkscape:randomized="0" d="m 334.13401,133.10082 104.46138,180.93244 -208.92278,-10e-6 z"
                          transform="matrix(1.1370533,0,0,0.82266329,-588.59272,51.811391)"/>
                    <g id="g1191-4" transform="matrix(0.81295169,0,0,0.81295169,1114.8787,-298.64208)"
                       style="fill:#ffffff;stroke-width:0.30752135;stroke:#000000;stroke-opacity:1">
                        <path style="fill:url(#linearGradient1315);fill-opacity:1;stroke:#000000;stroke-width:0.30752135;stroke-miterlimit:10;stroke-opacity:1"
                              d="m -1603.6751,478.14853 c 0,0 0,0 0,0 v 0 c 0,0 47.4091,10.68066 49.4601,53.16501"
                              id="path1185-3" inkscape:connector-curvature="0"/>
                        <path style="fill:url(#linearGradient1323);fill-opacity:1;stroke:#000000;stroke-width:0.30752135;stroke-miterlimit:10;stroke-opacity:1"
                              d="m -1554.215,531.31354 c 0,0.0409 0,0.0818 0.01,0.1228 -0.1092,-0.10919 -30.1382,6.44259 -49.4659,-53.28781"
                              id="path1187-4" inkscape:connector-curvature="0"/>
                        <path style="fill:#ffffff;stroke:#000000;stroke-width:0.30752135;stroke-miterlimit:10;stroke-opacity:1"
                              inkscape:connector-curvature="0" class="st7"
                              d="m -1603.6751,478.14853 v 0 l 49.4601,53.16501" id="path1189-1"
                              sodipodi:nodetypes="ccc"/>
                    </g>
                    <path id="path1193-7"
                          d="m -164.06464,89.27052 8.25523,-22.485393 V 282.74613 l -13.93625,-4.74201 V 217.63397 121.7609 c 0,-11.09639 1.95301,-22.01533 5.68141,-32.49038 z"
                          class="st6" inkscape:connector-curvature="0"
                          style="fill:url(#linearGradient1307);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          sodipodi:nodetypes="cccccscc" inkscape:transform-center-x="8.5713768"
                          inkscape:transform-center-y="121.60823"/>
                    <path id="path1177-7"
                          d="m -174.36234,298.41585 c 0,0 0.1776,-0.0888 0.44386,-0.17759 0.3551,-0.1776 0.79896,-0.355 1.42039,-0.71011 1.33154,-0.62142 3.19574,-1.59795 5.50379,-2.92948 2.39677,-1.33162 5.14875,-3.10701 8.34458,-5.2375 3.10694,-2.13053 6.56902,-4.70489 10.03109,-7.8119 3.55088,-3.10696 7.10176,-6.65784 10.56383,-10.65252 3.37328,-4.08354 6.65783,-8.69965 9.32101,-13.75963 2.66317,-5.14875 4.79362,-10.74128 6.12517,-16.60023 0.1776,-0.71018 0.35513,-1.50909 0.44393,-2.21928 l 0.35505,-2.21926 c 0.2664,-1.5091 0.35512,-3.01824 0.53265,-4.52734 l 0.0888,-1.15406 v -0.26639 c 0,0 0,-0.0888 0,0 v -0.0888 -0.1776 -0.62143 l 0.0888,-2.39682 c 0.0888,-1.59792 0,-3.10702 0,-4.70487 -0.0888,-6.21404 -0.71018,-12.51677 -1.59795,-18.64204 -0.88762,-6.12518 -2.21933,-12.16168 -3.6396,-17.93175 -2.92943,-11.54034 -6.56918,-22.0153 -10.03118,-30.89249 -3.46208,-8.87713 -6.83543,-16.15636 -9.2322,-21.12756 -1.24283,-2.48559 -2.21925,-4.43855 -2.9295,-5.77017 -0.71018,-1.33153 -1.06523,-2.04173 -1.06523,-2.04173 l 2.39685,-1.33152 c 0,0 0.35505,0.71019 1.15403,2.04172 0.71025,1.33153 1.7754,3.28457 3.01822,5.77016 2.57438,4.97122 6.03646,12.25045 9.76486,21.12758 3.7284,8.87709 7.63424,19.52967 10.83007,31.15871 3.19583,11.62902 5.6814,24.41212 6.12525,37.46155 0,1.59786 0.0888,3.37326 0.0888,4.88241 v 2.39682 0.62143 0.1776 0.17759 0.2664 l -0.0888,1.24285 c -0.0888,1.68663 -0.1776,3.28445 -0.44385,4.88241 l -0.35512,2.39682 c -0.1776,0.7989 -0.35513,1.59786 -0.44385,2.39682 -1.33155,6.39151 -3.46208,12.51678 -6.3027,18.10932 -2.8407,5.50384 -6.21405,10.56382 -9.76493,15.00236 -3.55088,4.43859 -7.27928,8.25579 -10.91888,11.54028 -3.63952,3.28456 -7.19047,6.12527 -10.47495,8.43329 -3.28455,2.30805 -6.21405,4.17225 -8.69962,5.68141 -2.48558,1.50909 -4.43858,2.57439 -5.85893,3.28449 -0.71017,0.3551 -1.2428,0.62142 -1.5979,0.79896 -0.35509,0.17759 -0.62142,0.26639 -0.62142,0.26639 l -0.2664,-0.17759 c -1.77548,-1.15406 -2.75191,-3.55089 -2.30811,-5.94771 z"
                          class="st8" inkscape:connector-curvature="0"
                          style="fill:url(#linearGradient1357);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1"/>
                    <path inkscape:transform-center-y="121.60823" inkscape:transform-center-x="-8.571424"
                          sodipodi:nodetypes="cccccscc"
                          style="fill:url(#linearGradient1299);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0" class="st6"
                          d="m -147.5534,89.27052 -8.25601,-22.485393 V 292.8003 l 13.9371,-4.74201 V 217.63397 121.7609 c 0,-11.09639 -1.953,-22.01533 -5.6814,-32.49038 z"
                          id="path1195-0"/>
                    <path sodipodi:nodetypes="cccccc" id="path1179-5"
                          d="M -169.6574,269.66289 V 330.196 h 13.84838 13.93702 v -60.53311 z" class="st6"
                          inkscape:connector-curvature="0"
                          style="fill:url(#linearGradient1539);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"/>
                    <path style="fill:#4d4d4d;fill-opacity:1;stroke:none;stroke-width:0.25;stroke-opacity:1"
                          d="m -142.23452,277.83165 -27.2526,10.20868 v 0.8785 l 27.2526,-10.20868 z m 0.19224,8.63978 -27.2526,10.20868 v 0.8785 l 27.2526,-10.20868 z m 0,8.88318 -27.35647,10.24743 v 0.88212 l 27.35647,-10.24795 z m 0,8.45736 -27.35647,10.24745 v 0.88159 l 27.35647,-10.24742 z m 0,8.61396 -27.35647,10.24742 v 0.88162 l 27.35647,-10.24745 z m 0,8.77052 -27.35647,10.24744 v 0.88159 l 27.35647,-10.24744 z"
                          id="path1324" inkscape:connector-curvature="0"/>
                    <path id="path1209-9"
                          d="m -113.79905,227.14687 c -0.29772,0.0866 -0.59851,0.17084 -0.90258,0.25195 v 0 c 0,0 -0.88417,-34.31039 27.619708,-53.15358"
                          style="fill:url(#linearGradient1457);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0"/>
                    <path id="path1211-8"
                          d="m -87.081922,174.24521 c 0.0556,-0.0363 0.110415,-0.0728 0.166013,-0.10908 0.02741,0.20924 6.016326,43.42265 -26.882981,53.01089"
                          style="fill:url(#linearGradient1469);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0"/>
                    <path id="path1213-0"
                          d="m -117.63747,106.04837 c 0,0 0,0 0,0 0,0 19.973631,51.04355 -7.9893,68.79781 v 0 c 0,0 0,0 0,0"
                          style="fill:url(#linearGradient1439);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0"/>
                    <path id="path1215-9" d="m -125.62677,174.84618 c 0,0 -15.80138,-46.42742 7.9893,-68.79781"
                          style="fill:url(#linearGradient1431);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0"/>
                    <path id="path1217-6"
                          d="m -78.969369,231.94626 c -0.447921,4.8452 -5.388687,39.72085 -58.368831,47.20628"
                          style="fill:url(#linearGradient1485);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0"/>
                    <path id="path1219-7"
                          d="m -183.772,179.72861 c 22.19356,18.60853 43.63687,32.69836 64.71426,49.2681" class="st7"
                          inkscape:connector-curvature="0"
                          style="fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          sodipodi:nodetypes="cc"/>
                    <g id="g1228-9" transform="matrix(0.81295169,0,0,0.81295169,1114.8787,-298.64208)"
                       style="fill:#ffffff;stroke-width:0.30752135;stroke:#000000;stroke-opacity:1">
                        <path style="fill:url(#linearGradient1347);fill-opacity:1;stroke:#000000;stroke-width:0.30752135;stroke-miterlimit:10;stroke-opacity:1"
                              d="m -1597.4509,588.43684 c 0,0 0,0 0,0 v 0 c 0,0 61.6959,6.33339 79.4949,59.29362 0,-0.007 -0.2147,0.0136 -0.6232,0.0418"
                              id="path1221-7" inkscape:connector-curvature="0"/>
                        <path style="fill:url(#linearGradient1355);fill-opacity:1;stroke:#000000;stroke-width:0.30752135;stroke-miterlimit:10;stroke-opacity:1"
                              d="m -1518.5792,647.77223 c -6.1385,0.42354 -56.0404,2.60625 -78.8717,-59.33539"
                              id="path1223-6" inkscape:connector-curvature="0"/>
                        <path id="path1226-8" d="m -1597.4509,588.43684 79.6041,60.60397" class="st7"
                              inkscape:connector-curvature="0"
                              style="fill:#ffffff;stroke:#000000;stroke-width:0.30752135;stroke-miterlimit:10;stroke-opacity:1"
                              sodipodi:nodetypes="cc"/>
                    </g>
                    <path sodipodi:nodetypes="cc"
                          style="fill:url(#linearGradient1467);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0" class="st5"
                          d="m -87.004866,174.13601 c -9.305889,19.1618 -17.946084,36.92078 -27.696764,54.8607"
                          id="path1230-5"/>
                    <path sodipodi:nodetypes="cc"
                          style="fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0" class="st7"
                          d="m -129.17764,175.7339 c -19.04381,-12.22088 -37.98996,-23.92472 -53.52917,-40.47974"
                          id="path1234-7"/>
                    <path sodipodi:nodetypes="ccc" id="path1236-0"
                          d="m -117.63747,106.04837 c -2.14486,23.17633 -5.05071,47.11517 -7.9893,66.57851 v 2.2193"
                          class="st7" inkscape:connector-curvature="0"
                          style="fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"/>
                    <path style="fill:url(#linearGradient1339);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          d="m -130.73167,175.17001 c -4.45022,1.17742 -39.25923,5.76318 -53.40544,-41.51058"
                          id="path1240-9" inkscape:connector-curvature="0" sodipodi:nodetypes="cc"/>
                    <path style="fill:url(#linearGradient1331);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          d="m -184.13711,133.65943 c 0,0 0,0 0,0 v 0 c 0,0 41.7754,4.43079 53.82742,41.48136 0,-0.005 -0.14538,0.01 -0.42198,0.0292"
                          id="path1242-8" inkscape:connector-curvature="0"/>
                    <path id="path1244-8" d="m -184.13711,133.65943 53.90136,42.39807" class="st7"
                          inkscape:connector-curvature="0"
                          style="fill:#ffffff;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          sodipodi:nodetypes="cc"/>
                    <path sodipodi:nodetypes="ccccc" inkscape:connector-curvature="0" id="path1248-5"
                          d="m -155.80754,276.75605 v -3.5e-4 l -13.84986,3.63965 -19.08428,-11.89536 h 32.93414"
                          style="fill:url(#linearGradient1509);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1"/>
                    <path style="fill:url(#linearGradient1517);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1"
                          d="m -155.80754,276.75615 v -3.4e-4 l 15.26756,3.63962 15.69676,-11.89544 h -30.96432"
                          id="path1250-2" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccc"/>
                    <path sodipodi:nodetypes="cc" inkscape:connector-curvature="0" id="path1252-5"
                          d="m -188.3738,268.49995 h 57.84158"
                          style="fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"/>
                    <path sodipodi:nodetypes="cccc" inkscape:connector-curvature="0" id="path1254-3"
                          d="m -155.80941,268.49999 h 30.96439 l -17.02729,-12.72087 -13.9371,3.6225"
                          style="fill:url(#linearGradient1507);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1"/>
                    <path style="fill:url(#linearGradient1499);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1"
                          d="m -155.80941,268.49999 h -32.93227 l 18.99602,-12.72087 13.93625,3.62299 v -3.4e-4"
                          id="path1257-2" inkscape:connector-curvature="0" sodipodi:nodetypes="ccccc"/>
                    <path sodipodi:nodetypes="ccccc" inkscape:connector-curvature="0" id="path1259-3"
                          d="m -137.3382,279.15254 v 0 0 c -0.21331,-0.0532 20.46525,-40.66754 58.411588,-47.759 0,0.0365 -0.01175,0.22644 -0.04307,0.55272"
                          style="fill:url(#linearGradient1483);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"/>
                    <path sodipodi:nodetypes="ccccccccccccccccccccscccsccccccccccscccccccc"
                          style="fill:url(#linearGradient1365);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linejoin:round;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0" class="st8"
                          d="m -174.36234,298.41585 c 0,0 0.1776,-0.0888 0.44386,-0.17759 0.3551,-0.1776 0.79896,-0.355 1.42039,-0.71011 1.33154,-0.62142 3.19574,-1.59795 5.50379,-2.92948 2.39677,-1.33162 5.14875,-3.10701 8.34458,-5.2375 3.10694,-2.13053 6.56902,-4.70489 10.03109,-7.8119 3.55088,-3.10696 7.10176,-6.65784 10.56383,-10.65252 3.37328,-4.08354 6.65783,-8.69965 9.32101,-13.75963 2.66317,-5.14875 4.79362,-10.74128 6.12517,-16.60023 0.1776,-0.71018 0.35513,-1.50909 0.44393,-2.21928 l 0.35505,-2.21926 c 0.2664,-1.5091 0.35512,-3.01824 0.53265,-4.52734 l 0.0888,-1.15406 v -0.26639 c 0,0 0,-0.0888 0,0 v -0.0888 -0.1776 -0.62143 l 0.0888,-2.39682 c 0.0888,-1.59792 0,-3.10702 0,-4.70487 -0.0888,-6.21404 -0.71018,-12.51677 -1.59795,-18.64204 -0.88762,-6.12518 -3.05911,-15.14008 -4.47938,-20.91016 l 3.90593,-1.06529 c 3.19583,11.62902 6.52117,27.39052 6.96502,40.43995 0,1.59786 0.0888,3.37326 0.0888,4.88241 v 2.39682 0.62143 0.1776 0.17759 0.2664 l -0.0888,1.24285 c -0.0888,1.68663 -0.1776,3.28449 -0.44385,4.88241 l -0.35512,2.39682 c -0.1776,0.7989 -0.35513,1.59786 -0.44385,2.39682 -1.33155,6.39151 -3.46208,12.51678 -6.3027,18.10932 -2.8407,5.50384 -6.21405,10.56382 -9.76493,15.00236 -3.55088,4.43859 -7.27928,8.25579 -10.91888,11.54028 -3.63952,3.28456 -7.19047,6.12527 -10.47495,8.43329 -3.28455,2.30805 -6.21405,4.17225 -8.69962,5.68141 -2.48558,1.50909 -4.43858,2.57439 -5.85893,3.28449 -0.71017,0.3551 -1.2428,0.62142 -1.5979,0.79896 -0.35509,0.17759 -0.62142,0.26639 -0.62142,0.26639 l -0.2664,-0.17759 c -1.77548,-1.15406 -2.75191,-3.55089 -2.30811,-5.94771 z"
                          id="path1261-3"/>
                    <path id="path1265-2"
                          d="m -126.51455,182.5693 c -3.10694,0 -5.5926,-2.48562 -5.5926,-5.59261 0,-3.10698 2.48566,-5.5926 5.5926,-5.5926 3.10703,0 5.59268,2.48562 5.59268,5.5926 0,3.10699 -2.48565,5.59261 -5.59268,5.59261 z"
                          class="st0" inkscape:connector-curvature="0"
                          style="fill:url(#radialGradient1298);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-opacity:1"/>
                    <path id="path1269-6"
                          d="m -119.14647,234.94439 c -3.28463,0 -5.9478,-2.66313 -5.9478,-5.94768 0,-3.28455 2.66317,-5.94767 5.9478,-5.94767 3.28455,0 5.94757,2.66312 5.94757,5.94767 0,3.28455 -2.66302,5.94768 -5.94757,5.94768 z"
                          class="st0" inkscape:connector-curvature="0"
                          style="fill:url(#radialGradient1314);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-opacity:1"/>
                    <path style="fill:none;stroke:#000000;stroke-width:0.25;stroke-miterlimit:10;stroke-opacity:1"
                          inkscape:connector-curvature="0" class="st7"
                          d="m -137.3382,279.15254 c 0,0 41.561505,-33.50574 58.383084,-47.36401" id="path1232-7"
                          sodipodi:nodetypes="cc"/>
                    <g id="g5295" transform="translate(0.52918243)">
                        <rect style="opacity:1;fill:url(#radialGradient1638);fill-opacity:1;stroke:none;stroke-width:0.24028006;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                              id="rect1932" width="28.239426" height="16.549913" x="-277.91229" y="127.58514"/>
                        <rect y="150.32994" x="-277.91229" height="16.549913" width="28.239426" id="rect1934"
                              style="opacity:1;fill:url(#radialGradient1640);fill-opacity:1;stroke:none;stroke-width:0.24028006;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
                        <rect style="opacity:1;fill:url(#radialGradient1642);fill-opacity:1;stroke:none;stroke-width:0.24028006;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                              id="rect1936" width="28.239426" height="16.549913" x="-277.91229" y="173.07475"/>
                        <rect y="127.58514" x="-312.82327" height="16.549913" width="28.239426" id="rect1921"
                              style="opacity:1;fill:url(#radialGradient1644);fill-opacity:1;stroke:none;stroke-width:0.24028006;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
                        <rect style="opacity:1;fill:url(#radialGradient1646);fill-opacity:1;stroke:none;stroke-width:0.24028006;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"
                              id="rect1923" width="28.239426" height="16.549913" x="-312.82327" y="150.32994"/>
                        <rect y="173.07475" x="-312.82327" height="16.549913" width="28.239426" id="rect1925"
                              style="opacity:1;fill:url(#radialGradient1648);fill-opacity:1;stroke:none;stroke-width:0.24028006;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1"/>
                    </g>
                    <rect style="opacity:1;vector-effect:none;fill:url(#linearGradient5259);fill-opacity:1;stroke:#000000;stroke-width:0.25;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;paint-order:normal"
                          id="rect5247" width="42.610279" height="11.273949" x="-177.1142" y="328.15427" rx="1.5251795"
                          ry="1.5251795"/>
                </g>
            </svg>
        `}};var et;tt.styles=((t,...e)=>{const i=e.reduce((e,i,r)=>e+(t=>{if(t instanceof Q)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[r+1],t[0]);return new Q(i,K)})`
      :host {
        padding: 16px 10px;
        max-width: 800px;
        background: var(--ha-card-background, var(--card-background-color, #fff));
        box-shadow: var(--ha-card-box-shadow, none);
        box-sizing: border-box;
        border-radius: var(--ha-card-border-radius, 12px);
        border-width: var(--ha-card-border-width, 1px);
        border-style: solid;
        border-color: var(--ha-card-border-color, var(--divider-color, #e0e0e0));
        color: var(--primary-text-color);
        display: block;
        transition: all 0.3s ease-out 0s;
        position: relative;
        font-size: 14px;
      }

      .item {
        border: 1px solid black;
        padding: 15px 10px;
        border-radius: 5px;
        margin-bottom: 10px;
      }

      .time {
        display: flex;
        width: 100px;
      }


      .no-alerts {
        color: green;
        text-align: center;
        font-size: 25px;
        margin-bottom: 20px;
      }


      .updated {
        text-align: center;
        font-size: 12px;
      }

      .orefIcon {
        width: 65px;
        height: 65px;
        position: absolute;
        left: 5px;
        top: 5px;
      }

      .city {
        text-align: center;
        font-size: 25px;
        margin-bottom: 20px;
        color: red;
        font-weight: bold;
      }


      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `,t([J()],tt.prototype,"config",void 0),t([J()],tt.prototype,"hass",void 0),tt=t([(et="silent-red",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(et,t):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(et,t))],tt),customElements.define("silent-red",tt);
