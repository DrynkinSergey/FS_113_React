import s from './Tailwind.module.css';
const Tailwind = () => {
  return (
    <div>
      <section className='grid gap-3 grid-cols-1 md:bg-amber-200 lg:bg-rose-300 md:grid-cols-2 lg:grid-cols-3'>
        <p className='hover:bg-blue-400 hover:text-white duration-300 transition-all'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quia, sit corrupti voluptas quam officia aperiam cum magnam accusamus
          necessitatibus quas atque dicta nulla dolor excepturi enim. Labore, eveniet quasi.
        </p>
        <p className={s.paragraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus at culpa sint iste totam. Tempore, qui? Magnam voluptate ea, ratione nobis
          inventore qui debitis numquam porro alias eius quibusdam dolorem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veniam rem temporibus recusandae consequatur earum, qui praesentium id.
          Tenetur reiciendis provident, ipsum odit earum similique voluptate deleniti quo sequi molestias.
        </p>
      </section>
      <div className='card bg-base-100 w-96 shadow-sm'>
        <figure>
          <img src='https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp' alt='Shoes' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>Card Title</h2>
          <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
          <div className='card-actions justify-end'>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
      <ul className='steps steps-vertical lg:steps-horizontal'>
        <li className='step step-primary'>Register</li>
        <li className='step step-primary'>Choose plan</li>
        <li className='step'>Purchase</li>
        <li className='step'>Receive Product</li>
      </ul>
      <button className='btn btn-primary px-10'>Click</button>
    </div>
  );
};
export default Tailwind;
