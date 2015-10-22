
var ProductList = Ractive.extend({
    template: '#product-list',
    data: {
    },
    computed: {
        sku_map: function () {
            var o = {};
            this.get('products').forEach(function (rec) { o[rec.sku] = rec; });
            return o;
        }
    }
});
