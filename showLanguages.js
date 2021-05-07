const languages = [
    {
        label: "C (GCC 5.3.0)",
        lang: "c",
        version: "0",
        mode: "c_cpp",
        extension: 'c'
    },
    {
        label: "C (Zapcc 5.0.0)",
        lang: "c",
        version: "1",
        mode: "c_cpp",
        extension: 'c'
    },
    {
        label: "C (GCC 7.2.0)",
        lang: "c",
        version: "2",
        mode: "c_cpp",
        extension: 'c'
    },
    {
        label: "C (GCC 8.1.0)",
        lang: "c",
        version: "3",
        mode: "c_cpp",
        extension: 'c'
    },
    {
        label: "C (GCC 9.1.0)",
        lang: "c",
        version: "4",
        mode: "c_cpp",
        extension: 'c'
    },
    // done
    {
        label: "C++ (GCC 5.3.0)",
        lang: "cpp",
        version: "0",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C++ (Zapcc 5.0.0)",
        lang: "cpp",
        version: "1",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C++ (GCC 7.2.0)",
        lang: "cpp",
        version: "2",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C++ (GCC 8.1.0)",
        lang: "cpp",
        version: "3",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C++ (GCC 9.1.0)",
        lang: "cpp",
        version: "4",
        mode: "c_cpp",
        extension: 'cpp'
    },
    // done
    {
        label: "C++ 14 (g++ 14 GCC 5.3.0)",
        lang: "cpp14",
        version: "0",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C++ 14 (g++ 14 GCC 7.2.0)",
        lang: "cpp14",
        version: "2",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C++ 14 (g++ 14 GCC 8.1.0)",
        lang: "cpp14",
        version: "3",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C++ 14 (g++ 14 GCC 9.1.0)",
        lang: "cpp14",
        version: "4",
        mode: "c_cpp",
        extension: 'cpp'
    },
    // Done
    {
        label: "C++ 17 (g++ 14 GCC 9.10)",
        lang: "cpp17",
        version: "1",
        mode: "c_cpp",
        extension: 'cpp'
    },
    // done
    {
        label: "C99 (GCC 5.3.0)",
        lang: "c99",
        version: "0",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C99 (GCC 7.2.0)",
        lang: "c99",
        version: "2",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C99 (GCC 8.1.0)",
        lang: "c99",
        version: "3",
        mode: "c_cpp",
        extension: 'cpp'
    },
    {
        label: "C99 (GCC 9.1.0)",
        lang: "c99",
        version: "4",
        mode: "c_cpp",
        extension: 'cpp'
    },
    // Done
    {
        label: "Java (JDK 1.8.0_66)",
        lang: "java",
        version: "0",
        mode: 'java',
        extension: 'java'
    },
    {
        label: "Java (9.0.1)",
        lang: "java",
        version: "1",
        mode: 'java',
        extension: 'java'
    },
    {
        label: "Java (10.0.1)",
        lang: "java",
        version: "2",
        mode: 'java',
        extension: 'java'
    },
    {
        label: "Java (11.0.4)",
        lang: "java",
        version: "3",
        mode: 'java',
        extension: 'java'
    },
    // Done
    {
        label: "PHP (5.6.16)",
        lang: "php",
        version: "0",
        mode: "php",
        extension: 'html'
    },
    {
        label: "PHP (7.1.11)",
        lang: "php",
        version: "1",
        mode: "php",
        extension: 'html'
    },
    {
        label: "PHP (7.2.5)",
        lang: "php",
        version: "2",
        mode: "php",
        extension: 'html'
    },
    {
        label: "PHP (7.3.10)",
        lang: "php",
        version: "3",
        mode: "php",
        extension: 'html'
    },
    // Done
    {
        label: "Perl (5.22.0)",
        lang: "perl",
        version: "0",
        mode: "perl"
    },
    {
        label: "Perl (5.26.1)",
        lang: "perl",
        version: "1",
        mode: "perl"
    },
    {
        label: "Perl (5.26.2)",
        lang: "perl",
        version: "2",
        mode: "perl"
    },
    {
        label: "Perl (5.30.0)",
        lang: "perl",
        version: "3",
        mode: "perl"
    },
    // Done
    {
        label: "Python 2 (2.7.11)",
        lang: "python2",
        version: "0",
        mode: "python",
        extension: 'py'
    },
    {
        label: "Python 2 (2.7.15)",
        lang: "python2",
        version: "1",
        mode: "python",
        extension: 'py'
    },
    {
        label: "Python 2 (2.7.16)",
        lang: "python2",
        version: "2",
        mode: "python",
        extension: 'py'
    },
    // Done
    {
        label: "Python 3 (3.5.1)",
        lang: "python3",
        version: "0",
        mode: "python",
        extension: 'py'
    },
    {
        label: "Python 3 (3.6.3)",
        lang: "python3",
        version: "1",
        mode: "python",
        extension: 'py'
    },
    {
        label: "Python 3 (3.6.5)",
        lang: "python3",
        version: "2",
        mode: "python",
        extension: 'py'
    },
    {
        label: "Python 3 (3.7.4)",
        lang: "python3",
        version: "3",
        mode: "python",
        extension: 'py'
    },
    // Done
    {
        label: "Bash Shell (4.3.42)",
        lang: "bash",
        version: "0",
        mode: "bash",
        extension: 'sh'
    },
    {
        label: "Bash Shell (4.4.12)",
        lang: "bash",
        version: "1",
        mode: "bash",
        extension: 'sh'
    },
    {
        label: "Bash Shell (4.4.19)",
        lang: "bash",
        version: "2",
        mode: "bash",
        extension: 'sh'
    },
    {
        label: "Bash Shell (5.0.011)",
        lang: "bash",
        version: "3",
        mode: "bash",
        extension: 'sh'
    },
    // Done
    {
        label: "Ruby (2.2.4)",
        lang: "ruby",
        version: "0",
        mode: "ruby",
        extension: 'rb'
    },
    {
        label: "Ruby (2.4.2p198)",
        lang: "ruby",
        version: "1",
        mode: "ruby",
        extension: 'rb'
    },
    {
        label: "Ruby (2.5.1p57)",
        lang: "ruby",
        version: "2",
        mode: "ruby",
        extension: 'rb'
    },
    {
        label: "Ruby (2.6.5)",
        lang: "ruby",
        version: "3",
        mode: "ruby",
        extension: 'rb'
    },
    // Done
    {
        label: "GO Lang (1.5.2)",
        lang: "go",
        version: "0",
        mode: "golang",
        extension: "go"
    },
    {
        label: "GO Lang (1.9.2)",
        lang: "go",
        version: "1",
        mode: "golang",
        extension: "go"
    },
    {
        label: "GO Lang (1.10.2)",
        lang: "go",
        version: "2",
        mode: "golang",
        extension: "go"
    },
    {
        label: "GO Lang (1.10.1)",
        lang: "go",
        version: "3",
        mode: "golang",
        extension: "go"
    },
    // Done
    {
        label: "Scala (2.12.0)",
        lang: "scala",
        version: "0",
        mode: "scala",
        extension: 'sc'
    },
    {
        label: "Scala (2.12.4)",
        lang: "scala",
        version: "1",
        mode: "scala",
        extension: 'sc'
    },
    {
        label: "Scala (2.12.5)",
        lang: "scala",
        version: "2",
        mode: "scala",
        extension: 'sc'
    },
    {
        label: "Scala (2.13.0)",
        lang: "scala",
        version: "3",
        mode: "scala",
        extension: 'sc'
    },
    // Done
    {
        label: "SQL (SQLite 3.9.2)",
        lang: "sql",
        version: "0",
        mode: "sql",
        extension: 'sql'
    },
    {
        label: "SQL (SQLite 3.21.0)",
        lang: "sql",
        version: "1",
        mode: "sql",
        extension: 'sql'
    },
    {
        label: "SQL (SQLite 3.23.0)",
        lang: "sql",
        version: "2",
        mode: "sql",
        extension: 'sql'
    },
    {
        label: "SQL (SQLite 3.29.0)",
        lang: "sql",
        version: "3",
        mode: "sql",
        extension: 'sql'
    },
    // Done
    {
        label: "NodeJs (6.3.1)",
        lang: "nodejs",
        version: "0",
        mode: "javascript",
        extension: 'js'
    },
    {
        label: "NodeJs (9.2.0)",
        lang: "nodejs",
        version: "1",
        mode: "javascript",
        extension: 'js'
    },
    {
        label: "NodeJs (10.1.0)",
        lang: "nodejs",
        version: "2",
        mode: "javascript",
        extension: 'js'
    },
    {
        label: "NodeJs (12.11.1)",
        lang: "nodejs",
        version: "3",
        mode: "javascript",
        extension: 'js'
    },
]

const languageSelect = document.getElementById("languageSelect");
for (let i = 0 ; i < languages.length; i++){
    languageSelect.options[languageSelect.options.length] = new Option(languages[i].label, JSON.stringify(languages[i]));
}

