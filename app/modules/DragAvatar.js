function DragAvatar(dragZone, dragElem) {
    this._dragZone = dragZone;
    this._dragZoneElem = dragElem;
    this._elem = dragElem;
}

DragAvatar.prototype.getDragInfo = function(event) {
    return {
        elem: this._elem,
        dragZoneElem: this._dragZoneElem,
        dragZone: this._dragZone
    }
};

DragAvatar.prototype.getTargetElem = function() {
    return this._$currentTargetElem;
};

DragAvatar.prototype.onDragMove = function(event) {
    this._elem.style.top = event.pageY - this._shiftY + 'px';
    this._elem.style.left = event.pageX - this._shiftX + 'px';

    this._$currentTargetElem = getElementUnderClientXY(this._elem, event.clientX, event.clientY);
};

DragAvatar.prototype.initFromEvent = function(downX, downY, event) {};

DragAvatar.prototype.onDragCancel = function() {};

DragAvatar.prototype.onDragEnd = function() {};