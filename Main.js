$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav_toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav_toggle');
        if($(window).scrollTop() > 60){
            $('header .header_2').addClass('header_active');
        }else{
            $('header .header_2').removeClass('header_active');
        }
    });
	
	$('.slide_konten').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:5000,
        loop:true
    });
	
	$('.menu_hidangan .tombol_1').click(function(){
        let filter = $(this).attr('data-filter');
        if(filter == 'semua_menu'){
            $('.menu_hidangan .box').show(400);
        }else{
            $('.menu_hidangan .box').not('.'+filter).hide(200);
            $('.menu_hidangan .box').filter('.'+filter).show(400);
        }
        $(this).addClass('tombol_1_active').siblings().removeClass('tombol_1_active');
    });
	
	$('.gambar_kecil_paket_menu_keluarga_1 img').click(function(){
        $(this).addClass('gambar_active_keluarga_1').siblings().removeClass('gambar_active_keluarga_1');
        let image = $(this).attr('src');
        $('.gambar_utama_paket_menu_keluarga_1 img').attr('src', image);
    });
	
	$('.gambar_kecil_paket_menu_keluarga_2 img').click(function(){
        $(this).addClass('gambar_active_keluarga_2').siblings().removeClass('gambar_active_keluarga_2');
        let image = $(this).attr('src');
        $('.gambar_utama_paket_menu_keluarga_2 img').attr('src', image);
    });
	
	$('.gambar_kecil_paket_menu_tahun_baru_1 img').click(function(){
        $(this).addClass('gambar_active_tahun_baru_1').siblings().removeClass('gambar_active_tahun_baru_1');
        let image = $(this).attr('src');
        $('.gambar_utama_paket_menu_tahun_baru_1 img').attr('src', image);
    });
	
});