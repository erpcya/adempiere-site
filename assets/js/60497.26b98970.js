"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[60497],{60497:(t,e,i)=>{i.d(e,{diagram:()=>p});var n=i(25414),s=i(92074),r=(i(29173),i(48488),i(653),function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,4],i=[1,5],n=[1,6],s=[1,7],r=[1,9],c=[1,11,13,15,17,19,20,26,27,28,29],a=[2,5],l=[1,6,11,13,15,17,19,20,26,27,28,29],o=[26,27,28],h=[2,8],u=[1,18],p=[1,19],y=[1,20],d=[1,21],g=[1,22],f=[1,23],_=[1,28],m=[6,26,27,28,29],v={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(t,e,i,n,s,r,c){var a=r.length-1;switch(s){case 4:n.setShowData(!0);break;case 7:this.$=r[a-1];break;case 9:n.addSection(r[a-1],n.cleanupValue(r[a]));break;case 10:this.$=r[a].trim(),n.setDiagramTitle(this.$);break;case 11:this.$=r[a].trim(),n.setAccTitle(this.$);break;case 12:case 13:this.$=r[a].trim(),n.setAccDescription(this.$);break;case 14:n.addSection(r[a].substr(8)),this.$=r[a].substr(8);break;case 21:n.parseDirective("%%{","open_directive");break;case 22:n.parseDirective(r[a],"type_directive");break;case 23:r[a]=r[a].trim().replace(/'/g,'"'),n.parseDirective(r[a],"arg_directive");break;case 24:n.parseDirective("}%%","close_directive","pie")}},table:[{3:1,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},{1:[3]},{3:10,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},{3:11,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},t(c,a,{7:12,8:[1,13]}),t(l,[2,18]),t(l,[2,19]),t(l,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},t(o,h,{21:8,9:16,10:17,5:24,1:[2,3],11:u,13:p,15:y,17:d,19:g,20:f,29:r}),t(c,a,{7:25}),{23:26,24:[1,27],32:_},t([24,32],[2,22]),t(c,[2,6]),{4:29,26:i,27:n,28:s},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},t(o,[2,13]),t(o,[2,14]),t(o,[2,15]),t(o,h,{21:8,9:16,10:17,5:24,1:[2,4],11:u,13:p,15:y,17:d,19:g,20:f,29:r}),t(m,[2,16]),{25:34,31:[1,35]},t(m,[2,24]),t(c,[2,7]),t(o,[2,9]),t(o,[2,10]),t(o,[2,11]),t(o,[2,12]),{23:36,32:_},{32:[2,23]},t(m,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=[0],i=[],n=[null],s=[],r=this.table,c="",a=0,l=0,o=s.slice.call(arguments,1),h=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);h.setInput(t,u.yy),u.yy.lexer=h,u.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var y=h.yylloc;s.push(y);var d=h.options&&h.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,f,_,m,v,b,k,x,S,w={};;){if(f=e[e.length-1],this.defaultActions[f]?_=this.defaultActions[f]:(null==g&&(S=void 0,"number"!=typeof(S=i.pop()||h.lex()||1)&&(S instanceof Array&&(S=(i=S).pop()),S=this.symbols_[S]||S),g=S),_=r[f]&&r[f][g]),void 0===_||!_.length||!_[0]){var E;for(v in x=[],r[f])this.terminals_[v]&&v>2&&x.push("'"+this.terminals_[v]+"'");E=h.showPosition?"Parse error on line "+(a+1)+":\n"+h.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(a+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(E,{text:h.match,token:this.terminals_[g]||g,line:h.yylineno,loc:y,expected:x})}if(_[0]instanceof Array&&_.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+g);switch(_[0]){case 1:e.push(g),n.push(h.yytext),s.push(h.yylloc),e.push(_[1]),g=null,l=h.yyleng,c=h.yytext,a=h.yylineno,y=h.yylloc;break;case 2:if(b=this.productions_[_[1]][1],w.$=n[n.length-b],w._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},d&&(w._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(m=this.performAction.apply(w,[c,l,a,u.yy,_[1],n,s].concat(o))))return m;b&&(e=e.slice(0,-1*b*2),n=n.slice(0,-1*b),s=s.slice(0,-1*b)),e.push(this.productions_[_[1]][0]),n.push(w.$),s.push(w._$),k=r[e[e.length-2]][e[e.length-1]],e.push(k);break;case 3:return!0}}return!0}},b={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:case 6:case 8:case 9:break;case 7:return 26;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:case 20:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};function k(){this.yy={}}return v.lexer=b,k.prototype=v,v.Parser=k,new k}());r.parser=r;const c=r;let a={},l=!1;const o={parseDirective:function(t,e,i){n.m.parseDirective(this,t,e,i)},getConfig:()=>(0,n.c)().pie,addSection:function(t,e){t=n.e.sanitizeText(t,(0,n.c)()),void 0===a[t]&&(a[t]=e,n.l.debug("Added new section :",t))},getSections:()=>a,cleanupValue:function(t){return":"===t.substring(0,1)?(t=t.substring(1).trim(),Number(t.trim())):Number(t.trim())},clear:function(){a={},l=!1,(0,n.v)()},setAccTitle:n.s,getAccTitle:n.g,setDiagramTitle:n.r,getDiagramTitle:n.t,setShowData:function(t){l=t},getShowData:function(){return l},getAccDescription:n.a,setAccDescription:n.b};let h,u=(0,n.c)();const p={parser:c,db:o,renderer:{draw:(t,e,i,r)=>{var c;try{u=(0,n.c)(),n.l.debug("Rendering info diagram\n"+t);const i=(0,n.c)().securityLevel;let b;"sandbox"===i&&(b=(0,s.Ltv)("#i"+e));const k="sandbox"===i?(0,s.Ltv)(b.nodes()[0].contentDocument.body):(0,s.Ltv)("body"),x="sandbox"===i?b.nodes()[0].contentDocument:document;r.db.clear(),r.parser.parse(t),n.l.debug("Parsed info diagram");const S=x.getElementById(e);h=S.parentElement.offsetWidth,void 0===h&&(h=1200),void 0!==u.useWidth&&(h=u.useWidth),void 0!==u.pie.useWidth&&(h=u.pie.useWidth);const w=k.select("#"+e);(0,n.i)(w,450,h,u.pie.useMaxWidth),S.setAttribute("viewBox","0 0 "+h+" 450");var a=Math.min(h,450)/2-40,l=w.append("g").attr("transform","translate("+h/2+",225)"),o=r.db.getSections(),p=0;Object.keys(o).forEach((function(t){p+=o[t]}));const E=u.themeVariables;var y=[E.pie1,E.pie2,E.pie3,E.pie4,E.pie5,E.pie6,E.pie7,E.pie8,E.pie9,E.pie10,E.pie11,E.pie12];const D=(null==(c=u.pie)?void 0:c.textPosition)??.75;let[$]=(0,n.B)(E.pieOuterStrokeWidth);$??($=2);var d=(0,s.UMr)().range(y),g=Object.entries(o).map((function(t,e){return{order:e,name:t[0],value:t[1]}})),f=(0,s.rLf)().value((function(t){return t.value})).sort((function(t,e){return t.order-e.order}))(g),_=(0,s.JLW)().innerRadius(0).outerRadius(a),m=(0,s.JLW)().innerRadius(a*D).outerRadius(a*D);l.append("circle").attr("cx",0).attr("cy",0).attr("r",a+$/2).attr("class","pieOuterCircle"),l.selectAll("mySlices").data(f).enter().append("path").attr("d",_).attr("fill",(function(t){return d(t.data.name)})).attr("class","pieCircle"),l.selectAll("mySlices").data(f).enter().append("text").text((function(t){return(t.data.value/p*100).toFixed(0)+"%"})).attr("transform",(function(t){return"translate("+m.centroid(t)+")"})).style("text-anchor","middle").attr("class","slice"),l.append("text").text(r.db.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");var v=l.selectAll(".legend").data(d.domain()).enter().append("g").attr("class","legend").attr("transform",(function(t,e){return"translate(216,"+(22*e-22*d.domain().length/2)+")"}));v.append("rect").attr("width",18).attr("height",18).style("fill",d).style("stroke",d),v.data(f).append("text").attr("x",22).attr("y",14).text((function(t){return r.db.getShowData()||u.showData||u.pie.showData?t.data.name+" ["+t.data.value+"]":t.data.name}))}catch(t){n.l.error("Error while rendering info diagram"),n.l.error(t)}}},styles:t=>`\n  .pieCircle{\n    stroke: ${t.pieStrokeColor};\n    stroke-width : ${t.pieStrokeWidth};\n    opacity : ${t.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${t.pieOuterStrokeColor};\n    stroke-width: ${t.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${t.pieTitleTextSize};\n    fill: ${t.pieTitleTextColor};\n    font-family: ${t.fontFamily};\n  }\n  .slice {\n    font-family: ${t.fontFamily};\n    fill: ${t.pieSectionTextColor};\n    font-size:${t.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${t.pieLegendTextColor};\n    font-family: ${t.fontFamily};\n    font-size: ${t.pieLegendTextSize};\n  }\n`}}}]);