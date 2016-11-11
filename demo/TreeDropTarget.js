function TreeDropTarget(elem) {
    TreeDropTarget.parent.constructor.apply(this, arguments);
}

extend(TreeDropTarget, DropTarget);

TreeDropTarget.prototype._hideHoverIndication = function(avatar) {
    this._targetElem && this._targetElem.classList.remove('hover');
}

TreeDropTarget.prototype._getTargetElem = function(avatar, event) {
    var target = avatar.getTargetElem();

    if (target.tagName != 'SPAN') return;

    var elemToMove = avatar.getDragInfo(event).dragZoneElem.parentNode;
    var elem = target;

    while (elem) {
        if (elem == elemToMove) return;
        elem = elem.parentNode;
    }

    return target;
}

TreeDropTarget.prototype.onDragEnd = function(avatar, event) {
    if (!this._targetElem) {
        avatar.onDragCancel();
        return;
    }

    this._hideHoverIndication();

    var avatarInfo = avatar.getDragInfo(event);

    avatar.onDragEnd();

    var elemToMove = avatarInfo.dragZoneElem.parentNode;
    var title = avatarInfo.dragZoneElem.innerHTML;
    var ul = this._targetElem.parentNode.getElementsByTagName('UL')[0];

    if (!ul) {
        ul = document.createElement('UL');
        this._targetElem.parentNode.appendChild(ul);
    }

    var li = null;
    for (var i = 0; i < ul.children.length; i++) {
        li = ul.children[i];
        var childTitle = li.children[0].innerHTML;
        if (childTitle > title) break;
        li = null;
    }

    ul.insertBefore(elemToMove, li);

    this._targetElem = null;
};