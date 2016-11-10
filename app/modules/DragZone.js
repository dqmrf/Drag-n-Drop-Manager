function DragZone(elem) {
    elem.dragZone = this;
    this._elem = elem;
}

DragZone.prototype.onDragStart = function(downX, downY, e) {
    var avatar = this._makeAvatar();

    if (!avatar || avatar === undefined || !avatar.initFromEvent(downX, downY, event)) {
        return false;
    }

    return avatar;
};

DragZone.prototype._makeAvatar = function() {};