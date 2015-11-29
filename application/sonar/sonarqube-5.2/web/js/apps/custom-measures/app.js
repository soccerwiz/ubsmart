define("backbone.marionette",[],function(){return window.Marionette}),this.Templates=this.Templates||{},this.Templates["custom-measures-delete"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i,s=this.lambda,o=this.escapeExpression;return'<form id="delete-custom-measure-form">\n  <div class="modal-head">\n    <h2>Delete Custom Measure</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    Are you sure you want to delete custom measure "'+o(s((i=e!=null?e.metric:e)!=null?i.name:i,e))+'"?\n  </div>\n  <div class="modal-foot">\n    <button id="delete-custom-measure-submit" class="button-red">Delete</button>\n    <a href="#" class="js-modal-close" id="delete-custom-measure-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0}),this.Templates["custom-measures-form"]=Handlebars.template({1:function(e,t,n,r){return"Update"},3:function(e,t,n,r){return"Create"},5:function(e,t,n,r,i){var s,o="";return s=t["if"].call(e,e!=null?e.canCreateMetric:e,{name:"if",hash:{},fn:this.program(6,r,i),inverse:this.program(10,r,i),data:r}),s!=null&&(o+=s),o},6:function(e,t,n,r,i){var s,o='        <div class="modal-field">\n          <label for="create-custom-measure-metric">Metric<em class="mandatory">*</em></label>\n          <select id="create-custom-measure-metric" name="metric" required>\n';return s=t.each.call(e,e!=null?e.metrics:e,{name:"each",hash:{},fn:this.program(7,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o+"          </select>\n        </div>\n"},7:function(e,t,n,r,i){var s,o,u="function",a=t.helperMissing,f=this.escapeExpression,l='              <option value="'+f((o=(o=t.id||(e!=null?e.id:e))!=null?o:a,typeof o===u?o.call(e,{name:"id",hash:{},data:r}):o))+'" ';return s=(t.eq||e&&e.eq||a).call(e,e!=null?e.id:e,(s=i[1]!=null?i[1].metric:i[1])!=null?s.id:s,{name:"eq",hash:{},fn:this.program(8,r,i),inverse:this.noop,data:r}),s!=null&&(l+=s),l+">"+f((o=(o=t.name||(e!=null?e.name:e))!=null?o:a,typeof o===u?o.call(e,{name:"name",hash:{},data:r}):o))+"</option>\n"},8:function(e,t,n,r){return"selected"},10:function(e,t,n,r){var i=t.helperMissing,s=this.escapeExpression;return'        <div class="alert alert-warning">'+s((t.t||e&&e.t||i).call(e,"custom_measures.all_metrics_taken",{name:"t",hash:{},data:r}))+"</div>\n"},12:function(e,t,n,r){return"disabled"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o,u="function",a=t.helperMissing,f=this.escapeExpression,l='<form id="create-custom-measure-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return s=t["if"].call(e,e!=null?e.id:e,{name:"if",hash:{},fn:this.program(1,r,i),inverse:this.program(3,r,i),data:r}),s!=null&&(l+=s),l+=' Custom Measure</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n\n',s=t.unless.call(e,e!=null?e.id:e,{name:"unless",hash:{},fn:this.program(5,r,i),inverse:this.noop,data:r}),s!=null&&(l+=s),l+='\n    <div class="modal-field">\n      <label for="create-custom-measure-value">Value<em class="mandatory">*</em></label>\n      <input id="create-custom-measure-value" name="value" type="text" maxlength="200" required value="'+f((o=(o=t.value||(e!=null?e.value:e))!=null?o:a,typeof o===u?o.call(e,{name:"value",hash:{},data:r}):o))+'">\n    </div>\n\n    <div class="modal-field">\n      <label for="create-custom-measure-description">Description</label>\n      <textarea id="create-custom-measure-description" name="description">'+f((o=(o=t.description||(e!=null?e.description:e))!=null?o:a,typeof o===u?o.call(e,{name:"description",hash:{},data:r}):o))+'</textarea>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-custom-measure-submit" ',s=t.unless.call(e,e!=null?e.canCreateMetric:e,{name:"unless",hash:{},fn:this.program(12,r,i),inverse:this.noop,data:r}),s!=null&&(l+=s),l+=">\n      ",s=t["if"].call(e,e!=null?e.id:e,{name:"if",hash:{},fn:this.program(1,r,i),inverse:this.program(3,r,i),data:r}),s!=null&&(l+=s),l+'\n    </button>\n    <a href="#" class="js-modal-close" id="create-custom-measure-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0,useDepths:!0}),this.Templates["custom-measures-header"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i=t.helperMissing,s=this.escapeExpression;return'<header class="page-header">\n  <h1 class="page-title">'+s((t.t||e&&e.t||i).call(e,"custom_measures.page",{name:"t",hash:{},data:r}))+'</h1>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="custom-measures-create">'+s((t.t||e&&e.t||i).call(e,"create",{name:"t",hash:{},data:r}))+'</button>\n    </div>\n  </div>\n  <p class="page-description">'+s((t.t||e&&e.t||i).call(e,"custom_measures.page.description",{name:"t",hash:{},data:r}))+"</p>\n</header>\n"},useData:!0}),this.Templates["custom-measures-layout"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){return'<div class="page">\n  <div id="custom-measures-header"></div>\n  <div id="custom-measures-list"></div>\n  <div id="custom-measures-list-footer"></div>\n</div>\n'},useData:!0}),this.Templates["custom-measures-list-footer"]=Handlebars.template({1:function(e,t,n,r){return'    <a id="custom-measures-fetch-more" class="spacer-left" href="#">show more</a>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i,s,o="function",u=t.helperMissing,a=this.escapeExpression,f='<footer class="spacer-top note text-center">\n  '+a((s=(s=t.count||(e!=null?e.count:e))!=null?s:u,typeof s===o?s.call(e,{name:"count",hash:{},data:r}):s))+"/"+a((s=(s=t.total||(e!=null?e.total:e))!=null?s:u,typeof s===o?s.call(e,{name:"total",hash:{},data:r}):s))+" shown\n";return i=t["if"].call(e,e!=null?e.more:e,{name:"if",hash:{},fn:this.program(1,r),inverse:this.noop,data:r}),i!=null&&(f+=i),f+"</footer>\n"},useData:!0}),this.Templates["custom-measures-list-item"]=Handlebars.template({1:function(e,t,n,r){var i=t.helperMissing,s=this.escapeExpression;return'      <span class="js-custom-measure-pending badge badge-warning spacer-left"\n            title="'+s((t.t||e&&e.t||i).call(e,"custom_measures.pending_tooltip",{name:"t",hash:{},data:r}))+'"\n            data-toggle="tooltip" data-placement="bottom">'+s((t.t||e&&e.t||i).call(e,"custom_measures.pending",{name:"t",hash:{},data:r}))+"</span>\n"},3:function(e,t,n,r){var i=t.helperMissing,s=this.escapeExpression;return'    Updated on <span class="js-custom-measure-created-at">'+s((t.d||e&&e.d||i).call(e,e!=null?e.updatedAt:e,{name:"d",hash:{},data:r}))+"</span>\n"},5:function(e,t,n,r){var i=t.helperMissing,s=this.escapeExpression;return'    Created on <span class="js-custom-measure-created-at">'+s((t.d||e&&e.d||i).call(e,e!=null?e.createdAt:e,{name:"d",hash:{},data:r}))+"</span>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i,s,o=this.lambda,u=this.escapeExpression,a=t.helperMissing,f="function",l='<td class="nowrap">\n  <div>\n    <span class="js-custom-measure-metric-name">'+u(o((i=e!=null?e.metric:e)!=null?i.name:i,e))+"</span>\n";return i=t["if"].call(e,e!=null?e.pending:e,{name:"if",hash:{},fn:this.program(1,r),inverse:this.noop,data:r}),i!=null&&(l+=i),l+='  </div>\n  <span class="js-custom-measure-domain note">'+u(o((i=e!=null?e.metric:e)!=null?i.domain:i,e))+'</span>\n</td>\n\n<td class="nowrap">\n  <strong class="js-custom-measure-value">'+u((t.formatMeasure||e&&e.formatMeasure||a).call(e,e!=null?e.value:e,(i=e!=null?e.metric:e)!=null?i.type:i,{name:"formatMeasure",hash:{},data:r}))+'</strong>\n</td>\n\n<td class="">\n  <span class="js-custom-measure-description">'+u((s=(s=t.description||(e!=null?e.description:e))!=null?s:a,typeof s===f?s.call(e,{name:"description",hash:{},data:r}):s))+'</span>\n</td>\n\n<td class="">\n',i=t["if"].call(e,e!=null?e.updatedAt:e,{name:"if",hash:{},fn:this.program(3,r),inverse:this.program(5,r),data:r}),i!=null&&(l+=i),l+'  by <span class="js-custom-measure-user">'+u(o((i=e!=null?e.user:e)!=null?i.name:i,e))+'</span>\n</td>\n\n<td class="thin nowrap">\n  <a class="js-custom-measure-update icon-edit" title="Update" data-toggle="tooltip" href="#"></a>\n  <a class="js-custom-measure-delete icon-delete" title="Delete" data-toggle="tooltip" href="#"></a>\n</td>\n'},useData:!0}),this.Templates["custom-measures-list"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){return'<table class="data zebra">\n  <thead>\n  <tr>\n    <th>Metric</th>\n    <th>Value</th>\n    <th>Description</th>\n    <th>Date</th>\n    <th>&nbsp;</th>\n  </tr>\n  </thead>\n  <tbody></tbody>\n</table>\n'},useData:!0}),define("apps/custom-measures/templates",function(){}),define("apps/custom-measures/layout",["exports","module","backbone.marionette","./templates"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n);t.exports=s["default"].LayoutView.extend({template:Templates["custom-measures-layout"],regions:{headerRegion:"#custom-measures-header",listRegion:"#custom-measures-list",listFooterRegion:"#custom-measures-list-footer"}})}),define("underscore",[],function(){return window._}),define("backbone",[],function(){return window.Backbone}),define("apps/custom-measures/custom-measure",["exports","module","underscore","backbone"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r);t.exports=o["default"].Model.extend({idAttribute:"id",urlRoot:function(){return baseUrl+"/api/custom_measures"},sync:function(t,n,r){var i=r||{};return t==="create"&&s["default"].defaults(i,{url:this.urlRoot()+"/create",type:"POST",data:s["default"].pick(n.toJSON(),"metricId","value","description","projectId")}),t==="update"&&s["default"].defaults(i,{url:this.urlRoot()+"/update",type:"POST",data:s["default"].pick(n.toJSON(),"id","value","description")}),t==="delete"&&s["default"].defaults(i,{url:this.urlRoot()+"/delete",type:"POST",data:{id:this.id}}),o["default"].ajax(i)}})}),define("apps/custom-measures/custom-measures",["exports","module","underscore","backbone","./custom-measure"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r),a=s(i);t.exports=u["default"].Collection.extend({model:a["default"],initialize:function(t){this.projectId=t.projectId},url:function(){return baseUrl+"/api/custom_measures/search"},parse:function(t){return this.total=t.total,this.p=t.p,this.ps=t.ps,t.customMeasures},fetch:function(t){var n=o["default"].defaults(t||{},{data:{}});return this.q=n.data.q,n.data.projectId=this.projectId,this._super(n)},fetchMore:function(){var t=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:t,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps},getTakenMetrics:function(){var t=this.map(function(e){return e.get("metric").id});return o["default"].uniq(t)}})}),define("jquery",[],function(){return window.jQuery}),define("components/common/modals",["exports","module","jquery","backbone.marionette"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r),u="modal";t.exports=o["default"].ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var t=this;this.$el.detach().appendTo((0,s["default"])("body")),(0,s["default"])("html").addClass(this.htmlClassName),this.renderOverlay(),this.keyScope=key.getScope(),key.setScope("modal"),key("escape","modal",function(){return t.destroy(),!1}),this.show(),!this.options.large||this.$el.addClass("modal-large")},show:function(){var t=this;setTimeout(function(){t.$el.addClass("in"),(0,s["default"])("."+t.overlayClassName).addClass("in")},0)},onDestroy:function(){(0,s["default"])("html").removeClass(this.htmlClassName),this.removeOverlay(),key.deleteScope("modal"),key.setScope(this.keyScope)},onCloseClick:function(t){t.preventDefault(),this.destroy()},renderOverlay:function(){var t=(0,s["default"])("."+this.overlayClassName);t.length===0&&(0,s["default"])('<div class="'+this.overlayClassName+'"></div>').appendTo((0,s["default"])("body"))},removeOverlay:function(){(0,s["default"])("."+this.overlayClassName).remove()},attachCloseEvents:function(){var t=this;(0,s["default"])("body").on("click."+u,function(){(0,s["default"])("body").off("click."+u),t.destroy()})}})}),define("components/common/modal-form",["exports","module","underscore","components/common/modals"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r);t.exports=o["default"].extend({ui:function(){return{messagesContainer:".js-modal-messages"}},events:function(){return s["default"].extend(o["default"].prototype.events.apply(this,arguments),{"keydown input,textarea,select":"onInputKeydown","submit form":"onFormSubmit"})},onRender:function(){o["default"].prototype.onRender.apply(this,arguments);var t=this;setTimeout(function(){t.$(":tabbable").first().focus()},0)},onInputKeydown:function(t){t.keyCode===27&&this.destroy()},onFormSubmit:function(t){t.preventDefault()},showErrors:function(t,n){var r=this.ui.messagesContainer.empty();s["default"].isArray(t)&&t.forEach(function(e){var t='<div class="alert alert-danger">'+e.msg+"</div>";r.append(t)}),s["default"].isArray(n)&&n.forEach(function(e){var t='<div class="alert alert-warning">'+e.msg+"</div>";r.append(t)}),this.ui.messagesContainer.scrollParent().scrollTop(0)},disableForm:function(){var t=this.$("form");this.disabledFields=t.find(":input:not(:disabled)"),this.disabledFields.prop("disabled",!0)},enableForm:function(){this.disabledFields!=null&&this.disabledFields.prop("disabled",!1)}})}),define("apps/metrics/metric",["exports","module","underscore","backbone"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r);t.exports=o["default"].Model.extend({idAttribute:"id",urlRoot:function(){return baseUrl+"/api/metrics"},sync:function(t,n,r){var i=r||{};return t==="create"&&s["default"].defaults(i,{url:this.urlRoot()+"/create",type:"POST",data:s["default"].pick(n.toJSON(),"key","name","description","domain","type")}),t==="update"&&s["default"].defaults(i,{url:this.urlRoot()+"/update",type:"POST",data:s["default"].pick(n.toJSON(),"id","key","name","description","domain","type")}),t==="delete"&&s["default"].defaults(i,{url:this.urlRoot()+"/delete",type:"POST",data:{ids:this.id}}),o["default"].ajax(i)}})}),define("apps/metrics/metrics",["exports","module","underscore","backbone","./metric"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r),a=s(i);t.exports=u["default"].Collection.extend({model:a["default"],url:function(){return baseUrl+"/api/metrics/search"},parse:function(t){return this.total=t.total,this.p=t.p,this.ps=t.ps,t.metrics},fetch:function(t){var n=o["default"].defaults(t||{},{data:{}});return this.q=n.data.q,n.data.isCustom=!0,this._super(n)},fetchMore:function(){var t=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:t,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})}),define("apps/custom-measures/form-view",["exports","module","underscore","components/common/modal-form","apps/metrics/metrics","./templates"],function(e,t,n,r,i,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var u=o(n),a=o(r),f=o(i);t.exports=a["default"].extend({template:Templates["custom-measures-form"],initialize:function(){this.metrics=new f["default"],this.listenTo(this.metrics,"reset",this.render),this.metrics.fetch({reset:!0})},onRender:function(){this._super(),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-custom-measure-metric").select2({width:"250px",minimumResultsForSearch:20})},onDestroy:function(){this._super(),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(t){this._super(t),this.sendRequest()},getAvailableMetrics:function(){var t=this.collection.getTakenMetrics();return this.metrics.toJSON().filter(function(e){return t.indexOf(e.id)===-1})},serializeData:function(){var t=this.getAvailableMetrics(),n=!this.model;return u["default"].extend(this._super(),{metrics:t,canCreateMetric:!n||n&&t.length>0})}})}),define("apps/custom-measures/create-view",["exports","module","./custom-measure","./form-view"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n),o=i(r);t.exports=o["default"].extend({sendRequest:function(){var t=this,n=new s["default"]({metricId:this.$("#create-custom-measure-metric").val(),value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val(),projectId:this.options.projectId});return this.disableForm(),n.save(null,{statusCode:{400:null}}).done(function(){t.collection.refresh(),t.destroy()}).fail(function(e){t.enableForm(),t.showErrors(e.responseJSON.errors,e.responseJSON.warnings)})}})}),define("apps/custom-measures/header-view",["exports","module","backbone.marionette","./create-view","./templates"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r);t.exports=o["default"].ItemView.extend({template:Templates["custom-measures-header"],events:{"click #custom-measures-create":"onCreateClick"},onCreateClick:function(t){t.preventDefault(),this.createCustomMeasure()},createCustomMeasure:function(){(new u["default"]({collection:this.collection,projectId:this.options.projectId})).render()}})}),define("apps/custom-measures/update-view",["exports","module","./form-view"],function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var i=r(n);t.exports=i["default"].extend({sendRequest:function(){var t=this;return this.model.set({value:this.$("#create-custom-measure-value").val(),description:this.$("#create-custom-measure-description").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){t.collection.refresh(),t.destroy()}).fail(function(e){t.enableForm(),t.showErrors(e.responseJSON.errors,e.responseJSON.warnings)})}})}),define("apps/custom-measures/delete-view",["exports","module","components/common/modal-form","./templates"],function(e,t,n,r){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=i(n);t.exports=s["default"].extend({template:Templates["custom-measures-delete"],onFormSubmit:function(t){this._super(t),this.sendRequest()},sendRequest:function(){var t=this,n=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){n.refresh(),t.destroy()}).fail(function(e){t.showErrors(e.responseJSON.errors,e.responseJSON.warnings)})}})}),define("apps/custom-measures/list-item-view",["exports","module","backbone.marionette","./update-view","./delete-view","./templates"],function(e,t,n,r,i,s){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var u=o(n),a=o(r),f=o(i);t.exports=u["default"].ItemView.extend({tagName:"tr",template:Templates["custom-measures-list-item"],events:{"click .js-custom-measure-update":"onUpdateClick","click .js-custom-measure-delete":"onDeleteClick"},onRender:function(){this.$el.attr("data-id",this.model.id),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(t){t.preventDefault(),this.updateCustomMeasure()},onDeleteClick:function(t){t.preventDefault(),this.deleteCustomMeasure()},updateCustomMeasure:function(){(new a["default"]({model:this.model,collection:this.model.collection})).render()},deleteCustomMeasure:function(){(new f["default"]({model:this.model})).render()}})}),define("apps/custom-measures/list-view",["exports","module","backbone.marionette","./list-item-view","./templates"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r);t.exports=o["default"].CompositeView.extend({template:Templates["custom-measures-list"],childView:u["default"],childViewContainer:"tbody"})}),define("apps/custom-measures/list-footer-view",["exports","module","underscore","backbone.marionette","./templates"],function(e,t,n,r,i){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}var o=s(n),u=s(r);t.exports=u["default"].ItemView.extend({template:Templates["custom-measures-list-footer"],collectionEvents:{all:"render"},events:{"click #custom-measures-fetch-more":"onMoreClick"},onMoreClick:function(t){t.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return o["default"].extend(this._super(),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})}),define("apps/custom-measures/app",["exports","module","backbone.marionette","./layout","./custom-measures","./header-view","./list-view","./list-footer-view"],function(e,t,n,r,i,s,o,u){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var f=a(n),l=a(r),c=a(i),h=a(s),p=a(o),d=a(u),v=new f["default"].Application,m=function(t){this.layout=new l["default"]({el:t.el}),this.layout.render(),this.customMeasures=new c["default"]({projectId:t.projectId}),this.headerView=new h["default"]({collection:this.customMeasures,projectId:t.projectId}),this.layout.headerRegion.show(this.headerView),this.listView=new p["default"]({collection:this.customMeasures}),this.layout.listRegion.show(this.listView),this.listFooterView=new d["default"]({collection:this.customMeasures}),this.layout.listFooterRegion.show(this.listFooterView),this.customMeasures.fetch()};v.on("start",function(e){window.requestMessages().done(function(){m.call(v,e)})}),t.exports=v});