function Machine(power) {
    this._power = power;
    this._enabled = false;
    var self = this;
    this.enable = function () {
        self._enabled = true;
    };
    this.disable = function () {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var maxQuantity = power / 100;

    this.addFood = function (item) {

        if (!this._enabled) {
            console.log("The fridge is off. Turn it on to add food.");
            return;
        }

        let newfood = item.split(', ');
        if ((newfood.length + food.length) > maxQuantity) {
            throw new Error("The fridge is full. There is no more free space.");
        }
        else {
            for (var i = 0; i < newfood.length; i++) {
                food.push(newfood[i]);

            }

        }
        console.log(food);

    }
}

var myFridgeTest = new Fridge(100);
myFridgeTest.enable();
myFridgeTest.addFood("lemon");
myFridgeTest.addFood("lemon, apple, apple, melon, pancake");