var App = {};

App.loader = {
    isShown: false,
    counter: 0,
    show: function() {
        var self = this;

        self.counter += 1;

        if (!self.isShown) {
            $('.loader').removeClass('hide');
            self.isShown = true;
        }
    },
    hide: function() {
        var self = this;

        self.counter ? self.counter-= 1 : self.counter = 0;

        if (!self.counter && self.isShown) {
            $('.loader').addClass('hide');
            self.isShown = false;
        }
    }
};