layui.use(["form"],function(){var o=layui.form;o.verify({customizemoney:function(o){return/^\d{1,9}(\.{0}|\.{1}\d{1,2})?$/.test(o)?1<o?"收款金额不得大于1元":o<=0?"收款金额不得小于0元":void 0:"请输入正确的金额"}}),o.render(null,"component-form-group"),o.on("submit(component-form-pay)",function(o){})});