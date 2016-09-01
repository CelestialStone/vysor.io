function nextTick(e){setTimeout(e,0)}function make4Len16(e){var t=e.toString(16);while(t.length<4){t="0"+t}return t}function encode_utf8(e){return unescape(encodeURIComponent(e))}function decode_utf8(e){return decodeURIComponent(escape(e))}function ab2str(e){if(e.constructor.name=="ArrayBuffer"){e=new Uint8Array(e)}return decode_utf8(String.fromCharCode.apply(null,e))}function str2ab(e,t,r){e=encode_utf8(e);var n=e.length;if(r)n++;if(!t){t=new ArrayBuffer(n)}var o=new Uint8Array(t);if(r)o[e.length]=0;for(var i=0,a=e.length;i<a;i++){o[i]=e.charCodeAt(i)}return t}var slashN="\n".charCodeAt(0);function writeLine(e,t,r){if(t.constructor.name=="Object")t=JSON.stringify(t);writeString(e,t+"\n",r)}function readLine(e,t){var r=[];function n(){e.read(function(o){for(var i=0;i<o.byteLength;i++){if(o[i]==slashN){var a=o.subarray(0,i);r.push(a);var c="";for(var s in r){s=r[s];c+=ab2str(s)}var u=o.subarray(i+1);e.unshift(u);t(c);return}}r.push(o);n()})}n()}function readString(e,t){var r="";e.onClose=function(){t(r)};function n(t){r+=ab2str(t);e.read(n)}e.read(n)}function writeString(e,t,r){if(t.constructor.name=="Object")t=JSON.stringify(t);e.write(str2ab(t),r)}function appendBuffer(e,t){var r=new Uint8Array(e.byteLength+t.byteLength);r.set(e,0);r.set(t,e.byteLength);return r}var timeThing=(new Date).getTime();function timeTrace(e){var t=(new Date).getTime();console.log(e+": "+(t-timeThing));timeThing=t}function bufferToHex(e){var t=new Uint8Array(e);var r="";for(var n in t){n=t[n];if(n<16)r+="0"+n.toString(16);else r+=n.toString(16)}return r}function hexToBuffer(e){var t=new ArrayBuffer(e.length/2);var r=new Uint8Array(t);for(var n=0;n<e.length/2;n++){var o=e.substr(n*2,2);r[n]=parseInt(o,16)}return t}function base64ToArrayBuffer(e){var t=window.atob(e);var r=t.length;var n=new Uint8Array(r);for(var o=0;o<r;o++){var i=t.charCodeAt(o);n[o]=i}return n.buffer}function arrayBufferToBase64(e){var t="";var r=new Uint8Array(e);var n=r.byteLength;for(var o=0;o<n;o++){t+=String.fromCharCode(r[o])}return window.btoa(t)}var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";var b64pad="=";function hex2b64(e){var t;var r;var n="";for(t=0;t+3<=e.length;t+=3){r=parseInt(e.substring(t,t+3),16);n+=b64map.charAt(r>>6)+b64map.charAt(r&63)}if(t+1==e.length){r=parseInt(e.substring(t,t+1),16);n+=b64map.charAt(r<<2)}else if(t+2==e.length){r=parseInt(e.substring(t,t+2),16);n+=b64map.charAt(r>>2)+b64map.charAt((r&3)<<4)}while((n.length&3)>0){n+=b64pad}return n}if(!String.prototype.startsWith){Object.defineProperty(String.prototype,"startsWith",{enumerable:false,configurable:false,writable:false,value:function(e,t){t=t||0;return this.lastIndexOf(e,t)===t}})}function getQueryVariable(e,t){if(!t)t=window.location;var r=t.search.substring(1);var n=r.split("&");for(var o=0;o<n.length;o++){var i=n[o].split("=");if(decodeURIComponent(i[0])==e){return decodeURIComponent(i[1])}}}Object.fromArray=function(e){var t={};for(var r in e){var n=e[r];t[n]=n}return t};$.ajaxTransport("+binary",function(e,t,r){if(window.FormData&&(e.dataType&&e.dataType=="binary"||e.data&&(window.ArrayBuffer&&e.data instanceof ArrayBuffer||window.Blob&&e.data instanceof Blob))){return{send:function(t,r){var n=new XMLHttpRequest,o=e.url,i=e.type,a=e.async||true,c=e.responseType||"blob",s=e.data||null,u=e.username||null,l=e.password||null;n.addEventListener("load",function(){var t={};t[e.dataType]=n.response;r(n.status,n.statusText,t,n.getAllResponseHeaders())});n.open(i,o,a,u,l);for(var d in t){n.setRequestHeader(d,t[d])}n.responseType=c;n.send(s)},abort:function(){r.abort()}}}});function throttleTimeout(e,t,r,n){if(!e)e={items:[]};e.items.push(t);if(!e.timeout){e.timeout=setTimeout(function(){delete e.timeout;n(e.items);e.items=[]},r)}return e}function copyTextToClipboard(e){var t=document.createElement("textarea");t.style.position="fixed";t.style.top=0;t.style.left=0;t.style.width="2em";t.style.height="2em";t.style.padding=0;t.style.border="none";t.style.outline="none";t.style.boxShadow="none";t.style.background="transparent";t.value=e;document.body.appendChild(t);t.select();try{var r=document.execCommand("copy")}catch(n){console.log("Oops, unable to copy")}document.body.removeChild(t)}function showNotification(e,t){console.log("notification:",e);if(!window.chrome||!window.chrome.notifications)return;var r=chrome.runtime.getManifest();var n=r.name;t=t||r.icons[128];chrome.notifications.create({type:"basic",iconUrl:t,title:n,message:e})}var blobFromUrl=function(){var e={};return function(t,r){if(e[t]){r(e[t]);return}var n=new XMLHttpRequest;n.open("GET",t,true);n.responseType="blob";n.onload=function(n){r(e[t]=window.URL.createObjectURL(this.response))};n.send()}}();function Success(){}(function(){function*e(){}var t=e();t.constructor.prototype.async=function(){var e=this;var t=e.next();if(t.done)return;function r(){t=e.throw(new Error(arguments));o()}function n(){var r=arguments[0];t=e.next(r);o()}function o(o){var i;var a;if(t.done)return;if(!t.value){t=e.next(n);return}if(t.value.constructor==Promise){t.value.then(n).catch(r);return}if(t.value==Error){i=true;t=e.next(r)}else if(t.value==Success){a=true;t=e.next(n)}else{throw new Error("Unexpected yield value for callback. Only Error and Success allowed.")}if(!t.value)throw new Error("Double yield callbacks must explicitly define both Error and Success");if(t.value==Error&&i)throw new Error("Error callback already defined");else if(t.value==Success&&a)throw new Error("Success callback already defined");else if(t.value!=Error&&t.value!=Success)throw new Error("Unexpected yield value for callback. Only Error and Success allowed.");if(i)t=e.next(n);else t=e.next(r)}o()}})();function spewSocket(e){e.read(function(t){console.log(ab2str(t));spewSocket(e)})}function getAuthToken(e,t){if(!window.chrome||!window.chrome.identity){console.error("no auth token implemented");process.nextTick(t);return}chrome.identity.getAuthToken({interactive:e,scopes:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email","https://www.googleapis.com/auth/chromewebstore.readonly"]},function(e){if(!e)console.error("unable to get authToken",chrome.runtime.lastError);t(e)})}window.isElectron=function(){return navigator.userAgent.indexOf("Electron")!=-1};if(!isElectron()){window.sharedGlobals=window}(function(){var e=console.log;var t=console.error;var r="";function n(e){try{for(var t in e){if(e[t]&&e[t].constructor!=String)e[t]=JSON.stringify(e[t])}r+=e.join(" ")+"\n"}catch(n){}}console.error=function(){t.apply(console,arguments);n(Array.prototype.slice.call(arguments))};console.log=function(){e.apply(console,arguments);n(Array.prototype.slice.call(arguments))};sharedGlobals.getConsoleLog=function(e){e(r)};function o(e){return new Promise(function(t,r){if(!e.getConsoleLog){t("getConsoleLog not found");return}e.getConsoleLog(function(e){t({content:e})})})}window.gistConsoleLog=function(e,t){chrome.runtime.getBackgroundPage(function(r){o(r).then(function(t){e["background.txt"]=t;var r=chrome.app.window.getAll();var n=r.map(function(t){return o(t.contentWindow).then(function(r){e["window-"+t.id+".txt"]=r})});return Promise.all(n)}).then(function(){var r={description:chrome.runtime.getManifest().name+" console log","public":false,files:e};fetch("https://api.github.com/gists",{method:"POST",body:JSON.stringify(r)}).then(function(e){e.json().then(function(e){t(e.html_url)})})})})}})();function showModal(e){var t=$("#notificationModal");var r=t.find("#modal-ok");var n=t.find("#modal-cancel");r.unbind("click");n.unbind("click");e.cancelButton=e.cancelButton||"Cancel";e.okButton=e.okButton||"OK";e.title=e.title||chrome.runtime.getManifest().name;e.body=e.body||"";if(e.hideCancel)n.hide();else n.show();r.text(e.okButton);n.text(e.cancelButton);t.find("#modal-title").text(e.title);t.find("#modal-body").html(e.body);r.click(function(){if(!e.ok||!e.ok())$("#notificationModal").modal("hide")});if(e.cancel)e.click(e.cancel);$("#notificationModal").modal();if(e.duration){setTimeout(function(){$("#notificationModal").modal("hide")},e.duration)}}function shortModal(e,t){showModal({title:e,body:t,duration:8e3,hideCancel:true})}$(document).ready(function(){$("#purchase-options").hide();chrome.storage.local.get(["vysorUsage"],function(e){var t=e.vysorUsage;if(!t)t=0;var r=t/(60*60*1e3);r=Math.round(r*2)/2;$("#used").html("<span class='time-highlight'>You've used Vysor for "+r+" hours. Support Vysor. Go Pro.</span>")});var e={"vysor.annual":false,"vysor.annual2":true,"vysor.lifetime":true,vysor_monthly:true};function t(t){$.each(t.response.details.inAppProducts,function(t,r){var n=r.sku;if(!e[n])return;var o=r.localeData[0].title;var i=r.prices[0];var a=i.valueMicros/1e6+" "+i.currencyCode;var c=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet</a></td></tr>');c.find("#sub").text(o);c.find("#price").text(a);c.find("#purchase").click(function(){google.payments.inapp.buy({parameters:{env:"prod"},sku:n,success:function(){refreshLicenseManager();console.log("success",arguments)},failure:function(){refreshLicenseManager();console.log("failure",arguments)}})});$("#prices").append(c)});var o=$('<tr><td id="sub"></td><td id="price"></td><td></td></tr>');$("#prices").append(o);r();n();$("#purchase-options-loading h4").hide();$("#purchase-options").show()}function r(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> PayPal</a></td></tr>');e.find("#sub").text("Lifetime Pass");e.find("#price").text("39.99 USD");e.find("#purchase").click(function(){getAuthToken(true,function(e){if(!e){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var t="https://clockworkbilling.appspot.com/api/v1/paypalorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+e;chrome.browser.openTab({url:t});chrome.app.window.current().close()}.bind(this))});$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Credit Card or Alipay</a></td></tr>');e.find("#sub").text("Lifetime Pass");e.find("#price").text("39.99 USD");e.find("#purchase").click(function(){getAuthToken(true,function(e){if(!e){showNotification("Unable to retrieve Google auth token. Are you behind a firewall or using a VPN?");return}var t="https://clockworkbilling.appspot.com/api/v1/stripeorder/koushd@gmail.com/vysor.lifetime?return_url=https://vysor.clockworkmod.com/purchase&sandbox=false&token="+e;chrome.browser.openTab({url:t});chrome.app.window.current().close()}.bind(this))});$("#prices").append(e)}function n(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><a id="purchase" class="green-icon fa fa-shopping-cart"> Credit Card or Alipay</a></td></tr>');e.find("#sub").text("Enterprise Licensing (Monthly)");e.find("#price").text("$2");e.find("#purchase").click(function(){var e="https://billing.vysor.io/";chrome.browser.openTab({url:e});chrome.app.window.current().close()});$("#prices").append(e)}function o(){var e=$('<tr><td id="sub"></td><td id="price"></td><td><p id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet unavailable!</p></td></tr>');e.find("#sub").text("Monthly Subscription");e.find("#price").text("1.99 USD");$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td><p id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet unavailable!</p></td></tr>');e.find("#sub").text("Annual Subscription");e.find("#price").text("9.99 USD");$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td><p id="purchase" class="green-icon fa fa-shopping-cart"> Google Wallet unavailable!</p></td></tr>');e.find("#sub").text("Lifetime Pass");e.find("#price").text("39.99 USD");$("#prices").append(e);var e=$('<tr><td id="sub"></td><td id="price"></td><td></td></tr>');$("#prices").append(e);console.log(arguments);$("#purchase-options-loading h4").html('Chrome Web Store subscription pricing unavailable.<br/>This may be caused when behind a VPN or firewall.<br/>Please make ensure you are <a href="https://www.google.com/chrome/browser/signin.html" target="_blank">logged into Chrome</a><br/>and <a href="https://developer.chrome.com/webstore/pricing#seller" target="_blank">your country supports Chrome Web Store payments</a>.<br/>Alternatively, you may purchase the Lifetime Pass through PayPal.');$("#purchase-options").show();r();n()}google.payments.inapp.getSkuDetails({parameters:{env:"prod"},success:t,failure:o});$("#retrieve").click(function(){getAuthToken(true,function(e){if(!e){console.log("Unable to get token for retrieve?");return}refreshLicenseManager(function(e){if(!e){chrome.identity.getProfileUserInfo(function(e){if(!e){showModal({hideCancel:true,body:"Unable to get your Google Login. Are you logged into Chrome? If so, please open an issue on the Support Forum."});return}showModal({hideCancel:true,body:"No license found for "+e.email+". If this message was in error, please open an issue on the Support Forum."})})}})})})});
