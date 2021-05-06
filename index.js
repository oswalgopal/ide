var editor = ace.edit("editor");
var beautify = ace.require("ace/ext/beautify");
console.log(beautify)
editor.setTheme("ace/theme/ambiance");
editor.session.setMode("ace/mode/c_cpp");
const selectedLanguage = document.getElementById("selectedLanguage");
document.getElementById('editor').style.fontSize = "14px";
selectedLanguage.innerText = "C (GCC 9.1.0)";
// editor.session.setValue("// start your coding here");

let selectedLangObj = {
    label: "C (GCC 9.1.0)",
    lang: "c",
    version: "0",
    mode: "c_cpp"
};
function run() {
    const run_btn = document.getElementById("run_btn");
    run_btn.innerText = "Compiling";
    var code = editor.getValue();
    console.log(code);
    if (!code) {
        alert("Please Enter write code ...");
        run_btn.innerText = "Run";
        return;
    }
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
            document.getElementById("compile_time").innerText = "Time: " +response.response.cpuTime + " ms";
            document.getElementById("compile_memory").innerText = "Memory: " + response.response.memory + " bytes";
            run_btn.innerText = "Run";
        }).catch(error => {
            console.log(error);
            alert("Could not compile code try later");
            run_btn.innerText = "Run";
        })
    }).catch(error => {
        console.log(error);
        alert("Could not compile code try later");
        run_btn.innerText = "Run";
    });
}

function showSettings() {
    // $('#settings').show();
    $('#settings').css("display", "flex");
    // $('#settings').addClass("animation_class");
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
    // editor.setOptions({
    //     setHighlightActiveLine: activeLineSelectValue
    // });
    editor.setShowPrintMargin(activeLineSelectValue);

    // console.log(document.getElementById("tabSizeSelect").value);
    editor.session.setTabSize(Number(document.getElementById("tabSizeSelect").value));
    console.log("ace/theme/" + document.getElementById("themeSelect").value);
    editor.setTheme("ace/theme/" + document.getElementById("themeSelect").value);
    const lang = JSON.parse(document.getElementById("languageSelect").value);
    editor.session.setMode("ace/mode/" + lang.mode);
    selectedLangObj = lang;
    selectedLanguage.innerText = lang.label;
    console.log(lang);

    document.getElementById('editor').style.fontSize = document.getElementById("fontSizeSelect").value + "px";

    $('#settings').hide();
}

function cancelSettings(){
    $('#settings').hide();
}

function beautifyCode() {
    beautify.beautify(editor.session);
}

function clearCode() {
    let confirm = window.confirm("Are you sure you want to reset code \nYou cannot get this code back");
    if (confirm)
        editor.session.setValue("// write your code here");
}
