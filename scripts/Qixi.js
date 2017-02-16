$(function() {
            //////////
            // 小孩走路 //
            //////////
            var boy = BoyWalk();

            // 播放音乐 
            var audio1 = Hmlt5Audio(audioConfig.playURl);
            audio1.end(function() {
                Hmlt5Audio(audioConfig.cycleURL, true);
            });

            // 太阳公转
            $("#sun").addClass('rotation');

            // 飘云
            $(".cloud:first").addClass('cloud1Anim');
            $(".cloud:last").addClass('cloud2Anim');


            boy.walkTo(2000, 0.2)
                .then(function() {
                    scrollTo(5000, 1);
                }).then(function() {
                    return boy.walkTo(5000, 0.5);
                }).then(function() {
                    // 进入第二个场景
                    boy.stopWalk();
                }).then(function() {
                    return openDoor();
                }).then(function() {
                    lamp.bright();
                }).then(function() {
                    return boy.toShop(2000);
                }).then(function() {
                    return boy.setFlolerWalk();
                }).then(function() {
                    bird.fly();
                }).then(function() {
                    return boy.outShop(2000);
                }).then(function() {
                    return shutDoor(2000);
                }).then(function() {
                    lamp.dark();
                }).then(function() {
                    // 进入第三个场景
                    scrollTo(5000, 2);
                }).then(function() {
                    return boy.walkTo(5000, 0.15);
                }).then(function() {
                    return boy.walkTo(1500, 0.25, (bridgeY - girl.getHeight()) / visualHeight);
                }).then(function() {
                    // 实际走路的比例
                    var proportionX = (girl.getOffset().left - boy.getWidth() + girl.getWidth() / 5) / visualWidth;
                    // 第三次桥上直走到小女孩面前
                    return boy.walkTo(1500, proportionX);
                }).then(function() {
                    // 图片还原原地停止状态
                    boy.resetOriginal();
                }).then(function() {
                    // 增加转身动作 
                    setTimeout(function() {
                        girl.rotate();
                        boy.rotate(function() {
                            snowflake();
                        });
                    }, 1000);
                });
});