function DragAvatar($dragZone, $dragElem) {
    this._$dragZone = $dragZone;
    this._$dragZoneElem = $dragElem;
    this._$elem = $dragElem;
}

DragAvatar.prototype.detDragInfo = function(event) {
    return {
        elem: this._$elem,
        dragZoneElem: this._$dragZoneElem,
        dragZone: this._$dragZone
    }
};

DragAvatar.prototype.getTargetElem = function() {
    return this._$currentTargetElem;
};

DragAvatar.prototype.onDragMove = function(event) {
    this._$elem.style.top = event.pageY - this._shiftY + 'px';
    this._$elem.style.left = event.pageX - this._shiftX + 'px';

    this._$currentTargetElem = getElementUnderClientXY(this._$elem, event.clientX, event.clientY);
};

DragAvatar.prototype.initFromEvent = function(downX, downY, event) {};

DragAvatar.prototype.onDragCancel = function() {};

DragAvatar.prototype.onDragEnd = function() {};