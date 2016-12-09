$(function(){
    var Search = {
        init: function(){
            this.tab1();
            this.tab2();
            this.tab3();
        },
        tab1: function(){
            var num = 0;
            $('.first').on('click',function(){
                num++;
                if(num > 2){
                num = 0;
            }
                $('li').removeClass('show');
                $("li:eq("+num+")").addClass('show');

            })
        },
        tab2: function(){
            var cecond = 0;
            $('.second').on('click',function(){
                cecond++;
                if(cecond > 2){
                cecond = 0;
            }
                $('li').removeClass('visible');
                $(this).siblings('ul').children("li:eq("+cecond+")").addClass('visible');

            })
        },
        tab3: function(){
            var thirdul = 0;
            $('.three').on('click',function(){
                thirdul++;
                if(thirdul > 2){
                thirdul = 0;
            }
                $('li').removeClass('third');
                $(this).siblings('ul').children("li:eq("+thirdul+")").addClass('third');

            })
        }
    }
    Search.init();
});