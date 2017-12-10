import animationGroup from '../../utils/animation.js'
let app = getApp();
Page({
  data: {
    animationData: {},
    animation:{}
  },
  onShow: function(){
      wx.request({
          url: 'https://plpapp.com/cgi-bin/test_cgi.cgi',
          success(res){
              console.log(res)
          }
      })
    var animation = wx.createAnimation({
        duration:1000,
        timingFunction:'ease'
    })
    this.animation = animation;

    animation.scale(2, 2).rotate(45).step()

    animation.scale(1,1).rotate(180).step()

    this.setData({
        animationData:animation.export()
    })


    
    
    
    
  },





  
  //丢瓶子操作
  throwBottle(){
      animationGroup.throwBottle.call(this);
  }
})


