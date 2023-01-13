const data = {
    name: 'Luis'
}

const observedData = new Proxy(data, {
    set(target, key, value) {
        document.querySelector('#name').innerText = value
        target[key] = value
    }
})

observedData.name = 'John'

// MDN
const target = {
    message1: "hello",
    message2: "everyone",
};

const handler1 = {};

const handler2 = {
    get(target, prop, receiver) {
        return "world";
    },
};

const handler3 = {
    get(target, prop, receiver) {
        if (prop === "message2") {
            return "world";
        }
        // The Reflect methods provide the reflective semantics for invoking the corresponding object internal methods. 
        // For example, we can call Reflect.get if we don't wish to redefine the object's behavior:
        return Reflect.get(...arguments);
    },
};

const proxy1 = new Proxy(target, handler1);
console.log(proxy1.message1); // hello
console.log(proxy1.message2); // everyone

// To customize the proxy, we define functions on the handler object
const proxy2 = new Proxy(target, handler2);
console.log(proxy2.message1); // world
console.log(proxy2.message2); // world

// Proxies are often used with the Reflect object, 
// which provides some methods with the same names as the Proxy traps. 
const proxy3 = new Proxy(target, handler3);
console.log(proxy3.message1); // hello
console.log(proxy3.message2); // world

// Use Proxy to validation password
const password = 12345678
const validator = {
    set(obj, prop, value) {
        if (prop === 'password') {
            if (value !== password) {
                throw new TypeError("Illegal Password!");
            }
        }

        // The default behavior to store the value
        obj[prop] = value;

        // Indicate success
        return true;
    }
}
const validation = new Proxy({}, validator);
validation.password = 12345678