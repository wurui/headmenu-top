define([],function(){
  return {
    init:function($mod){
    	var $btn = $('.icon-menu',$mod).on('click',function(){
    		$btn.toggleClass('opened')
    	}).parent();
    	$(window).on('scroll',function(){
    		$btn.removeClass('opened')
    	})
    }
  }
})
