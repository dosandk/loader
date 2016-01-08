var App = {};

App.loader = {
    isShown: false,
    queue: 0,
    show: function() {
        var self = this;

        self.queue += 1;

        if (!self.isShown) {
            $('.loader').removeClass('hide');
            self.isShown = true;
        }
    },
    hide: function() {
        var self = this;

        self.queue ? self.queue-= 1 : self.queue = 0;

        if (!self.queue) {
            if (self.isShown) {
                $('.loader').addClass('hide');
                self.isShown = false;
            }
        }
    }
};