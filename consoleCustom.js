const end = "\x1b[30m"

class ConsoleCustom
{
    static log(text)
    {
        console.log(text);
    }

    static success(text)
    {
        let color = "\x1b[32m"
        console.log(color + text + end)
    }

    static error(text)
    {
        let color = "\x1b[31m"
        console.log(color + text + end)
    } 

    static warning(text)
    {
        let color = "\x1b[33m"
        console.log(color + text + end)
    }
}

console.custom = 
{ 
    warning : ConsoleCustom.warning,
    error : ConsoleCustom.error,
    success : ConsoleCustom.success,
    log : ConsoleCustom.log
}

module.exports = ConsoleCustom