webpackJsonp([28],{o2Xd:function(a,t,e){var s=e("onjA");"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e("FIqI")("2e101445",s,!0,{})},onjA:function(a,t,e){t=a.exports=e("XLS9")(!1),t.push([a.i,"\n.g-search-form>.form-c>.row[data-v-09f9edb2]{width:auto\n}\n.m-col-2>.col-l[data-v-09f9edb2]{display: none;\n}\n.m-col-2>.col-r[data-v-09f9edb2]{margin-left: 0;width: 2.5rem;\n}\n.total-head[data-v-09f9edb2]{position: relative;\n}\n.total-head>span[data-v-09f9edb2]{margin-right: 10px;\n}\n.total-head>span>b[data-v-09f9edb2]{font-weight: bold;\n}\n.total-head>.f-btn-group[data-v-09f9edb2]{position: absolute;width:3.5rem;left: 50%;margin-left:-1.75rem;top:50%;margin-top: -0.16rem;\n}\n.total-head>.f-btn-group>button[data-v-09f9edb2]{height:0.32rem;color:#717171 !important;border-radius: 5px; border-bottom-color:#ccc;-webkit-box-shadow:0 1px 1px rgba(90, 90, 90, 0.1);box-shadow:0 1px 1px rgba(90, 90, 90, 0.1);display:inline-block;padding: 0 3px;font-size:12px;line-height:1.428571429;cursor:pointer;background-color:#fff;border:1px solid transparent;border-color:#dadada;\n}\n.total-head>.f-btn-group>button[data-v-09f9edb2]:hover{color:#333333;background-color:#f1f1f1;\n}\n.total-head>.f-btn-group>button.active[data-v-09f9edb2]{color:#717171 !important;background-color:#F9F9F9;border-color:#c6c6c6;-webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n.total-head>.m-select[data-v-09f9edb2]{display: none;margin-left:0.1rem;\n}\n.merchant-total[data-v-09f9edb2], .g-in-table[data-v-09f9edb2], .merchant-total>tbody>tr>td[data-v-09f9edb2]{border:none !important;border-collapse:separate !important;\n}\n.merchant-total th[data-v-09f9edb2]:first-child{border-right:1px solid #dfe6ec;\n}\n.merchant-total tbody tr[data-v-09f9edb2]{border-top: none !important;\n}\n.merchant-total>tbody>tr>td[data-v-09f9edb2]{padding:0 !important;\n}\n.merchant-total[data-v-09f9edb2]{ border:1px solid #dfe6ec !important;\n}\n.o-headTotal-table tr>td[data-v-09f9edb2], .o-headTotal-table tr>th[data-v-09f9edb2]{border-right:1px solid #dfe6ec;\n}\n.o-headTotal-table tr>td[data-v-09f9edb2]:first-child{background-color: #eef1f6;\n}\n.o-headTotal-table thead th[data-v-09f9edb2]{ height:0.3rem; background-color: #eef1f6;font-weight: normal;\n}\n.o-headTotal-table tbody tr>td[data-v-09f9edb2]{padding: 6px 0;\n}\n.g-in-table[data-v-09f9edb2]{text-align: left !important;\n}\n.g-in-table tr>td[data-v-09f9edb2]:nth-child(2){border-right:1px solid #dfe6ec;border-left:1px solid #dfe6ec;\n}\n.g-in-table td>span[data-v-09f9edb2]{display: inline-block;text-align:right;\n}\n.g-in-table.col-l td>span[data-v-09f9edb2]{width: 1.2rem;\n}\n.g-in-table.col-r td>span[data-v-09f9edb2]{width: 1.6rem;\n}\n.m-no-data[data-v-09f9edb2]{text-align: center;padding:0.1rem 0;\n}\n.o-clr-bd tr[data-v-09f9edb2]:nth-child(even){background: #fff !important;\n}\n@media screen and (max-width: 960px){\n.m-col-2>.col-r[data-v-09f9edb2]{width:auto;\n}\n.total-head>.m-select[data-v-09f9edb2]{display: inline-block;\n}\n.total-head>.f-btn-group[data-v-09f9edb2]{display: none;\n}\n.g-in-table td>span[data-v-09f9edb2]{text-align:left;margin-left: 5px;\n}\n.g-in-table.col-l td>span[data-v-09f9edb2], .g-in-table.col-r td>span[data-v-09f9edb2]{width:auto;\n}\n}\n",""])},tV7j:function(a,t,e){"use strict";function s(a){e("o2Xd")}Object.defineProperty(t,"__esModule",{value:!0});var o=e("04Cm"),i=e("Gcvq"),n=e("R2SV"),d={name:"merchantSearch",data:function(){return{off:{isLoad:!1},form:{type:1,context:"",time:"",paySource:2},ajaxData:{details:"",list:"",maxpage:0,pageNum:1,callback:Function,total:0},totalInfo:{merchantTotal:"0",merchantActiviteNum:"0",merchantActiviteWaitNum:"0",merchantActiviteApplyNum:"0",userTotal:"0",userActiviteNum:"0",userActiviteWaitNum:"0",userActiviteApplyNum:"0"}}},components:{"my-page":i.a},created:function(){var a=this;setTimeout(function(){a.getTotal();var t=a.$route.params.val;"null"!=t&&(a.form.context=t,a.getDetails())},300)},methods:{toMap:function(){var a=document.documentElement.clientWidth,t="",e=this;t=a<640?"http://map.baidu.com/mobile/?latlng="+e.ajaxData.details.latitude+","+e.ajaxData.details.longitude:"http://map.baidu.com/?latlng="+e.ajaxData.details.latitude+","+e.ajaxData.details.longitude,window.open(t)},getTotal:function(){var a=this;Object(o.reqCommonMethod)({},function(){a.off.isLoad=!1},"km-ecs/w/merchant/statistics").then(function(t){a.totalInfo=t.data}).catch(function(){a.off.isLoad=!1})},shiftType:function(){this.ajaxData={details:"",list:"",maxpage:0,pageNum:1,callback:Function,total:0},this.form.context=""},shiftPaySource:function(a){if(a.target)for(var t=a.target.children,e=0;e<t.length;e++)t[e].selected&&(this.form.paySource=t[e].value);else this.form.paySource=a;this.getList()},details:function(a,t){var e=this;e.shiftType(),e.form.type=t,e.form.context=a,e.getDetails()},getDetails:function(a){var t,e,s=this,i=s.form.type,n=(new Date).getTime();return 1==i?(t={dealerId:s.form.context},e="km-ecs/w/merchant/getInfo"):(t={phone:s.form.context},e="km-ecs/w/user/getInfo"),!s.off.isLoad&&(!(a&&s.form.time&&n-s.form.time<3e3)&&(1!=i||t.dealerId?2!=i||t.phone?(s.form.time=n,s.off.isLoad=!0,void Object(o.reqCommonMethod)(t,function(){s.off.isLoad=!1},e).then(function(a){s.ajaxData.details=a.data,s.getList()}).catch(function(){s.off.isLoad=!1})):(layer.open({content:"请输入工号ID",skin:"msg",time:2,msgSkin:"error"}),!1):(layer.open({content:"请输入商户ID",skin:"msg",time:2,msgSkin:"error"}),!1)))},getList:function(a){var t,e,s=this,i=s.form.type;if(1==i?(e={dealerId:s.form.context},t="km-ecs/w/audit/getUsersDetail"):(e={phone:s.form.context,pageNum:a||1,pageSize:10,type:s.form.paySource},t="km-ecs/w/user/paymengList"),s.off.isLoad)return!1;s.off.isLoad=!0,s.ajaxData.list=[],Object(o.reqCommonMethod)(e,function(){s.off.isLoad=!1},t).then(function(t){s.ajaxData.list=t.data.list,s.ajaxData.total=t.data.total||0,s.ajaxData.maxpage=Math.ceil(parseInt(t.data.total)/10),s.ajaxData.pageNum=a||1,s.ajaxData.callback=function(a){s.getList(a)}}).catch(function(){s.off.isLoad=!1})},getDateTime:function(a){return Object(n.c)(a)}}},l=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"merchantSearch"}},[e("header",{staticClass:"m-scroll-bar animated infinite",class:{active:a.off.isLoad}}),a._v(" "),e("section",{staticClass:"g-search-form"},[e("table",{staticClass:"g-base-table o-headTotal-table"},[a._m(0),a._v(" "),e("tbody",[e("tr",[e("td",[a._v("总数")]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.merchantTotal))]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.userTotal))])]),a._v(" "),e("tr",[e("td",[a._v("激活数")]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.merchantActiviteNum))]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.userActiviteNum))])]),a._v(" "),e("tr",[e("td",[a._v("已申请待激活数(游客)")]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.merchantActiviteWaitNum))]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.userActiviteWaitNum))])]),a._v(" "),e("tr",[e("td",[a._v("已申请未激活数")]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.merchantActiviteApplyNum))]),a._v(" "),e("td",[a._v(a._s(a.totalInfo.userActiviteApplyNum))])])])]),a._v(" "),e("section",{staticClass:"form-c"},[e("div",{staticClass:"row"},[e("span",{staticClass:"dp"},[a._v("类型：")]),a._v(" "),e("div",{staticClass:"m-form-radio"},[e("label",[e("span",{staticClass:"radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.type,expression:"form.type"}],attrs:{maxlength:"20",type:"radio",value:"1",checked:"checked"},domProps:{checked:a._q(a.form.type,"1")},on:{click:a.shiftType,change:function(t){a.$set(a.form,"type","1")}}}),e("span")]),e("span",{staticClass:"text"},[a._v("商户ID")])]),a._v(" "),e("label",[e("span",{staticClass:"radio"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.type,expression:"form.type"}],attrs:{maxlength:"11",type:"radio",value:"2",checked:"checked"},domProps:{checked:a._q(a.form.type,"2")},on:{click:a.shiftType,change:function(t){a.$set(a.form,"type","2")}}}),e("span")]),e("span",{staticClass:"text"},[a._v("登录手机号码")])])])]),a._v(" "),e("div",{staticClass:"row clr m-col-2"},[e("span",{staticClass:"dp col-l"},[a._v("订单号码：")]),a._v(" "),e("div",{staticClass:"col-r m-input-button"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.form.context,expression:"form.context"}],attrs:{maxlength:"24",type:"tel",placeholder:1==a.form.type?"请输入查询的商户ID":"请输入查询的登录手机号码"},domProps:{value:a.form.context},on:{input:function(t){t.target.composing||a.$set(a.form,"context",t.target.value)}}}),e("button",{on:{click:function(t){a.getDetails(1)}}},[a._v("查询")])])])])]),a._v(" "),1==a.form.type?e("div",{staticClass:"m-total-table",staticStyle:{"margin-top":"0.2rem"}},[a.ajaxData.details?e("table",{staticClass:"merchant-total g-list-table"},[a._m(1),a._v(" "),e("tbody",[e("tr",[e("td",[e("table",{staticClass:"g-in-table col-l"},[e("tbody",[e("tr",[e("td",[e("span",[a._v("网点名称：")]),a._v(a._s(a.ajaxData.details.companyName))]),a._v(" "),e("td",[e("span",[a._v("有效总次数：")]),a._v(a._s(a.ajaxData.details.totalNums))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("渠道id：")]),a._v(a._s(a.ajaxData.details.dealerId))]),a._v(" "),e("td",[e("span",[a._v("开卡成功次数：")]),a._v(a._s(a.ajaxData.details.successNums))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("所在地址：")]),a._v(a._s(a.ajaxData.details.address))]),a._v(" "),e("td",[e("span",[a._v("额外成功次数：")]),a._v(a._s(a.ajaxData.details.extraFrequency))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("门店地址：")]),a._v(a._s(a.ajaxData.details.storeAddress))]),a._v(" "),e("td",[e("span",[a._v("获得分数：")]),a._v(a._s(a.ajaxData.details.getPoints))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("创建时间：")]),a._v(a._s(a.ajaxData.details.createtime))]),a._v(" "),e("td",[e("span",[a._v("扣除分数：")]),a._v(a._s(a.ajaxData.details.losePoints))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("商户属性：")]),a._v(a._s(a.ajaxData.details.merchantType))]),a._v(" "),e("td",[e("span",[a._v("额外分值：")]),a._v(a._s(a.ajaxData.details.extraCredit))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("商户类别：")]),a._v(a._s(a.ajaxData.details.userType))]),a._v(" "),e("td",[e("span",[a._v("信用积分：")]),a._v(a._s(a.ajaxData.details.creditNums))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("售卡范围：")]),a._v(" "),1==a.ajaxData.details.attribute?e("b",[a._v("A（远特售卡）")]):a._e(),a._v(" "),2==a.ajaxData.details.attribute?e("b",[a._v("B（联通售卡）")]):a._e(),a._v(" "),3==a.ajaxData.details.attribute?e("b",[a._v("C（远特售卡+联通售卡）")]):a._e(),a._v(" "),4==a.ajaxData.details.attribute?e("b",[a._v("D（联通售卡+远特售卡）")]):a._e()]),a._v(" "),e("td",[e("span",[a._v("真实信用积分：")]),a._v(a._s(a.ajaxData.details.realCreditNums))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("激活状态：")]),a._v(" "),0==a.ajaxData.details.status?e("b",{staticClass:"f-c-green"},[a._v("已激活")]):a._e(),a._v(" "),1==a.ajaxData.details.status?e("b",{staticClass:"f-c-yellow"},[a._v("待激活")]):a._e(),a._v(" "),2==a.ajaxData.details.status?e("b",{staticClass:"f-c-blue"},[a._v("已申请设备")]):a._e()]),a._v(" "),e("td",[e("span",[a._v("显示等级：")]),a._v(a._s(a.ajaxData.details.showLevel))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("签约状态：")]),a._v(a._s(a.ajaxData.details.isSignAgreement)+"["+a._s(a.ajaxData.details.signTime)+"]")]),a._v(" "),e("td",[e("span",[a._v("真实等级：")]),a._v(a._s(a.ajaxData.details.realLevel))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("设备信息：")]),a._v(" "),e("a",{staticClass:"details m-l",attrs:{href:"#/home/resource/device/"+a.ajaxData.details.devMac,title:"点击查看详情"}},[a._v(a._s(a.ajaxData.details.devMac))])]),a._v(" "),e("td",[e("span",[a._v("基础分值：")]),a._v(a._s(a.ajaxData.details.btScore))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("上级商户：")]),a._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:a.ajaxData.details.superDealerId,expression:"ajaxData.details.superDealerId"}],staticClass:"details",attrs:{href:"#/home/resource/promoter/"+a.ajaxData.details.superDealerId,title:"点击查看详情"}},[a._v(a._s(a.ajaxData.details.superDealerId))]),a._v("【名称："+a._s(a.ajaxData.details.superDealerName||"--")+"】")]),a._v(" "),e("td",[e("span",[a._v("基础总次数：")]),a._v(a._s(a.ajaxData.details.btFrequency))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("上级商户名称：")]),a._v(a._s(a.ajaxData.details.superDealerName)+"（"+a._s(a.ajaxData.details.superDealerId)+"）")]),a._v(" "),e("td",[e("span",[a._v("基础成功次数：")]),a._v(a._s(a.ajaxData.details.bsFrequency))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("上级推广渠道ID：")]),a._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:a.ajaxData.details.superDealerId,expression:"ajaxData.details.superDealerId"}],staticClass:"details",attrs:{href:"#/home/resource/promoter/"+a.ajaxData.details.superDealerId,title:"点击查看详情"}},[a._v(a._s(a.ajaxData.details.popDealerId))]),a._v("【名称："+a._s(a.ajaxData.details.popDealerName||"--")+"】")]),a._v(" "),e("td",[e("span",[a._v("推广渠道：")]),a._v(a._s(a.ajaxData.details.popDealerId||"--")+"【名称："+a._s(a.ajaxData.details.popDealerName||"--")+"】")])]),a._v(" "),e("tr",[e("td",{attrs:{colspan:"2"}},[e("span",[a._v("总部推广渠道：")]),a._v(a._s(a.ajaxData.details.topDealerId||"--")+"【名称："+a._s(a.ajaxData.details.topDealerName||"--")+"】")])])])])]),a._v(" "),e("td",[e("table",{staticClass:"g-in-table col-r o-clr-bd"},[e("tbody",[e("tr",[e("td",[e("span",[a._v("话分佣金历史总金额：")]),a._v(a._s(parseFloat(a.ajaxData.details.incomeMoneyTotal)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("话分佣金余额：")]),a._v(a._s(parseFloat(a.ajaxData.details.incomeMoney)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("开卡佣金历史总金额：")]),a._v(a._s(parseFloat(a.ajaxData.details.commissionFeeTotal)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("开卡佣金余额：")]),a._v(a._s(parseFloat(a.ajaxData.details.commissionFee)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("综合激励历史总金额：")]),a._v(a._s(parseFloat(a.ajaxData.details.creditMoneyTotal)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("综合激励余额：")]),a._v(a._s(parseFloat(a.ajaxData.details.creditMoney)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("自推广激励历史总金额：")]),a._v(a._s(parseFloat(a.ajaxData.details.promotionTotal)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("自推广激励余额：")]),a._v(a._s(parseFloat(a.ajaxData.details.promotion)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("保证金：")]),a._v(a._s(parseFloat(a.ajaxData.details.bond)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("号码模式：")]),a._v(a._s(a.ajaxData.details.phoneModel)+"\n\t\t\t\t\t\t\t\t\t\t")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("折扣模式：")]),a._v(a._s(a.ajaxData.details.discountModel)+"\n\t\t\t\t\t\t\t\t\t\t")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("转账模式：")]),a._v(a._s(a.ajaxData.details.transferModel)+"\n\t\t\t\t\t\t\t\t\t\t")])])])])])])])]):a._e(),a._v(" "),a.ajaxData.details?e("section",[e("div",{staticClass:"total-head"},[a._v("商户下所有工号列表")]),a._v(" "),e("table",[a._m(2),a._v(" "),e("tbody",a._l(a.ajaxData.list,function(t,s){return e("tr",[e("td",[a._v(a._s(10*(a.ajaxData.pageNum-1)+(s+1)))]),a._v(" "),e("td",[a._v(a._s(t.userId)),1==t.isMain?e("span",[a._v("(主账号)")]):a._e()]),a._v(" "),e("td",[a._v(a._s(t.userName))]),a._v(" "),e("td",[a._v(a._s(t.phone))]),a._v(" "),e("td",[e("a",{staticClass:"details",attrs:{href:"javascript:void(0)"},on:{click:function(e){a.details(t.phone,2)}}},[a._v("详情")])])])}))]),a._v(" "),a.ajaxData.list.length?a._e():e("div",{staticClass:"m-no-data"},[a._v("该商户暂无工号列表数据")])]):a._e()]):a._e(),a._v(" "),2==a.form.type?e("div",{staticClass:"m-total-table",staticStyle:{"margin-top":"0.2rem"}},[a.ajaxData.details?e("table",{staticClass:"merchant-total g-list-table"},[a._m(3),a._v(" "),e("tbody",[e("tr",[e("td",[e("table",{staticClass:"g-in-table col-l"},[e("tbody",[e("tr",[e("td",[e("span",[a._v("卡盟ID：")]),a._v(a._s(a.ajaxData.details.userId)),1==a.ajaxData.details.isMain?e("i",[a._v("(主账号)")]):a._e()]),a._v(" "),e("td",[e("span",[a._v("最近登录时间：")]),a._v(a._s(a.getDateTime(a.ajaxData.details.lastLoginTime)[6]))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("用户姓名：")]),a._v(a._s(a.ajaxData.details.userName))]),a._v(" "),e("td",[e("span",[a._v("最近操作时间：")]),a._v(a._s(a.getDateTime(a.ajaxData.details.lastReqeustTime)[6]))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("登录手机号：")]),a._v(a._s(a.ajaxData.details.phone))]),a._v(" "),e("td",[e("span",[a._v("所用机型：")]),a._v(a._s(a.ajaxData.details.phoneType))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("所属商户渠道ID：")]),a._v(a._s(a.ajaxData.details.dealerId)+"（"+a._s(a.ajaxData.details.companyName)),e("a",{staticClass:"details",attrs:{href:"javascript:void(0)"},on:{click:function(t){a.details(a.ajaxData.details.dealerId,1)}}},[a._v("详情")]),a._v("）")]),a._v(" "),e("td",[e("span",[a._v("经纬度：")]),a._v(a._s(a.ajaxData.details.longitude)+","+a._s(a.ajaxData.details.latitude)),e("a",{staticClass:"details m-l",attrs:{href:"javascript:void(0)"},on:{click:a.toMap}},[a._v("查看地图")])])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("当前城市：")]),a._v(a._s(a.ajaxData.details.cityName))]),a._v(" "),e("td",[e("span",[a._v("支付宝账号：")]),a._v(a._s(a.ajaxData.details.alipayID))])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("创建时间：")]),a._v(a._s(a.getDateTime(a.ajaxData.details.createTime)[6]))]),a._v(" "),e("td",[e("span",[a._v("微信账号：")]),a._v(a._s(a.ajaxData.details.wxID))])])])])]),a._v(" "),e("td",[e("table",{staticClass:"g-in-table col-r"},[e("tbody",[e("tr",[e("td",[e("span",[a._v("账户余额：")]),a._v(a._s(parseFloat(a.ajaxData.details.leftFee)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("可提现额度：")]),a._v(a._s(parseFloat(a.ajaxData.details.allowExtractFee)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("已提现金额：")]),a._v(a._s(parseFloat(a.ajaxData.details.alreadyExtractFee)/100)+"元")])]),a._v(" "),e("tr",[e("td",[e("span",[a._v("可退款额度：")]),a._v(a._s(parseFloat(a.ajaxData.details.allowRefundFee)/100)+"元")])]),a._v(" "),a._m(4),a._v(" "),e("tr",[e("td",[e("span",[a._v("赠送金额：")]),a._v(a._s(parseFloat(a.ajaxData.details.giveMoney)/100)+"元（已使用："+a._s(parseFloat(a.ajaxData.details.giveMoneyUsed)/100)+"元）")])])])])])])])]):a._e(),a._v(" "),a.ajaxData.details?e("section",[e("div",{staticClass:"total-head"},[a._v("第三方支付流水号列表"),e("b",[a._v(a._s(a.ajaxData.total))]),a._v(" "),e("div",{staticClass:"f-btn-group"},[e("button",{class:{active:2==a.form.paySource},on:{click:function(t){a.shiftPaySource(2)}}},[a._v("账户充值成功")]),a._v(" "),e("button",{class:{active:3==a.form.paySource},on:{click:function(t){a.shiftPaySource(3)}}},[a._v("开卡失败退款")]),a._v(" "),e("button",{class:{active:4==a.form.paySource},on:{click:function(t){a.shiftPaySource(4)}}},[a._v("代充失败退款")]),a._v(" "),e("button",{class:{active:1==a.form.paySource},on:{click:function(t){a.shiftPaySource(1)}}},[a._v("保证金充值成功")])]),a._v(" "),e("select",{staticClass:"m-select",on:{change:a.shiftPaySource}},[e("option",{attrs:{value:"2"}},[a._v("账户充值成功")]),a._v(" "),e("option",{attrs:{value:"3"}},[a._v("开卡失败退款")]),a._v(" "),e("option",{attrs:{value:"4"}},[a._v("代充失败退款")]),a._v(" "),e("option",{attrs:{value:"1"}},[a._v("保证金充值成功")])])]),a._v(" "),e("table",[a._m(5),a._v(" "),e("tbody",a._l(a.ajaxData.list,function(t,s){return e("tr",[e("td",[a._v(a._s(10*(a.ajaxData.pageNum-1)+(s+1)))]),a._v(" "),e("td",[a._v(a._s(a.getDateTime(t.createTime)[6]))]),a._v(" "),e("td",[a._v(a._s(t.sysOrderId))]),a._v(" "),e("td",[a._v(a._s(t.transactionId||"无"))]),a._v(" "),e("td",[a._v(a._s(1==t.payType?"远特账户支付":2==t.payType?"微信支付":"支付宝支付"))]),a._v(" "),e("td",[a._v(a._s(parseFloat(t.payMoney)/100))])])}))]),a._v(" "),e("my-page",{attrs:{page:a.ajaxData.pageNum,maxpage:a.ajaxData.maxpage,callback:a.ajaxData.callback}})],1):a._e()]):a._e()])},r=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{width:"1.5rem","font-weight":"bold"}},[a._v("统计")]),a._v(" "),e("th",[a._v("商户")]),a._v(" "),e("th",[a._v("工号")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{width:"70%"}},[a._v("商户基本信息")]),a._v(" "),e("th",{staticStyle:{width:"30%"}},[a._v("商户账户信息")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[a._v("序号")]),a._v(" "),e("th",[a._v("工号ID")]),a._v(" "),e("th",[a._v("工号姓名")]),a._v(" "),e("th",[a._v("登录手机号码")]),a._v(" "),e("th")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",{staticStyle:{width:"70%"}},[a._v("工号基本信息")]),a._v(" "),e("th",{staticStyle:{width:"30%"}},[a._v("工号账户信息")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("tr",[e("td",[e("span",[a._v("已退款金额：")]),a._v("--元")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("thead",[e("tr",[e("th",[a._v("序号")]),a._v(" "),e("th",[a._v("支付时间")]),a._v(" "),e("th",[a._v("订单号")]),a._v(" "),e("th",[a._v("第三方流水号")]),a._v(" "),e("th",[a._v("支付方式")]),a._v(" "),e("th",[a._v("金额（元）")])])])}],v={render:l,staticRenderFns:r},_=v,c=e("Z0/y"),p=s,m=c(d,_,!1,p,"data-v-09f9edb2",null);t.default=m.exports}});