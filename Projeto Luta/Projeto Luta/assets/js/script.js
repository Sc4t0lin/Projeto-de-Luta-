let log = new Log(document.querySelector('.log'));
let per = new Knight('Knight');
let monster = new LittleMonster();


const stage = new Stage (

    per, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log

);

stage.start();