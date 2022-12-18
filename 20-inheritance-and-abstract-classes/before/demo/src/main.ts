import './style.css';

class EscapingCircle {
    private el: HTMLDivElement;
    private x: number = 0;
    private y: number = 0;
    private colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'yellow'];
    constructor() {
        this.el = document.createElement('div');
        this.el.classList.add('animated');
        this.el.style.width = '20px';
        this.el.style.height = '20px';
        this.el.style.borderRadius = '20px';        
        this.el.style.background = this.colors[Math.floor(Math.random() * this.colors.length)];
        this.el.style.position = 'absolute';
        this.move();

        this.el.addEventListener('click', this.move.bind(this));

        document.body.appendChild(this.el);
    }

    move() {
        this.x = Math.floor(Math.random() * window.innerWidth);
        this.y = Math.floor(Math.random() * window.innerHeight);
        this.el.style.left = `${this.x - 10}px`;
        this.el.style.top = `${this.y - 10}px`;
    }

    remove() {
        document.body.removeChild(this.el);
    }
}

const c1 = new EscapingCircle();
