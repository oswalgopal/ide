var editor = ace.edit("editor");
editor.setTheme("ace/theme/ambiance");
editor.session.setMode("ace/mode/c_cpp");
let selectedLangObj = {
    label: "C (GCC 9.1.0)",
    lang: "c",
    version: "0",
    mode: "c_cpp"
};
function run() {
    var code = editor.getValue();
    console.log(code);
    fetch("https://vv-ide.herokuapp.com/compile", {
        method: "POST",
        body: {
            "script" : code,
            "language": selectedLangObj.lang,
            "versionIndex": selectedLangObj.version,
            "stdin": document.getElementById('stdin').value
        }
    }).then(res => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
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
    console.log(lang);

    $('#settings').hide();
}

function cancelSettings(){
    $('#settings').hide();
}

