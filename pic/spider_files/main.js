!function t(e,i,o){function n(r,s){if(!i[r]){if(!e[r]){var l="function"==typeof require&&require;if(!s&&l)return l(r,!0);if(a)return a(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var c=i[r]={exports:{}};e[r][0].call(c.exports,function(t){var i=e[r][1][t];return n(i?i:t)},c,c.exports,t,e,i,o)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)n(o[r]);return n}({1:[function(t,e,i){e.exports={init:function(){window.innerWidth<768?$(".ad").filter(function(){return $(this).hasClass("desktop")}).remove():$(".ad").filter(function(){return $(this).hasClass("mobile")}).remove(),/stickpng\.com/.test(window.location.hostname)&&(adsbygoogle=window.adsbygoogle||[],$(".adsbygoogle").each(function(){adsbygoogle.push({})}))}}},{}],2:[function(t,e,i){var o=t("./tools");e.exports={init:function(t){var e=$("footer"),i=e.find(".newsletter-box"),n=i.find("input"),a=i.find("button"),r=i.find(".error"),s=!0;a.tap(function(t){t.preventDefault(),s&&i.submit()}),i.on("submit",function(e){if(e.preventDefault(),s){var i=n.val();if(!i)return void r.text("You need to insert your email address.").show();if(!o.isValidEmail(i))return void r.text("You need to insert a valid email address.").show();r.empty().hide(),$.ajax({method:"POST",url:"/t/subscribe",data:{email:i}}).then(function(){a.addClass("success"),s=!1,t.onNewsletterSubscribe&&t.onNewsletterSubscribe()},function(t){r.text("Sorry, we could not subscribe you at this time, please try again later.").show()})}}),n.tap(function(){$(this).focus()});var l=e.find(".social-links");l.find("a").click(t.onSocialClick)}}},{"./tools":7}],3:[function(t,e,i){var o=t("./upload-form");e.exports={init:function(){var t=$("#navigation"),e=t.find(".search-box"),i=e.find("input");e.find("button").tap(function(t){t.preventDefault(),e.submit()}),e.on("submit",function(t){t.preventDefault();var e=i.val();e&&(window.location="/search?q="+encodeURIComponent(e)+"&page=1")}),i.tap(function(){$(this).focus()}),o.init(),t.find(".upload").tap(function(){o.show()})}}},{"./upload-form":9}],4:[function(t,e,i){function o(){a.velocity("fadeOut",500),r.velocity({opacity:[0,1],translateY:[-50,0]},{display:"none",duration:500,easing:[.4,0,0,1]})}var n,a,r,s=t("./tools");e.exports={init:function(t){n=$("#newsletter-popup"),a=n.find(".overlay"),r=n.find(".popup-body");var e=n.find("form"),i=e.find(".error");a.tap(o),n.find(".close").tap(o),e.on("submit",function(n){n.preventDefault();var a=e.find("input").val();return a?s.isValidEmail(a)?(i.empty().hide(),void $.ajax({method:"POST",url:"/t/subscribe",data:{email:a}}).then(function(){t.onSubscribe&&t.onSubscribe(),o()},function(t){i.text("Sorry, we could not subscribe you at this time, please try again later.").show()})):void i.text("You need to insert a valid email address.").show():void i.text("You need to insert your email address.").show()})},show:function(){n.show(),a.velocity("fadeIn",500),r.velocity({opacity:[1,0],translateY:[0,-50]},{display:"block",duration:500,easing:[.4,0,0,1]})},hide:o}},{"./tools":7}],5:[function(t,e,i){e.exports={render:function(t){var e=t.total,i=t.current,o=t.query;if(1===e)return"";var n=[1];3===i||4===i?n.push(-1):i>4&&n.push(0);for(var a=Math.max(i-2,2);a<=Math.min(i+2,e-1);a++)n.push(a);i+3<e?n.push(0):i+1<e&&n.push(-1),a<=e&&n.push(e);var r="",s="?";return o&&(s+="q="+o+"&"),i>1&&(r+='<a class="item prev" href="'+s+"page="+(i-1)+'"><i></i></a>'),n.forEach(function(t){r+=t===-1?'<span class="dots mobile">...</span>':0===t?'<span class="dots">...</span>':t===i?'<span class="item current">'+t+"</span>":1!==t&&t!==e?'<a class="item desktop" href="'+s+"page="+t+'">'+t+"</a>":'<a class="item" href="'+s+"page="+t+'">'+t+"</a>"}),i<e&&(r+='<a class="item next" href="'+s+"page="+(i+1)+'"><i></i></a>'),r}}},{}],6:[function(t,e,i){function o(){a.velocity("fadeOut",500),r.velocity({opacity:[0,1],translateY:[-50,0]},{display:"none",duration:500,easing:[.4,0,0,1]})}var n,a,r;t("./tools");e.exports={init:function(t){n=$("#share-popup"),a=n.find(".overlay"),r=n.find(".popup-body"),a.tap(o),n.find(".close").tap(o),n.find(".social-links").find("a").click(t.onSocialClick)},show:function(){n.show(),a.velocity("fadeIn",500),r.velocity({opacity:[1,0],translateY:[0,-50]},{display:"block",duration:500,easing:[.4,0,0,1]})},hide:o}},{"./tools":7}],7:[function(t,e,i){function o(){var t,e,i,o,n={};if(t=window.location.search,""!=t)for(t=decodeURIComponent(t),e=t.substr(1).split("&"),i=0;i<e.length;i++)o=e[i].split("="),n[o[0]]=o[1];return n}function n(t){return/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(t)}function a(t,e,i,o){var n=new XMLHttpRequest;n.open("PUT",e),n.onload=function(){200==n.status?i():o("Failed upload!")},n.onerror=o,n.ontimeout=o,n.timeout=3e4,n.send(t)}e.exports={getQueryString:o,isValidEmail:n,uploadFile:a}},{}],8:[function(t,e,i){e.exports={track:function(t,e,i){window.ga&&ga("send",{hitType:"event",eventCategory:t,eventAction:e,eventLabel:i})}}},{}],9:[function(t,e,i){function o(){n.velocity("fadeOut",500),a.velocity({opacity:[0,1],translateY:[0,50]},{display:"none",duration:500,easing:[.4,0,0,1],complete:function(){r.attr("style",""),s.hide(),u.addClass("disabled"),l.wrap("<form>").closest("form").get(0).reset(),l.unwrap(),a.find("img").attr("src",""),c.empty()}})}var n,a,r,s,l,u,c,d=t("./tools");e.exports={init:function(){n=$("#overlay"),a=$("#upload-submission"),r=a.find(".form"),$spinner=a.find(".spinner"),s=a.find(".done"),l=$("#fileInput"),u=a.find(".submit"),c=a.find(".error"),l.on("change",function(t){var e=this.files&&this.files[0];if(e){if("image/png"!=e.type)return void c.text("Currently, we only accept PNG images.");var i=new FileReader;i.onload=function(t){a.find("img").attr("src",t.target.result),a.find(".submit").removeClass("disabled"),c.empty()},i.readAsDataURL(e)}}),u.tap(function(){var t=l[0].files&&l[0].files[0];return t?$("#emailInput").val()?d.isValidEmail($("#emailInput").val())?(c.empty(),r.velocity({opacity:0},500),$spinner.velocity({opacity:1,top:[0,200]},{display:"block",duration:500,easing:[.4,0,0,1]}),void $.ajax({method:"GET",url:"/t/upload-sign",data:{"file-type":t.type}}).then(function(e){d.uploadFile(t,e.url,function(){$.ajax({method:"POST",url:"/t/upload",data:{email:$("#emailInput").val(),image:e.fileName}}),$spinner.velocity({opacity:0,top:[-200,0]},{display:"none",duration:500,easing:[.4,0,0,1]}),s.velocity({opacity:1,top:[0,200]},{display:"block",duration:500,easing:[.4,0,0,1],complete:function(){setTimeout(o,500)}})})},function(t){c.text("Upload failed. Please try again."),r.velocity({opacity:1},500),$spinner.velocity("fadeOut",500)})):void c.text("You need to insert a valid email address."):void c.text("You need to insert your email address."):void c.text("You need to select a png image first!")}),n.tap(o),a.find(".close").tap(o)},show:function(){n.velocity("fadeIn",500),a.velocity({opacity:[1,0],translateY:[50,0]},{display:"block",duration:500,easing:[.4,0,0,1]})},hide:o}},{"./tools":7}],10:[function(t,e,i){function o(){var t=2592e5;if(localStorage.getItem("subscribed"))n();else{var e=localStorage.getItem("newsPopupShownDate");e||(e=0),Date.now()-e>t?(localStorage.setItem("newsPopupShownDate",Date.now()),setTimeout(function(){l.show(),c.track("newsletter-popup","show","image page")},300)):n()}}function n(){var t=2592e5;if(!localStorage.getItem("shared")){var e=localStorage.getItem("sharePopupShownDate");e||(e=0),Date.now()-e>t&&(localStorage.setItem("sharePopupShownDate",Date.now()),setTimeout(function(){u.show(),c.track("share-popup","show","image page")},300))}}var a=t("./lib/navigation"),r=t("./lib/pagination"),s=t("./lib/footer"),l=t("./lib/newsletter-popup"),u=t("./lib/share-popup"),c=t("./lib/tracker"),d=t("./lib/ads");$(function(){if(a.init(),d.init(),s.init({onNewsletterSubscribe:function(){localStorage.setItem("subscribed",!0),c.track("newsletter","subscribe","footer")},onSocialClick:function(){localStorage.setItem("shared",!0),c.track("social","click-"+this.className,"footer")}}),"image"===document.body.className){var t=$("#image");t.find(".image").find("img").on("contextmenu",function(t){t.preventDefault()}),t.find(".meta").find(".download").click(function(){var t=$(this).attr("data-id");t&&$.ajax({method:"GET",url:"/t/download/"+t}),c.track("download","download","image page"),o()}),l.init({onSubscribe:function(){localStorage.setItem("subscribed",!0),c.track("newsletter","subscribe","download popup")}}),u.init({onSocialClick:function(){c.track("share","click-"+this.className,"download popup"),u.hide()}})}window.paginationData&&$("#pagination").append(r.render(window.paginationData))})},{"./lib/ads":1,"./lib/footer":2,"./lib/navigation":3,"./lib/newsletter-popup":4,"./lib/pagination":5,"./lib/share-popup":6,"./lib/tracker":8}]},{},[10]);