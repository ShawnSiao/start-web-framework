async function preInit(inputObj) {

}

async function postInit(inputObj) {
    console.log(`\n     _   __            
    | | / /            
    | |/ /  ___   __ _ 
    |    \\ / _ \\ / _\` |
    | |\\  \\ (_) | (_| |
    \\_| \\_/\\___/ \\__,_|
                                        `)
    console.log(`\n    Welcome to the Koa application, you can execute the following commands to develop application：`)
    console.log('\x1b[32m%s\x1b[0m', '    npm install');
    console.log('\x1b[32m%s\x1b[0m', '    npm run dev');
    console.log('\x1b[32m%s\x1b[0m', '    s deploy \n');
}

module.exports = {
    postInit,
    preInit
}

