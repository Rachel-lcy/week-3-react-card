import headerPicture from './assets/header-1.jpg';

 function Card(){
    return(
        <>
        <section className='card'>
            <div className='part1'>
                <img src={headerPicture} alt="picture" />
                <h2>Headline</h2>
                <h3>Subhead</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure commodi cupiditate est assumenda minus modi quisquam ipsum? Ex doloremque voluptates ipsa, optio esse beatae asperiores aliquid animi provident blanditiis exercitationem!</p>
            </div>
            <div className='part2'>
                <button>Action</button>
                <button>Action</button>
            </div>
        </section>
        </>
    );
 }

 export default Card;