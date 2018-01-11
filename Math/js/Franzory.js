 function Select(vArg) {
    //用来保存选择的元素
    switch (typeof vArg) {
        //当传入函数时.
    case "function":
        myAddEvent(window, "load", vArg);
        break;
    case "string":
        //传入字符串时.
        switch (vArg.charAt(0)) {
        case "#": //id
            return document.getElementById(vArg.substring(1));
            break;
        case ".": //class
            return getByClassName(document, vArg.substring(1));
            break;
        default: //tagName
            return document.getElementsByTagName(vArg);
        }
        break;
    }
}