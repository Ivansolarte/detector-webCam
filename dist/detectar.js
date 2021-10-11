(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.detectar = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const camara = function (id) {
    navigator.getMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

    if (navigator.getUserMedia) {
        console.log('si');
        //navegadores: CHROME, EDGE, BRAVE //
        //// solo google chrome 'constraints' restricciones
        const elementos = {
            audio: false,
            video: true
        }

        /// accediendo a la camara
        const videoHtml = document.getElementById(id);
        navigator.mediaDevices.getUserMedia(elementos)
        .then(dispo => {
            // console.log(dispo);
            videoHtml.srcObject = dispo;
        })
        .catch(console.error)
    } else {

        console.log('no');
        //Navegadores: mozilla firefox//

        //// solo google chrome 'constraints' restricciones
        const elementos = {
            audio: false,
            video: true
        }

        // accediendo a la camara
        const videoHtml = document.getElementById(id);
        async function init() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia(elementos);
                // window.stream = stream;
                videoHtml.srcObject = stream;
            } catch (e) {
                errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
            }
        }
        init();
        
    }

}

module.exports = {camara: camara};
},{}]},{},[1])(1)
});
