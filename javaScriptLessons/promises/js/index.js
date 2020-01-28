console.log('Привет');


doAfter(4)
    .then((message) => console.log(message))
    .then(() => console.log('я сделяль v2'))
    .catch(() => console.log('простите меня, у меня не получилось сделять'));

function doAfter(seconds) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('я сделяль');
        }, seconds * 1000);

    });

    return promise;
}