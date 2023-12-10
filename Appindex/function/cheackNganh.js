function reverse(s){
    return s.split("").reverse().join("");
}
export function cheackNganh(stringa,stringb) {
    let x ="";
    for(let i=stringa.length-1;i>=0;i--)
    {
        if(stringa[i]=='&')
        break;
        x+=stringa[i];
    }
    if(reverse(x)==stringb)
    return 1;

    return 0;
}