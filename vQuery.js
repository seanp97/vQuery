function $(selector) {
    var self = {};
    self.selector = selector;
    self.element = document.querySelector(self.selector);

    self.html = function(text) {
        if(text != undefined || text != '' || text != null) {
            self.element.outerHTML = text;
        }
        return self.element;
    }

    self.attr = function(name, value) {
        if(!value) return self.element.getAttribute(name);
        self.element.setAttribute(name, value);
        return self;
    }

    self.width = function(value) {
        if(!value) return self.element.offsetWidth;
        self.element.style.width = value + 'px';
        return self;
    }

    self.height = function(value) {
        if(!value) return self.element.offsetHeight;
        self.element.style.height = value + 'px';
        return self;
    }

    self.on = function(type, callback) {
        self.element['on' + type] = callback;
        return self;
    }

    self.addClass = function(className) {
        if(className) self.element.classList.add(className);
        return self;
    }

    self.removeClass = function(className) {
        if(className) self.element.classList.remove(className);
        return self;
    }

    self.parent = function() {
        return self.element.parentNode;
    }

    self.css = function(cssValue) {
        if(cssValue) self.element.style.cssText = cssValue;
        return self;
    }

    self.remove = function() {
        self.element.remove();
        return self;
    }

    self.prevSibling = function() {
        return self.element.previousElementSibling;
    }

    self.text = function(value) {
        if(value) self.element.textContent = value;
        return self.element.textContent;
    }

    self.fadeOut = function(time) {
        if(!time) self.element.style.cssText = 'visibility: hidden; opacity: 0; transition: visibility 0s 1s, opacity 1s linear';
        self.element.style.cssText = `visibility: hidden; opacity: 0; transition: visibility 0s ${time}s, opacity ${time}s linear`;
        return self;
    }

    self.fadeIn = function(time) {
        if(!time) self.element.style.cssText = 'visibility: visible; opacity: 1; transition: opacity 2s linear;';
        self.element.style.cssText = `visibility: visible; opacity: 1; transition: opacity ${time}s linear;`;
        return self;
    }

    self.append = function(html) {
        self.element.innerHTML += html;
    }

    return self;
}