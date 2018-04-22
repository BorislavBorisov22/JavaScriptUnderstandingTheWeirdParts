function instanceOf(object, targetInstance) {
    const proto = object.__proto__;
    while (proto && proto.__proto__) {
        if (proto === targetInstance.prototype) {
            return true;
        }

        proto = proto.__proto__;
    }

    return false;
}