define("jquery",[],function(){return window.jQuery}),define("backbone.marionette",[],function(){return window.Marionette}),this.Templates=this.Templates||{},this.Templates["metrics-delete"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i,s="function",o=t.helperMissing,u=this.escapeExpression;return'<form id="delete-metric-form">\n  <div class="modal-head">\n    <h2>Delete Metric</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    Are you sure you want to delete metric "'+u((i=(i=t.name||(e!=null?e.name:e))!=null?i:o,typeof i===s?i.call(e,{name:"name",hash:{},data:r}):i))+'"?\n  </div>\n  <div class="modal-foot">\n    <button id="delete-metric-submit" class="button-red">Delete</button>\n    <a href="#" class="js-modal-close" id="delete-metric-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0}),this.Templates["metrics-form"]=Handlebars.template({1:function(e,t,n,r){return"Update"},3:function(e,t,n,r){return"Create"},5:function(e,t,n,r,i){var s,o=this.lambda,u=this.escapeExpression,a=t.helperMissing,f='          <option value="'+u(o(e,e))+'" ';return s=(t.eq||e&&e.eq||a).call(e,e,i[1]!=null?i[1].type:i[1],{name:"eq",hash:{},fn:this.program(6,r,i),inverse:this.noop,data:r}),s!=null&&(f+=s),f+">"+u((t.t||e&&e.t||a).call(e,"metric.type",e,{name:"t",hash:{},data:r}))+"</option>\n"},6:function(e,t,n,r){return"selected"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o,u="function",a=t.helperMissing,f=this.escapeExpression,l='<form id="create-metric-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return s=t["if"].call(e,e!=null?e.id:e,{name:"if",hash:{},fn:this.program(1,r,i),inverse:this.program(3,r,i),data:r}),s!=null&&(l+=s),l+=' Metric</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="modal-field">\n      <label for="create-metric-key">Key<em class="mandatory">*</em></label>\n      <input id="create-metric-key" name="key" type="text" maxlength="200" required value="'+f((o=(o=t.key||(e!=null?e.key:e))!=null?o:a,typeof o===u?o.call(e,{name:"key",hash:{},data:r}):o))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-name">Name<em class="mandatory">*</em></label>\n      <input id="create-metric-name" name="name" type="text" maxlength="200" required value="'+f((o=(o=t.name||(e!=null?e.name:e))!=null?o:a,typeof o===u?o.call(e,{name:"name",hash:{},data:r}):o))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-description">Description</label>\n      <textarea id="create-metric-description" name="description">'+f((o=(o=t.description||(e!=null?e.description:e))!=null?o:a,typeof o===u?o.call(e,{name:"description",hash:{},data:r}):o))+'</textarea>\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-domain">Domain</label>\n      <input id="create-metric-domain" name="domain" type="text" maxlength="200" value="'+f((o=(o=t.domain||(e!=null?e.domain:e))!=null?o:a,typeof o===u?o.call(e,{name:"domain",hash:{},data:r}):o))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-metric-type">Type<em class="mandatory">*</em></label>\n      <select id="create-metric-type" name="type">\n',s=t.each.call(e,e!=null?e.types:e,{name:"each",hash:{},fn:this.program(5,r,i),inverse:this.noop,data:r}),s!=null&&(l+=s),l+='      </select>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-metric-submit">',s=t["if"].call(e,e!=null?e.id:e,{name:"if",hash:{},fn:this.program(1,r,i),inverse:this.program(3,r,i),data:r}),s!=null&&(l+=s),l+'</button>\n    <a href="#" class="js-modal-close" id="create-metric-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0,useDepths:!0}),this.Templates["metrics-header"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){return'<header class="page-header">\n  <h1 class="page-title">Custom Metrics</h1>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="metrics-create">Create Metric</button>\n    </div>\n  </div>\n  <p class="page-description">These metrics are available for all projects. Manual measures can be set at project level\n    via the configuration interface.</p>\n</header>\n'},useData:!0}),this.Templates["metrics-layout"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){return'<div class="page">\n  <div id="metrics-header"></div>\n  <div id="metrics-list"></div>\n  <div id="metrics-list-footer"></div>\n</div>\n'},useData:!0}),this.Templates["metrics-list-footer"]=Handlebars.template({1:function(e,t,n,r){return'    <a id="metrics-fetch-more" class="spacer-left" href="#">show more</a>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i,s,o="function",u=t.helperMissing,a=this.escapeExpression,f='<footer class="spacer-top note text-center">\n  '+a((s=(s=t.count||(e!=null?e.count:e))!=null?s:u,typeof s===o?s.call(e,{name:"count",hash:{},data:r}):s))+"/"+a((s=(s=t.total||(e!=null?e.total:e))!=null?s:u,typeof s===o?s.call(e,{name:"total",hash:{},data:r}):s))+" shown\n";return i=t["if"].call(e,e!=null?e.more:e,{name:"if",hash:{},fn:this.program(1,r),inverse:this.noop,data:r}),i!=null&&(f+=i),f+"</footer>\n"},useData:!0}),this.Templates["metrics-list-item"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i,s="function",o=t.helperMissing,u=this.escapeExpression;return'<div class="pull-right big-spacer-left nowrap">\n  <a class="js-metric-update icon-edit" title="Update" data-toggle="tooltip" href="#"></a>\n  <a class="js-metric-delete icon-delete" title="Delete" data-toggle="tooltip" href="#"></a>\n</div>\n\n<div class="display-inline-block text-top width-30">\n  <div>\n    <strong class="js-metric-name">'+u((i=(i=t.name||(e!=null?e.name:e))!=null?i:o,typeof i===s?i.call(e,{name:"name",hash:{},data:r}):i))+'</strong>\n    <span class="js-metric-key note little-spacer-left">'+u((i=(i=t.key||(e!=null?e.key:e))!=null?i:o,typeof i===s?i.call(e,{name:"key",hash:{},data:r}):i))+'</span>\n  </div>\n</div>\n\n<div class="display-inline-block text-top width-20">\n  <span class="js-metric-domain">'+u((i=(i=t.domain||(e!=null?e.domain:e))!=null?i:o,typeof i===s?i.call(e,{name:"domain",hash:{},data:r}):i))+'</span>\n</div>\n\n<div class="display-inline-block text-top width-20">\n  <span class="js-metric-type">'+u((t.t||e&&e.t||o).call(e,"metric.type",e!=null?e.type:e,{name:"t",hash:{},data:r}))+'</span>\n</div>\n\n<div class="display-inline-block text-top width-20">\n  <span class="js-metric-description">'+u((i=(i=t.description||(e!=null?e.description:e))!=null?i:o,typeof i===s?i.call(e,{name:"description",hash:{},data:r}):i))+"</span>\n</div>\n"},useData:!0}),define("apps/metrics/templates",function(){}),define("apps/metrics/layout",["exports","module","backbone.marionette","./templates"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n);t.exports=s["default"].LayoutView.extend({template:Templates["metrics-layout"],regions:{headerRegion:"#metrics-header",listRegion:"#metrics-list",listFooterRegion:"#metrics-list-footer"}})}),define("underscore",[],function(){return window._}),define("backbone",[],function(){return window.Backbone}),define("apps/metrics/metric",["exports","module","underscore","backbone"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r);t.exports=o["default"].Model.extend({idAttribute:"id",urlRoot:function(){return baseUrl+"/api/metrics"},sync:function(t,n,r){var i=r||{};return t==="create"&&s["default"].defaults(i,{url:this.urlRoot()+"/create",type:"POST",data:s["default"].pick(n.toJSON(),"key","name","description","domain","type")}),t==="update"&&s["default"].defaults(i,{url:this.urlRoot()+"/update",type:"POST",data:s["default"].pick(n.toJSON(),"id","key","name","description","domain","type")}),t==="delete"&&s["default"].defaults(i,{url:this.urlRoot()+"/delete",type:"POST",data:{ids:this.id}}),o["default"].ajax(i)}})}),define("apps/metrics/metrics",["exports","module","underscore","backbone","./metric"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r),a=s(i);t.exports=u["default"].Collection.extend({model:a["default"],url:function(){return baseUrl+"/api/metrics/search"},parse:function(t){return this.total=t.total,this.p=t.p,this.ps=t.ps,t.metrics},fetch:function(t){var n=o["default"].defaults(t||{},{data:{}});return this.q=n.data.q,n.data.isCustom=!0,this._super(n)},fetchMore:function(){var t=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:t,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})}),define("components/common/modals",["exports","module","jquery","backbone.marionette"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r),u="modal";t.exports=o["default"].ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var t=this;this.$el.detach().appendTo((0,s["default"])("body")),(0,s["default"])("html").addClass(this.htmlClassName),this.renderOverlay(),this.keyScope=key.getScope(),key.setScope("modal"),key("escape","modal",function(){return t.destroy(),!1}),this.show(),!this.options.large||this.$el.addClass("modal-large")},show:function(){var t=this;setTimeout(function(){t.$el.addClass("in"),(0,s["default"])("."+t.overlayClassName).addClass("in")},0)},onDestroy:function(){(0,s["default"])("html").removeClass(this.htmlClassName),this.removeOverlay(),key.deleteScope("modal"),key.setScope(this.keyScope)},onCloseClick:function(t){t.preventDefault(),this.destroy()},renderOverlay:function(){var t=(0,s["default"])("."+this.overlayClassName);t.length===0&&(0,s["default"])('<div class="'+this.overlayClassName+'"></div>').appendTo((0,s["default"])("body"))},removeOverlay:function(){(0,s["default"])("."+this.overlayClassName).remove()},attachCloseEvents:function(){var t=this;(0,s["default"])("body").on("click."+u,function(){(0,s["default"])("body").off("click."+u),t.destroy()})}})}),define("components/common/modal-form",["exports","module","underscore","components/common/modals"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r);t.exports=o["default"].extend({ui:function(){return{messagesContainer:".js-modal-messages"}},events:function(){return s["default"].extend(o["default"].prototype.events.apply(this,arguments),{"keydown input,textarea,select":"onInputKeydown","submit form":"onFormSubmit"})},onRender:function(){o["default"].prototype.onRender.apply(this,arguments);var t=this;setTimeout(function(){t.$(":tabbable").first().focus()},0)},onInputKeydown:function(t){t.keyCode===27&&this.destroy()},onFormSubmit:function(t){t.preventDefault()},showErrors:function(t,n){var r=this.ui.messagesContainer.empty();s["default"].isArray(t)&&t.forEach(function(e){var t='<div class="alert alert-danger">'+e.msg+"</div>";r.append(t)}),s["default"].isArray(n)&&n.forEach(function(e){var t='<div class="alert alert-warning">'+e.msg+"</div>";r.append(t)}),this.ui.messagesContainer.scrollParent().scrollTop(0)},disableForm:function(){var t=this.$("form");this.disabledFields=t.find(":input:not(:disabled)"),this.disabledFields.prop("disabled",!0)},enableForm:function(){this.disabledFields!=null&&this.disabledFields.prop("disabled",!1)}})}),define("apps/metrics/form-view",["exports","module","jquery","underscore","components/common/modal-form","./templates"],function(e,t,n,r,i,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var u=o(n),a=o(r),f=o(i);t.exports=f["default"].extend({template:Templates["metrics-form"],onRender:function(){var t=this;this._super(),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-metric-domain").select2({width:"250px",createSearchChoice:function(t){return{id:t,text:"+"+t}},createSearchChoicePosition:"top",initSelection:function(t,n){var r=(0,u["default"])(t).val();n({id:r,text:r})},query:function(n){var r=t.options.domains.filter(function(e){return e.toLowerCase().indexOf(n.term.toLowerCase())!==-1}),i=r.map(function(e){return{id:e,text:e}});n.callback({results:i,more:!1})}}).select2("val",this.model&&this.model.get("domain")),this.$("#create-metric-type").select2({width:"250px"})},onDestroy:function(){this._super(),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(t){this._super(t),this.sendRequest()},serializeData:function(){return a["default"].extend(this._super(),{domains:this.options.domains,types:this.options.types})}})}),define("apps/metrics/create-view",["exports","module","./metric","./form-view"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r);t.exports=o["default"].extend({sendRequest:function(){var t=this,n=new s["default"]({key:this.$("#create-metric-key").val(),name:this.$("#create-metric-name").val(),description:this.$("#create-metric-description").val(),domain:this.$("#create-metric-domain").val(),type:this.$("#create-metric-type").val()});return this.disableForm(),n.save(null,{statusCode:{400:null}}).done(function(){t.collection.refresh(),t.options.domains.indexOf(n.get("domain"))===-1&&t.options.domains.push(n.get("domain")),t.destroy()}).fail(function(e){t.showErrors(e.responseJSON.errors,e.responseJSON.warnings),t.enableForm()})}})}),define("apps/metrics/header-view",["exports","module","backbone.marionette","./create-view","./templates"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r);t.exports=o["default"].ItemView.extend({template:Templates["metrics-header"],events:{"click #metrics-create":"onCreateClick"},onCreateClick:function(t){t.preventDefault(),this.createMetric()},createMetric:function(){(new u["default"]({collection:this.collection,domains:this.options.domains,types:this.options.types,app:this.options.app})).render()}})}),define("apps/metrics/update-view",["exports","module","./form-view"],function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=r(n);t.exports=i["default"].extend({sendRequest:function(){var t=this;return this.model.set({key:this.$("#create-metric-key").val(),name:this.$("#create-metric-name").val(),description:this.$("#create-metric-description").val(),domain:this.$("#create-metric-domain").val(),type:this.$("#create-metric-type").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){t.collection.refresh(),t.destroy()}).fail(function(e){t.enableForm(),t.showErrors(e.responseJSON.errors,e.responseJSON.warnings)})}})}),define("apps/metrics/delete-view",["exports","module","components/common/modal-form","./templates"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n);t.exports=s["default"].extend({template:Templates["metrics-delete"],onFormSubmit:function(t){this._super(t),this.sendRequest()},sendRequest:function(){var t=this,n=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){n.refresh(),t.destroy()}).fail(function(e){t.showErrors(e.responseJSON.errors,e.responseJSON.warnings)})}})}),define("apps/metrics/list-item-view",["exports","module","backbone.marionette","./update-view","./delete-view","./templates"],function(e,t,n,r,i,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var u=o(n),a=o(r),f=o(i);t.exports=u["default"].ItemView.extend({tagName:"li",className:"panel panel-vertical",template:Templates["metrics-list-item"],events:{"click .js-metric-update":"onUpdateClick","click .js-metric-delete":"onDeleteClick"},onRender:function(){this.$el.attr("data-id",this.model.id).attr("data-key",this.model.get("key")),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(t){t.preventDefault(),this.updateMetric()},onDeleteClick:function(t){t.preventDefault(),this.deleteMetric()},updateMetric:function(){(new a["default"]({model:this.model,collection:this.model.collection,types:this.options.types,domains:this.options.domains})).render()},deleteMetric:function(){(new f["default"]({model:this.model})).render()}})}),define("apps/metrics/list-view",["exports","module","backbone.marionette","./list-item-view","./templates"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r);t.exports=o["default"].CollectionView.extend({tagName:"ul",childView:u["default"],childViewOptions:function(){return{types:this.options.types,domains:this.options.domains}}})}),define("apps/metrics/list-footer-view",["exports","module","underscore","backbone.marionette","./templates"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r);t.exports=u["default"].ItemView.extend({template:Templates["metrics-list-footer"],collectionEvents:{all:"render"},events:{"click #metrics-fetch-more":"onMoreClick"},onMoreClick:function(t){t.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return o["default"].extend(this._super(),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})}),define("apps/metrics/app",["exports","module","jquery","backbone.marionette","./layout","./metrics","./header-view","./list-view","./list-footer-view"],function(e,t,n,r,i,s,o,u,a){"use strict";function f(e){return e&&e.__esModule?e:{"default":e}}var l=f(n),c=f(r),h=f(i),p=f(s),d=f(o),v=f(u),m=f(a),g=new c["default"].Application,y=function(t){this.layout=new h["default"]({el:t.el}),this.layout.render(),this.metrics=new p["default"],this.headerView=new d["default"]({collection:this.metrics,domains:this.domains,types:this.types,app:g}),this.layout.headerRegion.show(this.headerView),this.listView=new v["default"]({collection:this.metrics,domains:this.domains,types:this.types}),this.layout.listRegion.show(this.listView),this.listFooterView=new m["default"]({collection:this.metrics}),this.layout.listFooterRegion.show(this.listFooterView),this.metrics.fetch()};g.requestDomains=function(){return l["default"].get(baseUrl+"/api/metrics/domains").done(function(e){g.domains=e.domains})},g.requestTypes=function(){return l["default"].get(baseUrl+"/api/metrics/types").done(function(e){g.types=e.types})},g.on("start",function(e){l["default"].when(window.requestMessages(),g.requestDomains(),g.requestTypes()).done(function(){y.call(g,e)})}),t.exports=g});