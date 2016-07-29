(() => {
    let data = (() => {
        const arrColors = ["#E2E9EF","#858C92","#1E8C92","#76E497","#B2E4AF","#566B97","#FFDD00","#FF00AE"];

        let colors = () => {
            return arrColors;
        }

        return {colors:colors};
    })();

    let logic = (() => {

        let arrColors = data.colors();
        let cards = [];

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

        /* END REVELATION  FUNCTIONS */

        /* CALL FUNCTIONS */

        createCards(16);
        randomColor(0,8, arrColors);
        randomColor(8,16, arrColors);
        setElem("item");
        setColors();
        
    })();
})();