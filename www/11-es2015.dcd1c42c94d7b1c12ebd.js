(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{J4zT:function(e,t,c){"use strict";c.r(t);var n=c("3Pt+"),i=c("M0ag"),o=c("tyNb"),r=c("ey9i"),a=c("H+bZ"),s=c("D0Ju"),l=c("ntpF"),d=c("QDJC"),b=c("fXoL"),u=c("1kSV"),p=c("sYmb"),h=c("5eHb"),m=c("lDzL"),R=c("ZOsW"),g=c("oZhZ");const w=["table"],f=["content"];function v(e,t){if(1&e){const e=b.ac();b.Rc(0,"\n                "),b.Zb(1,"i",22),b.lc("click",(function(c){b.Ic(e);const n=t.row;return b.pc().delete(n)})),b.qc(2,"translate"),b.Yb(),b.Rc(3,"\n              ")}2&e&&(b.Fb(1),b.wc("title",b.rc(2,1,"group.create.delete.button")))}function Z(e,t){1&e&&b.Rc(0),2&e&&b.Tc("\n                ",t.row._GroupId,"\n              ")}function Y(e,t){if(1&e){const e=b.ac();b.Rc(0,"\n                "),b.Zb(1,"input",23),b.lc("change",(function(c){b.Ic(e);const n=t.row;return b.pc().updateValue(c,n._GroupId)})),b.Yb(),b.Rc(2,"\n              ")}if(2&e){const e=t.row;b.Fb(1),b.vc("value",e.GroupName)}}function I(e,t){if(1&e&&(b.Rc(0,"\n                    "),b.Zb(1,"span",26),b.Rc(2,"\n                      "),b.Zb(3,"b"),b.Rc(4,"Widget"),b.Yb(),b.Rc(5),b.Zb(6,"b"),b.Rc(7,"IEEE"),b.Yb(),b.Rc(8),b.Zb(9,"b"),b.Rc(10,"Ep"),b.Yb(),b.Rc(11),b.Zb(12,"b"),b.Rc(13,"Id"),b.Yb(),b.Rc(14),b.Zb(15,"b"),b.Rc(16),b.Yb(),b.Rc(17,"\n                    "),b.Yb(),b.Rc(18,"\n                  ")),2&e){const e=t.item,c=t.searchTerm;b.Fb(1),b.vc("ngOptionHighlight",c),b.Fb(4),b.Tc(" : ",e.Name," - "),b.Fb(3),b.Tc(" : ",e.IEEE," - "),b.Fb(3),b.Tc(" : ",e.Ep," -\n                      "),b.Fb(3),b.Tc(" : ",e._ID," -\n                      "),b.Fb(2),b.Sc(e.ZDeviceName)}}function k(e,t){if(1&e){const e=b.ac();b.Rc(0,"\n                "),b.Zb(1,"ng-select",24),b.lc("ngModelChange",(function(c){return b.Ic(e),t.row.devicesSelected=c}))("change",(function(t){return b.Ic(e),b.pc().isFormValid()})),b.Rc(2,"\n                  "),b.Pc(3,I,19,6,"ng-template",25),b.Rc(4,"\n                "),b.Yb(),b.Rc(5,"\n              ")}if(2&e){const e=t.row,c=b.pc();b.Fb(1),b.vc("items",c.devices)("multiple",!0)("closeOnSelect",!1)("searchable",!0)("ngModel",e.devicesSelected)}}function E(e,t){if(1&e){const e=b.ac();b.Rc(0,"\n                "),b.Zb(1,"div",27),b.Rc(2,"\n                  "),b.Zb(3,"input",28),b.lc("click",(function(c){b.Ic(e);const n=t.row;return b.pc().updateCoordinator(c,n)})),b.Yb(),b.Rc(4,"\n                "),b.Yb(),b.Rc(5,"\n              ")}if(2&e){const e=t.row;b.Fb(3),b.vc("checked",e.coordinatorInside)}}function y(e,t){1&e&&(b.Rc(0,"\n  "),b.Zb(1,"div",29),b.Rc(2,"\n    "),b.Ub(3,"h4",30),b.Rc(4,"\n    "),b.Zb(5,"button",31),b.lc("click",(function(e){return t.$implicit.dismiss("Cross click")})),b.Rc(6,"\n      "),b.Zb(7,"span",32),b.Rc(8,"\xd7"),b.Yb(),b.Rc(9,"\n    "),b.Yb(),b.Rc(10,"\n  "),b.Yb(),b.Rc(11,"\n  "),b.Ub(12,"div",33),b.Rc(13,"\n  "),b.Zb(14,"div",34),b.Rc(15,"\n    "),b.Zb(16,"button",35),b.lc("click",(function(e){return t.$implicit.dismiss("cancel")})),b.Yb(),b.Rc(17,"\n  "),b.Yb(),b.Rc(18,"\n"))}const F=new r.c("GroupComponent"),N=[{path:"",component:(()=>{class e extends d.a{constructor(e,t,c,n,i,o){super(),this.modalService=e,this.apiService=t,this.formBuilder=c,this.translate=n,this.toastr=i,this.headerService=o,this.rows=[],this.rowsTemp=[],this.temp=[],this.hasEditing=!1,this.waiting=!1}ngOnInit(){this.apiService.getZGroupDevicesAvalaible().subscribe(e=>{const t=[];e&&e.length>0&&(e.forEach(e=>{e.WidgetList.forEach(c=>{if("0000"!==e._NwkId){const n=new s.a;n.Ep=c.Ep,n.IEEE=c.IEEE,n.Name=c.Name,n.ZDeviceName=c.ZDeviceName,n._ID=c._ID,n._NwkId=e._NwkId,t.push(n)}})}),this.devices=[...t])}),this.getGroups()}updateValue(e,t){this.hasEditing=!0,this.rows.find(e=>e._GroupId===t).GroupName=e.target.value}updateFilter(e){const t=e.target.value.toLowerCase(),c=this.temp.filter((function(e){let c=!1;return e._GroupId&&(c=-1!==e._GroupId.toLowerCase().indexOf(t)),!c&&e.GroupName&&(c=-1!==e.GroupName.toLowerCase().indexOf(t)),c||!t}));this.rows=c,this.table.offset=0}updateDevices(){this.rows.forEach(e=>{e.coordinatorInside&&(e.devicesSelected||(e.devicesSelected=[]),e.devicesSelected.push({Ep:"01",_NwkId:"0000"}))}),this.isFormValid&&this.apiService.putZGroups(this.rows).subscribe(e=>{F.debug(this.rows),this.hasEditing=!1,this.toastr.success(this.translate.instant("api.global.succes.update.title")),this.apiService.getRestartNeeded().subscribe(e=>{e.RestartNeeded&&(this.headerService.setRestart(!0),this.open(this.content))}),this.waiting=!0,setTimeout(()=>{this.getGroups(),this.waiting=!1},1e3)})}delete(e){const t=this.rows.indexOf(e,0);t>-1&&(this.rows.splice(t,1),this.rows=[...this.rows],this.temp=[...this.rows])}add(){const e=new s.b;e.GroupName="",e.coordinatorInside=!1,this.rows.push(e),this.rows=[...this.rows],this.temp=[...this.rows]}updateCoordinator(e,t){t.coordinatorInside=e.currentTarget.checked}open(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{},e=>{})}isFormValid(){let e=!0;return this.rows.forEach(t=>{t.GroupName&&(t.coordinatorInside||t.devicesSelected&&0!==t.devicesSelected.length)||(e=!1)}),!this.waiting&&e}getGroups(){this.apiService.getZGroups().subscribe(e=>{e&&e.length>0&&(e.forEach(e=>{const t=[];e.coordinatorInside=!1,e.Devices.forEach(c=>{if("0000"===c._NwkId)e.coordinatorInside=!0;else{const e=this.devices.find(e=>e._NwkId===c._NwkId&&e.Ep===c.Ep);null!=e&&t.push(e)}}),e.devicesSelected=t}),this.rows=[...e],this.temp=[...e])})}}return e.\u0275fac=function(t){return new(t||e)(b.Tb(u.e),b.Tb(a.a),b.Tb(n.e),b.Tb(p.d),b.Tb(h.b),b.Tb(l.a))},e.\u0275cmp=b.Nb({type:e,selectors:[["app-group"]],viewQuery:function(e,t){var c;1&e&&(b.Xc(w,!0),b.Xc(f,!0)),2&e&&(b.Ec(c=b.mc())&&(t.table=c.first),b.Ec(c=b.mc())&&(t.content=c.first))},features:[b.Cb],decls:74,vars:30,consts:[[1,"row"],[1,"col-sm-11"],[1,"card"],["translate","group.create.header",1,"card-header"],[1,"card-body"],["translate","group.create.subtitle",1,"card-title"],[1,"card-text"],[1,"col-sm"],["type","text",3,"placeholder","keyup"],[1,"col-sm-2"],["translate","group.create.add.button",1,"w-100","btn","btn-primary",3,"click"],[1,"bootstrap",3,"rows","columnMode","headerHeight","summaryRow","summaryPosition","footerHeight","limit","rowHeight"],["table",""],[3,"maxWidth"],["ngx-datatable-cell-template",""],["prop","_GroupId",3,"maxWidth","name"],["prop","GroupName",3,"maxWidth","name"],[3,"name","sortable"],[3,"maxWidth","name","sortable"],[1,"col-sm-1"],["translate","group.create.validate.button",1,"w-100","btn","btn-primary",3,"disabled","click"],["content",""],[1,"fa","fa-trash",2,"cursor","pointer",3,"title","click"],["autofocus","","type","text",3,"value","change"],["bindLabel","Name","placeholder","Choose device","appendTo","body",3,"items","multiple","closeOnSelect","searchable","ngModel","ngModelChange","change"],["ng-option-tmp",""],[3,"ngOptionHighlight"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"checked","click"],[1,"modal-header"],["id","modal-basic-title","translate","group.reloadplugin.alert.title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["translate","group.reloadplugin.alert.subject",1,"modal-body"],[1,"modal-footer"],["type","button","translate","group.reloadplugin.alert.cancel",1,"btn","btn-outline-dark",3,"click"]],template:function(e,t){1&e&&(b.Zb(0,"div",0),b.Rc(1,"\n  "),b.Zb(2,"div",1),b.Rc(3,"\n    "),b.Zb(4,"div",2),b.Rc(5,"\n      "),b.Ub(6,"div",3),b.Rc(7,"\n      "),b.Zb(8,"div",4),b.Rc(9,"\n        "),b.Ub(10,"h5",5),b.Rc(11,"\n        "),b.Zb(12,"div",6),b.Rc(13,"\n          "),b.Zb(14,"div",0),b.Rc(15,"\n            "),b.Zb(16,"div",7),b.Rc(17,"\n              "),b.Zb(18,"input",8),b.lc("keyup",(function(e){return t.updateFilter(e)})),b.qc(19,"translate"),b.Yb(),b.Rc(20,"\n            "),b.Yb(),b.Rc(21,"\n            "),b.Zb(22,"div",9),b.Rc(23,"\n              "),b.Zb(24,"button",10),b.lc("click",(function(e){return t.add()})),b.Yb(),b.Rc(25,"\n            "),b.Yb(),b.Rc(26,"\n          "),b.Yb(),b.Rc(27,"\n          "),b.Zb(28,"ngx-datatable",11,12),b.Rc(30,"\n            "),b.Zb(31,"ngx-datatable-column",13),b.Rc(32,"\n              "),b.Pc(33,v,4,3,"ng-template",14),b.Rc(34,"\n            "),b.Yb(),b.Rc(35,"\n\n            "),b.Zb(36,"ngx-datatable-column",15),b.qc(37,"translate"),b.Rc(38,"\n              "),b.Pc(39,Z,1,1,"ng-template",14),b.Rc(40,"\n            "),b.Yb(),b.Rc(41,"\n            "),b.Zb(42,"ngx-datatable-column",16),b.qc(43,"translate"),b.Rc(44,"\n              "),b.Pc(45,Y,3,1,"ng-template",14),b.Rc(46,"\n            "),b.Yb(),b.Rc(47,"\n            "),b.Zb(48,"ngx-datatable-column",17),b.qc(49,"translate"),b.Rc(50,"\n              "),b.Pc(51,k,6,5,"ng-template",14),b.Rc(52,"\n            "),b.Yb(),b.Rc(53,"\n            "),b.Zb(54,"ngx-datatable-column",18),b.qc(55,"translate"),b.Rc(56,"\n              "),b.Pc(57,E,6,1,"ng-template",14),b.Rc(58,"\n            "),b.Yb(),b.Rc(59,"\n          "),b.Yb(),b.Rc(60,"\n        "),b.Yb(),b.Rc(61,"\n      "),b.Yb(),b.Rc(62,"\n    "),b.Yb(),b.Rc(63,"\n  "),b.Yb(),b.Rc(64,"\n  "),b.Zb(65,"div",19),b.Rc(66,"\n    "),b.Zb(67,"button",20),b.lc("click",(function(e){return t.updateDevices()})),b.Yb(),b.Rc(68,"\n  "),b.Yb(),b.Rc(69,"\n"),b.Yb(),b.Rc(70,"\n\n"),b.Pc(71,y,19,0,"ng-template",null,21,b.Qc),b.Rc(73,"\n")),2&e&&(b.Fb(18),b.wc("placeholder",b.rc(19,20,"group.create.placeholder")),b.Fb(10),b.vc("rows",t.rows)("columnMode","force")("headerHeight",40)("summaryRow",!0)("summaryPosition","bottom")("footerHeight",40)("limit",10)("rowHeight","auto"),b.Fb(3),b.vc("maxWidth",100),b.Fb(5),b.wc("name",b.rc(37,22,"group.create.shortid.column")),b.vc("maxWidth",100),b.Fb(6),b.wc("name",b.rc(43,24,"group.create.groupname.column")),b.vc("maxWidth",200),b.Fb(6),b.wc("name",b.rc(49,26,"group.create.devices.column")),b.vc("sortable",!1),b.Fb(6),b.wc("name",b.rc(55,28,"group.create.coordinator.column")),b.vc("maxWidth",150)("sortable",!1),b.Fb(13),b.vc("disabled",!t.isFormValid()))},directives:[p.a,m.c,m.b,m.a,R.a,n.n,n.p,R.c,g.d],pipes:[p.c],styles:[""]}),e})(),data:{title:Object(r.d)("group")}}];let x=(()=>{class e{}return e.\u0275mod=b.Rb({type:e}),e.\u0275inj=b.Qb({factory:function(t){return new(t||e)},providers:[],imports:[[o.i.forChild(N)],o.i]}),e})();c.d(t,"GroupModule",(function(){return G}));let G=(()=>{class e{}return e.\u0275mod=b.Rb({type:e}),e.\u0275inj=b.Qb({factory:function(t){return new(t||e)},imports:[[x,i.a,n.k]]}),e})()}}]);