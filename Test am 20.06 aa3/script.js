// gib nur die Wörter aus, die ein e aber kein l enthalten
//ein , netter

const data3 = "Hans ist ein netter Kerl!";

const text = data3.split(",");
if (text.includes("e"))
    if (text.includes("l")) {
        console.log(text);
    }


