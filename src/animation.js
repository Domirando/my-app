const Choreographer = require('choreographer-js')
let choreographer = new Choreographer({
    animations: [
        {
            range: [-1, 1000],
            selector: '#box',
            type: 'scale',
            style: 'opacity',
            from: 0,
            to: 1
        }
    ]
})

window.addEventListener('scroll', () => {
    choreographer.runAnimationsAt(window.pageYOffset)
})