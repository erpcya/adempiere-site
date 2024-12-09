"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[62635],{62635:(t,e,r)=>{r.d(e,{a:()=>d,b:()=>M,c:()=>o,d:()=>C,e:()=>v,f:()=>P,g:()=>R,h:()=>H,i:()=>x,l:()=>c,p:()=>T,s:()=>S,u:()=>h});var a=r(25414),n=r(92074),i=r(1007),s=r(34571);const l={extension:(t,e,r)=>{a.l.trace("Making markers for ",r),t.append("defs").append("marker").attr("id",e+"-extensionStart").attr("class","marker extension "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),t.append("defs").append("marker").attr("id",e+"-extensionEnd").attr("class","marker extension "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},composition:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-compositionStart").attr("class","marker composition "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-compositionEnd").attr("class","marker composition "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},aggregation:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-aggregationStart").attr("class","marker aggregation "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-aggregationEnd").attr("class","marker aggregation "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},dependency:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-dependencyStart").attr("class","marker dependency "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",e+"-dependencyEnd").attr("class","marker dependency "+e).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},lollipop:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-lollipopStart").attr("class","marker lollipop "+e).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},point:(t,e)=>{t.append("marker").attr("id",e+"-pointEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-pointStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},circle:(t,e)=>{t.append("marker").attr("id",e+"-circleEnd").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-circleStart").attr("class","marker "+e).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},cross:(t,e)=>{t.append("marker").attr("id",e+"-crossEnd").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),t.append("marker").attr("id",e+"-crossStart").attr("class","marker cross "+e).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},barb:(t,e)=>{t.append("defs").append("marker").attr("id",e+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")}},d=(t,e,r,a)=>{e.forEach((e=>{l[e](t,r,a)}))},o=(t,e,r,i)=>{let s=t||"";if("object"==typeof s&&(s=s[0]),(0,a.n)((0,a.c)().flowchart.htmlLabels)){return s=s.replace(/\\n|\n/g,"<br />"),a.l.info("vertexText"+s),function(t){const e=(0,n.Ltv)(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),r=e.append("xhtml:div"),a=t.label,i=t.isNode?"nodeLabel":"edgeLabel";var s;return r.html('<span class="'+i+'" '+(t.labelStyle?'style="'+t.labelStyle+'"':"")+">"+a+"</span>"),(s=t.labelStyle)&&r.attr("style",s),r.style("display","inline-block"),r.style("white-space","nowrap"),r.attr("xmlns","http://www.w3.org/1999/xhtml"),e.node()}({isNode:i,label:(0,a.H)(s).replace(/fa[blrs]?:fa-[\w-]+/g,(t=>`<i class='${t.replace(":"," ")}'></i>`)),labelStyle:e.replace("fill:","color:")})}{const t=document.createElementNS("http://www.w3.org/2000/svg","text");t.setAttribute("style",e.replace("color:","fill:"));let a=[];a="string"==typeof s?s.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(s)?s:[];for(const e of a){const a=document.createElementNS("http://www.w3.org/2000/svg","tspan");a.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),a.setAttribute("dy","1em"),a.setAttribute("x","0"),r?a.setAttribute("class","title-row"):a.setAttribute("class","row"),a.textContent=e.trim(),t.appendChild(a)}return t}},c=async(t,e,r,s)=>{let l;const d=e.useHtmlLabels||(0,a.n)((0,a.c)().flowchart.htmlLabels);l=r||"node default";const c=t.insert("g").attr("class",l).attr("id",e.domId||e.id),h=c.insert("g").attr("class","label").attr("style",e.labelStyle);let p;p=void 0===e.labelText?"":"string"==typeof e.labelText?e.labelText:e.labelText[0];const g=h.node();let y;y="markdown"===e.labelType?(0,i.c)(h,(0,a.d)((0,a.H)(p),(0,a.c)()),{useHtmlLabels:d,width:e.width||(0,a.c)().flowchart.wrappingWidth,classes:"markdown-node-label"}):g.appendChild(o((0,a.d)((0,a.H)(p),(0,a.c)()),e.labelStyle,!1,s));let f=y.getBBox();const x=e.padding/2;if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const t=y.children[0],e=(0,n.Ltv)(y),r=t.getElementsByTagName("img");if(r){const t=""===p.replace(/<img[^>]*>/g,"").trim();await Promise.all([...r].map((e=>new Promise((r=>e.addEventListener("load",(function(){if(e.style.display="flex",e.style.flexDirection="column",t){const t=(0,a.c)().fontSize?(0,a.c)().fontSize:window.getComputedStyle(document.body).fontSize,r=5;e.style.width=parseInt(t,10)*r+"px"}else e.style.width="100%";r(e)})))))))}f=t.getBoundingClientRect(),e.attr("width",f.width),e.attr("height",f.height)}return d?h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):h.attr("transform","translate(0, "+-f.height/2+")"),e.centerLabel&&h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),h.insert("rect",":first-child"),{shapeSvg:c,bbox:f,halfPadding:x,label:h}},h=(t,e)=>{const r=e.node().getBBox();t.width=r.width,t.height=r.height};function p(t,e,r,a){return t.insert("polygon",":first-child").attr("points",a.map((function(t){return t.x+","+t.y})).join(" ")).attr("class","label-container").attr("transform","translate("+-e/2+","+r/2+")")}function g(t,e,r,a){var n=t.x,i=t.y,s=n-a.x,l=i-a.y,d=Math.sqrt(e*e*l*l+r*r*s*s),o=Math.abs(e*r*s/d);a.x<n&&(o=-o);var c=Math.abs(e*r*l/d);return a.y<i&&(c=-c),{x:n+o,y:i+c}}function y(t,e,r,a){var n,i,s,l,d,o,c,h,p,g,y,x,u;if(n=e.y-t.y,s=t.x-e.x,d=e.x*t.y-t.x*e.y,p=n*r.x+s*r.y+d,g=n*a.x+s*a.y+d,!(0!==p&&0!==g&&f(p,g)||(i=a.y-r.y,l=r.x-a.x,o=a.x*r.y-r.x*a.y,c=i*t.x+l*t.y+o,h=i*e.x+l*e.y+o,0!==c&&0!==h&&f(c,h)||0==(y=n*l-i*s))))return x=Math.abs(y/2),{x:(u=s*o-l*d)<0?(u-x)/y:(u+x)/y,y:(u=i*d-n*o)<0?(u-x)/y:(u+x)/y}}function f(t,e){return t*e>0}const x=(t,e)=>{var r,a,n=t.x,i=t.y,s=e.x-n,l=e.y-i,d=t.width/2,o=t.height/2;return Math.abs(l)*d>Math.abs(s)*o?(l<0&&(o=-o),r=0===l?0:o*s/l,a=o):(s<0&&(d=-d),r=d,a=0===s?0:d*l/s),{x:n+r,y:i+a}},u={node:function(t,e){return t.intersect(e)},circle:function(t,e,r){return g(t,e,e,r)},ellipse:g,polygon:function(t,e,r){var a=t.x,n=t.y,i=[],s=Number.POSITIVE_INFINITY,l=Number.POSITIVE_INFINITY;"function"==typeof e.forEach?e.forEach((function(t){s=Math.min(s,t.x),l=Math.min(l,t.y)})):(s=Math.min(s,e.x),l=Math.min(l,e.y));for(var d=a-t.width/2-s,o=n-t.height/2-l,c=0;c<e.length;c++){var h=e[c],p=e[c<e.length-1?c+1:0],g=y(t,r,{x:d+h.x,y:o+h.y},{x:d+p.x,y:o+p.y});g&&i.push(g)}return i.length?(i.length>1&&i.sort((function(t,e){var a=t.x-r.x,n=t.y-r.y,i=Math.sqrt(a*a+n*n),s=e.x-r.x,l=e.y-r.y,d=Math.sqrt(s*s+l*l);return i<d?-1:i===d?0:1})),i[0]):t},rect:x},b=async(t,e)=>{const{shapeSvg:r,bbox:n}=await c(t,e,void 0,!0),i=n.width+e.padding+(n.height+e.padding),s=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];a.l.info("Question main (Circle)");const l=p(r,i,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return a.l.warn("Intersect called"),u.polygon(e,s,t)},r};function w(t,e,r,n){const i=[],s=t=>{i.push(t,0)},l=t=>{i.push(0,t)};e.includes("t")?(a.l.debug("add top border"),s(r)):l(r),e.includes("r")?(a.l.debug("add right border"),s(n)):l(n),e.includes("b")?(a.l.debug("add bottom border"),s(r)):l(r),e.includes("l")?(a.l.debug("add left border"),s(n)):l(n),t.attr("stroke-dasharray",i.join(" "))}const m=(t,e,r)=>{const a=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);let n=70,i=10;"LR"===r&&(n=10,i=70);const s=a.append("rect").attr("x",-1*n/2).attr("y",-1*i/2).attr("width",n).attr("height",i).attr("class","fork-join");return h(e,s),e.height=e.height+e.padding/2,e.width=e.width+e.padding/2,e.intersect=function(t){return u.rect(e,t)},a},k={rhombus:b,question:b,rect:async(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=await c(t,e,"node "+e.classes,!0),s=r.insert("rect",":first-child"),l=n.width+e.padding,d=n.height+e.padding;if(s.attr("class","basic label-container").attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",l).attr("height",d),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(w(s,e.props.borders,l,d),t.delete("borders")),t.forEach((t=>{a.l.warn(`Unknown node property ${t}`)}))}return h(e,s),e.intersect=function(t){return u.rect(e,t)},r},labelRect:async(t,e)=>{const{shapeSvg:r}=await c(t,e,"label",!0);a.l.trace("Classes = ",e.classes);const n=r.insert("rect",":first-child");if(n.attr("width",0).attr("height",0),r.attr("class","label edgeLabel"),e.props){const t=new Set(Object.keys(e.props));e.props.borders&&(w(n,e.props.borders,0,0),t.delete("borders")),t.forEach((t=>{a.l.warn(`Unknown node property ${t}`)}))}return h(e,n),e.intersect=function(t){return u.rect(e,t)},r},rectWithTitle:(t,e)=>{let r;r=e.classes?"node "+e.classes:"node default";const i=t.insert("g").attr("class",r).attr("id",e.domId||e.id),s=i.insert("rect",":first-child"),l=i.insert("line"),d=i.insert("g").attr("class","label"),c=e.labelText.flat?e.labelText.flat():e.labelText;let p="";p="object"==typeof c?c[0]:c,a.l.info("Label text abc79",p,c,"object"==typeof c);const g=d.node().appendChild(o(p,e.labelStyle,!0,!0));let y={width:0,height:0};if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const t=g.children[0],e=(0,n.Ltv)(g);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}a.l.info("Text 2",c);const f=c.slice(1,c.length);let x=g.getBBox();const b=d.node().appendChild(o(f.join?f.join("<br/>"):f,e.labelStyle,!0,!0));if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const t=b.children[0],e=(0,n.Ltv)(b);y=t.getBoundingClientRect(),e.attr("width",y.width),e.attr("height",y.height)}const w=e.padding/2;return(0,n.Ltv)(b).attr("transform","translate( "+(y.width>x.width?0:(x.width-y.width)/2)+", "+(x.height+w+5)+")"),(0,n.Ltv)(g).attr("transform","translate( "+(y.width<x.width?0:-(x.width-y.width)/2)+", 0)"),y=d.node().getBBox(),d.attr("transform","translate("+-y.width/2+", "+(-y.height/2-w+3)+")"),s.attr("class","outer title-state").attr("x",-y.width/2-w).attr("y",-y.height/2-w).attr("width",y.width+e.padding).attr("height",y.height+e.padding),l.attr("class","divider").attr("x1",-y.width/2-w).attr("x2",y.width/2+w).attr("y1",-y.height/2-w+x.height+w).attr("y2",-y.height/2-w+x.height+w),h(e,s),e.intersect=function(t){return u.rect(e,t)},i},choice:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id);return r.insert("polygon",":first-child").attr("points",[{x:0,y:14},{x:14,y:0},{x:0,y:-14},{x:-14,y:0}].map((function(t){return t.x+","+t.y})).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),e.width=28,e.height=28,e.intersect=function(t){return u.circle(e,14,t)},r},circle:async(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=await c(t,e,void 0,!0),s=r.insert("circle",":first-child");return s.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),a.l.info("Circle main"),h(e,s),e.intersect=function(t){return a.l.info("Circle intersect",e,n.width/2+i,t),u.circle(e,n.width/2+i,t)},r},doublecircle:async(t,e)=>{const{shapeSvg:r,bbox:n,halfPadding:i}=await c(t,e,void 0,!0),s=r.insert("g",":first-child"),l=s.insert("circle"),d=s.insert("circle");return l.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i+5).attr("width",n.width+e.padding+10).attr("height",n.height+e.padding+10),d.attr("style",e.style).attr("rx",e.rx).attr("ry",e.ry).attr("r",n.width/2+i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),a.l.info("DoubleCircle main"),h(e,l),e.intersect=function(t){return a.l.info("DoubleCircle intersect",e,n.width/2+i+5,t),u.circle(e,n.width/2+i+5,t)},r},stadium:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.height+e.padding,i=a.width+n/4+e.padding,s=r.insert("rect",":first-child").attr("style",e.style).attr("rx",n/2).attr("ry",n/2).attr("x",-i/2).attr("y",-n/2).attr("width",i).attr("height",n);return h(e,s),e.intersect=function(t){return u.rect(e,t)},r},hexagon:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.height+e.padding,i=n/4,s=a.width+2*i+e.padding,l=[{x:i,y:0},{x:s-i,y:0},{x:s,y:-n/2},{x:s-i,y:-n},{x:i,y:-n},{x:0,y:-n/2}],d=p(r,s,n,l);return d.attr("style",e.style),h(e,d),e.intersect=function(t){return u.polygon(e,l,t)},r},rect_left_inv_arrow:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-i/2,y:0},{x:n,y:0},{x:n,y:-i},{x:-i/2,y:-i},{x:0,y:-i/2}];return p(r,n,i,s).attr("style",e.style),e.width=n+i,e.height=i,e.intersect=function(t){return u.polygon(e,s,t)},r},lean_right:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-2*i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:i/6,y:-i}],l=p(r,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},r},lean_left:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:2*i/6,y:0},{x:n+i/6,y:0},{x:n-2*i/6,y:-i},{x:-i/6,y:-i}],l=p(r,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},r},trapezoid:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:-2*i/6,y:0},{x:n+2*i/6,y:0},{x:n-i/6,y:-i},{x:i/6,y:-i}],l=p(r,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},r},inv_trapezoid:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:i/6,y:0},{x:n-i/6,y:0},{x:n+2*i/6,y:-i},{x:-2*i/6,y:-i}],l=p(r,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},r},rect_right_inv_arrow:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:0,y:0},{x:n+i/2,y:0},{x:n,y:-i/2},{x:n+i/2,y:-i},{x:0,y:-i}],l=p(r,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},r},cylinder:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=n/2,s=i/(2.5+n/50),l=a.height+s+e.padding,d="M 0,"+s+" a "+i+","+s+" 0,0,0 "+n+" 0 a "+i+","+s+" 0,0,0 "+-n+" 0 l 0,"+l+" a "+i+","+s+" 0,0,0 "+n+" 0 l 0,"+-l,o=r.attr("label-offset-y",s).insert("path",":first-child").attr("style",e.style).attr("d",d).attr("transform","translate("+-n/2+","+-(l/2+s)+")");return h(e,o),e.intersect=function(t){const r=u.rect(e,t),a=r.x-e.x;if(0!=i&&(Math.abs(a)<e.width/2||Math.abs(a)==e.width/2&&Math.abs(r.y-e.y)>e.height/2-s)){let n=s*s*(1-a*a/(i*i));0!=n&&(n=Math.sqrt(n)),n=s-n,t.y-e.y>0&&(n=-n),r.y+=n}return r},r},start:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),h(e,a),e.intersect=function(t){return u.circle(e,7,t)},r},end:(t,e)=>{const r=t.insert("g").attr("class","node default").attr("id",e.domId||e.id),a=r.insert("circle",":first-child"),n=r.insert("circle",":first-child");return n.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),a.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),h(e,n),e.intersect=function(t){return u.circle(e,7,t)},r},note:async(t,e)=>{e.useHtmlLabels||(0,a.c)().flowchart.htmlLabels||(e.centerLabel=!0);const{shapeSvg:r,bbox:n,halfPadding:i}=await c(t,e,"node "+e.classes,!0);a.l.info("Classes = ",e.classes);const s=r.insert("rect",":first-child");return s.attr("rx",e.rx).attr("ry",e.ry).attr("x",-n.width/2-i).attr("y",-n.height/2-i).attr("width",n.width+e.padding).attr("height",n.height+e.padding),h(e,s),e.intersect=function(t){return u.rect(e,t)},r},subroutine:async(t,e)=>{const{shapeSvg:r,bbox:a}=await c(t,e,void 0,!0),n=a.width+e.padding,i=a.height+e.padding,s=[{x:0,y:0},{x:n,y:0},{x:n,y:-i},{x:0,y:-i},{x:0,y:0},{x:-8,y:0},{x:n+8,y:0},{x:n+8,y:-i},{x:-8,y:-i},{x:-8,y:0}],l=p(r,n,i,s);return l.attr("style",e.style),h(e,l),e.intersect=function(t){return u.polygon(e,s,t)},r},fork:m,join:m,class_box:(t,e)=>{const r=e.padding/2;let i;i=e.classes?"node "+e.classes:"node default";const l=t.insert("g").attr("class",i).attr("id",e.domId||e.id),d=l.insert("rect",":first-child"),c=l.insert("line"),p=l.insert("line");let g=0,y=4;const f=l.insert("g").attr("class","label");let x=0;const b=e.classData.annotations&&e.classData.annotations[0],w=e.classData.annotations[0]?"«"+e.classData.annotations[0]+"»":"",m=f.node().appendChild(o(w,e.labelStyle,!0,!0));let k=m.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const t=m.children[0],e=(0,n.Ltv)(m);k=t.getBoundingClientRect(),e.attr("width",k.width),e.attr("height",k.height)}e.classData.annotations[0]&&(y+=k.height+4,g+=k.width);let L=e.classData.label;void 0!==e.classData.type&&""!==e.classData.type&&((0,a.c)().flowchart.htmlLabels?L+="&lt;"+e.classData.type+"&gt;":L+="<"+e.classData.type+">");const v=f.node().appendChild(o(L,e.labelStyle,!0,!0));(0,n.Ltv)(v).attr("class","classTitle");let S=v.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const t=v.children[0],e=(0,n.Ltv)(v);S=t.getBoundingClientRect(),e.attr("width",S.width),e.attr("height",S.height)}y+=S.height+4,S.width>g&&(g=S.width);const M=[];e.classData.members.forEach((t=>{const r=(0,s.p)(t);let i=r.displayText;(0,a.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const l=f.node().appendChild(o(i,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0));let d=l.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const t=l.children[0],e=(0,n.Ltv)(l);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>g&&(g=d.width),y+=d.height+4,M.push(l)})),y+=8;const T=[];if(e.classData.methods.forEach((t=>{const r=(0,s.p)(t);let i=r.displayText;(0,a.c)().flowchart.htmlLabels&&(i=i.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const l=f.node().appendChild(o(i,r.cssStyle?r.cssStyle:e.labelStyle,!0,!0));let d=l.getBBox();if((0,a.n)((0,a.c)().flowchart.htmlLabels)){const t=l.children[0],e=(0,n.Ltv)(l);d=t.getBoundingClientRect(),e.attr("width",d.width),e.attr("height",d.height)}d.width>g&&(g=d.width),y+=d.height+4,T.push(l)})),y+=8,b){let t=(g-k.width)/2;(0,n.Ltv)(m).attr("transform","translate( "+(-1*g/2+t)+", "+-1*y/2+")"),x=k.height+4}let B=(g-S.width)/2;return(0,n.Ltv)(v).attr("transform","translate( "+(-1*g/2+B)+", "+(-1*y/2+x)+")"),x+=S.height+4,c.attr("class","divider").attr("x1",-g/2-r).attr("x2",g/2+r).attr("y1",-y/2-r+8+x).attr("y2",-y/2-r+8+x),x+=8,M.forEach((t=>{(0,n.Ltv)(t).attr("transform","translate( "+-g/2+", "+(-1*y/2+x+4)+")"),x+=S.height+4})),x+=8,p.attr("class","divider").attr("x1",-g/2-r).attr("x2",g/2+r).attr("y1",-y/2-r+8+x).attr("y2",-y/2-r+8+x),x+=8,T.forEach((t=>{(0,n.Ltv)(t).attr("transform","translate( "+-g/2+", "+(-1*y/2+x)+")"),x+=S.height+4})),d.attr("class","outer title-state").attr("x",-g/2-r).attr("y",-y/2-r).attr("width",g+e.padding).attr("height",y+e.padding),h(e,d),e.intersect=function(t){return u.rect(e,t)},l}};let L={};const v=async(t,e,r)=>{let n,i;if(e.link){let s;"sandbox"===(0,a.c)().securityLevel?s="_top":e.linkTarget&&(s=e.linkTarget||"_blank"),n=t.insert("svg:a").attr("xlink:href",e.link).attr("target",s),i=await k[e.shape](n,e,r)}else i=await k[e.shape](t,e,r),n=i;return e.tooltip&&i.attr("title",e.tooltip),e.class&&i.attr("class","node default "+e.class),L[e.id]=n,e.haveCallback&&L[e.id].attr("class",L[e.id].attr("class")+" clickable"),n},S=(t,e)=>{L[e.id]=t},M=()=>{L={}},T=t=>{const e=L[t.id];a.l.trace("Transforming node",t.diff,t,"translate("+(t.x-t.width/2-5)+", "+t.width/2+")");const r=t.diff||0;return t.clusterNode?e.attr("transform","translate("+(t.x+r-t.width/2)+", "+(t.y-t.height/2-8)+")"):e.attr("transform","translate("+t.x+", "+t.y+")"),r};let B={},E={};const C=()=>{B={},E={}},P=(t,e)=>{const r=(0,a.n)((0,a.c)().flowchart.htmlLabels),s="markdown"===e.labelType?(0,i.c)(t,e.label,{style:e.labelStyle,useHtmlLabels:r,addSvgBackground:!0}):o(e.label,e.labelStyle);a.l.info("abc82",e,e.labelType);const l=t.insert("g").attr("class","edgeLabel"),d=l.insert("g").attr("class","label");d.node().appendChild(s);let c,h=s.getBBox();if(r){const t=s.children[0],e=(0,n.Ltv)(s);h=t.getBoundingClientRect(),e.attr("width",h.width),e.attr("height",h.height)}if(d.attr("transform","translate("+-h.width/2+", "+-h.height/2+")"),B[e.id]=l,e.width=h.width,e.height=h.height,e.startLabelLeft){const r=o(e.startLabelLeft,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),E[e.id]||(E[e.id]={}),E[e.id].startLeft=a,N(c,e.startLabelLeft)}if(e.startLabelRight){const r=o(e.startLabelRight,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=a.node().appendChild(r),n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),E[e.id]||(E[e.id]={}),E[e.id].startRight=a,N(c,e.startLabelRight)}if(e.endLabelLeft){const r=o(e.endLabelLeft,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(r),E[e.id]||(E[e.id]={}),E[e.id].endLeft=a,N(c,e.endLabelLeft)}if(e.endLabelRight){const r=o(e.endLabelRight,e.labelStyle),a=t.insert("g").attr("class","edgeTerminals"),n=a.insert("g").attr("class","inner");c=n.node().appendChild(r);const i=r.getBBox();n.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),a.node().appendChild(r),E[e.id]||(E[e.id]={}),E[e.id].endRight=a,N(c,e.endLabelRight)}return s};function N(t,e){(0,a.c)().flowchart.htmlLabels&&t&&(t.style.width=9*e.length+"px",t.style.height="12px")}const H=(t,e)=>{a.l.info("Moving label abc78 ",t.id,t.label,B[t.id]);let r=e.updatedPath?e.updatedPath:e.originalPath;if(t.label){const n=B[t.id];let i=t.x,s=t.y;if(r){const n=a.u.calcLabelPosition(r);a.l.info("Moving label "+t.label+" from (",i,",",s,") to (",n.x,",",n.y,") abc78"),e.updatedPath&&(i=n.x,s=n.y)}n.attr("transform","translate("+i+", "+s+")")}if(t.startLabelLeft){const e=E[t.id].startLeft;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_left",r);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.startLabelRight){const e=E[t.id].startRight;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeStart?10:0,"start_right",r);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.endLabelLeft){const e=E[t.id].endLeft;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_left",r);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}if(t.endLabelRight){const e=E[t.id].endRight;let n=t.x,i=t.y;if(r){const e=a.u.calcTerminalLabelPosition(t.arrowTypeEnd?10:0,"end_right",r);n=e.x,i=e.y}e.attr("transform","translate("+n+", "+i+")")}},_=(t,e)=>{a.l.warn("abc88 cutPathAtIntersect",t,e);let r=[],n=t[0],i=!1;return t.forEach((t=>{if(a.l.info("abc88 checking point",t,e),((t,e)=>{const r=t.x,a=t.y,n=Math.abs(e.x-r),i=Math.abs(e.y-a),s=t.width/2,l=t.height/2;return n>=s||i>=l})(e,t)||i)a.l.warn("abc88 outside",t,n),n=t,i||r.push(t);else{const s=((t,e,r)=>{a.l.warn(`intersection calc abc89:\n  outsidePoint: ${JSON.stringify(e)}\n  insidePoint : ${JSON.stringify(r)}\n  node        : x:${t.x} y:${t.y} w:${t.width} h:${t.height}`);const n=t.x,i=t.y,s=Math.abs(n-r.x),l=t.width/2;let d=r.x<e.x?l-s:l+s;const o=t.height/2,c=Math.abs(e.y-r.y),h=Math.abs(e.x-r.x);if(Math.abs(i-e.y)*l>Math.abs(n-e.x)*o){let t=r.y<e.y?e.y-o-i:i-o-e.y;d=h*t/c;const n={x:r.x<e.x?r.x+d:r.x-h+d,y:r.y<e.y?r.y+c-t:r.y-c+t};return 0===d&&(n.x=e.x,n.y=e.y),0===h&&(n.x=e.x),0===c&&(n.y=e.y),a.l.warn(`abc89 topp/bott calc, Q ${c}, q ${t}, R ${h}, r ${d}`,n),n}{d=r.x<e.x?e.x-l-n:n-l-e.x;let t=c*d/h,i=r.x<e.x?r.x+h-d:r.x-h+d,s=r.y<e.y?r.y+t:r.y-t;return a.l.warn(`sides calc abc89, Q ${c}, q ${t}, R ${h}, r ${d}`,{_x:i,_y:s}),0===d&&(i=e.x,s=e.y),0===h&&(i=e.x),0===c&&(s=e.y),{x:i,y:s}}})(e,n,t);a.l.warn("abc88 inside",t,n,s),a.l.warn("abc88 intersection",s);let l=!1;r.forEach((t=>{l=l||t.x===s.x&&t.y===s.y})),r.some((t=>t.x===s.x&&t.y===s.y))?a.l.warn("abc88 no intersect",s,r):r.push(s),i=!0}})),a.l.warn("abc88 returning points",r),r},R=function(t,e,r,i,s,l){let d=r.points,o=!1;const c=l.node(e.v);var h=l.node(e.w);a.l.info("abc88 InsertEdge: ",r),h.intersect&&c.intersect&&(d=d.slice(1,r.points.length-1),d.unshift(c.intersect(d[0])),a.l.info("Last point",d[d.length-1],h,h.intersect(d[d.length-1])),d.push(h.intersect(d[d.length-1]))),r.toCluster&&(a.l.info("to cluster abc88",i[r.toCluster]),d=_(r.points,i[r.toCluster].node),o=!0),r.fromCluster&&(a.l.info("from cluster abc88",i[r.fromCluster]),d=_(d.reverse(),i[r.fromCluster].node).reverse(),o=!0);const p=d.filter((t=>!Number.isNaN(t.y)));let g;g=("graph"===s||"flowchart"===s)&&r.curve||n.qrM;const y=(0,n.n8j)().x((function(t){return t.x})).y((function(t){return t.y})).curve(g);let f;switch(r.thickness){case"normal":f="edge-thickness-normal";break;case"thick":case"invisible":f="edge-thickness-thick";break;default:f=""}switch(r.pattern){case"solid":f+=" edge-pattern-solid";break;case"dotted":f+=" edge-pattern-dotted";break;case"dashed":f+=" edge-pattern-dashed"}const x=t.append("path").attr("d",y(p)).attr("id",r.id).attr("class"," "+f+(r.classes?" "+r.classes:"")).attr("style",r.style);let u="";switch(((0,a.c)().flowchart.arrowMarkerAbsolute||(0,a.c)().state.arrowMarkerAbsolute)&&(u=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,u=u.replace(/\(/g,"\\("),u=u.replace(/\)/g,"\\)")),a.l.info("arrowTypeStart",r.arrowTypeStart),a.l.info("arrowTypeEnd",r.arrowTypeEnd),r.arrowTypeStart){case"arrow_cross":x.attr("marker-start","url("+u+"#"+s+"-crossStart)");break;case"arrow_point":x.attr("marker-start","url("+u+"#"+s+"-pointStart)");break;case"arrow_barb":x.attr("marker-start","url("+u+"#"+s+"-barbStart)");break;case"arrow_circle":x.attr("marker-start","url("+u+"#"+s+"-circleStart)");break;case"aggregation":x.attr("marker-start","url("+u+"#"+s+"-aggregationStart)");break;case"extension":x.attr("marker-start","url("+u+"#"+s+"-extensionStart)");break;case"composition":x.attr("marker-start","url("+u+"#"+s+"-compositionStart)");break;case"dependency":x.attr("marker-start","url("+u+"#"+s+"-dependencyStart)");break;case"lollipop":x.attr("marker-start","url("+u+"#"+s+"-lollipopStart)")}switch(r.arrowTypeEnd){case"arrow_cross":x.attr("marker-end","url("+u+"#"+s+"-crossEnd)");break;case"arrow_point":x.attr("marker-end","url("+u+"#"+s+"-pointEnd)");break;case"arrow_barb":x.attr("marker-end","url("+u+"#"+s+"-barbEnd)");break;case"arrow_circle":x.attr("marker-end","url("+u+"#"+s+"-circleEnd)");break;case"aggregation":x.attr("marker-end","url("+u+"#"+s+"-aggregationEnd)");break;case"extension":x.attr("marker-end","url("+u+"#"+s+"-extensionEnd)");break;case"composition":x.attr("marker-end","url("+u+"#"+s+"-compositionEnd)");break;case"dependency":x.attr("marker-end","url("+u+"#"+s+"-dependencyEnd)");break;case"lollipop":x.attr("marker-end","url("+u+"#"+s+"-lollipopEnd)")}let b={};return o&&(b.updatedPath=d),b.originalPath=r.points,b}},34571:(t,e,r)=>{r.d(e,{p:()=>l,s:()=>c});var a=r(92074),n=r(25414);let i=0;const s=function(t){let e=t.id;return t.type&&(e+="<"+t.type+">"),e},l=function(t){let e="",r="",a="",i="",s=t.substring(0,1),l=t.substring(t.length-1,t.length);s.match(/[#+~-]/)&&(i=s);let d=/[\s\w)~]/;l.match(d)||(r=o(l));const c=""===i?0:1;let h=""===r?t.length:t.length-1;const p=(t=t.substring(c,h)).indexOf("("),g=t.indexOf(")");if(p>1&&g>p&&g<=t.length){let s=t.substring(0,p).trim();const l=t.substring(p+1,g);if(e=i+s+"("+(0,n.x)(l.trim())+")",g<t.length){let i=t.substring(g+1,g+2);""!==r||i.match(d)?a=t.substring(g+1).trim():(r=o(i),a=t.substring(g+2).trim()),""!==a&&(":"===a.charAt(0)&&(a=a.substring(1).trim()),a=" : "+(0,n.x)(a),e+=a)}}else e=i+(0,n.x)(t);return{displayText:e,cssStyle:r}},d=function(t,e,r,a){let n=l(e);const i=t.append("tspan").attr("x",a.padding).text(n.displayText);""!==n.cssStyle&&i.attr("style",n.cssStyle),r||i.attr("dy",a.textHeight)},o=function(t){switch(t){case"*":return"font-style:italic;";case"$":return"text-decoration:underline;";default:return""}},c={getClassTitleString:s,drawClass:function(t,e,r,a){n.l.debug("Rendering class ",e,r);const i=e.id,l={id:i,label:e.id,width:0,height:0},o=t.append("g").attr("id",a.db.lookUpDomId(i)).attr("class","classGroup");let c;c=e.link?o.append("svg:a").attr("xlink:href",e.link).attr("target",e.linkTarget).append("text").attr("y",r.textHeight+r.padding).attr("x",0):o.append("text").attr("y",r.textHeight+r.padding).attr("x",0);let h=!0;e.annotations.forEach((function(t){const e=c.append("tspan").text("«"+t+"»");h||e.attr("dy",r.textHeight),h=!1}));let p=s(e);const g=c.append("tspan").text(p).attr("class","title");h||g.attr("dy",r.textHeight);const y=c.node().getBBox().height,f=o.append("line").attr("x1",0).attr("y1",r.padding+y+r.dividerMargin/2).attr("y2",r.padding+y+r.dividerMargin/2),x=o.append("text").attr("x",r.padding).attr("y",y+r.dividerMargin+r.textHeight).attr("fill","white").attr("class","classText");h=!0,e.members.forEach((function(t){d(x,t,h,r),h=!1}));const u=x.node().getBBox(),b=o.append("line").attr("x1",0).attr("y1",r.padding+y+r.dividerMargin+u.height).attr("y2",r.padding+y+r.dividerMargin+u.height),w=o.append("text").attr("x",r.padding).attr("y",y+2*r.dividerMargin+u.height+r.textHeight).attr("fill","white").attr("class","classText");h=!0,e.methods.forEach((function(t){d(w,t,h,r),h=!1}));const m=o.node().getBBox();var k=" ";e.cssClasses.length>0&&(k+=e.cssClasses.join(" "));const L=o.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",m.width+2*r.padding).attr("height",m.height+r.padding+.5*r.dividerMargin).attr("class",k).node().getBBox().width;return c.node().childNodes.forEach((function(t){t.setAttribute("x",(L-t.getBBox().width)/2)})),e.tooltip&&c.insert("title").text(e.tooltip),f.attr("x2",L),b.attr("x2",L),l.width=L,l.height=m.height+r.padding+.5*r.dividerMargin,l},drawEdge:function(t,e,r,s,l){const d=function(t){switch(t){case l.db.relationType.AGGREGATION:return"aggregation";case l.db.relationType.EXTENSION:return"extension";case l.db.relationType.COMPOSITION:return"composition";case l.db.relationType.DEPENDENCY:return"dependency";case l.db.relationType.LOLLIPOP:return"lollipop"}};e.points=e.points.filter((t=>!Number.isNaN(t.y)));const o=e.points,c=(0,a.n8j)().x((function(t){return t.x})).y((function(t){return t.y})).curve(a.qrM),h=t.append("path").attr("d",c(o)).attr("id","edge"+i).attr("class","relation");let p,g,y="";s.arrowMarkerAbsolute&&(y=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,y=y.replace(/\(/g,"\\("),y=y.replace(/\)/g,"\\)")),1==r.relation.lineType&&h.attr("class","relation dashed-line"),10==r.relation.lineType&&h.attr("class","relation dotted-line"),"none"!==r.relation.type1&&h.attr("marker-start","url("+y+"#"+d(r.relation.type1)+"Start)"),"none"!==r.relation.type2&&h.attr("marker-end","url("+y+"#"+d(r.relation.type2)+"End)");const f=e.points.length;let x,u,b,w,m=n.u.calcLabelPosition(e.points);if(p=m.x,g=m.y,f%2!=0&&f>1){let t=n.u.calcCardinalityPosition("none"!==r.relation.type1,e.points,e.points[0]),a=n.u.calcCardinalityPosition("none"!==r.relation.type2,e.points,e.points[f-1]);n.l.debug("cardinality_1_point "+JSON.stringify(t)),n.l.debug("cardinality_2_point "+JSON.stringify(a)),x=t.x,u=t.y,b=a.x,w=a.y}if(void 0!==r.title){const e=t.append("g").attr("class","classLabel"),a=e.append("text").attr("class","label").attr("x",p).attr("y",g).attr("fill","red").attr("text-anchor","middle").text(r.title);window.label=a;const n=a.node().getBBox();e.insert("rect",":first-child").attr("class","box").attr("x",n.x-s.padding/2).attr("y",n.y-s.padding/2).attr("width",n.width+s.padding).attr("height",n.height+s.padding)}n.l.info("Rendering relation "+JSON.stringify(r)),void 0!==r.relationTitle1&&"none"!==r.relationTitle1&&t.append("g").attr("class","cardinality").append("text").attr("class","type1").attr("x",x).attr("y",u).attr("fill","black").attr("font-size","6").text(r.relationTitle1),void 0!==r.relationTitle2&&"none"!==r.relationTitle2&&t.append("g").attr("class","cardinality").append("text").attr("class","type2").attr("x",b).attr("y",w).attr("fill","black").attr("font-size","6").text(r.relationTitle2),i++},drawNote:function(t,e,r,a){n.l.debug("Rendering note ",e,r);const i=e.id,s={id:i,text:e.text,width:0,height:0},l=t.append("g").attr("id",i).attr("class","classGroup");let d=l.append("text").attr("y",r.textHeight+r.padding).attr("x",0);const o=JSON.parse(`"${e.text}"`).split("\n");o.forEach((function(t){n.l.debug(`Adding line: ${t}`),d.append("tspan").text(t).attr("class","title").attr("dy",r.textHeight)}));const c=l.node().getBBox(),h=l.insert("rect",":first-child").attr("x",0).attr("y",0).attr("width",c.width+2*r.padding).attr("height",c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin).node().getBBox().width;return d.node().childNodes.forEach((function(t){t.setAttribute("x",(h-t.getBBox().width)/2)})),s.width=h,s.height=c.height+o.length*r.textHeight+r.padding+.5*r.dividerMargin,s},parseMember:l}}}]);