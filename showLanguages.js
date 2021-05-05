const languages = [
    {
        label: "C (GCC 9.1.0)",
        lang: "c",
        version: "0",
        mode: "c_cpp"
    },
    {
        label: "C++ (G++ 14 GCC 9.1.0)",
        lang: "cpp14",
        version: "0",
        mode: "c_cpp"
    },
    {
        label: "Java (11.0.4)",
        lang: "java",
        version: "3",
        mode: 'java'
    },
    {
        label: "Python 3 (3.7.4)",
        lang: "python3",
        version: "3",
        mode: "python"
    },
]

const languageSelect = document.getElementById("languageSelect");
for (let i = 0 ; i < languages.length; i++){
    languageSelect.options[languageSelect.options.length] = new Option(languages[i].label, JSON.stringify(languages[i]));
}

