(() => {
    let data = (() => {
        const arrColors = ["#E2E9EF","#858C92","#1E8C92","#76E497","#B2E4AF","#566B97","#FFDD00","#FF00AE"];

        let colors = () => {
            return arrColors;
        };

        return {colors:colors};
    })();

    let logic = (() => {

        let arrColors = data.colors();
        let cards = [], attempts = 3, score = 0, select;

        /* REVELATION  FUNCTIONS */

        let getId = (id) => document.getElementById(id);
        let getClass = (cl) => document.getElementsByClassName(cl);
        let randomNum = (min, max) =>  Math.floor(Math.random() * (max - min + 1)) + min;

        let createCards = (num) => {
            for(let i = 0; i < num; i++) {
                let e = { elem: null, color: null };
                cards.push(e);
            }
        };

        let setElem = (cl) => {
            let arrC = getClass(cl);
            for(let i = 0, leng = arrC.length; i < leng; i++) {
                cards[i].elem = arrC[i];
            }
        };

        let randomColor = (from, to, arr) => {
            let rand, arrCol = arr.map((e)=>e);

            for(let i = from; i < to; i++) {
                rand = randomNum(1, arrCol.length)-1;
                cards[i].color = arrCol[rand];
                arrCol.splice(rand, 1);
            }
        };

        let setColors = () => {
            cards.map((e) => {
                e.elem.style.background = e.color;
            })
        };

        let clearColors = () => {
            cards.map((e) => {
                e.elem.style.background = "#C7CED3";
            })
        };

        let clearColor = (elem) => {
            elem.elem.style.background = "#C7CED3";
        };

        let showColor = (elem) => {
            elem.elem.style.background = elem.color;
        };

        let resetGame = () => {
            score = 0;
            attempts = 3;
            select = null;
            clearColors();
            randomColor(0,16, arrColors.concat(arrColors));
            events();
        };

        let checkElem = (elem) => {

            if(select) {
                if(select.elem === elem) {
                    console.log("true");
                    clearColor(select);
                    select = null;
                }else {
                    let el = cards.find((e) => e.elem === elem);
                    showColor(el);
                    if(select.color === el.color) {
                        score++;
                        console.log(score);
                        select.elem.removeEventListener("click", listener);
                        el.elem.removeEventListener("click", listener);
                        select = null;
                    }else {
                        clearColor(el);
                        attempts--;
                        if(attempts === 0) resetGame();
                    }
                }

            }else {
                select = cards.find((e) => e.elem === elem);
                showColor(select);
            }
        };

        let listener = (e) => {
            checkElem(e.target);
        };

        let events = () => {
            let arrE = getClass("item");

            for(let i = 0, leng = arrE.length; i < leng; i++) {
                arrE[i].addEventListener("click", listener);
            }
        };

        /* END REVELATION  FUNCTIONS */

        /* CALL FUNCTIONS */

        createCards(16);
        randomColor(0,16, arrColors.concat(arrColors));
        setElem("item");
        events();
        
    })();
})();