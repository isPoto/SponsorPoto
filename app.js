function copy() {
    var text = '137838-1719'
    if(navigator.clipboard) {
        navigator.clipboard.writeText(text)
    }
}