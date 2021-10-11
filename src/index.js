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