function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{J4zT:function(e,t,n){"use strict";n.r(t);var c=n("3Pt+"),r=n("M0ag"),o=n("tyNb"),a=n("ey9i"),i=n("H+bZ"),s=n("D0Ju"),l=n("ntpF"),u=n("QDJC"),b=n("fXoL"),d=n("1kSV"),p=n("sYmb"),f=n("5eHb"),h=n("lDzL"),m=n("ZOsW"),v=n("oZhZ"),g=["table"],R=["content"];function w(e,t){if(1&e){var n=b.ac();b.Rc(0,"\n                "),b.Zb(1,"i",22),b.lc("click",(function(e){b.Ic(n);var c=t.row;return b.pc().delete(c)})),b.qc(2,"translate"),b.Yb(),b.Rc(3,"\n              ")}2&e&&(b.Fb(1),b.wc("title",b.rc(2,1,"group.create.delete.button")))}function y(e,t){1&e&&b.Rc(0),2&e&&b.Tc("\n                ",t.row._GroupId,"\n              ")}function _(e,t){if(1&e){var n=b.ac();b.Rc(0,"\n                "),b.Zb(1,"input",23),b.lc("change",(function(e){b.Ic(n);var c=t.row;return b.pc().updateValue(e,c._GroupId)})),b.Yb(),b.Rc(2,"\n              ")}if(2&e){var c=t.row;b.Fb(1),b.vc("value",c.GroupName)}}function k(e,t){if(1&e&&(b.Rc(0,"\n                    "),b.Zb(1,"span",26),b.Rc(2,"\n                      "),b.Zb(3,"b"),b.Rc(4,"Widget"),b.Yb(),b.Rc(5),b.Zb(6,"b"),b.Rc(7,"IEEE"),b.Yb(),b.Rc(8),b.Zb(9,"b"),b.Rc(10,"Ep"),b.Yb(),b.Rc(11),b.Zb(12,"b"),b.Rc(13,"Id"),b.Yb(),b.Rc(14),b.Zb(15,"b"),b.Rc(16),b.Yb(),b.Rc(17,"\n                    "),b.Yb(),b.Rc(18,"\n                  ")),2&e){var n=t.item,c=t.searchTerm;b.Fb(1),b.vc("ngOptionHighlight",c),b.Fb(4),b.Tc(" : ",n.Name," - "),b.Fb(3),b.Tc(" : ",n.IEEE," - "),b.Fb(3),b.Tc(" : ",n.Ep," -\n                      "),b.Fb(3),b.Tc(" : ",n._ID," -\n                      "),b.Fb(2),b.Sc(n.ZDeviceName)}}function Z(e,t){if(1&e){var n=b.ac();b.Rc(0,"\n                "),b.Zb(1,"ng-select",24),b.lc("ngModelChange",(function(e){return b.Ic(n),t.row.devicesSelected=e}))("change",(function(e){return b.Ic(n),b.pc().isFormValid()})),b.Rc(2,"\n                  "),b.Pc(3,k,19,6,"ng-template",25),b.Rc(4,"\n                "),b.Yb(),b.Rc(5,"\n              ")}if(2&e){var c=t.row,r=b.pc();b.Fb(1),b.vc("items",r.devices)("multiple",!0)("closeOnSelect",!1)("searchable",!0)("ngModel",c.devicesSelected)}}function I(e,t){if(1&e){var n=b.ac();b.Rc(0,"\n                "),b.Zb(1,"div",27),b.Rc(2,"\n                  "),b.Zb(3,"input",28),b.lc("click",(function(e){b.Ic(n);var c=t.row;return b.pc().updateCoordinator(e,c)})),b.Yb(),b.Rc(4,"\n                "),b.Yb(),b.Rc(5,"\n              ")}if(2&e){var c=t.row;b.Fb(3),b.vc("checked",c.coordinatorInside)}}function Y(e,t){1&e&&(b.Rc(0,"\n  "),b.Zb(1,"div",29),b.Rc(2,"\n    "),b.Ub(3,"h4",30),b.Rc(4,"\n    "),b.Zb(5,"button",31),b.lc("click",(function(e){return t.$implicit.dismiss("Cross click")})),b.Rc(6,"\n      "),b.Zb(7,"span",32),b.Rc(8,"\xd7"),b.Yb(),b.Rc(9,"\n    "),b.Yb(),b.Rc(10,"\n  "),b.Yb(),b.Rc(11,"\n  "),b.Ub(12,"div",33),b.Rc(13,"\n  "),b.Zb(14,"div",34),b.Rc(15,"\n    "),b.Zb(16,"button",35),b.lc("click",(function(e){return t.$implicit.dismiss("cancel")})),b.Yb(),b.Rc(17,"\n  "),b.Yb(),b.Rc(18,"\n"))}var C,E,O=new a.c("GroupComponent"),S=[{path:"",component:(C=function(e){function t(e,n,c,r,o,a){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this))).modalService=e,i.apiService=n,i.formBuilder=c,i.translate=r,i.toastr=o,i.headerService=a,i.rows=[],i.rowsTemp=[],i.temp=[],i.hasEditing=!1,i.waiting=!1,i}return _inherits(t,e),_createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.apiService.getZGroupDevicesAvalaible().subscribe((function(t){var n=[];t&&t.length>0&&(t.forEach((function(e){e.WidgetList.forEach((function(t){if("0000"!==e._NwkId){var c=new s.a;c.Ep=t.Ep,c.IEEE=t.IEEE,c.Name=t.Name,c.ZDeviceName=t.ZDeviceName,c._ID=t._ID,c._NwkId=e._NwkId,n.push(c)}}))})),e.devices=[].concat(n),e.getGroups())}))}},{key:"updateValue",value:function(e,t){this.hasEditing=!0,this.rows.find((function(e){return e._GroupId===t})).GroupName=e.target.value}},{key:"updateFilter",value:function(e){var t=e.target.value.toLowerCase(),n=this.temp.filter((function(e){var n=!1;return e._GroupId&&(n=-1!==e._GroupId.toLowerCase().indexOf(t)),!n&&e.GroupName&&(n=-1!==e.GroupName.toLowerCase().indexOf(t)),n||!t}));this.rows=n,this.table.offset=0}},{key:"updateDevices",value:function(){var e=this;this.rows.forEach((function(e){e.coordinatorInside&&(e.devicesSelected||(e.devicesSelected=[]),e.devicesSelected.push({Ep:"01",_NwkId:"0000"}))})),this.isFormValid&&this.apiService.putZGroups(this.rows).subscribe((function(t){O.debug(e.rows),e.hasEditing=!1,e.toastr.success(e.translate.instant("api.global.succes.update.title")),e.apiService.getRestartNeeded().subscribe((function(t){t.RestartNeeded&&(e.headerService.setRestart(!0),e.open(e.content))})),e.waiting=!0,setTimeout((function(){e.getGroups(),e.waiting=!1}),1e3)}))}},{key:"delete",value:function(e){var t=this.rows.indexOf(e,0);t>-1&&(this.rows.splice(t,1),this.rows=_toConsumableArray(this.rows),this.temp=_toConsumableArray(this.rows))}},{key:"add",value:function(){var e=new s.b;e.GroupName="",e.coordinatorInside=!1,this.rows.push(e),this.rows=_toConsumableArray(this.rows),this.temp=_toConsumableArray(this.rows)}},{key:"updateCoordinator",value:function(e,t){t.coordinatorInside=e.currentTarget.checked}},{key:"open",value:function(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then((function(e){}),(function(e){}))}},{key:"isFormValid",value:function(){var e=!0;return this.rows.forEach((function(t){t.GroupName&&(t.coordinatorInside||t.devicesSelected&&0!==t.devicesSelected.length)||(e=!1)})),!this.waiting&&e}},{key:"getGroups",value:function(){var e=this;this.apiService.getZGroups().subscribe((function(t){t&&t.length>0&&(t.forEach((function(t){var n=[];t.coordinatorInside=!1,t.Devices.forEach((function(c){if("0000"===c._NwkId)t.coordinatorInside=!0;else{var r=e.devices.find((function(e){return e._NwkId===c._NwkId&&e.Ep===c.Ep}));null!=r&&n.push(r)}})),t.devicesSelected=n})),e.rows=_toConsumableArray(t),e.temp=_toConsumableArray(t))}))}}]),t}(u.a),C.\u0275fac=function(e){return new(e||C)(b.Tb(d.e),b.Tb(i.a),b.Tb(c.e),b.Tb(p.d),b.Tb(f.b),b.Tb(l.a))},C.\u0275cmp=b.Nb({type:C,selectors:[["app-group"]],viewQuery:function(e,t){var n;1&e&&(b.Xc(g,!0),b.Xc(R,!0)),2&e&&(b.Ec(n=b.mc())&&(t.table=n.first),b.Ec(n=b.mc())&&(t.content=n.first))},features:[b.Cb],decls:74,vars:30,consts:[[1,"row"],[1,"col-sm-11"],[1,"card"],["translate","group.create.header",1,"card-header"],[1,"card-body"],["translate","group.create.subtitle",1,"card-title"],[1,"card-text"],[1,"col-sm"],["type","text",3,"placeholder","keyup"],[1,"col-sm-2"],["translate","group.create.add.button",1,"w-100","btn","btn-primary",3,"click"],[1,"bootstrap",3,"rows","columnMode","headerHeight","summaryRow","summaryPosition","footerHeight","limit","rowHeight"],["table",""],[3,"maxWidth"],["ngx-datatable-cell-template",""],["prop","_GroupId",3,"maxWidth","name"],["prop","GroupName",3,"maxWidth","name"],[3,"name","sortable"],[3,"maxWidth","name","sortable"],[1,"col-sm-1"],["translate","group.create.validate.button",1,"w-100","btn","btn-primary",3,"disabled","click"],["content",""],[1,"fa","fa-trash",2,"cursor","pointer",3,"title","click"],["autofocus","","type","text",3,"value","change"],["bindLabel","Name","placeholder","Choose device","appendTo","body",3,"items","multiple","closeOnSelect","searchable","ngModel","ngModelChange","change"],["ng-option-tmp",""],[3,"ngOptionHighlight"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"checked","click"],[1,"modal-header"],["id","modal-basic-title","translate","group.reloadplugin.alert.title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["translate","group.reloadplugin.alert.subject",1,"modal-body"],[1,"modal-footer"],["type","button","translate","group.reloadplugin.alert.cancel",1,"btn","btn-outline-dark",3,"click"]],template:function(e,t){1&e&&(b.Zb(0,"div",0),b.Rc(1,"\n  "),b.Zb(2,"div",1),b.Rc(3,"\n    "),b.Zb(4,"div",2),b.Rc(5,"\n      "),b.Ub(6,"div",3),b.Rc(7,"\n      "),b.Zb(8,"div",4),b.Rc(9,"\n        "),b.Ub(10,"h5",5),b.Rc(11,"\n        "),b.Zb(12,"div",6),b.Rc(13,"\n          "),b.Zb(14,"div",0),b.Rc(15,"\n            "),b.Zb(16,"div",7),b.Rc(17,"\n              "),b.Zb(18,"input",8),b.lc("keyup",(function(e){return t.updateFilter(e)})),b.qc(19,"translate"),b.Yb(),b.Rc(20,"\n            "),b.Yb(),b.Rc(21,"\n            "),b.Zb(22,"div",9),b.Rc(23,"\n              "),b.Zb(24,"button",10),b.lc("click",(function(e){return t.add()})),b.Yb(),b.Rc(25,"\n            "),b.Yb(),b.Rc(26,"\n          "),b.Yb(),b.Rc(27,"\n          "),b.Zb(28,"ngx-datatable",11,12),b.Rc(30,"\n            "),b.Zb(31,"ngx-datatable-column",13),b.Rc(32,"\n              "),b.Pc(33,w,4,3,"ng-template",14),b.Rc(34,"\n            "),b.Yb(),b.Rc(35,"\n\n            "),b.Zb(36,"ngx-datatable-column",15),b.qc(37,"translate"),b.Rc(38,"\n              "),b.Pc(39,y,1,1,"ng-template",14),b.Rc(40,"\n            "),b.Yb(),b.Rc(41,"\n            "),b.Zb(42,"ngx-datatable-column",16),b.qc(43,"translate"),b.Rc(44,"\n              "),b.Pc(45,_,3,1,"ng-template",14),b.Rc(46,"\n            "),b.Yb(),b.Rc(47,"\n            "),b.Zb(48,"ngx-datatable-column",17),b.qc(49,"translate"),b.Rc(50,"\n              "),b.Pc(51,Z,6,5,"ng-template",14),b.Rc(52,"\n            "),b.Yb(),b.Rc(53,"\n            "),b.Zb(54,"ngx-datatable-column",18),b.qc(55,"translate"),b.Rc(56,"\n              "),b.Pc(57,I,6,1,"ng-template",14),b.Rc(58,"\n            "),b.Yb(),b.Rc(59,"\n          "),b.Yb(),b.Rc(60,"\n        "),b.Yb(),b.Rc(61,"\n      "),b.Yb(),b.Rc(62,"\n    "),b.Yb(),b.Rc(63,"\n  "),b.Yb(),b.Rc(64,"\n  "),b.Zb(65,"div",19),b.Rc(66,"\n    "),b.Zb(67,"button",20),b.lc("click",(function(e){return t.updateDevices()})),b.Yb(),b.Rc(68,"\n  "),b.Yb(),b.Rc(69,"\n"),b.Yb(),b.Rc(70,"\n\n"),b.Pc(71,Y,19,0,"ng-template",null,21,b.Qc),b.Rc(73,"\n")),2&e&&(b.Fb(18),b.wc("placeholder",b.rc(19,20,"group.create.placeholder")),b.Fb(10),b.vc("rows",t.rows)("columnMode","force")("headerHeight",40)("summaryRow",!0)("summaryPosition","bottom")("footerHeight",40)("limit",10)("rowHeight","auto"),b.Fb(3),b.vc("maxWidth",100),b.Fb(5),b.wc("name",b.rc(37,22,"group.create.shortid.column")),b.vc("maxWidth",100),b.Fb(6),b.wc("name",b.rc(43,24,"group.create.groupname.column")),b.vc("maxWidth",200),b.Fb(6),b.wc("name",b.rc(49,26,"group.create.devices.column")),b.vc("sortable",!1),b.Fb(6),b.wc("name",b.rc(55,28,"group.create.coordinator.column")),b.vc("maxWidth",150)("sortable",!1),b.Fb(13),b.vc("disabled",!t.isFormValid()))},directives:[p.a,h.c,h.b,h.a,m.a,c.n,c.p,m.c,v.d],pipes:[p.c],styles:[""]}),C),data:{title:Object(a.d)("group")}}],F=((E=function e(){_classCallCheck(this,e)}).\u0275mod=b.Rb({type:E}),E.\u0275inj=b.Qb({factory:function(e){return new(e||E)},providers:[],imports:[[o.i.forChild(S)],o.i]}),E);n.d(t,"GroupModule",(function(){return P}));var N,P=((N=function e(){_classCallCheck(this,e)}).\u0275mod=b.Rb({type:N}),N.\u0275inj=b.Qb({factory:function(e){return new(e||N)},imports:[[F,r.a,c.k]]}),N)}}]);