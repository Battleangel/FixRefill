


const xpathtodrop = [
    '/html/body/div/div/div[2]/div/div/section/div/div/div/div[1]/div/div[2]/div/a[3]',
    '/html/body/div/div/div[2]/div/div/section/div/div/div/div[1]/div/div[2]/div/a[4]',
    '/html/body/div/div/div[2]/div/div/section/div/div/div/div[1]/div/div[2]/div/a[5]',
    '/html/body/div/div/div[2]/div/div/section/div/div/div/div[1]/div/div[2]/div/a[6]'
];



//var elem = getElementByXpath(path);

//elem.innerHTML = '';



xpathtodrop.forEach(element => dropElement(element));


// text to change
var txt_to_repl = getElementByXpath('/html/body/div/div/div[2]/div/div/section/div/div/div/div[1]/div/div[1]/h2');
if(txt_to_repl != false) {
    txt_to_repl.innerHTML = txt_to_repl.innerHTML.replace('und anderen Kryptowährungen','');
}

// /html/body/div[1]/div/div[2]/section/div[2]/form/div[1]/div/div/select/optgroup[1]/option[3]
var xpath_currency_dropdown = '/html/body/div[1]/div/div[2]/section/div[2]/form/div[1]/div/div/select';                               

var elem = getElementByXpath(xpath_currency_dropdown);
if(elem != false) {
   // elem.removeChild();
   //elem.remove(1);
   //elem.remove(2);
   elem.remove(5);
   elem.remove(4);
   elem.remove(3);
   elem.remove(2);

   console.log(elem);
}

var txt_to_repl = getElementByXpath('/html/body/div[1]/div/div[2]/section/div[2]/h2');
// Verwenden Sie Bitcoin oder Altcoins für Steam EUR. Zahlen Sie mit Bitcoin, Lightning, Dash, Dogecoin, Litecoin oder Ethereum. Sofortiger E-Mail-Versand. Kein Account erforderlich. Fangen Sie an, von Krypto zu leben!
if(txt_to_repl != false) {
    txt_to_repl.innerHTML = txt_to_repl.innerHTML.replace(', Lightning, Dash, Dogecoin, Litecoin oder Ethereum','');
    txt_to_repl.innerHTML = txt_to_repl.innerHTML.replace('Krypto','Bitcoin');
} else {
    console.log('false');
}

function dropElement(path) {    
    
    var elem = getElementByXpath(path);
    if(elem != false) {
        elem.innerHTML = '';
    } 
}

function getElementByXpath(path) {
    var xpathResult = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;    
    if(xpathResult === null) {
        return false;
    }
    return xpathResult;
}


