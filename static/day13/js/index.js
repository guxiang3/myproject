/*
* @Author: Marte
* @Date:   2016-12-05 20:50:47
* @Last Modified by:   Marte
* @Last Modified time: 2016-12-06 18:29:27
*/

//装图片的大盒子放大与缩小
$(function(){

    //装图片的大盒子放大与缩小
    var target = document.getElementById('wrapper');
    // console.log(this.target)
    target.style.webkitTransition = 'all ease 0.25s';
    touch.on('.slide','touchstart',function(event){
        event.preventDefault();
    });
    var initalScale = 1;
    var currentScale;

    touch.on('.slide','pinchend',function(ee){
        currentScale = ee.scale - 1;
        console.log(ee.scale)
        currentScale = initalScale + currentScale;
        currentScale = currentScale > 5 ? 5 : currentScale;
        currentScale = currentScale < 0.1 ? 0.1 : currentScale;
        // alert(currentScale)
        $('.slide').css({
            webkitTransform : 'scale(' + currentScale + ')'
        })
        // $('#wrapper').text('当前缩放的比例为：' + currentScale + '倍。');
        initalScale = currentScale;
    })

    var angle = 0;
    touch.on('img', 'touchstart', function(event) {
        event.startRotate();
        event.preventDefault();
        /* Act on the event */
    });
    touch.on('img','rotate',function(event){
        var totalAngle = angle + event.rotation;
        this.style.webkitTransform = 'rotate(' + totalAngle + 'deg)';
    })
})

