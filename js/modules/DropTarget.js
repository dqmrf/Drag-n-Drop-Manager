function DropTarget($elem) {
    $elem.dropTarget = this;
    this._$elem = $elem;
    this._$targetElem = null;
}

DropTarget.prototype._getTargetElem = function(avatar, event) {
    return this._$elem;
};

DropTarget.prototype.onDragMove = function(avatar, event) {
    var $newTargetElem = this._getTargetElem(avatar, event);

    if (this._$targetElem !== $newTargetElem) {
        this._hideHoverIndication(avatar);
        this._$targetElem = $newTargetElem;
        this._showHoverIndication(avatar);
    }
};

DropTarget.prototype.onDragEnd = function(avatar, event) {
    this._hideHoverIndication(avatar);
    this._$targetElem = null;
};

DropTarget.prototype.onDragLeave = function($toDropTarget, avatar, event) {
    this._hideHoverIndication(avatar);
    this._$targetElem = null;
};

DropTarget.prototype.onDragEnter = function($fromDropTarget, avatar, event) {};

DropTarget.prototype._hideHoverIndication = function(avatar) {};

DropTarget.prototype._showHoverIndication = function(avatar) {};