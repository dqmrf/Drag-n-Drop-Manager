function DropTarget(elem) {
    elem.dropTarget = this;
    this._elem = elem;
    this._targetElem = null;
}

DropTarget.prototype._getTargetElem = function(avatar, event) {
    return this._elem;
};

DropTarget.prototype.onDragMove = function(avatar, event) {
    var newTargetElem = this._getTargetElem(avatar, event);

    if (this._targetElem !== newTargetElem) {
        this._hideHoverIndication(avatar);
        this._targetElem = newTargetElem;
        this._showHoverIndication(avatar);
    }
};

DropTarget.prototype.onDragEnd = function(avatar, event) {
    this._hideHoverIndication(avatar);
    this._targetElem = null;
};

DropTarget.prototype.onDragLeave = function(toDropTarget, avatar, event) {
    this._hideHoverIndication(avatar);
    this._targetElem = null;
};

DropTarget.prototype.onDragEnter = function(fromDropTarget, avatar, event) {};

DropTarget.prototype._hideHoverIndication = function(avatar) {};

DropTarget.prototype._showHoverIndication = function(avatar) {};