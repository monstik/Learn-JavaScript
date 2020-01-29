let slider = {
    srcs: [],
    sliderImg: NaN,
    currentImg: 0,


    start: function (sliderImg, previousButton, nextButton, srcs) {
        let that = this;
        this.sliderImg = this.getElement(sliderImg);
        this.getElement(previousButton).addEventListener('click', function (e) {
            that.onSwipeImg(e);
        });
        this.getElement(nextButton).addEventListener('click', function (e) {
            that.onSwipeImg(e);
        });

        this.srcs = srcs;
        this.swipeImg();

    },


    onSwipeImg: function (e) {
        this.GetCurrentImg(e.currentTarget.innerHTML);
        this.swipeImg()
    },


    GetCurrentImg: function (operation) {
        let tempCurrentImg = this.currentImg;
        if (operation === '&gt;') {
            tempCurrentImg++;
            if (tempCurrentImg > this.srcs.length - 1) {
                this.currentImg = 0;
            } else {
                this.currentImg = tempCurrentImg;
            }

        } else {
            tempCurrentImg--;

            if (tempCurrentImg < 0) {
                this.currentImg = this.srcs.length - 1;
            } else {
                this.currentImg = tempCurrentImg;
            }
        }

    },

    swipeImg: function () {
        this.sliderImg.src = this.srcs[this.currentImg];
    }
    ,

    getElement: function (id) {
        return document.getElementById(id);
    }
};

