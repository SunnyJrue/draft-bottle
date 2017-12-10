
let animationGroup = {
    // 丢瓶子
    throwBottle() {
        let animation = wx.createAnimation({
            duration: 1000,
            timingFunction: "linear",
            delay: 0,
            transformOrigin: "50% 50% 0",
        })
        animation.translate(100,-300).scale(2, 2).rotate(360).step();

        this.setData({
            amnBottle: animation.export()
        })
    },

}

export default animationGroup;