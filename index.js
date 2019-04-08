// JavaScript Document

var animData = {
        container: document.getElementById('animation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'data.json'
    };
    var anim = bodymovin.loadAnimation(animData);