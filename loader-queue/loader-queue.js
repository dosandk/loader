var App = {};

App.loader = {
    queue: [],
    defaultQueueState: { counter: 0, isShown: false },
    createLoader: function(level) {
        var loaderContainer = document.getElementById('loader-container'),
            loader = document.createElement('div');

        loader.className = 'loader loader-' + level + ' hide';
        loaderContainer.appendChild(loader);
    },
    initQueue: function (level) {
        var self = this;

        self.queue[level] = {};
        self.queue[level].counter = 0;
        self.queue[level].isShown = false;
        self.createLoader(level);
    },
    show: function (level) {
        var self = this,
            currentLevel = typeof level !== 'undefined' ? level : 0;

        if (typeof self.queue[currentLevel] === 'undefined') {
            self.initQueue(currentLevel);
        }

        var currentQueue = self.queue[currentLevel];

        currentQueue.counter += 1;

        if (!currentQueue.isShown) {
            $('.loader-' + currentLevel).removeClass('hide');
            currentQueue.isShown = true;
        }
    },
    hide: function (level) {
        var self = this,
            currentLevel = typeof level !== 'undefined' ? level : 0;

        if (typeof self.queue[currentLevel] === 'undefined') {
            console.error('Current queue level: ' + currentLevel + ' does not exist');
        }
        else {
            var currentQueue = self.queue[currentLevel];

            currentQueue.counter ? currentQueue.counter -= 1 : currentQueue.counter = 0;

            if (!currentQueue.counter && currentQueue.isShown) {
                $('.loader-' + currentLevel).addClass('hide');
                currentQueue.isShown = false;
                console.log('success, level: ' + currentLevel);
            }
        }
    }
};