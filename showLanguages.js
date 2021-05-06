const languages = [
    {
        label: "C (GCC 5.3.0)",
        lang: "c",
        version: "0",
        mode: "c_cpp"
    },
    {
        label: "C (Zapcc 5.0.0)",
        lang: "c",
        version: "1",
        mode: "c_cpp"
    },
    {
        label: "C (GCC 7.2.0)",
        lang: "c",
        version: "2",
        mode: "c_cpp"
    },
    {
        label: "C (GCC 8.1.0)",
        lang: "c",
        version: "3",
        mode: "c_cpp"
    },
    {
        label: "C (GCC 9.1.0)",
        lang: "c",
        version: "4",
        mode: "c_cpp"
    },
    // done
    {
        label: "C++ (GCC 5.3.0)",
        lang: "cpp",
        version: "0",
        mode: "c_cpp"
    },
    {
        label: "C++ (Zapcc 5.0.0)",
        lang: "cpp",
        version: "1",
        mode: "c_cpp"
    },
    {
        label: "C++ (GCC 7.2.0)",
        lang: "cpp",
        version: "2",
        mode: "c_cpp"
    },
    {
        label: "C++ (GCC 8.1.0)",
        lang: "cpp",
        version: "3",
        mode: "c_cpp"
    },
    {
        label: "C++ (GCC 9.1.0)",
        lang: "cpp",
        version: "4",
        mode: "c_cpp"
    },
    // done
    {
        label: "C++ 14 (g++ 14 GCC 5.3.0)",
        lang: "cpp14",
        version: "0",
        mode: "c_cpp"
    },
    {
        label: "C++ 14 (g++ 14 GCC 7.2.0)",
        lang: "cpp14",
        version: "2",
        mode: "c_cpp"
    },
    {
        label: "C++ 14 (g++ 14 GCC 8.1.0)",
        lang: "cpp14",
        version: "3",
        mode: "c_cpp"
    },
    {
        label: "C++ 14 (g++ 14 GCC 9.1.0)",
        lang: "cpp14",
        version: "4",
        mode: "c_cpp"
    },
    // Done
    {
        label: "C++ 17 (g++ 14 GCC 9.10)",
        lang: "cpp17",
        version: "1",
        mode: "c_cpp"
    },
    // done
    {
        label: "C99 (GCC 5.3.0)",
        lang: "c99",
        version: "0",
        mode: "c_cpp"
    },
    {
        label: "C99 (GCC 7.2.0)",
        lang: "c99",
        version: "2",
        mode: "c_cpp"
    },
    {
        label: "C99 (GCC 8.1.0)",
        lang: "c99",
        version: "3",
        mode: "c_cpp"
    },
    {
        label: "C99 (GCC 9.1.0)",
        lang: "c99",
        version: "4",
        mode: "c_cpp"
    },
    // Done
    {
        label: "Java (JDK 1.8.0_66)",
        lang: "java",
        version: "0",
        mode: 'java'
    },
    {
        label: "Java (9.0.1)",
        lang: "java",
        version: "1",
        mode: 'java'
    },
    {
        label: "Java (10.0.1)",
        lang: "java",
        version: "2",
        mode: 'java'
    },
    {
        label: "Java (11.0.4)",
        lang: "java",
        version: "3",
        mode: 'java'
    },
    // Done
    {
        label: "PHP (5.6.16)",
        lang: "php",
        version: "0",
        mode: "php"
    },
    {
        label: "PHP (7.1.11)",
        lang: "php",
        version: "1",
        mode: "php"
    },
    {
        label: "PHP (7.2.5)",
        lang: "php",
        version: "2",
        mode: "php"
    },
    {
        label: "PHP (7.3.10)",
        lang: "php",
        version: "3",
        mode: "php"
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
        mode: "python"
    },
    {
        label: "Python 2 (2.7.15)",
        lang: "python2",
        version: "1",
        mode: "python"
    },
    {
        label: "Python 2 (2.7.16)",
        lang: "python2",
        version: "2",
        mode: "python"
    },
    // Done
    {
        label: "Python 3 (3.5.1)",
        lang: "python3",
        version: "0",
        mode: "python"
    },
    {
        label: "Python 3 (3.6.3)",
        lang: "python3",
        version: "1",
        mode: "python"
    },
    {
        label: "Python 3 (3.6.5)",
        lang: "python3",
        version: "2",
        mode: "python"
    },
    {
        label: "Python 3 (3.7.4)",
        lang: "python3",
        version: "3",
        mode: "python"
    },
    // Done
    {
        label: "Bash Shell (4.3.42)",
        lang: "bash",
        version: "0",
        mode: "bash"
    },
    {
        label: "Bash Shell (4.4.12)",
        lang: "bash",
        version: "1",
        mode: "bash"
    },
    {
        label: "Bash Shell (4.4.19)",
        lang: "bash",
        version: "2",
        mode: "bash"
    },
    {
        label: "Bash Shell (5.0.011)",
        lang: "bash",
        version: "3",
        mode: "bash"
    },
    // Done
    {
        label: "Ruby (2.2.4)",
        lang: "ruby",
        version: "0",
        mode: "ruby"
    },
    {
        label: "Ruby (2.4.2p198)",
        lang: "ruby",
        version: "1",
        mode: "ruby"
    },
    {
        label: "Ruby (2.5.1p57)",
        lang: "ruby",
        version: "2",
        mode: "ruby"
    },
    {
        label: "Ruby (2.6.5)",
        lang: "ruby",
        version: "3",
        mode: "ruby"
    },
    // Done
    {
        label: "GO Lang (1.5.2)",
        lang: "go",
        version: "0",
        mode: "golang"
    },
    {
        label: "GO Lang (1.9.2)",
        lang: "go",
        version: "1",
        mode: "golang"
    },
    {
        label: "GO Lang (1.10.2)",
        lang: "go",
        version: "2",
        mode: "golang"
    },
    {
        label: "GO Lang (1.10.1)",
        lang: "go",
        version: "3",
        mode: "golang"
    },
    // Done
    {
        label: "Scala (2.12.0)",
        lang: "scala",
        version: "0",
        mode: "scala"
    },
    {
        label: "Scala (2.12.4)",
        lang: "scala",
        version: "1",
        mode: "scala"
    },
    {
        label: "Scala (2.12.5)",
        lang: "scala",
        version: "2",
        mode: "scala"
    },
    {
        label: "Scala (2.13.0)",
        lang: "scala",
        version: "3",
        mode: "scala"
    },
    // Done
    {
        label: "SQL (SQLite 3.9.2)",
        lang: "sql",
        version: "0",
        mode: "sql"
    },
    {
        label: "SQL (SQLite 3.21.0)",
        lang: "sql",
        version: "1",
        mode: "sql"
    },
    {
        label: "SQL (SQLite 3.23.0)",
        lang: "sql",
        version: "2",
        mode: "sql"
    },
    {
        label: "SQL (SQLite 3.29.0)",
        lang: "sql",
        version: "3",
        mode: "sql"
    },
    // Done
    {
        label: "NodeJs (6.3.1)",
        lang: "nodejs",
        version: "0",
        mode: "javascript"
    },
    {
        label: "NodeJs (9.2.0)",
        lang: "nodejs",
        version: "1",
        mode: "javascript"
    },
    {
        label: "NodeJs (10.1.0)",
        lang: "nodejs",
        version: "2",
        mode: "javascript"
    },
    {
        label: "NodeJs (12.11.1)",
        lang: "nodejs",
        version: "3",
        mode: "javascript"
    },
]

const languageSelect = document.getElementById("languageSelect");
for (let i = 0 ; i < languages.length; i++){
    languageSelect.options[languageSelect.options.length] = new Option(languages[i].label, JSON.stringify(languages[i]));
}

