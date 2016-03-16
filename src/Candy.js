/**
 * Created by lixd on 16/3/14.
 */

var Candy = cc.Sprite.extend({
    type    :   0,
    column  :   0,
    row     :   0,
    
    ctor    :   function (type, column, row) {
        this._super(res[type+1]);
        this.init(type, column, row);
    },
    init    :   function (type, column, row) {
        this.type = type;
        this.column = column;
        this.row = row;
    }
});

//静态方法 创建糖果
Candy.createRandomType = function (column, row) {
    return new Candy(parseInt(Math.random() * Constant.CANDY_TYPE_COUNT), column, row);
}