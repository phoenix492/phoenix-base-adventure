const throttle = (temp => (entity, tick) => {
    const now = Utils.server.tickCount;
    const uuid = entity.uuid;
    if(!temp[uuid] || now - temp[uuid] >= tick) {
        temp[uuid] = now;
        return false;
    };
    return true;
})({});
