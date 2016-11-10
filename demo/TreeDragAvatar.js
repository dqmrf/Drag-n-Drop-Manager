function TreeDragAvatar(dragZone, dragElem) {
    DragAvatar.apply(this, arguments);
}

extend(TreeDragAvatar, DragAvatar);

TreeDragAvatar.prototype.initFromEvent = function(downX, downY, event) {
    if (event.tagName !== 'SPAN') return false;

    this._dragZoneElem = event.target;
    var elem = this._elem = this._dragZoneElem.cloneNode(true);
    elem.className = 'avatar';

    var coords = getCoords(elem);
    this._shiftX = downX - coords.left;
    this._shiftY = downY - coords.top;

    document.body.appendChild(elem);
    elem.style.zIndex = 10000;
    elem.style.position = 'absolute';

    return true;
};

TreeDragAvatar.prototype._destroy = function() {
    this._elem.parentNode.removeChild(this._elem);
};

TreeDragAvatar.prototype.onDragEnd = function() {
    this._destroy();
};