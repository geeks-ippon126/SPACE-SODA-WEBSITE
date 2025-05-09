/*import {usescale} from react;
function Parallax()
{
    const [background, setBaground] = useState(20)
    return(
        <div className="parallax-outer">
            <div className='parallax'></div>
        </div>
    )
}

export default Parallax

return(
    {

    }
)*/


    let moon = document.getElementById('moon')
    let back = document.getElementById('back')
    let text = document.getElementById('text')
    let btn = document.getElementById('btn')
    let front = document.getElementById('front')
    let header = document.querySelector('header');


    window.addEventListener('scroll', function () {
        var header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
        let value = window.scrollY;
        moon.style.left = value * 0.25 + 'px';
        moon.style.top = value * 0.01 + 'px';
        back.style.top = value * 0.11 + 'px';
        front.style.left = value * 0.7 + 'px';
        text.style.marginRight = value * 0.25 + 'px';
        hr.style.marginLeft = value * 0.5 + 'px';

        btn.style.marginTop = value * 0.35 + 'px';

    })

    /*gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        //markers:true,
        start: "top 90%",
        end: "top -70%",
        scrub: 5,
    }
})*/