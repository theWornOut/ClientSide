function dragStart(home) {
    home.dataTransfer.effectAllowed = 'move';
    home.dataTransfer.setData("Text", home.target.getAttribute('id'));
    home.dataTransfer.setDragImage(home.target, 0, 0);
    return true;
}