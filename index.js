var editor = ace.edit("editor");
var beautify = ace.require("ace/ext/beautify");
editor.setTheme("ace/theme/ambiance");
editor.session.setMode("ace/mode/c_cpp");
const selectedLanguage = document.getElementById("selectedLanguage");
selectedLanguage.innerText = "C (GCC 9.1.0)";
let selectedLangObj = {
    label: "C (GCC 9.1.0)",
    lang: "c",
    version: "0",
    mode: "c_cpp"
};
function run() {
    var code = editor.getValue();
    console.log(code);
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Origin','http://localhost:3000');
    fetch("https://vv-ide.herokuapp.com/compile", {
        method: "POST",
        headers,
        mode: 'cors',
        body: JSON.stringify({
            "script" : code,
            "language": selectedLangObj.lang,
            "versionIndex": selectedLangObj.version,
            "stdin": document.getElementById('stdin').value
        })
    }).then(res => {
        console.log(res);
        res.json().then((response) => {
            console.log(response);
            document.getElementById("compile_output").innerText = response.response.output;
        }).catch(error => {
            console.log(error);
            alert("Could not compile code try later");
        })
    }).catch(error => {
        console.log(error);
        alert("Could not compile code try later");
    });
}

function showSettings() {
    // $('#settings').show();
    $('#settings').css("display", "flex");
}

$('#settings').click(function(ev) {
    const settings = document.getElementById('settings');
    if (ev.target === settings)
        $('#settings').hide();
});

function saveSettings() {
    // handling the active line select value
    let activeLineSelectValue;
    const el = document.getElementsByName('activeLineSelect');
    for (let i = 0; i < el.length; i++) {
        if (el[i].checked) {
            activeLineSelectValue = el[i].value;
        }
    }
    // console.log(Boolean(activeLineSelectValue));
    // editor.setHighlightActiveLine(activeLineSelectValue);
    editor.setOptions({
        setHighlightActiveLine: activeLineSelectValue
    });

    // console.log(document.getElementById("tabSizeSelect").value);
    editor.session.setTabSize(Number(document.getElementById("tabSizeSelect").value));
    console.log("ace/theme/" + document.getElementById("themeSelect").value);
    editor.setTheme("ace/theme/" + document.getElementById("themeSelect").value);
    const lang = JSON.parse(document.getElementById("languageSelect").value);
    editor.session.setMode("ace/mode/" + lang.mode);
    selectedLangObj = lang;
    selectedLanguage.innerText = lang.label;
    console.log(lang);

    $('#settings').hide();
}

function cancelSettings(){
    $('#settings').hide();
}

function beautifyCode() {
    beautify.beautify(editor.session);
}
