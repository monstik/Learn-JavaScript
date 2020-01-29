let SliderFactory = {
    creteNewSlider: function () {
        return {
            srcs: null,
            sliderImg: null,
            currentImg: 0,


            start: function (containerSelector, sliderImgSelector, previousButtonSelector, nextButtonSelector, srcs) {
                let that = this;

                let container = document.querySelector('#' + containerSelector);
                this.sliderImg = container.querySelector('.' + sliderImgSelector);
                container.querySelector('.' + previousButtonSelector).addEventListener('click', function (e) {
                    that.onSwipeImg(e);
                });
                container.querySelector('.' + nextButtonSelector).addEventListener('click', function (e) {
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


        };
    }
};

