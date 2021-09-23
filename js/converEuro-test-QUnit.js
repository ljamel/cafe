module('I convert euro to usd',{
    setup: function() {
        this.currency = 'USD';
    }
});
test('1€ should return 1,3', function() {
    strictEqual(convertEuro(1, this.currency), 1.3, 'succeed !');
});
test('1€ should return 2,6', function() {
    strictEqual(convertEuro(2, this.currency), 2.6, 'succeed !');
});

module('I convert euro to gbp',{
    setup: function() {
        this.currency = 'GBP';
    }
});
test('1€ should return 0,87£', function() {
    strictEqual(convertEuro(1, this.currency), 0.87, 'succeed !');
});
test('2€ should return 1,74£', function() {
    strictEqual(convertEuro(2, this.currency), 1.74, 'succeed !');
});

module('I convert euro to jpy',{
    setup: function() {
        this.currency = 'JPY';
    }
});
test('1€ should return 124,77¥', function() {
    strictEqual(convertEuro(1, this.currency), 124.77, 'succeed !');
});
test('2€ should return 249,56¥', function() {
    strictEqual(convertEuro(2, this.currency), 249.56, 'succeed !');
});

module('I try with currency not handled by the function');
test('I try with NZD', function(){
    throws(
        function() {
            convertEuro(1, 'NZD');
        },
        /Currency not handled/,
        "throws error Currency not handled"
    );
});
